import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="modal-sign-up jumbotron">
            <div className="container">
                <div className="default-picture mx-auto mb-3">
                    <img src="https://cdn3.iconfinder.com/data/icons/geek-3/24/Zelda_game-512.png" width="64" height="auto" alt=""/>
                </div>
                <div className="text-center">
                    <h3>New User?</h3>
                    <p>(All the best collectors track their progess)</p>
                    <p>Sign up for free and get access to your person collection tracker!</p>
                    <a className="btn social-google text-white rounded" href="/auth/google">
                        <i className="fab fa-google mr-3"></i>
                        <span>Sign in with Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;