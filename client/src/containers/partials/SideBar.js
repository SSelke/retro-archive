import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResults, showModal, setShowCollection, fetchGameList } from '../../action';
import _ from 'lodash';
import './SideBar.css';

class SideBar extends Component {

    onFormSubmit = (event) => {
        event.preventDefault();

        // //fetch search data & redirect
        const keyword = document.getElementById('search-form-side').value;
        if (!keyword) {
            return;
        }
        this.props.fetchSearchResults(keyword, () => {
            this.props.history.push(`/search/${keyword}`);
        });
    }

    setStore = async (collection) => {
        await this.setCollection(collection);
        await this.props.fetchGameList(collection.id);
        this.props.history.push(`/users/collections/${collection._id}/${collection.id}`);
    }


    renderCollections = () => {
        let collections = null;
        collections = _.mapKeys(this.props.auth.collections, "_id");
        return _.map(collections, (collection) => {
            return <li key={collection._id} className="my-2" onClick={() => this.setStore(collection)}>{collection.name}</li>
        });
    }

    setCollection = (collection) => {
        console.log(collection);
        this.props.setShowCollection(collection);
    }

    addCollection = () => {
        this.props.showModal("ADD_COLLECTION");
    }

    render() {
        return (
            <div className="sidebar-nav h-100 bg-dark text-white" style={{ minHeight: '100vh' }}>
                <ul className="sidebar-container mx-3 p-0">
                    <li className="sidebar-nav-item">
                        <Link to='/users/profile/show'>Profile</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <h5><em>My Collections</em></h5>
                        <ul>
                            {this.renderCollections()}
                            <li className="my-2" onClick={this.addCollection}><span>New Collection</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { collections: state.collections, user: state.user };
}

export default connect(mapStateToProps, { fetchSearchResults, showModal, setShowCollection, fetchGameList })(SideBar);