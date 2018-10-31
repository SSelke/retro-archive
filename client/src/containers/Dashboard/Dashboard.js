import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col m-0 p-0">
                        Dashboard
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default withRouter(connect(mapStateToProps)(Dashboard));