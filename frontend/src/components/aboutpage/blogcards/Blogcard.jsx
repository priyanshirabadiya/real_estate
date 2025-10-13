import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Blogcard.css";

export default function Blogcard() {
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1530/blogcard")
      .then((res) => setUpdates(res.data))
      .catch((err) => console.error("Failed to fetch updates:", err));
  }, []);

  return (
    <section className="blog-posts-section pb-5">
      <div className="container blog-container">
        <div className="row">
          {updates?.map((update) => (
            <div className="col-lg-3 col-md-6 mb-4 px-3" key={update?.id}>
              <div className="blog-post-card">
                <div
                  className="blog-post-image"
                  onClick={() => navigate(`/blog/${update.id}`)}
                >
                  <img
                    src={update?.image}
                    alt={update?.title}
                    className="post-image"
                  />

                  <div className="blog-post-details">
                    <div className="blog-post-meta">
                      <span className="blog-post-date">
                        <MdOutlineCalendarMonth size={20} /> {update?.date}
                      </span>
                      <span className="blog-post-category">
                        <BsTag size={20} /> {update?.category}
                      </span>
                    </div>

                    <h5 className="blog-post-title">{update?.title}</h5>

                    <div className="blog-post-author">
                      <CgProfile size={16} /> {update?.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
