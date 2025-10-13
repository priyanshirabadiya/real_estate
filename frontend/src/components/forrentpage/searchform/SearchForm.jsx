import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import "./SearchForm.css";

const SearchForm = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [cityOpen, setCityOpen] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const cities = ["All Cities", "Chicago", "Los Angeles", "Miami", "New York"];

  const [areaOpen, setAreaOpen] = useState(false);
  const [areaSearch, setAreaSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const areas = [
    { name: "Albany Park", city: "Chicago" },
    { name: "Altgeld Garden", city: "Chicago" },
    { name: "Andersonville", city: "Chicago" },
    { name: "Beverly", city: "Chicago" },
    { name: "Brickell", city: "Miami" },
  ];

  const [rentOpen, setRentOpen] = useState(false);
  const [rentSearch, setRentSearch] = useState("");
  const [selectedRent, setSelectedRent] = useState("For Rent");

  const rentOptions = ["Status", "For Rent", "For Sale", "New Construction"];

  const [typeOpen, setTypeOpen] = useState(false);
  const [typeSearch, setTypeSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Type");

  const typeOptions = ["Apartment", "Loft", "Single Family Home", "Villa"];

  const [bedOpen, setBedOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState("Bedrooms");
  const bedOptions = [
    "Any",
    ...Array.from({ length: 10 }, (_, i) => `${i + 1}`),
  ];

  const [bathOpen, setBathOpen] = useState(false);
  const [selectedBath, setSelectedBath] = useState("Bathrooms");
  const bathOptions = [
    "Any",
    ...Array.from({ length: 10 }, (_, i) => `${i + 1}`),
  ];

  const [minPriceOpen, setMinPriceOpen] = useState(false);
  const [selectedMinPrice, setSelectedMinPrice] = useState("Min. Price");
  const minPriceOptions = [
    "Any",
    "$500",
    "$1000",
    "$2000",
    "$4000",
    "$1530",
    "$7500",
    "$10000",
    "$15000",
    "$20000",
    "$25000",
    "$30000",
    "$40000",
    "$50000",
    "$75000",
    "$100000",
  ];

  const [maxPriceOpen, setMaxPriceOpen] = useState(false);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("Max. Price");
  const maxPriceOptions = [
    "Any",
    "$500",
    "$1000",
    "$2000",
    "$4000",
    "$1530",
    "$7500",
    "$10000",
    "$15000",
    "$20000",
    "$25000",
    "$30000",
    "$40000",
    "$50000",
    "$75000",
    "$100000",
    "$150000",
  ];

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="container">
      <div className="property-search-container">
        <div className="my-3">
          <div className="row main-search-row px-0">
            <div className="col-xl-6 mt-3">
              <div className="col-spacing">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    className="form-control custom-input w-100"
                    placeholder="Enter Keyword..."
                    style={{ fontFamily: "Dosis, sans-serif" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 ms-xl-0 mt-3">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-spacing">
                  <div className="custom-dropdown">
                    <div
                      className="dropdown-toggle-box"
                      onClick={() => setCityOpen(!cityOpen)}
                    >
                      {selectedCity}
                      <span className="arrow">{cityOpen ? "▲" : "▼"}</span>
                    </div>

                    {cityOpen && (
                      <div className="dropdown-menu-box shadow">
                        <input
                          type="text"
                          className="form-control custom-input dropdown-search"
                          placeholder=""
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                        />
                        <ul className="dropdown-options">
                          {cities
                            .filter((city) =>
                              city
                                .toLowerCase()
                                .includes(citySearch.toLowerCase())
                            )
                            .map((city, index) => (
                              <li
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                  setSelectedCity(city);
                                  setCityOpen(false);
                                  setCitySearch("");
                                }}
                              >
                                {city}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-spacing">
                  <div className="custom-dropdown area-dropdown">
                    <div
                      className="dropdown-toggle-box"
                      onClick={() => setAreaOpen(!areaOpen)}
                    >
                      {selectedArea}
                      <span className="arrow">{areaOpen ? "▲" : "▼"}</span>
                    </div>
                    {areaOpen && (
                      <div className="dropdown-menu-box shadow">
                        <input
                          type="text"
                          className="form-control custom-input dropdown-search"
                          placeholder=""
                          value={areaSearch}
                          onChange={(e) => setAreaSearch(e.target.value)}
                        />
                        <ul className="dropdown-options">
                          {areas
                            .filter((area) =>
                              area.name
                                .toLowerCase()
                                .includes(areaSearch.toLowerCase())
                            )
                            .map((area, index) => (
                              <li
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                  setSelectedArea(`${area.name}`);
                                  setAreaOpen(false);
                                  setAreaSearch("");
                                }}
                              >
                                {area.name}{" "}
                                <small className="text-muted">
                                  {area.city}
                                </small>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-spacing">
                  <button
                    className="d-flex align-items-center mt-lg-0 mt-3  app-flex justify-content-center btn app-btn btn-outline-secondary btns w-100"
                    onClick={toggleAdvanced}
                  >
                    <span className="align-self-center me-1">
                      <IoSettingsOutline />
                    </span>
                    Advanced
                  </button>
                </div>
                <div className="col-lg-2 col-md-6 col-spacing">
                  <button className="btn  mt-lg-0 mt-3 app-btn btn-outline-secondary app-btn-outline btns w-100">
                    Clear
                  </button>
                </div>
                <div className="col-lg-2 col-md-6 col-spacing">
                  <button className="btn  mt-lg-0 mt-3 app-btn btns bt w-100">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showAdvanced && (
          <div className="filters-form">
            <div className="row filters-row">
              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setRentOpen(!rentOpen)}
                  >
                    {selectedRent}
                    <span className="arrow">{rentOpen ? "▲" : "▼"}</span>
                  </div>
                  {rentOpen && (
                    <div className="dropdown-menu-box shadow">
                      <input
                        type="text"
                        className="form-control custom-input dropdown-search"
                        placeholder=""
                        value={rentSearch}
                        onChange={(e) => setRentSearch(e.target.value)}
                      />
                      <ul className="dropdown-options">
                        {rentOptions
                          .filter((opt) =>
                            opt.toLowerCase().includes(rentSearch.toLowerCase())
                          )
                          .map((opt, index) => (
                            <li
                              key={index}
                              className="dropdown-item"
                              onClick={() => {
                                setSelectedRent(opt);
                                setRentOpen(false);
                                setRentSearch("");
                              }}
                            >
                              {opt}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setTypeOpen(!typeOpen)}
                  >
                    {selectedType}
                    <span className="arrow">{typeOpen ? "▲" : "▼"}</span>
                  </div>
                  {typeOpen && (
                    <div className="dropdown-menu-box shadow">
                      <input
                        type="text"
                        className="form-control custom-input dropdown-search"
                        placeholder=""
                        value={typeSearch}
                        onChange={(e) => setTypeSearch(e.target.value)}
                      />
                      <ul className="dropdown-options">
                        {typeOptions
                          .filter((opt) =>
                            opt.toLowerCase().includes(typeSearch.toLowerCase())
                          )
                          .map((opt, index) => (
                            <li
                              key={index}
                              className="dropdown-item"
                              onClick={() => {
                                setSelectedType(opt);
                                setTypeOpen(false);
                                setTypeSearch("");
                              }}
                            >
                              {opt}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setBedOpen(!bedOpen)}
                  >
                    {selectedBed}
                    <span className="arrow">{bedOpen ? "▲" : "▼"}</span>
                  </div>
                  {bedOpen && (
                    <div className="dropdown-menu-box shadow">
                      <ul className="dropdown-options">
                        {bedOptions.map((opt, index) => (
                          <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedBed(opt);
                              setBedOpen(false);
                            }}
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setBathOpen(!bathOpen)}
                  >
                    {selectedBath}
                    <span className="arrow">{bathOpen ? "▲" : "▼"}</span>
                  </div>
                  {bathOpen && (
                    <div className="dropdown-menu-box shadow">
                      <ul className="dropdown-options">
                        {bathOptions.map((opt, index) => (
                          <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedBath(opt);
                              setBathOpen(false);
                            }}
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setMinPriceOpen(!minPriceOpen)}
                  >
                    {selectedMinPrice}
                    <span className="arrow">{minPriceOpen ? "▲" : "▼"}</span>
                  </div>
                  {minPriceOpen && (
                    <div className="dropdown-menu-box shadow">
                      <ul className="dropdown-options">
                        {minPriceOptions.map((opt, index) => (
                          <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedMinPrice(opt);
                              setMinPriceOpen(false);
                            }}
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-spacing mb-3 mb-lg-0">
                <div className="custom-dropdown">
                  <div
                    className="dropdown-toggle-box"
                    onClick={() => setMaxPriceOpen(!maxPriceOpen)}
                  >
                    {selectedMaxPrice}
                    <span className="arrow">{maxPriceOpen ? "▲" : "▼"}</span>
                  </div>
                  {maxPriceOpen && (
                    <div className="dropdown-menu-box shadow">
                      <ul className="dropdown-options">
                        {maxPriceOptions.map((opt, index) => (
                          <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedMaxPrice(opt);
                              setMaxPriceOpen(false);
                            }}
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row filters-row mt-3">
              <div className="col-lg-6 col-md-6 col-spacing mb-3 mb-lg-0">
                <input
                  type="text"
                  className="form-control app-select"
                  placeholder="Property ID"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-spacing mb-3 mb-lg-0">
                <select className="form-select app-select">
                  <option>Label</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
