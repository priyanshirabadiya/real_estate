import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Service.css";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1530/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-left mb-5">
          <h2 className="services-title">Our Services</h2>
        </div>

        <div className="row">
          {services?.map((service) => (
            <div className="col-lg-4 col-md-6 mb-4" key={service?.id}>
              <div className="service-item d-flex">
                <div className="service-icon">
                  <img
                    src={service?.image}
                    alt={service?.title}
                    className="icon-image"
                  />
                </div>
                <div className="service-content">
                  <h5 className="service-title">{service?.title}</h5>
                  <p className="service-description">{service?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
