import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchCollections } from '../../action';
import { connect } from 'react-redux';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css';

class Dashboard extends Component {

    // componentDidMount = () => {
    //     this.props.fetchCollections();
    // }

    render() {
        const SNESpercentage = 23;
        const N64percentage = 53;
        const PS2percentage = 12;

        return (
            <div className="container-fluid h-100" style={{minHeight: '100vh'}}>
                <div className="row h-100">
                    <div className="col m-0 mb-4 p-0">
                        <div className="jumbotron h-100 d-flex justify-content-around text-center">
                            <div className="circle-container">
                                <h4>SNES</h4>
                                <CircularProgressbar
                                    className="my-3"
                                    styles={{
                                        path: { width: '200px', height: 'auto' }
                                    }}
                                    percentage={SNESpercentage}
                                    text='23%'
                                />
                                <h5>23 / 100 Collected</h5>
                            </div>
                            <div className="circle-container">
                                <h4>N64</h4>
                                <CircularProgressbar
                                    className="my-3"
                                    styles={{
                                        path: { width: '200px', height: 'auto' }
                                    }}
                                    percentage={N64percentage}
                                    text='53%'
                                />
                                <h5>53 / 100 Collected</h5>
                            </div>
                            <div className="circle-container">
                                <h4>PS2</h4>
                                <CircularProgressbar
                                    className="my-3"
                                    styles={{
                                        path: { width: '200px', height: 'auto' }
                                    }}
                                    percentage={PS2percentage}
                                    text='12%'
                                />
                                <h5>12 / 100</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12 m-0 p-0">
                        <div className="jumbotron bg-dark text-white text-center">
                            <h2 className="mb-5">Recently Added Games</h2>
                            <table className="table bg-dark text-white">
                                <tbody>
                                    <tr>
                                        <th scope="row"><img src="//images.igdb.com/igdb/image/upload/t_thumb/f9jqwcudxcicbqgzx8tf.jpg" className="d-inline-block" alt="" /></th>
                                        <td className="p-0 my-auto"><h5 className="d-inline-block ml-2">The Legend of Zelda: A Link to the Past</h5></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src="//images.igdb.com/igdb/image/upload/t_thumb/f9jqwcudxcicbqgzx8tf.jpg" className="d-inline-block" alt="" /></th>
                                        <td className="p-0 my-auto"><h5 className="d-inline-block ml-2">The Legend of Zelda: A Link to the Past</h5></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src="//images.igdb.com/igdb/image/upload/t_thumb/f9jqwcudxcicbqgzx8tf.jpg" className="d-inline-block" alt="" /></th>
                                        <td className="p-0 my-auto"><h5 className="d-inline-block ml-2">The Legend of Zelda: A Link to the Past</h5></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src="//images.igdb.com/igdb/image/upload/t_thumb/f9jqwcudxcicbqgzx8tf.jpg" className="d-inline-block" alt="" /></th>
                                        <td className="p-0 my-auto"><h5 className="d-inline-block ml-2">The Legend of Zelda: A Link to the Past</h5></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src="//images.igdb.com/igdb/image/upload/t_thumb/f9jqwcudxcicbqgzx8tf.jpg" className="d-inline-block" alt="" /></th>
                                        <td className="p-0 my-auto"><h5 className="d-inline-block ml-2">The Legend of Zelda: A Link to the Past</h5></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}

export default withRouter(connect(mapStateToProps, { fetchCollections })(Dashboard));