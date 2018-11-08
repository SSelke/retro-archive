import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameList,
         addToGameList,
         setShowCollection, 
         setGameShow } from '../../action';

import _ from 'lodash';
import Spinner from '../../components/UI/Spinner';
import axios from 'axios';

class Collections extends Component {

    state = {
        offset: 0
    }

    componentDidMount = () => { 
        if (!this.props.collection || this.props.auth.collections) {
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
        this.props.history.push(`/users/dashboard`);
    }

    renderRow = (group) => {
        return <div className="row" key={group[0].id + 1}>
            {group.map((e) => this.renderCol(e))}
        </div>
    }

    renderCol = (game) => {
        return <div className="col-md-3 col-xs-12" key={game.id}>
            <div className="jumbotron">
                <div className="mb-3" onClick={() => { this.showGame(game.id) }}>
                    <img src={game.cover.url} className="d-inline-block" alt="" />
                    <h5 className="d-inline-block ml-2 text-nowrap">{game.name}</h5>
                </div>
            </div>
        </div>
    }

    addGames = () => {
        const offset = this.state.offset + 1;
        console.log("hit");
        this.setState({offset}, () => {
            const offset = this.state.offset * 50;
            console.log(offset);
            this.props.addToGameList(this.props.collection.id, offset);
        });
    }

    showGame = (id) => {
        this.props.setGameShow(id, () => {
            this.props.history.push(`/games/${id}`);
        });
    }

    render() {

        if( !this.props.collection || !this.props.games) {
            return <Spinner />;
        } 

        const { collection } = this.props;
        const groups = _.chunk(this.props.games, 4)

        return (
            <div className="container-fluid h-100 my-4" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1>{collection.name}</h1>
                            <button onClick={this.deleteCollection}>Delete Collection</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <div>Xbox</div>
                            <div>Xbox 360</div>
                            <div>Xbox One</div>
                        </div>
                    </div>
                </div>
                { groups.map((e) => this.renderRow(e))}
                <div>
                    <button className="btn btn-secondary w-100 mb-5" onClick={this.addGames}>More Games</button>
                </div>
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
                                            setGameShow }
                        )(Collections);