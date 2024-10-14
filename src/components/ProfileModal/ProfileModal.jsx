import React from "react";
import "../ProfileModal/profileModal.css";
import { Modal } from "react-bootstrap";
import { RiAccountBoxLine, RiFileUserLine, RiLockLine, RiProfileLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function ProfileModal({ show, onClose }) {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("profileModal.information")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiFileUserLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">{t("profileModal.profile")}</h6>
            <p className="mb-0">{t("profileModal.personal")}</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiProfileLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">{t("profileModal.edit")}</h6>
            <p className="mb-0">{t("profileModal.modify")}</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiAccountBoxLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">{t("profileModal.account")}</h6>
            <p className="mb-0">{t("profileModal.manage")}</p>
          </div>
        </div>
        <div className="profile-option d-flex align-items-center mb-3">
          <div className="profile-option-icon">
            <i>
              <RiLockLine />
            </i>
          </div>
          <div>
            <h6 className="mb-0">{t("profileModal.privacyP")}s</h6>
            <p className="mb-0">{t("profileModal.control")}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <button className="btn-signOut">{t("profileModal.signOut")}</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
