import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'

export interface LoginProps {
    user: any,
    setUser: React.Dispatch<React.SetStateAction<Array<any>>>
}

export default function Login({user, setUser}:LoginProps) {

    const [username, setUsername] = useState<string|any>();
    const [password, setPassword] = useState<string|any>();
    const [isUserExist, setIsUserExist] = useState<boolean>(false);
    
    const onChangeUsernameHandler = (e:any) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const onChangePasswordHandler = (e:any) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        user.find((u: { username: any, password: any; }) => {
            if(u.username === username && u.password === password){
                localStorage.setItem('user', u.username);
                setIsUserExist(true);
            }
            else{
                
                setIsUserExist(false);
            }
            console.log(localStorage.getItem('user'));
            return isUserExist;
        });
    }

    return (
        <div>
            {isUserExist ? <Redirect to="/Dashboard"/> : null}
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="Enter Username" onChange={onChangeUsernameHandler}/>
                <input type="password" placeholder="Enter Password" onChange={onChangePasswordHandler}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
