import React, { Component } from 'react';
import { fetchSearchResults, setShowCollection, fetchGameList, showModal } from '../../action';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        if (window.innerWidth >= 767) {
            return;
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderNav = () => {
        switch (this.props.auth) {
            case null:
                return 'Loading...';
            case false:
                return <a className="btn btn-info" href="/auth/google" onClick={this.toggle}>Sign In</a>;
            default:
                return <a className="btn btn-danger" href="/api/logout" onClick={this.toggle}>Logout</a>;
        }
    }

    renderButton = () => {
        switch (this.props.auth) {
            case null:
                return 'Loading...';
            default:
                return <a className="btn btn-secondary" href="/users/dashboard" onClick={this.toggle}>Dashboard</a>;
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

    setStore = async (collection) => {
        this.toggle();
        await this.setCollection(collection);
        await this.props.fetchGameList(collection.id);
        this.props.history.push(`/users/collections/${collection._id}/${collection.id}`);
    }

    renderCollections = () => {
        let collections = null;
        collections = _.mapKeys(this.props.auth.collections, "_id");
        return _.map(collections, (collection) => {
            return <NavItem key={collection._id} className="my-2 text-white" onClick={() => this.setStore(collection)}>{collection.name}</NavItem>;
        });
    }

    setCollection = (collection) => {
        this.props.setShowCollection(collection);
    }

    addCollection = () => {
        this.toggle();
        this.props.showModal("ADD_COLLECTION");
    }

    render() {
        return (
            <div className="">
                <Navbar color="dark" light expand="md">
                    <div className="text-center"><Link className="web-brand text-white" to='/'>Retro Archive</Link></div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="my-3">
                                <form className="mr-3" onSubmit={this.onFormSubmit}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for a game" id="search-form" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="submit" onClick={this.toggle}>Search</button>
                                        </div>
                                    </div>
                                </form>
                            </NavItem>
                            <NavItem className="my-3">
                                <div className="btn-group" role="group">
                                    {this.renderNav()}
                                    {this.renderButton()}
                                </div>
                            </NavItem>
                            { this.props.auth ? <div className="text-white header-collections">
                                    <h5 className="mb-3"><em>My Collections</em></h5>
                                    {this.renderCollections()}
                                    <NavItem className="my-2" onClick={this.addCollection}><span>New Collection</span></NavItem>
                                </div> : null }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth, term: state.term};
}

export default withRouter(connect(mapStateToProps, { fetchSearchResults, showModal, setShowCollection, fetchGameList })(Header));  

// <div className="container p-0">
//     <header className="py-3 web-header mb-4">
//         <div className="row flex-nowrap justify-content-between align-items-center">
//             <div className="col-4 pt-1">{this.renderButton()}</div>
//             <div className="col-4 text-center"><Link className="web-brand text-dark" to='/'><strong>Retro Archive</strong></Link></div>
//             <div className="col-4 pt-1 d-flex justify-content-end">
//                 <form className="mr-3" onSubmit={this.onFormSubmit}>
//                     <div className="input-group">
//                         <input type="text" className="form-control" placeholder="Search for a game" id="search-form" />
//                         <div className="input-group-append">
//                             <button className="btn btn-outline-secondary" type="submit">Search</button>
//                         </div>
//                     </div>
//                 </form>
//                 {this.renderNav()}
//             </div>
//         </div>
//     </header>
// </div>