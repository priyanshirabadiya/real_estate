import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { GiShower } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TfiRulerAlt2 } from "react-icons/tfi";
import "./PropertySection.css";

export default function PropertySection() {
  return (
    <div className="container section-container py-4">
      <div className="row info-row ">
        <div className="col-lg-8 col-md-7 px-0">
          <div className="main-image-container">
            <img
              src="/images/inner-living-room-3-584x438.jpg"
              alt="Living Room"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-lg-4 col-md-5 px-md-2 px-0 mt-md-0 mt-3">
          <div className="d-flex flex-column h-100 gap-0">
            <div className="thumbnail-container">
              <img
                src="/images/inner-studio-room-1.jpg"
                alt="Studio Room"
                className="img-fluid"
              />
            </div>
            <div className="thumbnail-container position-relative">
              <img
                src="/images/inner-living-room-2.jpg"
                alt="Ocean View"
                className="img-fluid helloimg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="property-info-section mt-4">
        <div className="row info-row g-3">
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="property-icon"></div>
              <div className="property-label">Property Type</div>
              <div className="property-value mt-2 fw-bold">Apartment</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="d-flex">
                <div className="property-icon">
                  <LuBedDouble />
                </div>
                <div className="property-label align-self-center ms-2">4</div>
              </div>
              <div className="property-sub">Bedrooms</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="d-flex">
                <div className="property-icon">
                  <GiShower />
                </div>
                <div className="property-label align-self-center ms-2">2</div>
              </div>
              <div className="property-sub">Bathrooms</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="d-flex">
                <div className="property-icon">
                  <FaCar />
                </div>
                <div className="property-label align-self-center ms-2">1</div>
              </div>
              <div className="property-sub">Garage</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="d-flex">
                <div className="property-icon">
                  <TfiRulerAlt2 />
                </div>
                <div className="property-label align-self-center ms-2">
                  1200 Sq Ft
                </div>
              </div>
              <div className="property-sub">Area Size</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 border-start">
            <div className="property-card">
              <div className="d-flex">
                <div className="property-icon">
                  <SlCalender />
                </div>
                <div className="property-label align-self-center ms-2">
                  2016
                </div>
              </div>
              <div className="property-sub">Year Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
