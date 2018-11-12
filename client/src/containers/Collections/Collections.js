import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGameList,
         addToGameList,
         setShowCollection, 
         fetchUser,
         setGameShow } from '../../action';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import _ from 'lodash';
import Spinner from '../../components/UI/Spinner';
import axios from 'axios';

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
        this.props.fetchUser()
    }

    renderRow = (group) => {
        return <div className="row" key={group[0].id + 1}>
            {group.map((e) => this.renderCol(e))}
        </div>
    }

    renderCol = (game) => {
        const date = new Date(game.first_release_date).toLocaleDateString();
        return <div className="col-lg-4 col-md-12" key={game.id}>
            <div className="jumbotron">
                <div className="mb-3" onClick={() => { this.showGame(game.id) }}>
                    <div className="row">
                        <div className="col-md-4 col-xs-12 d-flex justify-content-center">
                            <img src={game.cover.url} alt="" />
                        </div>
                        <div className="col-md-8 col-xs-12 text-center mt-4">
                            <h5>{game.name}</h5>
                            <p className="text-muted">{date}</p>
                        </div>
                    </div>
                </div>
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
        const groups = _.chunk(collection.gamesCollected, 3);
        const list = _.chunk(this.props.games, 3);

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
                        groups.map((e) => this.renderRow(e)) : <Fragment>
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
                                            fetchUser,
                                            setGameShow }
                        )(Collections);

