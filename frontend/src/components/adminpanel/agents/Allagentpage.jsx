import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./Allagentpage.css";

const Allagentpage = () => {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1530/ouragent")
      .then((res) => setAgents(res.data))
      .catch((err) => console.error("Error fetching agents:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1530/ouragent/${id}`);
      setAgents((prevAgents) => prevAgents.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Error deleting agent:", err);
    }
  };

  return (
    <div className="admin-agents-page">
      <div className="container">
        <div className="age-card-view mt-5 mb-4">
          <div className="admin-agents-header d-flex justify-content-between align-items-center">
            <h4 className="admin-agents-title mb-0">Agent Card View</h4>
            <button
              className="btn-add-agent d-flex align-items-center"
              onClick={() => navigate("/admin/addagent")}
            >
              <FiPlus className="me-2" /> Add Agent
            </button>
          </div>
        </div>
        <div className="row">
          {agents.map((agent) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={agent.id}>
              <div className="card123 h-100 admin-agent-card shadow-sm p-3">
                <div className="card123-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={agent.image}
                      alt={agent.agentname}
                      className="admin-agent-img me-3"
                    />
                    <div>
                      <h5 className="admin-agent-name mb-1">
                        {agent.agentname}
                      </h5>
                      <p className="admin-agent-company mb-0">{agent.cname}</p>
                    </div>
                  </div>
                  <p className="admin-agent-desc">{agent.description}</p>
                  <ul className="list123-unstyled mb-3 ">
                    <li className="admin-li ">
                      <span className="text-muted me-1">Mobile :</span>{" "}
                      {agent.mobile}
                    </li>
                    <div className="mb-2 mt-2 border-bottom"></div>
                    <li className="admin-li">
                      <span className="text-muted me-1">Email :</span>{" "}
                      {agent.email}
                    </li>
                    <div className="mb-2 mt-2 border-bottom"></div>
                    <li className="admin-li">
                      <span className="text-muted me-1">Location :</span>{" "}
                      {agent.location}
                    </li>
                    <div className="mb-2 mt-2 border-bottom"></div>
                  </ul>
                  <div className="d-flex justify-content-start mt-3 ">
                    <button
                      className="btn-edit me-2"
                      onClick={() => navigate(`/admin/editagent/${agent.id}`)}
                    >
                      <FiEdit2 className="me-1" /> Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(agent.id)}
                    >
                      <FiTrash2 className="me-1" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allagentpage;
