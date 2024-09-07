import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">회사가야지</div>
        <div className="menu">
          <button className="btn">노량진 수산</button>
          <button className="btn">가락시장 수산</button>
        </div>
      </header>
      <section className="main">
        <div className="weather-card">
          <div className="location">서울, 대한민국</div>
          <div className="temperature">45°C</div>
          <div className="weather-details">
            <p>17° / 45°</p>
            <p>매운탕이 될 수 있는 날씨</p>
          </div>
          <div className="extra-info">
            <div className="info">23:00 Slight chance of rain</div>
            <div className="info">14 km/h Gentle breeze</div>
            <div className="info">UV12 Low sunburn risk</div>
          </div>
        </div>
      </section>
      <section className="hourly-forecast">
        <div className="forecast-item">
          <p>05:00 AM</p>
          <p>23°</p>
        </div>
        <div className="forecast-item">
          <p>06:00 AM</p>
          <p>20°</p>
        </div>
        <div className="forecast-item">
          <p>07:00 AM</p>
          <p>17°</p>
        </div>
        <div className="forecast-item">
          <p>08:00 AM</p>
          <p>16°</p>
        </div>
      </section>
    </div>
  );
}

export default App;
