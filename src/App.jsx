import "./app.scss";
import cardLogo from "./assets/visa.png";

function App() {
  return (
    <div className="container">
      <form className="form">
        <div className="card">
          <div className="header">
            <div className="sticker"></div>
            <div>
              <img src={cardLogo} alt="visa logo" className="logo" />
            </div>
          </div>
          <div className="body">
            <h2 className="body__card-number">6969 6969 6969 6969</h2>
          </div>
          <div className="footer">
            <div className="footer__context">
              <h5>Card Holder name</h5>
              <h3>Mohammad Hossain</h3>
            </div>
            <div>
              <h5>Expiry Date</h5>
              <h3>02 / 30</h3>
            </div>
          </div>
        </div>
        <div className="input-container mt">
          <h4>Enter card number</h4>
          <input
            type="text"
            placeholder="Please enter your credit card number"
          />
        </div>
        <div className="input-container">
          <h4>Card Holder</h4>
          <input type="text" placeholder="Please enter your full name" />
        </div>
        <div className="input-grp">
          <div className="input-container">
            <h4>Expiration Year</h4>
            <select>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="input-container">
            <h4>Month</h4>
            <select>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
          <div className="input-container">
            <h4>CVV</h4>
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
