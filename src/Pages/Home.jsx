import React, { useState , useEffect } from 'react';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
import "./Home.scss"
import LottieAnimationMain from '../Components/Lottie/lottie';
import { LottieSingleUser } from '../Components/Lottie/lottie';
import {Card,DefaulCard}  from '../Components/Card/Card';
import { useSelector } from 'react-redux';

const Home=()=>{
    
    const users=useSelector((state)=>state.users);

    const [loading,setLoading]=useState(true);
    useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 3000);
    }, [])// eslint-disable-next-line

    
    const [currUser,setcurrUser]=useState(null);
    const [singleAPIcall,setsingleAPIcall]=useState(false);

    const handleBtnClick=async(id)=>{

         await axios.get(("https://reqres.in/api/users/"+id))
                   .then((res)=>{
                       console.log(res.data);   
                       setcurrUser(res.data.data);
                   });

         setsingleAPIcall(true);
    
         setTimeout(() => {
             setsingleAPIcall(false);
         }, 2000);
    }

    return (<>
    <div className="Home">
        {
            loading?(<> 
                        <ParticlesBg  type="square"
                                      num="10" 
                                      bg={{position:"absolute",zIndex:0}} 
                        /> 
                        <LottieAnimationMain />
                     </>
                   )    
                   :(<>
                        <ParticlesBg type="cobweb"
                                     bg={{ position: "absolute",zIndex: 0 }} 
                        />
                        
                        <div className="Cards" >
                         { !currUser? <DefaulCard/> 
                                    :(
                                        !singleAPIcall?(<Card key={currUser.id} user={currUser} />)
                                                     :( <LottieSingleUser/> )
                                    )
                         }
                        </div>
                            
                         <div className="Buttons">
                            { users.map((data)=>
                                   <button className="Button" 
                                           key={data.id}
                                           onClick={()=>handleBtnClick(data.id)}
                                           style={currUser&&{background:(currUser.id===data.id)&&"rgb(122, 191, 76)"}}
                                    >
                                      {data.id}
                                    </button>
                                )
                            }
                         </div>

                  </>)
        }
    </div>
    </>);
}

export default Home;