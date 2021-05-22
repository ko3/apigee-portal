import React, { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
interface UserProps {
    message: string;
    history: any;
    match: any;
}
const User: FC < UserProps > = (props) => {
    /*useEffect(() => {
        setTimeout(() => {props.history.push("/");}, 3000);
    });*/
    const history = useHistory();
    const { userid }:any = useParams();
    const onClickGoback = () => {
        //props.history.goBack();
        history.goBack();
    };
    return (
    <div>
        {/*<div>{"Your id is " + props.match.params.userid} </div>  */}
        <div>{"Your id is " + userid}</div>
        <div>{props.message}</div>
        <div>
            <button onClick={onClickGoback}>Go back</button>
        </div>
    </div>
    );
};
export default User;