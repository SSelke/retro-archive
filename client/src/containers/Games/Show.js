import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGameShow, fetchUser, updateRecentGames } from '../../action'; 
import _ from 'lodash';
import './Show.css';

class Show extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        if (!this.props.result) {
            this.props.setGameShow(id);
        }
    }

    expandSummary = () => {
        const summary = document.querySelector('#read-more-summary');
        const toggler = document.querySelector('#game-show-summary-toggle');
        if (toggler.innerHTML === 'Read More') {
            summary.style.height = 'auto';
            toggler.innerHTML = "Read Less";
        } else {
            summary.style.height = '3.6rem';
            toggler.innerHTML = "Read More";
        }
    }

    addGameToCollection = async (e) => {
        e.preventDefault();
        let checkedValue = document.querySelectorAll('input[type=checkbox]:checked');
        console.log(checkedValue);
        if (checkedValue.length === 0) {
            return;
        }
        let values = [];
        checkedValue.forEach((collection) => {
            values.push(collection.value);
        });
        await this.props.updateRecentGames(values, this.props.result);
        await this.props.fetchUser();
        this.props.history.push(`/users/dashboard`);
    }

    renderAddToCollction = () => {
        const { collections } = this.props.auth;
        const newColl = _.mapKeys(collections, '_id');
        const consoles = this.props.result.platforms;
        let container = [];
        _.forEach(newColl, (coll) => {
            if ( consoles.includes(Number(coll.id)) ) {
                container.push(coll);
            }
        });
        if (!container.length) {
            return;
        }
        return <div className="my-4">
            <h4 className="mb-3">Add {this.props.result.name} to Collection</h4>
            <form onSubmit={(event) => this.addGameToCollection(event)}>
                {container.map(obj => {
                    return (
                        <div className="form-check" key={obj._id}>
                            <input className="form-check-input" type="checkbox" id={obj._id} value={obj._id} />
                            <label htmlFor={obj._id}>{obj.name}</label>
                        </div>
                    );
                })}
                <button className="btn btn-secondary w-100" type="submit">Add to Collection</button>
            </form>
        </div>
    }

    render() {

        const { result } = this.props;

        return (
            <div className="container mb-5">
                {!result ? 
                    "Loading..." : 
                    <div>
                        <div className="parallax-container m-0 p-0">
                            <div className="carousel slide h-75">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        {!result.screenshots ? <div className="d-block w-100 empty-header bg-dark"></div> : <img 
                                                                        className="d-block w-100" 
                                                                        src={`//images.igdb.com/igdb/image/upload/t_screenshot_big/${result.screenshots[0].cloudinary_id}.jpg`}
                                                                        alt="" /> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <header className="container">
                            <div className="container">
                                <div className="row mt-5 pt-5">
                                    <div className="col-md-5 col-sm-12 d-flex justify-content-center mt-3 pt-3">
                                        <div>
                                            <img className="d-flex" src={`//images.igdb.com/igdb/image/upload/t_cover_big/${result.cover.cloudinary_id}.jpg`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="game-show-header text-white mt-3 pt-3 text-center text-md-left">
                                            <h1 className="game-name"><strong>{result.name}</strong></h1>
                                            <h5 className="muted game-name">{new Date(result.first_release_date).toLocaleDateString()}</h5>
                                        </div>
                                        <div className="game-show-info">
                                            <div>
                                                <p id="read-more-summary">{result.summary}</p>
                                                <span className="text-success" id="game-show-summary-toggle" onClick={this.expandSummary}>Read More</span>
                                            </div>
                                        </div>
                                        {this.renderAddToCollction()}
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { result: state.selectedGame, auth: state.auth };
}

export default withRouter(connect(mapStateToProps, { setGameShow, fetchUser, updateRecentGames })(Show));