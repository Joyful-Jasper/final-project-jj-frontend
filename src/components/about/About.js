import React from "react";
import kAri from "../../assets/kakAri.jpeg";
import kAshadi from "../../assets/kakAshadi.jpeg";
import kBaharudin from "../../assets/kakBaharudin.jpeg";
import ina from "../../assets/ina.jpeg";
import kAbrian from "../../assets/kakAbrian.jpeg";
import kMirza from "../../assets/kakMirza.jpeg";

const Description = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        <h1 className="text-center">Bingung dengan desain rumah yang ingin di bangung</h1>
        <div className="col-6 my-5">
          <h6 className="text-center">
            Jangan khawatir karena disini kami menyajikan berbagai design rumah yang cocok buat anda. Design yang kami tampilakan di Website merupakan design terbaik dan terpilih dari seorang arsitek. Kami juga membuka bagi para arsitek
            untuk memasarkan hasil karya yang terlah di buat.
          </h6>
        </div>
      </div>
      <div className="row justify-content-center my-5" style={{ backgroundColor: "#A7B5C0" }}>
        <h4 className="my-3 text-center"> Team Kami </h4>
        <div className="row text-center">
          <div className="col mt-5">
            <img src={kAri} width="120" />
            <p>Arrie Bhaskara</p>
          </div>
          <div className="col mt-5">
            <img src={kAshadi} width="120" />
            <p>Ashadi Putra</p>
          </div>
          <div className="col mt-5">
            <img src={kBaharudin} width="120" />
            <p>Baharudin Fahrul</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col ">
            <img src={ina} width="120" />
            <p>Ina Septiana</p>
          </div>
          <div className="col">
            <img src={kAbrian} width="120" />
            <p>Abriansyah</p>
          </div>
          <div className="col">
            <img src={kMirza} width="120" />
            <p>Mirza</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
