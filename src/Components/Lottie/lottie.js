import React from "react";
import Lottie from "lottie-react"

import animationData1 from "./27562-searching-for-profile.json"
import animationData2 from "./98432-loading.json"


function LottieAnimationMain()
{
    const styles={
        height:500,
        width:500
    }
    return (
       <div style={{
           display:"flex",
           justifyContent:"center",
           zIndex:"100"
       }}>
        <Lottie  loop={true} animationData={animationData1} style={styles} />
       </div>
    )
}
export default LottieAnimationMain

const LottieSingleUser=()=>{
    const styles={
        height:300,
        width:300
    }
    return (
       <div style={{
           display:"flex",
           justifyContent:"center",
           zIndex:"100" 
       }}>
        <Lottie  loop={true} animationData={animationData2} style={styles} />
       </div>
    )
}

export {LottieSingleUser};
