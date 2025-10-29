import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Addagent.css";

const Editagent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    agentname: "",
    cname: "",
    office: "",
    mobile: "",
    fax: "",
    email: "",
    location: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1530/ouragent/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching agent:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.agentname ||
      !formData.cname ||
      !formData.office ||
      !formData.mobile ||
      !formData.fax ||
      !formData.email ||
      !formData.location ||
      !formData.description
    ) {
      setError("All fields are required");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(formData.agentname)) {
      setError("Agent name can only contain letters and spaces");
      return;
    }

    if (!/^\d{10}$/.test(formData.office)) {
      setError("Office must be a 10-digit number");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Mobile must be a 10-digit number");
      return;
    }

    if (!/^\d{10}$/.test(formData.fax)) {
      setError("Fax must be a 10-digit number");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format");
      return;
    }

    try {
      await axios.put(`http://localhost:1530/ouragent/${id}`, formData);
      setSuccess("Agent updated successfully!");

      setTimeout(() => navigate("/admin/agent"), 1200);
    } catch (err) {
      console.error("Error updating agent:", err);
      setError("Failed to update agent. Try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="mb-4 add-agent-path d-flex align-items-center">
            <span className="add-span-main" onClick={() => navigate("/admin/agent")} style={{ cursor: "pointer" }}>
              Agents
            </span>
            <span className="add-span">/Edit Agent</span>
          </div>
          <div className="add-age-card shadow-sm p-4 rounded-3">
            {error && (
              <div className="alert alert-danger d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <VscError />
                  <div className="ms-3">{error}</div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError("")}
                  aria-label="Close"
                ></button>
              </div>
            )}
            {success && (
              <div className="alert alert-success d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FaRegCheckCircle />
                  <div className="ms-3">{success}</div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSuccess("")}
                  aria-label="Close"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label add-age-name">Agent Name</label>
                  <input
                    type="text"
                    name="agentname"
                    value={formData.agentname}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="cname"
                    value={formData.cname}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Office</label>
                  <input
                    type="text"
                    name="office"
                    value={formData.office}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Fax</label>
                  <input
                    type="text"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label add-age-name">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control add-age-input"
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label add-age-name">Agent Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Agent"
                      className="mt-2"
                      style={{ width: "100px", borderRadius: "8px" }}
                    />
                  )}
                </div>
                <div className="col-12 mt-3 text-end">
                  <button type="submit" className="btn add-age-btns px-4">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editagent;
