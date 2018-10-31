import React, { Component } from 'react';
import _ from 'lodash';
import { fetchSearchResults, setGameShow } from '../../action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NoResults from './NoResults.js';


class Search extends Component {

    renderSearch = () => {
        const res = _.isEmpty(this.props.results);
        switch (res) {
            case true:
                return <NoResults/>;
            default:
                return _.map(this.props.results, result => {
                    const date = new Date(result.first_release_date).toLocaleDateString();
                    return(
                        <div className="col" key={result.id}>
                            <div className="mb-3 game" onClick={() => {this.showGame(result.id)}}>
                                <img src={result.cover.url} className="d-inline-block" alt=""/>
                                <h5 className="d-inline-block ml-2">{result.name}</h5>
                                <span className="muted ml-1">({date})</span>
                            </div>
                        </div>
                    );
                });
        }
    }

    showGame = (id) => {
        this.props.setGameShow(id, () => {
            this.props.history.push(`/games/${id}`);
        });
    }

    render() {
        return (
            <div className="container">
                {_.isEmpty(this.props.results) ? null : <h3 className="mb-3">Results for: {this.props.term}</h3>}
                {this.renderSearch()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { results: state.search_results, term: state.term, searchRedirect: state.redirect };
}

export default withRouter(connect(mapStateToProps, { fetchSearchResults, setGameShow })(Search));