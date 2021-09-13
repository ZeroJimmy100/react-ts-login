import React from 'react'
import { Link, Redirect } from 'react-router-dom';

export default function Index() {
    
    return(
        <div>
            <h1>Welcome</h1>
            <Link to="/login">
                <button type="button">
                    Login
                </button>
            </Link>
            <Link to="/sign-up">
                <button type="button">
                    Sign Up
                </button>
            </Link>
        </div>
    )
}
