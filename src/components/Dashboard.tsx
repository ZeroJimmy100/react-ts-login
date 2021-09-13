import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';

export interface DashboardProps {
    user: any,
    setUser: React.Dispatch<React.SetStateAction<Array<any>>>
}

export default function Dashboard({user, setUser}:DashboardProps) {
    const [isLogout, setIsLogout] = useState<boolean>(false);

    const logoutFunc = () => {
        localStorage.removeItem('user');
        setIsLogout(true);
    }

    return (
        <div>
            { isLogout ? <Redirect to="/"/> : null}
            {localStorage.getItem('user') ? 
                    <div>
                        <h1>Dashboard</h1>
                        <h3>Welcome, {localStorage.getItem('user')}</h3>
                        <button onClick={logoutFunc}>Logout</button>
                    </div>
                : <Redirect to="/"/>}
        </div>
    )
}
