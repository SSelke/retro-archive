import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="container p-0">
                    <div className="bg-dark rounded box-shadow">
                        <div className="col-md-6 text-white m-3 p-5">
                            <h1><em>Grow and maintain your Video Game Collection</em></h1>
                            <p className="my-3 landing-header-text">Retro Archive allows gamers to discover new games for thier favorite consoles, as well as track your Video Game and Console collections.</p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <strong className="text-danger mb-1">Consoles</strong>
                                    <h3>Console Collection</h3>
                                    <p>Keep track of all your favorite console's varients and special editions.</p>
                                    <a href="/auth/google">Discover now</a>
                                </div>
                                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{ width: '200px', height: "250px" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166b415c404%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166b415c404%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <strong className="text-info mb-1">Games</strong>
                                    <h3>Professional Game Hoarder?</h3>
                                    <p>See how your game collection stacks up against other collectors.</p>
                                    <a href="/auth/google">Compare now</a>
                                </div>
                                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{ width: '200px', height: "250px" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166b415c404%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166b415c404%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="container">
                    <div className="row mb-2">
                        <div className="col bg-white text-center">
                            
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Landing;