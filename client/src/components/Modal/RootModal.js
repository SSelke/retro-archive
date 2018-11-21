import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../action/';
import SignUpModal from './SignUp/SignUp';
import addCollection from './Collection/add_collection';
import editCollection from './Edit/edit_collection.js';
import editUser from './Edit/edit_user.js';
import './RootModal.css';


class RootModal extends Component {

    destroyModal = () => {
        this.props.hideModal("HIDE_MODAL");
    }

    render () {

        const { modalType, modalProps } = this.props;

        const MODAL_COMPONENTS = {
            "SIGN_UP": SignUpModal,
            "ADD_COLLECTION": addCollection,
            "EDIT_COLLECTION": editCollection,
            "EDIT_USER": editUser
        }

        if (!modalType) {
            return null;
        }

        const SpecificModal = MODAL_COMPONENTS[modalType];
        return (
            <div className="modal-container d-flex align-items-center justify-content-center h-100" onClick={this.destroyModal}>
                <SpecificModal {...modalProps} {...this.props} />
                {console.log(this.props)}
            </div>
        );
    }
} 

export default connect(state => state.modal, { hideModal })(RootModal);