import { useState } from "react";
import "./reset.scss";
import "./App.scss";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="container">
      <header className="header">
        <div className="logo">회사가야지</div>
        <div className="menu">
          <button className="btn">노량진 수산</button>
          <button className="btn">가락시장 수산</button>
        </div>
      </header>
      <div className="문구">
        <h1>
          회 먹기
          <br />
          가장 좋은
          <br />
          날을 찾아서
        </h1>
      </div>

      <section className="main">
        <div className="weather-card">
          <div className="location">
            <h3>서울, 대한민국</h3>
            <p>2024. 09. 06.</p>
          </div>
          <div className="temperature">
            <span>45</span>°C
          </div>
          <div className="weather-details">
            <p>17° / 45°</p>
          </div>
          <div className="extra-info">
            <div className="info">
              <p>메에에에</p>
              <p>메에에에</p>
              <p>메에에에</p>
            </div>
            <div className="info">
              <p>메에에에</p>
              <p>메에에에</p>
              <p>메에에에</p>
            </div>
            <div className="info">
              <p>메에에에</p>
              <p>메에에에</p>
              <p>메에에에</p>
            </div>
            <div className="info">
              <p>메에에에</p>
              <p>메에에에</p>
              <p>메에에에</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>워쩌고저쩌고</p>
          <p>워쩌고저쩌고</p>
        </div>
        <div className="footer-content">
          <p>2024</p>
        </div>
        <div className="footer-content">
          <p>워쩌고저쩌고</p>
          <p>워쩌고저쩌고</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
