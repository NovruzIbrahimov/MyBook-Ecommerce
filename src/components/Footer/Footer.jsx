import React from "react";
import "../Footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-lg-start text-center footer-left">
            <h1>Copyright © 2024 Online Book Store</h1>
          </div>

          <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-center footer-right">
            <p>
              The site was created by{" "}
              <a
                href="https://www.linkedin.com/in/novruz-ibrahimov-80a45a288/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Novruz Ibrahimov
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
