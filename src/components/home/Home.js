import React from "react";
import gambar from "../../assets/background2.svg";
import gambarrumah from "../../assets/desain1.svg";
import gambar1 from "../../assets/desain2.svg";
import gambar2 from "../../assets/desain.svg";
import "./home.css"
const Home = () => {
  return (
    <div>

      {/* <div className="carousel-inner" style={{ borderRadius: 20, height: 500, width: 1350 }}>
              <div className="carousel-item active" data-bs-interval="7000">
                <img src={gambar} alt="..." />
                <div className="carousel-caption " style={{ position: "absolute", top: "20%", left: "15%", margin: "auto" }}>
                  <h1 style={{ color: "white" }} className=" align-self-center d-flex mx-auto ">
                    Bangun Rumah Impian Anda
                  </h1>
                  <h5 style={{ color: "white" }} className=" align-self-center d-flex mx-auto ">
                    Marketplace jasa desain & bangun Rumah terpercaya di Indonesia
                  </h5>
                </div>
              </div>
            </div> */}



      <section className="hero-banner bg-light py-5">
        <div className="container">
          <div className="row row align-items-center">
            <div className="col-lg-5 offset-lg-1 order-lg-1">
              <img src={gambarrumah} className="img-fluid" alt="Web Development" />
            </div>
            <div className="col-lg-6">
              <h1 className="mt-3">Kita Dekorasi </h1>
              <p className="lead text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
              <a href="#" className="btn btn-outline-secondary btn-lg border">Order Now</a>
            </div>
          </div>
        </div>
      </section>
      <section class="quote">
        <div class="layar-dalam">
          <p>Selamat datang ke Website Kita Dekor</p>
        </div>
      </section>


      {/* Card */}




    </div>
  );
};

export default Home;
