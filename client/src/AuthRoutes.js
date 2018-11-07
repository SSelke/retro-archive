import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './action';
import { Route } from 'react-router-dom';
import SideBar from './containers/partials/SideBar';
import Dashboard from './containers/Dashboard/Dashboard';
import _ from 'lodash';
import Collections from './containers/Collections/Collections';

class AuthRoutes extends Component {
    render() {
        return (
            <div className="container-fluid main h-100">
                <div className="row h-100">
                    <div className="col-sm-2 col-xs-12 mx-0 px-0">
                        <SideBar {...this.props}/>
                    </div>
                    <div className="col-sm-10 col-xs-12 mt-4 px-4 h-100">
                        <Route path="/users/dashboard" component={Dashboard} {...this.props} />
                        <Route path="/users/collections/:id/:console" component={Collections} {...this.props} collections={this.props.collections} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({collections: state.collections})

export default connect(mapStateToProps, { fetchCollections })(AuthRoutes);