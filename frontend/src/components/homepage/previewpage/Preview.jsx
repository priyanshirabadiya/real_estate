import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuBedDouble } from "react-icons/lu";
import { FaShower } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GrAttachment } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import "./Preview.css";

const Preview = () => {
  const imageList = [
    "/images/card1-1.jpg",
    "/images/card1-2.png",
    "/images/card1-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };
  const navigate = useNavigate();
  return (
    <div className="preview-wrapper pt-4">
      <div className="preview-page container">
        <div className="row">
          <div className="col-md-8 preview-image-section position-relative">
            <img
              src={imageList[currentIndex]}
              alt="Apartment"
              className="img-fluid preview-property-image"
            />

            <button
              className="frc-arrow frc-arrow-left position-absolute top-50 start-0 px-2 translate-middle-y"
              onClick={prevImage}
            >
              <IoIosArrowForward style={{ transform: "rotate(180deg)" }} />
            </button>
            <button
              className="frc-arrow frc-arrow-right position-absolute top-50 end-0 px-2 translate-middle-y"
              onClick={nextImage}
            >
              <IoIosArrowForward />
            </button>
          </div>

          <div className="col-md-4 preview-details-section">
            <span className="preview-status">FOR YOU</span>
            <h3 className="preview-title">Penthouse Apartment</h3>
            <p className="preview-location border-bottom pb-3">
              <IoLocationOutline size={20} /> Quincy St, Brooklyn, NY, USA
            </p>

            <h4 className="preview-price">$876,000</h4>
            <p className="preview-price-per pb-3 border-bottom">$7,600/sq ft</p>

            <div className="preview-features pt-3">
              <div className="feature-box">
                <div className="feature-box-top">
                  <LuBedDouble size={25} color="black" />
                  <h5>4</h5>
                </div>
                <p>Bedrooms</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <FaShower size={25} color="black" />
                  <h5>2</h5>
                </div>
                <p>Bathrooms</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <IoCarOutline size={25} color="black" />
                  <h5>1</h5>
                </div>
                <p>Garage</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <TfiRulerAlt2 size={25} color="black" />
                  <h5>1200</h5>
                </div>
                <p>m²</p>
              </div>
              <div className="feature-box">
                <div className="feature-box-top">
                  <GrAttachment size={25} color="black" />
                  <h5>2016</h5>
                </div>
                <p>Year Built</p>
              </div>
            </div>

            <button
              className="btn pre-btn w-100 mt-3"
              onClick={() => navigate("/product")}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
