import React from "react";
import gambar from "../../assets/background2.svg";
import gambarrumah from "../../assets/desain1.svg";
import gambar1 from "../../assets/desain2.svg";
import gambar2 from "../../assets/desain.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const checkout = () => {
    console.log("bandung");
  };
  return (
    <div className="countainer">
      <div className="container-fluid" style={{ backgroundColor: "#ECECEC" }}>
        <div className="row">
          <div className="carousel-inner" style={{ borderRadius: 20, height: 500, width: 1350 }}>
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
          </div>
          <div className="row">
            <div className="col justify-content-center d-flex mx-auto">
              <h2 className="my-3"> Populer Projects </h2>
            </div>
            <div className="row justify-content-center d-flex mx-auto">
              <div className="col mx-2 my-2" style={{ backgroundColor: "#30475E" }}>
                <img src={gambarrumah} height={200} className="mt-3 justify-content-center d-flex mx-auto" />
                <h4 className="col justify-content-center d-flex mx-auto my-5" style={{ color: "#ECECEC" }}>
                  Nama Product
                </h4>
                <button onClick={checkout} className="justify-content-center d-flex mx-auto px-3 my-5" style={{ backgroundColor: "#C1A57B", border: "none", padding: "10px", borderRadius: "5px" }}>
                  Beli
                </button>
                my-
              </div>

              <div className="col mx-2 my-2" style={{ backgroundColor: "#30475E" }}>
                <img src={gambar1} height={200} className="mt-3 justify-content-center d-flex mx-auto" />
                <h4 className="col justify-content-center d-flex mx-auto my-5" style={{ color: "#ECECEC" }}>
                  Nama Product
                </h4>
                <button onClick={checkout} className="justify-content-center d-flex mx-auto px-3 my-5" style={{ backgroundColor: "#C1A57B", border: "none", padding: "10px", borderRadius: "5px" }}>
                  Beli
                </button>
              </div>
              <div className="col mx-2 my-2" style={{ backgroundColor: "#30475E" }}>
                <img src={gambar2} height={200} className="mt-3 justify-content-center d-flex mx-auto" />
                <h4 className="col justify-content-center d-flex mx-auto my-5" style={{ color: "#ECECEC" }}>
                  Nama Product
                </h4>
                <button onClick={checkout} className="justify-content-center d-flex mx-auto px-3 my-5" style={{ backgroundColor: "#C1A57B", border: "none", padding: "10px", borderRadius: "5px" }}>
                  Beli
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
