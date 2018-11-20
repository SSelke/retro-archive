import React, { Component, Fragment } from 'react';
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
    NavItem,
    UncontrolledDropdown,
    DropdownItem, 
    DropdownToggle, 
    DropdownMenu
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
        if (window.innerWidth <= 767) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        // //fetch search data & redirect
        const keyword = document.getElementById('search-form').value;
        if (!keyword) {
            return;
        }
        await this.props.fetchSearchResults(keyword);
        this.props.history.push(`/search/${keyword}`);
    }

    setStore = async (collection) => {
        this.toggle();
        await this.props.setShowCollection(collection);
        await this.props.fetchGameList(collection.id);
        this.props.history.push(`/users/collections/${collection._id}/${collection.id}`);
    }

    addCollection = () => {
        this.props.showModal("ADD_COLLECTION");
    }

    setStore = async (collection) => {
        await this.props.setShowCollection(collection);
        await this.props.fetchGameList(collection.id);
        this.props.history.push(`/users/collections/${collection._id}/${collection.id}`);
    }

    isUser = () => {
        if (this.props.auth) {
            return <Fragment>
                <UncontrolledDropdown nav inNavbar className="my-3 mx-2">
                    <DropdownToggle nav caret>
                        Collections
                                </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.auth.collections.map(collection => {
                            return <DropdownItem onClick={() => this.setStore(collection)} key={collection._id}>
                                {collection.name}
                            </DropdownItem>
                        })}
                        <DropdownItem divider />
                        <DropdownItem onClick={this.addCollection}>
                            New Collection
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="my-3 mx-2">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-secondary" to="/users/dashboard" onClick={this.toggle}>Dashboard</Link>
                        <Link className="btn btn-secondary" to="/users/profile" onClick={this.toggle}>Profile</Link>
                        <a className="btn btn-danger text-white" to="/api/logout" onClick={this.toggle}>Logout</a>
                    </div>
                </NavItem>
            </Fragment>;
        } else {
            return <NavItem className="my-3 mx-2">
                <a className="btn btn-info" href="/auth/google" onClick={this.toggle}>Sign In</a>
            </NavItem>;
        }
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="text-center"><Link className="web-brand text-white" to='/'>Retro Archive</Link></div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="my-3 mx-2">
                                <form className="mr-3" onSubmit={this.onFormSubmit}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for a game" id="search-form" />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary" type="submit" onClick={this.toggle}>Search</button>
                                        </div>
                                    </div>
                                </form>
                            </NavItem>
                            {this.isUser()}
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
