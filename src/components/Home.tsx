import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action, getAuthToken, GET_AUTH_TOKEN } from "../store/Auth/AuthActions";
import { AppState } from "../store/Types";


const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [providedToken, setProvidedToken] = useState("");
    const token = useSelector((state: AppState)=> state.accessToken.accessToken);

    const dispatch = useDispatch();
    const onSignIn = ()=>{
        dispatch(getAuthToken(username, password));
    };

    const saveToken = () => {
        dispatch(action(GET_AUTH_TOKEN, providedToken))
    }

    return <div>
        <div>Home</div>
        { token.length <12 &&
            <div>
                <div>login</div>
                <input name="username" onChange={e=> setUsername(e.target.value)} type="text"/>
                <input name="password" onChange={e=> setPassword(e.target.value)} type="password"/>
                <button onClick={onSignIn}>Sign In</button>
            </div>
        }
        { token.length>12 &&
            <div>
                <div>Login success</div>
                <div>Please proceed</div>
            </div>
        }
        {token.length <12 &&
            <div>
                <div>Set token externally</div>
                <input name="providedToken" onChange={e=> setProvidedToken(e.target.value)} type="text"/>
                <button onClick={saveToken}>Save Token</button>
            </div>
        }

        </div>;
};
export default Home;