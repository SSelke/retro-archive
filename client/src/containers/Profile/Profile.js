import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../action';
import './Profile.css';

class Profile extends Component {

    addCollection = () => {
        this.props.showModal("ADD_COLLECTION");
    }

    editProfile = () => {

    }

    renderTable = (auth) => {
        return <div className="jumbotron bg-info text-white table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">System</th>
                        <th scope="col">Name</th>
                        <th scope="col"># Collected</th>
                        <th scope="col">Games Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {auth.collections.map(collection => {
                        return <tr key={collection._id}>
                            <th scope="row">{collection.type}</th>
                            <td>{collection.name}</td>
                            <td>{collection.gamesCollected.length}</td>
                            <td>{collection.gameCount - collection.gamesCollected.length}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>  
    }

    renderWelcome = () => {
        return <div className="jumbotron text-center">
            <h1>Welcome!</h1>
            <p className="welcome-para">Thank you for setting an account up with us! It appears you have not started a collection yet, would you like to get one started?</p>
            <button className="btn btn-success" onClick={this.addCollection}>Get Started!</button>
        </div>
    }

    render() {

        const { auth } = this.props;
        return (
            <div className="container-fluid h-100" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col m-0 mb-4 p-0">
                        <div className="jumbotron bg-dark h-100 text-center text-white">
                            <h1>{`${auth.givenName} ${auth.familyName}`}</h1>
                            <button className="btn btn-info" onClick={() => this.editProfile()}>Edit Profile</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row h-100">
                    <div className="col p-0 my-4">
                        {auth.collections.length > 0 ? this.renderTable(auth) : this.renderWelcome()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({auth: state.auth});

export default connect(mapStateToProps, { showModal })(Profile);