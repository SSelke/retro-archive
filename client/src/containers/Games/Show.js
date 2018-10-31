import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGameShow } from '../../action'; 
import _ from 'lodash';
import './Show.css';

class Show extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        if (!this.props.result) {
            this.props.setGameShow(id, () => {});
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
        // summary.style.height = 'auto' ? summary.style.height = '3.6rem' : summary.style.height = 'auto';
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
                                            <h5 className="pb-3">Genre: {result.genres.map(genre => {
                                                return <span key={genre.id} className="ml-2">{genre.name}</span>;
                                            })}</h5>
                                            <h5 className="pb-3">Consoles: {result.platforms.map(platform => {
                                                return <span key={platform.id} className="ml-2">{platform.name}</span>;
                                            })}</h5>
                                            <div>
                                                <p id="read-more-summary">{result.summary}</p>
                                                <span className="text-success" id="game-show-summary-toggle" onClick={this.expandSummary}>Read More</span>
                                            </div>
                                        </div>
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
    return { result: state.selectedGame };
}

export default withRouter(connect(mapStateToProps, { setGameShow })(Show));