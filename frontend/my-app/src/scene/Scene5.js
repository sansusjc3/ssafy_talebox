import React from "react";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene5.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막

const Scene5 = () => {

  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg5">
          <img src="img/scene5/5-호랑이.png"></img>
          <div className="attack5">
            <img src="img/scene5/5-공격.png"></img>
          </div> 
        </div>
        <div className="before-tiger">
            <img src="img/scene5/5-공격전호랑이.png"></img>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene5;
