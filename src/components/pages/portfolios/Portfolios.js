import React from "react";
import "./portfolio.css";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../../navbar/Navbar";
export default function Projects() {
  return (
    <section>
      <Navbar />
      <div className="text">
        <div className="card1">
          <div className="card1-body">
            <h5 className="card1-title">Apple E-commerce</h5>
            <h6 className="card1-subtitle mb-2 text-muted">card1 subtitle</h6>
            <p className="card1-text">
              It is a simple landing page of Apple Products Like Mac books
              ,Apple watches and Iphone.
            </p>
            <a
              href="https://apple-ecommerce1.netlify.app/"
              className="card1-link"
            >
              Netlify Link
              {/* <Link
              to="https://apple-ecommerce1.netlify.app/"
              className="brand-logo"
            >
              Netlify Link
            </Link> */}
            </a>
          </div>
        </div>
        <div className="card1">
          <div className="card1-body">
            <h5 className="card1-title">Country Data</h5>
            <h6 className="card1-subtitle mb-2 text-muted">
              Information about Each Country
            </h6>
            <p className="card1-text">
              This project is created by using Country Api.It is created by
              Using Reactjs
            </p>
            <a href="https://country-api2.netlify.app/" className="card1-link">
              card1 link
            </a>
          </div>
        </div>
        <div className="card1">
          <div className="card1-body">
            <h5 className="card1-title">IMDB-Clone</h5>
            <h6 className="card1-subtitle mb-2 text-muted">card1 subtitle</h6>
            <p className="card1-text">
              It a clone of Imdb website.I have created this by using Movie
              database.
            </p>
            <a href="https://imdb1-clone.netlify.app/" className="card1-link">
              card1 link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
