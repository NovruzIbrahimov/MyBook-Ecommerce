import React from "react";
import "../ProfileModal/profileModal.css";
import { Modal } from "react-bootstrap";
import { RiAccountBoxLine, RiFileUserLine, RiLockLine, RiProfileLine } from "react-icons/ri";

function ProfileModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiFileUserLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">My Profile</h6>
            <p className="mb-0">View personal profile details</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiProfileLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">Edit Profile</h6>
            <p className="mb-0">Modify your personal details</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiAccountBoxLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">Account Settings</h6>
            <p className="mb-0">Manage your account parameters</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiLockLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">Privacy Settings</h6>
            <p className="mb-0">Control your privacy parameters</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <button className="btn-signOut">Sign out</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
