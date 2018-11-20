import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGameShow, setShowCollection, fetchGameList } from '../../action';
import CircularProgressbar from 'react-circular-progressbar';
import _ from 'lodash';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';

class Dashboard extends Component {

    renderRow = (group) => {
        return <div className="row my-4" key={group[0].id + 1}>
            {group.map((e) => this.renderCol(e))}
        </div>;
    }

    renderCol = (collection) => {
        return <div className={`col-md-6 col-sm-12 p-0 my-4 ${this.props.auth.collections.length === 1 ? "mx-auto" : "m-0"}`} key={collection.id}>
            <div className="tile mx-auto d-flex align-items-center justify-content-center" style={{backgroundColor: collection.color}} onClick={() => this.setStore(collection)}>
                <img src={collection.url} height="124" width="124" />
            </div>
        </div>
    }
    setStore = async (collection) => {
        await this.props.setShowCollection(collection);
        await this.props.fetchGameList(collection.id);
        this.props.history.push(`/users/collections/${collection._id}/${collection.id}`);
    }

    renderPercentages = () => {
        if (this.props.auth.collections.length === 0) {
            return 'empty';
        }
        return this.props.auth.collections.map(collection => {
            const percentage = ((Number(collection.gamesCollected.length) / Number(collection.gameCount)) * 100).toFixed(1);
            return <div className="circle-container" key={collection._id}>
                <h4>{collection.name}</h4>
                <CircularProgressbar
                    className="my-3"
                    styles={{
                        path: { width: '200px', height: 'auto' }
                    }}
                    percentage={percentage}
                    text={`${percentage}%`}
                />
                <h5>Collected:</h5>
                <h5>{`${collection.gamesCollected.length} / ${Number(collection.gameCount)}`}</h5>
            </div>
        });
    }

    renderRecentlyAdded = () => {
        return <div className="col-md-12 col-xs-12 m-0 p-0 my-4">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="mb-5">Recently Added Games</h2>
                <table className="table bg-dark text-white">
                    <tbody>
                        {this.props.auth.recentGames.map( game => {
                            return <tr key={game._id} onClick={() => { this.showGame(game.id) }}>
                                <td className="p-0 w-100 d-flex justify-content-start">
                                    <div className="my-3">
                                        <img src={game.cover.url} className="d-inline-block" alt="" />
                                        <h5 className="d-inline-block ml-2">{game.name}</h5>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }

    showGame = async (id) => {
        await this.props.setGameShow(id);
        this.props.history.push(`/games/${id}`);
    }

    render() {

        const { collections } = this.props.auth;
        let groups = null
        groups = _.chunk(collections, 2);
        return (
            <div className="container-fluid h-100" style={{minHeight: '100vh'}}>
                <div className="row h-100">
                    <div className="col m-0 mb-4 p-0">
                        <div className="jumbotron h-100 d-flex justify-content-around text-center">
                            {this.renderPercentages()}
                        </div>
                    </div>
                </div>
                <hr className="mb-4"/>
                <div className="mt-2 mb-4">{groups.map((e) => this.renderRow(e))}</div>
                <hr className="mb-4"/>
                <div className="row my-4">
                    {this.renderRecentlyAdded()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default withRouter(connect(mapStateToProps, { setGameShow, setShowCollection, fetchGameList })(Dashboard));