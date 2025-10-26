import React from "react";
import { FaStar } from "react-icons/fa";
import "./AgentProfileCard.css";

export default function AgentProfileCard() {
  return (
    <div className="unique-agent-profile-wrapper">
      <div className="container my-3">
        <div className="unique-agent-profile-card shadow-sm bg-white">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 text-center">
              <img
                src="/images/agent-3.jpg"
                alt="Samuel Palmer - Real Estate Agent"
                className="unique-agent-profile-img"
              />
            </div>

            <div className="col-lg-8 col-md-7 unique-agent-profile-info mt-md-0 mt-3">
              <h4 className="mb-1">Samuel Palmer</h4>
              <div className="d-flex align-items-center mb-2">
                <span className="unique-agent-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <a href="#reviews" className="unique-agent-review-link">
                  See all reviews
                </a>
              </div>
              <p className="unique-agent-role mb-3">
                Founder &amp; CEO at Realty Properties Inc.
              </p>

              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Agent License:</strong>{" "}
                090-0348-8346
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Tax Number:</strong>{" "}
                HGT-92384-3434
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Service Areas:</strong>{" "}
                Grand Rapids, Forest Hills, Comstock Park, Caledonia, Kentwood,
                Grandville, Rockford, Walker, Belmont, Lowell
              </p>
              <p className="unique-agent-detail">
                <strong className="unique-agent-label">Specialties:</strong>{" "}
                Property Management, Consulting, Buyer's Agent, Listing Agent,
                Relocation
              </p>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
