import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Profile from './containers/Profile/Profile';
import Collections from './containers/Collections/Collections';

class AuthRoutes extends Component {

    render() {
        return (
            <div className="container main h-100">
                <div className="row h-100">
                    <div className="col-md-12 col-xs-12 mt-4 px-4 h-100">
                        <Route path="/users/dashboard" component={Dashboard} {...this.props} />
                        <Route path="/users/collections/:id/:console" component={Collections} {...this.props} collections={this.props.collections} />
                        <Route path="/users/profile" component={Profile} {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ collections: state.collections})

export default connect(mapStateToProps)(AuthRoutes);