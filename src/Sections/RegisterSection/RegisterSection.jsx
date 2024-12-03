import React, { useState } from "react";
import "../RegisterSection/registerSection.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function RegisterSection() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!firstName || !surname || !email || !password) {
      setErrorMessage(t("registerSection.error"));
    } else {
      localStorage.setItem("userData", JSON.stringify({ email, password }));
      setSuccessMessage(t("registerSection.success"));

      setTimeout(() => {
        navigate("/join");
      }, 500);
    }
  };
  return (
    <div className="register template d-flex justify-content-center align-items-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">{t("registerSection.register")}</h3>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <div className="mb-2">
            <label htmlFor="firstName">{t("registerSection.label")}</label>
            <input
              type="text"
              placeholder={t("registerSection.placeholder")}
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="surname">{t("registerSection.labelSur")}</label>
            <input
              type="text"
              placeholder={t("registerSection.surPlaceholder")}
              className="form-control"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">{t("registerSection.labelEmail")}</label>
            <input
              type="email"
              placeholder={t("registerSection.emailPlaceholder")}
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">{t("registerSection.labelPassword")}</label>
            <input
              type="password"
              placeholder={t("registerSection.passwordPlaceholder")}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-submit">
            {t("registerSection.signUpButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterSection;
