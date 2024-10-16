import React from "react";
import "../CategorySection/categorySearch.css";
import { useTranslation } from "react-i18next";

function CategorySearch() {
  const {t} = useTranslation();
  return (
    <div className="categorySearch mb-4 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h2 className="mb-0">{t("categorySearch.searchBook")}</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center category-search-bottom">
              <select className="form-select me-2">
                <option value="1">{t("categorySearch.all")}</option>
                <option value="2">{t("categorySearch.optionTwo")}</option>
                <option value="3">{t("categorySearch.optionThree")}</option>
                <option value="4">{t("categorySearch.optionFour")}</option>
              </select>
              <select className="form-select me-2">
                <option value="1">{t("categorySearch.genres")}</option>
                <option value="2">{t("categorySearch.optionTwo")}</option>
                <option value="3">{t("categorySearch.optionThree")}</option>
                <option value="4">{t("categorySearch.optionFour")}</option>
              </select>
              <select className="form-select me-2">
                <option value="1">{t("categorySearch.year")}</option>
                <option value="2">{t("categorySearch.optionTwo")}</option>
                <option value="3">{t("categorySearch.optionThree")}</option>
                <option value="4">{t("categorySearch.optionFour")}</option>
              </select>
              <select className="form-select me-3">
                <option value="1">{t("categorySearch.author")}</option>
                <option value="2">{t("categorySearch.optionTwo")}</option>
                <option value="3">{t("categorySearch.optionThree")}</option>
                <option value="4">{t("categorySearch.optionFour")}</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder={t("categorySearch.placeholderSearch")}
              />
              <button className="search-button ms-2">
              {t("categorySearch.searchButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
