import { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  { src: "images/games/abyss.jpg", link: "" },
  { src: "images/games/maze.jpg", link: "" },
  { src: "images/games/pink-warrior.jpg", link: "" },
  { src: "images/games/sweet-survival.jpg", link: "" },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId: ReturnType<typeof setTimeout>;

  // 自動切換圖片
  useEffect(() => {
    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 秒換一張

    return () => clearInterval(intervalId); // 清除計時器
  }, [currentIndex]); // 當 currentIndex 變更時，重新設定計時器

  // 點擊小圓點切換並重置計時器
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    clearInterval(intervalId);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>歡迎來到任地獄</h1>
        <p>探索前所未見的遊戲體驗，挑戰你的極限，踏入遊戲的粉紅深淵</p>
        <button className="hero-btn" onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>探索遊戲</button>
      </div>
      <div className="carousel">
        <a target="_blank" rel="noopener noreferrer">
          <img src={images[currentIndex].src} alt={`幻燈片 ${currentIndex + 1}`} className="carousel-image" />
        </a>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;