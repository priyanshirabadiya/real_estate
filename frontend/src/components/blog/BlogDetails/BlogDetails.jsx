import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import CalendarComponent from "../BlogPage/CalendarComponent.jsx";
import BlogCard from "./Blogcard/BlogCard.jsx";
import "./BlogDetails.css";

export default function Breadcrumb() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1530/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  useEffect(() => {
    const savedComment = localStorage.getItem("lastComment");
    if (savedComment) {
      setSubmittedComment(JSON.parse(savedComment));
    }
  }, []);

  if (!blog) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert("Please fill all fields!");
      return;
    }
    const newComment = {
      name,
      email,
      comment,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const lastComment = localStorage.getItem("lastComment");
    if (lastComment) {
      const parsedComment = JSON.parse(lastComment);
      if (
        parsedComment.name === newComment.name &&
        parsedComment.email === newComment.email &&
        parsedComment.comment === newComment.comment
      ) {
        navigate("/commentpart/duplicate-error");
        return;
      }
    }

    localStorage.setItem("lastComment", JSON.stringify(newComment));
    setSubmittedComment(newComment);
    setName("");
    setEmail("");
    setComment("");
    window.location.reload();
  };

  const handleReply = () => {
    setSubmittedComment(null);
    localStorage.removeItem("lastComment");
    window.location.reload();
  };

  return (
    <div className="blog-details-5678">
      <div className="container">
        <div
          className="firstdiv-5678"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: "#777",
          }}
        >
          <img
            src="/images/house.png"
            alt="Home"
            style={{ width: "20px", height: "20px", marginRight: "6px" }}
          />
          <a
            href="#"
            className="hometext-5678"
            style={{ color: "#77C720", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <span style={{ margin: "0 8px" }}>{">"}</span>
          <a
            href="#"
            className="businesstext-5678"
            style={{ color: "#77C720", cursor: "pointer" }}
          >
            {blog.tag || "Business"}
          </a>
          <span style={{ margin: "0 8px" }}>{">"}</span>
          <span style={{ color: "#333" }}>{blog.title}</span>
        </div>

        <div className="mt-5">
          <div className="row">
            <div className="col-md-8 colmd8-5678">
              <div className="blog-post-5678 mb-5">
                <br />
                <a
                  className="mt-3 title-blog2-5678"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  {blog.title}
                </a>

                <div className="author-block-details-5678 mt-4">
                  <div className="d-flex justify-content-between align-items-center flex-wrap flexwraping-5678">
                    <div className="d-flex align-items-center flex-wrap flexwraping-5678">
                      <img
                        src={blog.authorImage || "/images/author1.jpg"}
                        alt="Author"
                        className="rounded-circle me-2 author-details-img-5678"
                        width="50"
                        height="50"
                      />
                      <span className="me-3">
                        <span className="text-black-5678">by</span>{" "}
                        <span className="text-green-5678">{blog.author}</span>
                      </span>

                      <span className="me-3 text-muted">
                        <i className="bi bi-calendar3 me-1"></i> {blog.date}
                      </span>
                      <span className="me-3">
                        <i className="bi bi-tag me-1 icon-black"></i>
                        <span className="text-green-5678">{blog.tag}</span>
                      </span>

                      <span className="me-3 text-muted">
                        <i className="bi bi-chat-dots me-1"></i>{" "}
                        {blog.comments || 0}
                      </span>
                    </div>
                  </div>
                </div>

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid mainimage2-5678"
                />

                <br />
                <br />
                <br />
                <div className="content-5678">
                  <p>{blog.description}</p>
                  <p>
                    Duis mattis laoreet neque, et ornare neque sollicitudin at.
                    Proin sagittis dolor sed mi elementum pretium. Donec et
                    justo ante. Vivamus egestas sodales est, eu rhoncus urna
                    semper eu. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Integer tristique
                    elit lobortis purus bibendum, quis dictum metus mattis.
                    Phasellus posuere felis sed eros porttitor mattis. Curabitur
                    massa magna, tempor in blandit id, porta in ligula. Aliquam
                    laoreet nisl massa, at interdum mauris sollicitudin et.
                  </p>

                  <h2>Quisque This Is A Link Nibh Facilisis At Malesuada</h2>

                  <p>
                    Nullam tempus sollicitudin cursus. Nulla elit mauris,
                    volutpat eu varius malesuada, pulvinar eu ligula. Ut et
                    adipiscing erat. Curabitur adipiscing erat vel libero tempus
                    congue. Nam pharetra interdum vestibulum. Aenean gravida mi
                    non aliquet porttitor. Praesent dapibus, nisi a faucibus
                    tincidunt, quam dolor condimentum metus, in convallis libero
                    ligula ut eros.
                  </p>
                  <div className="image-gallery-5678">
                    <img src="/images/img1.jpg" alt="Image 1" />
                    <img src="/images/img2.jpg" alt="Image 2" />
                    <img src="/images/img3.jpg" alt="Image 3" />
                    <img src="/images/img4.jpg" alt="Image 4" />
                  </div>

                  <p>
                    Proin suscipit, ex non sodales aliquam, ante mauris laoreet
                    felis, vitae fermentum ligula nibh ut ex. Vivamus sem magna,
                    iaculis ut pretium ac, tincidunt vel ipsum. Maecenas
                    commodo, velit vel porta vulputate, lorem sem accumsan nunc,
                    nec scelerisque elit turpis eget mauris. Donec dictum elit
                    vel nunc tristique, eu lobortis ante sodales. Etiam posuere
                    leo ut leo laoreet, a gravida dui ultricies. Morbi vehicula
                    nulla eget elit mollis, at condimentum est feugiat.
                  </p>

                  <blockquote
                    style={{
                      borderLeft: "4px solid #ccc",
                      paddingLeft: "15px",
                      margin: "20px 0",
                      fontSize: "18px",
                      lineHeight: "1.4",
                      color: "#222222",
                    }}
                  >
                    Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    Aliquam hendrerit sollicitudin purus, quis rutrum mi
                    accumsan nec.
                  </blockquote>

                  <p>
                    Duis mattis laoreet neque, et ornare neque sollicitudin at.
                    Proin sagittis dolor sed mi elementum pretium. Donec et
                    justo ante. Vivamus egestas sodales est, eu rhoncus urna
                    semper eu. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Integer tristique
                    elit lobortis purus bibendum, quis dictum metus mattis.
                  </p>

                  <h2>Phasellus Posuere Felis Sed Eros Porttitor Mattis</h2>

                  <p>
                    Curabitur massa magna, tempor in blandit id, porta in
                    ligula. Aliquam laoreet nisl massa, at interdum mauris
                    sollicitudin et. Mauris risus lectus, tristique at nisl at,
                    pharetra tristique enim.
                  </p>
                  <p>
                    Nullam this is a link nibh facilisis, at malesuada orci
                    congue. Nullam tempus sollicitudin cursus. Nulla elit
                    mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut
                    et adipiscing erat. Curabitur adipiscing erat vel libero
                    tempus congue. Nam pharetra interdum vestibulum. Aenean
                    gravida mi non aliquet porttitor. Praesent dapibus, nisi a
                    faucibus tincidunt, quam dolor condimentum metus, in
                    convallis libero ligula ut eros.
                  </p>

                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      Aliquam tincidunt mauris eu risus.
                      <ol>
                        <li>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                      </ol>
                    </li>
                    <li>Vestibulum auctor dapibus neque.</li>
                  </ul>

                  <p>
                    Ut non gravida arcu. Vivamus non congue leo. Aliquam dapibus
                    laoreet purus, vitae iaculis eros egestas ac. Mauris massa
                    est, lobortis a viverra eget, elementum sit amet ligula.
                    Maecenas venenatis eros quis porta laoreet.
                  </p>

                  <h4>
                    Sed Ultrices Placerat Metus. Vivamus Posuere Leo Nunc, Eget
                    Mollis Odio Posuere Nec.
                  </h4>

                 
                  <p>
                    Vivamus varius vitae dolor ac hendrerit. Vestibulum nec
                    dolor ac nunc blandit aliquam. Nam at metus non ligula
                    egestas varius ac sed mauris. Fusce at mi metus. Nam
                    elementum dui id nulla bibendum elementum.
                  </p>

                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      Aliquam tincidunt mauris eu risus.
                      <ol>
                        <li>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                      </ol>
                    </li>
                    <li>Vestibulum auctor dapibus neque.</li>
                  </ol>

                  <p className="lastparagraph-5678">
                    Proin sagittis dolor sed mi elementum pretium. Donec et
                    justo ante. Vivamus egestas sodales est, eu rhoncus urna
                    semper eu. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Integer tristique
                    elit lobortis purus bibendum, quis dictum metus mattis.
                    Phasellus posuere felis sed eros porttitor mattis. Curabitur
                    massa magna, tempor in blandit id, porta in ligula. Aliquam
                    laoreet nisl massa, at interdum mauris sollicitudin et.
                  </p>
                </div>

                <div className="left-sectionblog-5678">
                  <div className="tags-container-5678">
                    <h3>Tags</h3>
                    <div className="tags-5678">
                      <button onClick={() => navigate("/blogpage")}>
                        Apartment
                      </button>
                      <button onClick={() => navigate("/blogpage")}>
                        Business Development
                      </button>
                      <button onClick={() => navigate("/blogpage")}>
                        House for families
                      </button>
                      <button onClick={() => navigate("/blogpage")}>
                        Houzez
                      </button>
                      <button onClick={() => navigate("/blogpage")}>
                        Luxury
                      </button>
                      <button onClick={() => navigate("/blogpage")}>
                        Real Estate
                      </button>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <div className="prev-post-5678">
                <h3 className="prev-label-5678">Prev Post</h3>
                <p>
                  10 Things Your Competitors Can Teach You About Real <br />
                  Estate
                </p>
              </div>

              <div className="blog-post2-5678 mb-5">
                <div className="author-block2-5678 d-flex align-items-center p-3">
                  <img
                    src="/images/author1.jpg"
                    alt="Author"
                    className="author-img-5678 rounded-circle me-3"
                    height="70"
                    width="70"
                  />
                  <div>
                    <h5 className="mb-1 author-name-5678">Martin Moore</h5>
                    <p className="mb-0 author-desc-5678">
                      Blogger and realtor. Business and marketing passionate.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relatedpost-5678">Related Post</div>
              <BlogCard />

              <div className="discussion-form-wrapper-5678 p-4">
                <h4 className="mb-4">Join The Discussion</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-textarea-5678"
                      rows="4"
                      placeholder="Your Comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control form-name-5678"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3 colmd6">
                      <input
                        type="email"
                        className="form-control form-email-5678"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn submit-btn-5678">
                    Submit
                  </button>
                </form>
              </div>

              {submittedComment && (
                <div className="comment-box-5678">
                  <div className="comment-avatar-5678">
                    <img src="/images/avtar.jpg" alt="User Avatar" />
                  </div>
                  <div className="comment-content-5678">
                    <h5>{submittedComment.name}</h5>
                    <div className="comment-meta-5678">
                      <i className="bi bi-calendar3"></i>
                      {submittedComment.date} <i className="bi bi-clock"></i>{" "}
                      {submittedComment.time}
                    </div>
                    <p className="comment-moderation-5678">
                      Your comment is awaiting moderation.
                    </p>
                    <p className="comment-text-5678">
                      {submittedComment.comment}
                    </p>
                    <span className="comment-reply-5678" onClick={handleReply}>
                      Reply
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-3 colmd3-5678">
              <div className="sticky-sidebar-scroll-5678">
                <div className="sidebar-box-5678">
                  <h5
                    className="aboutblog-h5-5678"
                    style={{ color: "#77C720" }}
                  >
                    About This Blog
                  </h5>
                  <p className="aboutblog-p-5678">
                    Discover the latest trends in real estate, property
                    investment tips, and expert advice to help you find your
                    dream home or make smart investments.
                  </p>
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5>Topics</h5>
                  <br />
                  <ul className="list-unstyled-5678">
                    <li className="firstli-5678">
                      Business <p className="firstp-5678">(4)</p>
                    </li>
                    <li className="firstli-5678">
                      Construction <p className="firstp-5678">(4)</p>
                    </li>
                    <li className="firstli-5678">
                      Real Estate <p className="firstp-5678">(4)</p>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5>Calendar</h5>
                  <CalendarComponent />
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5>Archives</h5>
                  <ul className="list-unstyled-5678">
                    <li className="firstli-5678">
                      March 2016 <p className="firstp-5678">(10)</p>
                    </li>
                    <li className="firstli-5678">
                      January 2016 <p className="firstp-5678">(2)</p>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5 className="section-title-5678">Recent Comments</h5>
                </div>

                <div className="sidebar-box-5678 mt-4">
                  <h5 className="section-title-5678">Tags</h5>
                  <div className="tags-list-5678 mt-3">
                    Apartment Business Development House for families Houzez
                    Luxury Real Estate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
