import React from "react";
import "../CategorySection/categorySearch.css";

function CategorySearch() {
  return (
    <div className="categorySearch mb-4 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h2 className="mb-0">Search by Book Name</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <select className="form-select me-2">
                <option value="1">All</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
              <select className="form-select me-2">
                <option value="1">Genres</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
              <select className="form-select me-2">
                <option value="1">Year</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
              <select className="form-select me-3">
                <option value="1">Author</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
              />
              <button className="search-button ms-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
