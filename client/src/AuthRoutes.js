import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './action';
import { Route } from 'react-router-dom';
import SideBar from './containers/partials/SideBar';
import Dashboard from './containers/Dashboard/Dashboard';
import _ from 'lodash';
import Collections from './containers/Collections/Collections';

class AuthRoutes extends Component {

    state = {
        show: null
    }

    updateDimensions() {
        if (window.innerWidth >= 767) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", () => this.updateDimensions());
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", () => this.updateDimensions());
    }

    render() {
        return (
            <div className="container-fluid main h-100">
                <div className="row h-100">
                    <div className="col-md-2 col-xs-12 mx-0 px-0">
                        {this.state.show ? <SideBar {...this.props} /> : null}
                    </div>
                    <div className="col-md-10 col-xs-12 mt-4 px-4 h-100">
                        <Route path="/users/dashboard" component={Dashboard} {...this.props} />
                        <Route path="/users/collections/:id/:console" component={Collections} {...this.props} collections={this.props.collections} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ collections: state.collections})

export default connect(mapStateToProps, { fetchCollections })(AuthRoutes);