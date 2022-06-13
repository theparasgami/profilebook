import React , {useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Home from "./Pages/Home"
import { updateUser } from './Features/userSlice';

const App = ()=>{
    const dispatch= useDispatch();
    useEffect( () => {
         axios.get("https://reqres.in/api/users/?page=1")
        .then((res)=>{
            dispatch(updateUser(res.data.data))
        });
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
   
    return (
    <>
        <Home />
    </>)
}       

export default App;