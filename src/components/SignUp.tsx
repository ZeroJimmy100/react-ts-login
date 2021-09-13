import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';

export interface SignUpProps {
    user: any,
    setUser: React.Dispatch<React.SetStateAction<Array<any>>>
}

export default function SignUp({user, setUser}: SignUpProps) {

    const [username, setUsername] = useState<string|any>();
    const [password, setPassword] = useState<string|any>();
    const [saveID, setID] = useState<boolean>(false);

    const signUpHandler = (e:any) => {
        e.preventDefault();
        setUser((curUser) => {
            setID(true);
            localStorage.setItem('user', username);
            return [...curUser, {username: username, password: password}]
        })
    }

    const onChangeUsernameHandler = (e:any) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const onChangePasswordHandler = (e:any) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={signUpHandler}>
                <input type="text" onChange={onChangeUsernameHandler} placeholder="Enter Username"/>
                <input type="password" onChange={onChangePasswordHandler} placeholder="Enter Password"/>
                <input type="submit" value="sign up"/> 
            </form>
            {saveID ? <Redirect to="/Dashboard"/> : null}
        </div>
    )
}
