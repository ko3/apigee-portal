import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuthToken } from "../store/Auth/AuthActions";


const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const onSignIn = ()=>{
        dispatch(getAuthToken(username, password));
    };

    return <div>
        <div>Home</div>
        <div>login</div>
            <input name="username" onChange={e=> setUsername(e.target.value)} type="text"/>
            <input name="password" onChange={e=> setPassword(e.target.value)} type="password"/>
            <button onClick={onSignIn}>Sign In</button>
        </div>;
};
export default Home;