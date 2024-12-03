import React, { useState } from "react";
import "../JoinSection/joinSection.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function JoinSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (email === "" || password === "") {
      setErrorMessage(t("joinSection.error"));
    }else if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert(t("joinSection.success"));
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      setErrorMessage(t("joinSection.incorrect"));
      setTimeout(() => {
        navigate("/register");
      }, 500);
    }
  };
  return (
    <div className="login template d-flex justify-content-center align-items-center ">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">{t("joinSection.join")}</h3>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="mb-3">
            <label htmlFor="email">{t("joinSection.email")}</label>
            <input
              type="email"
              placeholder={t("joinSection.emailPlaceholder")}
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">{t("joinSection.password")}</label>
            <input
              type="password"
              placeholder={t("joinSection.passwordPlaceholder")}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-submit">
            {t("joinSection.joinButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinSection;
