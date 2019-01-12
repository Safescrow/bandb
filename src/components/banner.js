import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
          <li data-target="#carouselExampleIndicators" data-slide-to="5" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/bg.jpg"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Personal and Family Financial Plans</h5>
              <p>
                Your Brass and Books advisor will work with you to craft a
                highly personalized financial plan with well defined, long term
                goals
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/bg2.jpg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Business Plans, Feasibility Studies and Proposals</h5>
              <p>
                Brass and Books Financial Services creates business plans,
                feasibility studies and business proposals for any purpose in
                any industry.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/bg3"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Capital Raising</h5>
              <p>
                We assist startups, middle-market and emerging growth companies
                in accessing the dynamic private capital markets for equity and
                debt financing.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/bg3"
              alt="Fourth slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Virtual Accounting</h5>
              <p>
                Brass and Books Virtual Accounting Services exists to serve
                entrepreneurs with an empowering finance division so they can
                focus on creating value for their customers.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/bg3"
              alt="Fifth slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Business Financial Analysis and Modeling</h5>
              <p>
                We provide financial analysis and modeling services to already
                existing businesses to help understand your business, and
                forecast it's operations and identify critical issues.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/bg3"
              alt="Sixth slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Business and Investment Management</h5>
              <p>
                Brass and Books works with you to professionally manage your
                various investment vehicles whether they are paper assets such
                as shares, bonds or real estate, and other businesses in order
                to meet your specific investment goals.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
