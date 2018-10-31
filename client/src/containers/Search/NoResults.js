import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSearchResults } from '../../action';

class NoResults extends Component {

    onFormSubmit = (event) => {
        event.preventDefault();

        // //fetch search data & redirect
        const keyword = document.getElementById('results-form').value;
        this.props.fetchSearchResults(keyword, () => {
            console.log('asas');
            this.props.history.push(`/search/${keyword}`);
        });
    }

    render() {
        
        return (
            <div className="col">
                <div className="jumbotro bg-dark rounded shadow text-white text-center p-5">
                    <h2>Search for your favorite Games</h2>
                    <div className="my-5 mx-auto w-50">
                        <form onSubmit={this.onFormSubmit}>
                            <div className="input-group">
                                <input type="text" className="form-control" id="results-form" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, { fetchSearchResults })(NoResults));