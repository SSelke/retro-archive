import React, { Component } from 'react';
import { findCompany } from '../../../assets/companies/companies';
import { connect } from 'react-redux';
import { hideModal, fetchUser } from '../../../action';
import './add_collection.css';
import axios from 'axios';

class addCollection extends Component {

    state = {
        company: null,
        consoles: null
    }

    stopDestroy = (e) => {
        e.stopPropagation();
    }

    destroyModal = () => {
        this.props.hideModal("HIDE_MODAL");
    }

    setConsoles = () => {
        const select = document.getElementById('console_manu');
        const company = select.options[select.selectedIndex].value;
        this.setState({company});
        if (!findCompany(company)) {
            this.setState({consoles: null});
            return;
        }
        const consoles = findCompany(company).consoles;
        this.setState({consoles});
    }

    renderConsoles = () => {
        if (!this.state.consoles) {
            return null;
        }

        return this.state.consoles.map(console => {
            return <option key={console.gameCount} count={console.gameCount} id={console.id}>{console.name}</option>
        });
    }

    submitForm = async (event) =>  {
        event.preventDefault();

        const select = document.getElementById('console_select');
        const selectedConsole = select.options[select.selectedIndex].value;
        const id = select.options[select.selectedIndex].id;
        const count = select.options[select.selectedIndex].getAttribute('count');
        console.log(typeof count);
        const name = document.getElementById('console_name').value;
        await axios.post(`/api/save_collection?name=${name}&id=${id}&console=${selectedConsole}&gameCount=${count}`);
        this.destroyModal();
        this.props.fetchUser();
    }

    render () {

        return (
            <div className="modal-add-collection jumbotron" onClick={this.stopDestroy}>
                <div className="container">
                    <div className="text-center">
                        <h3>Add a Collection</h3>
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="console_name">Collection Name</label>
                                <input type="text" className="form-control" id="console_name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="console_manu">Console Generation</label>
                                <select defaultValue="Eg. Nintendo" id="console_manu" className="form-control" onChange={this.setConsoles} required>
                                    <option disabled>Eg. Nintendo</option>
                                    <option>Atari</option>
                                    <option>Nintendo</option>
                                    <option>Sega</option>
                                    <option>Sony</option>
                                    <option>Xbox</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="console_select">Select Console</label>
                                <select defaultValue="Select a console" className="form-control" id="console_select" required>
                                    {this.renderConsoles()}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { hideModal, fetchUser })(addCollection);