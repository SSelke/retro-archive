import React, { Component, Fragment } from 'react';
import { fetchSearchResults } from '../../action';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    renderNav = () => {
        switch (this.props.isLoggedIn) {
            case null:
                return 'Loading...';
            case false:
                return <a className="btn btn-outline-secondary" href="/auth/google">Sign In</a>;
            default:
                return <a className="btn btn-outline-danger" href="/api/logout">Logout</a>;
        }
    }

    renderButton = () => {
        switch (this.props.isLoggedIn) {
            case null:
                return 'Loading...';
            case false:
                return <a className="btn btn-outline-secondary" href="/auth/google">Sign In</a>;
            default:
                return <a className="text-muted" href="/users/dashboard">Dashboard</a>;
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // //fetch search data & redirect
        const keyword = document.getElementById('search-form').value;
        if (!keyword) {
            return;
        }
        this.props.fetchSearchResults(keyword, () => {
            this.props.history.push(`/search/${keyword}`);
        });
    }

    render() {
        return (
            <div className="container p-0">
                <header className="py-3 web-header mb-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">{this.renderButton()}</div>
                        <div className="col-4 text-center"><Link className="web-brand text-dark" to='/'><strong>Retro Archive</strong></Link></div>
                        <div className="col-4 pt-1 d-flex justify-content-end">
                            <form className="mr-3" onSubmit={this.onFormSubmit}>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="search-form"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                            {this.renderNav()}
                        </div>
                    </div>
                </header>
                <div className="nav-scroller py-1 mb-5">
                    <nav className="nav d-flex justify-content-around">
                        <a className="p-2 text-muted" href="/consoles/Nintendo">Nintendo</a>
                        <a className="p-2 text-muted" href="/consoles/Xbox">Xbox</a>
                        <a className="p-2 text-muted" href="/consoles/Playstation">PlayStation</a>
                        <a className="p-2 text-muted" href="/consoles/Atari">Atari</a>
                        <a className="p-2 text-muted" href="/consoles/Sega">Sega</a>
                    </nav>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {isLoggedIn: state.auth, term: state.term};
}

export default withRouter(connect(mapStateToProps, { fetchSearchResults })(Header));  