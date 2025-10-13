import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";
import "./ForRentCard.css";

export default function ForRentCard() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:1530/cards")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  const limitedCards = cards.slice(0, 22);

  const itemsPerPage = currentPage === 1 ? 12 : 10;
  const startIndex = currentPage === 1 ? 0 : 12;
  const visibleCards = limitedCards.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const navigate = useNavigate();

  return (
    <div className="mansi">
      <div className="container py-3">
        <nav className="mb-3">
          <ol className="breadcrumb small mb-0">
            <li
              className="breadcrumb-item"
              onClick={() => navigate("/")}
              style={{ color: "#77c720" }}
            >
              <RiHomeLine className="me-1 text-dark" /> Home
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              For Rent
            </li>
          </ol>
        </nav>

        <div className="name">
          <h2 className="header mb-3">For Rent</h2>
          <p>{limitedCards.length} Properties</p>
        </div>

        <div className="row g-4">
          {visibleCards.map((card) => (
            <div key={card?.id} className="col-12 col-sm-6 col-lg-4">
              <Card card={card} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>
                <PiLessThanBold />
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>
                1
              </button>
            </li>
            <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(2)}>
                2
              </button>
            </li>
            <li className={`page-item ${currentPage === 2 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(2)}>
                <PiGreaterThanBold />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Card({ card }) {
  const imageList = [card?.image1, card?.image2, card?.image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const currentImgSrc = imageList[currentIndex];

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.some((item) => item.id === card.id);

    if (!exists) {
      const newItem = {
        id: card.id,
        title: card.title,
        price: card.price,
        category: card.category,
        image: card.image1,
        bedrooms: card.bedrooms,
        bathrooms: card.bathrooms,
        cars: card.cars,
        area: card.area,
        quantity: 1,
      };

      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    navigate("/addtocart");
  };

  return (
    <div className="card cc h-100">
      <div className="ic position-relative">
        <span className="badge rt position-absolute top-0 end-0 m-4">
          FOR RENT
        </span>

        <img
          src={currentImgSrc}
          className="w-100 ci"
          alt={card?.title}
          onClick={() => navigate("/product")}
        />

        <button
          className="arr la position-absolute top-50 start-0 translate-middle-y"
          onClick={prevImage}
        >
          <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
        </button>
        <button
          className="arr ra position-absolute top-50 end-0 translate-middle-y"
          onClick={nextImage}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="card-body text-center">
        <h5 className="card-title pt">{card?.title}</h5>
        <h6 className="pr">
          ${card?.price} <small>/mo</small>
        </h6>
        <p className="text-muted cl">{card?.category}</p>

        <div className="ii d-flex justify-content-center gap-3 flex-wrap">
          <span>
            <LuBedDouble /> {card?.bedrooms}
          </span>
          <span>
            <FaShower /> {card?.bathrooms}
          </span>
          <span>
            <IoCarOutline /> {card?.cars}
          </span>
          <span>
            <TfiRulerAlt2 /> {card?.area}
          </span>
        </div>
        <div className="mt-2 ">
          <button
            type="button"
            className="btn cart-btn btn-sm mt-2 w-50"
            onClick={handleAddToCart}
          >
            Add For Rent
          </button>
        </div>
      </div>
    </div>
  );
}
