import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGameList,
         deleteCollection,
         pullGame,
         addToGameList,
         setShowCollection, 
         fetchUser,
         setGameShow } from '../../action';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import _ from 'lodash';
import Spinner from '../../components/UI/Spinner';
import axios from 'axios';
import "./Collections.css";

class Collections extends Component {

    state = {
        offset: 0,
        activeTab: 'collected'
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount = () => { 
        if (!this.props.collection) {
            this.renderOnRefresh();
        }
    }

    renderOnRefresh = async () => {
        let collections = null;
        collections = _.mapKeys(this.props.auth.collections, "_id");
        const collection = _.find(collections, { _id: this.props.match.params.id });
        await this.props.setShowCollection(collection);
        await this.props.fetchGameList(this.props.match.params.console);
    }

    deleteCollection = async () => {
        axios.delete(`/api/delete_collection?id=${this.props.collection._id}&userID=${this.props.auth.googleID}`);
        this.props.deleteCollection(this.props.collection._id);
        this.props.history.push(`/users/dashboard`);
    }

    deleteGame = async (id) => {
        this.props.pullGame(id, this.props.collection._id);
    }

    renderCollected = (groups) => {
        if (groups.length === 0) {
            return <div className="bg-dark rounded text-white text-center p-5">
                <h3>Empty collections are sad collections :(</h3>
                <p>To get started with your collection you can either click on the games list tab to explore all available games, or simply search for a game that you would like to add.</p>
            </div>
        } else {
            return groups.map((e) => this.renderRow(e, "button"));
        }
    }

    renderRow = (group, button) => {
        return <div className="row" key={group[0].id + 1}>
            {group.map((e) => this.renderCol(e, button))}
        </div>;
    }

    renderCol = (game, button) => {
        const date = new Date(game.first_release_date).toLocaleDateString();
        return <div className="col-lg-4 col-md-12" key={game.id}>
            <div className="jumbotron">
                <div className="mb-3" onClick={() => { this.showGame(game.id) }}>
                    <div className="row">
                        <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                            <img src={game.cover.url} height="96" alt="" />
                        </div>
                        <div className="col-md-8 col-xs-12 text-center mt-4">
                            <h5>{game.name}</h5>
                            <p className="text-muted">{date}</p>
                        </div>
                    </div>
                </div>
                {button ? <div className="delete-game d-flex justify-content-center align-items-center" onClick={() => this.deleteGame(game._id)}><span className="m-0 p-0 text-white"><strong>X</strong></span></div> : null}
            </div>
        </div>
    }

    addGames = () => {
        const offset = this.state.offset + 1;
        this.setState({offset}, () => {
            const offset = this.state.offset * 25;
            this.props.addToGameList(this.props.collection.id, offset);
        });
    }

    showGame = async (id) => {
        await this.props.setGameShow(id);
        this.props.history.push(`/games/${id}`);
    }

    render() {

        if( !this.props.collection || !this.props.games) {
            return <Spinner />;
        } 

        const { collection } = this.props;
        const groups = _.chunk(collection.gamesCollected, 3);
        const list = _.chunk(this.props.games, 3);

        return (
            <div className="container-fluid h-100 my-4" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col">
                        <div className="jumbotron d-flex justify-content-center align-items-center">
                            <div className="w-100">
                                <h1>{collection.name}</h1>
                                <h5 className="text-muted">{collection.type}</h5>
                            </div>
                            <div className="w-100"> 
                                <button onClick={this.deleteCollection} className="btn btn-danger btn-small float-right">Delete Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 'collected' })}
                                onClick={() => { this.toggle('collected'); }}
                                >
                                Collected Games
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 'list' })}
                                onClick={() => { this.toggle('list'); }}
                                >
                                Games List
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                {
                    this.state.activeTab === "collected" ? 
                        this.renderCollected(groups) : <Fragment>
                            {list.map((e) => this.renderRow(e))}
                            <div>
                                <button className="btn btn-secondary w-100 mb-5" onClick={this.addGames}>More Games</button>
                            </div>
                        </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    games: state.gameList, collection: state.collection, auth: state.auth
})



export default connect(mapStateToProps, { 
                                            fetchGameList,  
                                            addToGameList,
                                            setShowCollection,
                                            deleteCollection,
                                            fetchUser,
                                            pullGame,
                                            setGameShow }
                        )(Collections);

