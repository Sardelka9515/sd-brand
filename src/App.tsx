// import React from 'react';
import Games from './Games.tsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Games />
      <Contact />
      <Footer />
    </div>
  );
}

// 導航欄組件
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">任地獄</a>
      <div className="navbar-links">
        <a href="#about">關於我們</a>
        <a href="#games">遊戲世界</a>
        <a href="#contact">聯絡我們</a>
      </div>
    </nav>
  );
}

// Hero區域組件
function Hero() {
  return (
    <section className="hero">
      <h1>歡迎來到任地獄</h1>
      <p>探索前所未見的遊戲體驗，挑戰你的極限，踏入遊戲的粉紅深淵</p>
      <button className="hero-btn">探索遊戲</button>
    </section>
  );
}

// 關於我們組件
function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">關於我們</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>遊戲的極致，體驗的深淵</h3>
            <p>成立於2022年的任地獄，致力於打造最具挑戰性和沉浸感的遊戲體驗。我們相信，真正的遊戲不僅僅是娛樂，更是對玩家意志和技巧的考驗。</p>
            <p>我們的開發團隊由來自全球各地的遊戲設計大師組成，每位成員都擁有豐富的行業經驗和獨特的創意視角。我們不斷突破傳統遊戲的界限，探索新的可能性。</p>
            <p>在任地獄，我們不只是製作遊戲，我們創造難忘的冒險，打造永恆的傳奇。</p>
          </div>
          <div className="about-image"></div>
        </div>
      </div>
    </section>
  );
}

// 聯絡我們組件
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">聯絡我們</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>隨時保持聯繫</h3>
            <p>無論您是玩家、合作夥伴還是媒體，我們都期待您的來訊。</p>
            <p>電子郵件: <a href="mailto:info@hellnintendo.com">info@hellnintendo.com</a></p>
            <p>地址: 台北市信義區松高路123號</p>
            <p>電話: +886 2 1234 5678</p>
            <p>營業時間: 週一至週五 9:00 - 18:00</p>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">電子郵件</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">主題</label>
                <input type="text" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">訊息</label>
                <textarea id="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">發送訊息</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// 頁尾組件
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>任地獄</h4>
          <ul className="footer-links">
            <li><a href="#about">關於我們</a></li>
            <li><a href="#games">遊戲世界</a></li>
            <li><a href="#contact">聯絡我們</a></li>
            <li><a href="#">新聞中心</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>遊戲支援</h4>
          <ul className="footer-links">
            <li><a href="#">常見問題</a></li>
            <li><a href="#">技術支援</a></li>
            <li><a href="#">帳號管理</a></li>
            <li><a href="#">社群規範</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>法律資訊</h4>
          <ul className="footer-links">
            <li><a href="#">隱私政策</a></li>
            <li><a href="#">使用條款</a></li>
            <li><a href="#">智慧財產權</a></li>
            <li><a href="#">Cookie 政策</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>社群媒體</h4>
          <ul className="footer-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 任地獄 版權所有</p>
        </div>
      </div>
    </footer>
  );
}



// 完整的 React 應用
function AppWithStyles() {
  return (
    <>
      <App />
    </>
  );
}

export default AppWithStyles;