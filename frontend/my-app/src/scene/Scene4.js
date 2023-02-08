import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene4.css";

// 음성파일
const audio = new Audio("sound/4.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "엄마는 얼른 떡을 꺼내 호랑이에게 주었어요";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "팔을 들어 호랑이에게 떡을 주세요";
  }, 5500);
}

const Scene4 = () => {
  const navigate = useNavigate();

  // 자막 시작 딜레이
  setTimeout(Change_text);
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene5`), 17400);
  // 오디오 파일 자동재생
  setTimeout(start);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene4/4-배경.png" className="bgImg"></img>
          <img src="img/scene4/4-호랑이.png" className="tiger4"></img>
          <img src="img/scene4/4-떡.png" className="rice4"></img>
          <h2 id="Text"></h2>
    </div>
  );
};

export default Scene4;
