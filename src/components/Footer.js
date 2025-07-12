import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container py-4">
        <div className="row">
          {}
          <div className="col-md-4 mb-3 mt-10">
            <h5>ApnaCart</h5>
            <p>Your trusted online store for top smartphones at best prices.</p>
          </div>

          {}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Products</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="footer-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} ApnaCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
