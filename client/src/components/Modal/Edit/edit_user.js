import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal, updateUser, redirect, deleteUser } from '../../../action';
import axios from 'axios';


class edit_collection extends Component {

    state = {
        first_name: this.props.auth.givenName,
        last_name: this.props.auth.familyName,
        toDashboard: false
    }

    stopDestroy = (e) => {
        e.stopPropagation();
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        const givenName = document.getElementById('givenName').value;
        const familyName = document.getElementById('familyName').value;

        await this.props.updateUser(givenName, familyName);
        this.props.hideModal();
    }

    destroyUser = async () => {
        await axios.post('/api/delete_user', {
            params: {
                user: this.props.auth
            }
        });
    }

    render() {

        return (
            <div className="modal-edit-collection jumbotron" onClick={this.stopDestroy}>
                <div className="container">
                    <div className="col text-center">
                        <form onSubmit={(event) => this.onFormSubmit(event)} className="mb-4">
                            <div className="form-group">
                                <label>First Name</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id='givenName' value={this.state.first_name} onChange={(event) => this.setState({ first_name: event.target.value })} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id='familyName' value={this.state.last_name} onChange={(event) => this.setState({ last_name: event.target.value })} />
                                </div>
                            </div>
                            <button className="btn btn-secondary" type="submit">Submit</button>
                        </form>
                        <h5>Delete User</h5>
                        <button className="btn btn-danger" onClick={() => this.destroyUser()}>Delete User</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { hideModal, updateUser, redirect, deleteUser })(edit_collection);