import React, { Component } from 'react';
import './sign_up.css';

class sign_up extends Component {
    render() {
        return (
            <div className="sign-up-container bg-dark d-flex justify-content-center align-items-center">
                <div className="sign-up-modal text-center bg-success rounded text-white">
                     <h3>Sign Up</h3>
                     <p>(Real Collectors Track Their Progress)</p>
                </div>
            </div>
        );
    }
}

export default sign_up;