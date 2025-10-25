import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";
import "./ForRentCard.css";

export default function ForRentCard({ filters }) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("filteredCards=", filteredCards);
  // Fetch all cards once
  useEffect(() => {
    const fetchFilteredCards = async () => {
      try {
        const res = await axios.get(`http://localhost:1155/cards/getall`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Fetched cards:", res.data.cards);
        setCards(res.data.cards || []);
        setFilteredCards(res.data.cards || []);
      } catch (err) {
        console.error("Error fetching filtered cards:", err);
      }
    };
    fetchFilteredCards();
  }, [token]);

  // Apply filters when filters change
  useEffect(() => {
    let filtered = cards;
    console.log("filtered", filtered);
    console.log("filters", filters);

    if (filters.keyword) {
      console.log("enter1", filters.keyword);
      const kw = filters.keyword.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title?.toLowerCase().includes(kw) ||
          c.category?.toLowerCase().includes(kw) ||
          c.description?.toLowerCase().includes(kw)
      );
    }

    if (filters.city) {
      filtered = filtered.filter(
        (c) => c.city?.toLowerCase() === filters.city.toLowerCase()
      );
    }

    // if (filters.area)
    //   filtered = filtered.filter(
    //     (c) => c.area?.toLowerCase() === filters.area.toLowerCase()
    //   );

    // if (filters.rentStatus)
    //   filtered = filtered.filter(
    //     (c) => c.status?.toLowerCase() === filters.rentStatus.toLowerCase()
    //   );
    // if (filters.type)
    //   filtered = filtered.filter(
    //     (c) => c.type?.toLowerCase() === filters.type.toLowerCase()
    //   );
    // if (filters.bedrooms)
    //   filtered = filtered.filter(
    //     (c) => String(c.bedrooms) === String(filters.bedrooms)
    //   );
    // if (filters.bathrooms)
    //   filtered = filtered.filter(
    //     (c) => String(c.bathrooms) === String(filters.bathrooms)
    //   );
    // if (filters.minPrice)
    //   filtered = filtered.filter(
    //     (c) =>
    //       parseFloat(c.price) >= parseFloat(filters.minPrice.replace(/\$/g, ""))
    //   );
    // if (filters.maxPrice)
    //   filtered = filtered.filter(
    //     (c) =>
    //       parseFloat(c.price) <= parseFloat(filters.maxPrice.replace(/\$/g, ""))
    //   );

    setFilteredCards(filtered);
    console.log("setting filteredCards to:", filtered);

    // setCurrentPage(1);
  }, [filters, cards]);

  useEffect(() => {
    console.log("🔥 filteredCards updated:", filteredCards);
  }, [filteredCards]);

  // Pagination logic
  const itemsPerPage = currentPage === 1 ? 12 : 10;
  const startIndex = currentPage === 1 ? 0 : 12;
  const visibleCards = filteredCards.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // (Your card rendering stays the same)
  return (
    <div className="mansi">
      <div className="container py-3">
        <div className="name">
          <h2 className="header mb-3">For Rent</h2>
          <p>{filteredCards.length} Properties</p>
        </div>

        <div className="row g-4">
          {visibleCards.map((card) => (
            <div key={card._id} className="col-12 col-sm-6 col-lg-4">
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ card }) {
  const imageList = [card?.image1, card?.image2, card?.image3].filter(Boolean);
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

        <div className="mt-2">
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
