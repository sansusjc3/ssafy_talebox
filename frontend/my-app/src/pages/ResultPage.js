import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const number = location.state.value;
  const [starpoint, setstarpoint] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://i8c101.p.ssafy.io/api/history/starpoint/${number}`,
    }).then((res) => {
      setstarpoint(res.data);
    });
  });

  let score = "β­".repeat(starpoint) + "π¨".repeat(3 - starpoint);

  return (
    <div>
      <div className="resultContainer">
        <section>
          <header className="resultHeader">
            ππ» λνλ₯Ό μλ£νκ΅°μ, μ΅κ³ μμ!
          </header>
          <main className="resultScore txt">{score}</main>
          <div className="resultTxt txt">
            μ΄λλ‘ κ°λ³ΌκΉμ? λ²νΌμ λλ¬λ³΄μΈμ.
          </div>
          <footer className="modalFooter">
            <Link to="/home">
              <button className="resultButton txt">ππ»  νμΌλ‘ λμκ°κΈ°</button>
            </Link>
            <div></div>
            <Link to="/home">
              <button className="resultButton txt">ππ» λ€μλν νμ΅νκΈ°</button>
            </Link>
            <div></div>
            <Link to="/history">
              <button className="resultButton txt">π νμ΅κΈ°λ‘ μ΄ν΄λ³΄κΈ°</button>
            </Link>
          </footer>
        </section>
      </div>
    </div>
  );
};
	
export default ResultPage;