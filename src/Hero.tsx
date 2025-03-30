import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  { src: "https://images.ctfassets.net/o5v89n4kg6h4/4ZK0aQk2Qpy5XTZlWrgKoh/de39ec0f70df45c4996da38b8f5e6b5c/3c336cf3721b57aaca9a11333884b3d525e20dc50f3244b97f286c49f0be7b81.jpg", link: "https://www.nintendo.com/tw/switch/zelda_botw/" },
  { src: "https://images.ctfassets.net/o5v89n4kg6h4/1bFEGgdMytt2V3gMAxBUky/9278a91ebe8cc30cdf0386cf95c968f3/37349cde8b55828bbdad9d0a62b546c61862c4cb35142a904bd36f222d374e58.jpg", link: "https://www.nintendo.com/tw/zelda/totk/index.html" },
  { src: "https://images.ctfassets.net/o5v89n4kg6h4/449rXfnGdfNLce9skXf9HV/5b403d599a1e43756a9b186a8fd9321f/e9fddafe8a204bfecc01e97007a8f95938de4b0a7f14d6e802abd078586615d9.jpg", link: "https://www.nintendo.com/tw/switch/super_mario_odyssey/" },
  { src: "https://images.ctfassets.net/o5v89n4kg6h4/7GkUVcpTPsYcNtQhoyPHIo/4c75bebb679768889355d3ecfc5e2b66/412c99cc77494495e7f8bb7155f053f303224fef23eef48c3c01924d88286874.jpg", link: "https://www.nintendo.com/tw/switch/aqmxa/" },
  { src: "https://images.ctfassets.net/o5v89n4kg6h4/2o6fmMa5KGmDD0EfVpvvYD/ee51c40b0ac9a1e872f970502bcb647d/e301c0f97a6242a54ac690c6923cf240297076d671a47c4138140355558b3925.jpg", link: "https://www.nintendo.com/tw/switch/av5ja/" },
  { src: "https://www.nintendo.com/tw/character/splatoon/images/jp/pc/lineup/switch/banner_02.png", link: "https://www.nintendo.com/tw/splatoon2/" },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId: NodeJS.Timeout;

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
      <div className="carousel">
        <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
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