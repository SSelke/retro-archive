import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCollection, hideModal, fetchUser, deleteCollection, redirect } from '../../../action';


class edit_collection extends Component {

    state = {
        name: this.props.collection.name,
        toDashboard: false
    }

    stopDestroy = (e) => {
        e.stopPropagation();
    }

    updateName = (event) => {
        this.setState({name: event.target.value});
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        const name = document.getElementById('collection-change').value;

        this.props.hideModal();
        await this.props.updateCollection(name, this.props.collection._id);
        await this.props.fetchUser();
    }

    deleteCollection = async () => {
        await this.props.deleteCollection(this.props.collection._id, this.props.auth.googleID);
        await this.props.hideModal();
        this.props.redirect();
    }

    render() {

        return (
            <div className="modal-edit-collection jumbotron" onClick={this.stopDestroy}>
                <div className="container">
                    <div className="col text-center">
                        <form onSubmit={(event) => this.onFormSubmit(event)}>
                            <div className="form-group">
                                <label>Update Collection Name</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id='collection-change' value={this.state.name} onChange={(event) => this.updateName(event)} />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button className="btn btn-danger" onClick={() => this.deleteCollection()}>Delete Collection</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({collection: state.collection, auth: state.auth});

export default connect(mapStateToProps, {updateCollection, hideModal, fetchUser, deleteCollection, redirect })(edit_collection);