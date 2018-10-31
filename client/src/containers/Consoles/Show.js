import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Show.css';

class Show extends Component {
    render() {
        return (
            <div className="d-block w-100">
                <div className="console-show-header d-flex justify-content-center">
                    <img style={{ height: '400px', width: '100%' }} src="https://media.giphy.com/media/eHeVN7SEWzBRe/giphy.gif" alt=""/>    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Show);