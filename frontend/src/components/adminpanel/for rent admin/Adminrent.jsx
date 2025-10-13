import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adminrent.css";

const Adminrent = () => {
  const [rentData, setRentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = currentPage === 1 ? 10 : 12;

  useEffect(() => {
    axios
      .get("http://localhost:1530/cards")
      .then((response) => {
        setRentData(response.data.slice(0,22));
      })
      .catch((error) => {
        console.error("Error fetching rental data:", error);
      });
  }, []);
  const indexOfLastRecord =
  currentPage === 1 ? recordsPerPage : 10 + recordsPerPage;
  const indexOfFirstRecord = currentPage === 1 ? 0 : 10;
  const currentRecords = rentData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="adminrent-container container py-sm-4 px-sm-4 py-4 px-0">
      <p className="adminrent-heading mb-4 p-4 rounded-3">
        For Rent Properties
      </p>
      <div className="ds_table_wrapper overflow-auto">
        <table className="w-100 text-dark ds_role_table">
          <thead>
            <tr>
              <th className="adminrent-th">Property ID</th>
              <th className="adminrent-th">Property Image</th>
              <th className="adminrent-th">Property Name</th>
              <th className="adminrent-th">Category</th>
              <th className="adminrent-th">Price</th>
              <th className="adminrent-th">Bedrooms</th>
              <th className="adminrent-th">Bathrooms</th>
              <th className="adminrent-th">Cars</th>
              <th className="adminrent-th">Area</th>
            </tr>
          </thead>
          <tbody className="adminrent-tbody">
            {currentRecords.map((property) => (
              <tr key={property.id} className="adminrent-tr">
                <td className="adminrent-td">{property.id}</td>
                <td className="adminrent-td" data-label="Image">
                  <img
                    src={property.image1}
                    alt={property.title}
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </td>
                <td className="adminrent-td">{property.title}</td>
                <td className="adminrent-td">{property.category}</td>
                <td className="adminrent-td">${property.price}</td>
                <td className="adminrent-td">{property.bedrooms}</td>
                <td className="adminrent-td">{property.bathrooms}</td>
                <td className="adminrent-td">{property.cars}</td>
                <td className="adminrent-td">{property.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container123 mt-3 d-flex justify-content-center">
        <button
          className="pagination-btn123"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`pagination-btn123 ${currentPage === 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button
          className={`pagination-btn123 ${currentPage === 2 ? "active" : ""}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
        <button
          className="pagination-btn123"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Adminrent;
