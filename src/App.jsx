import { useState } from "react";
import "./app.scss";
import cardLogo from "./assets/visa.png";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardUserName, setCardUserName] = useState("Your Name");
  const [cardExpireMonth, setCardExpireMonth] = useState("MM");
  const [cardExpireYear, setCardExpireYear] = useState("YYYY");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvNumber, setCvvNumber] = useState("***");
  const [isCVVFocused, setIsCVVFocused] = useState(false);

  const handleCardNumber = (e) => {
    const inputCardNumber = e.target.value.replace(/\D/g, "");
    if (inputCardNumber.length < 16) {
      setCardNumberError("Card number should be 16 digits");
    } else {
      setCardNumberError("");
    }
    const formatCardNumber = inputCardNumber
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formatCardNumber);
  };

  const handleCardUserName = (e) => {
    setCardUserName(e.target.value);
  };

  const handleCardExpireMonth = (e) => {
    setCardExpireMonth(e.target.value);
  };

  const handleCardExpireYear = (e) => {
    setCardExpireYear(e.target.value);
  };

  const handleCVVFocus = () => {
    setIsCVVFocused(true);
  };

  const handleCVVBlur = () => {
    setIsCVVFocused(false);
  };

  const handleCVVNumber = (e) => {
    setCvvNumber(e.target.value);
  };

  return (
    <div className="container">
      <form className="form">
        <div className={`card ${isCVVFocused ? "cvv__focused" : ""}`}>
          {isCVVFocused ? (
            <div className="cvv__content">
              <p>Your Card Security Number </p>
              <div className="cvv__number">
                <p>{cvvNumber}</p>
              </div>
            </div>
<<<<<<< HEAD
          ) : (
            <>
              <div className="header">
                <div className="sticker"></div>
                <div>
                  <img src={cardLogo} alt="visa logo" className="logo" />
                </div>
              </div>
              <div className="body">
                <h2 className="body__card-number">
                  {cardNumber === "" ? "XXXX XXXX XXXX XXXX" : cardNumber}{" "}
                </h2>
              </div>
              <div className="footer">
                <div className="footer__context">
                  <h5>Card Holder name</h5>
                  <h3>
                    {cardUserName.length > 15
                      ? `${cardUserName.slice(0, 15)}...`
                      : cardUserName}
                  </h3>
                </div>
                <div>
                  <h5>Expiry Date</h5>
                  <h3>
                    {cardExpireMonth} / {cardExpireYear}
                  </h3>
                </div>
              </div>
            </>
          )}
=======
          </div>
          <div className="body">
            <h2 className="body__card-number">
              {cardNumber === "" ? "XXXX XXXX XXXX XXXX" : cardNumber}{" "}
            </h2>
          </div>
          <div className="footer">
            <div className="footer__context">
              <h5>Card Holder name</h5>
              <h3>{cardUserName.length > 14 ? `${cardUserName.slice(0, 14)}...` : cardUserName}</h3>
            </div>
            <div>
              <h5>Expiry Date</h5>
              <h3>
                {cardExpireMonth} / {cardExpireYear}
              </h3>
            </div>
          </div>
>>>>>>> fc512aad4aafafb57225d9d93efc18a0ab6b85e2
        </div>
        <div className="input-container mt">
          <h4>Enter card number</h4>
          <input
            type="text"
            placeholder="Please enter your credit card number"
            onChange={handleCardNumber}
            value={cardNumber}
          />
          {cardNumberError && <p className="error">{cardNumberError}</p>}
        </div>
        <div className="input-container">
          <h4>Card Holder</h4>
          <input
            type="text"
            placeholder="Please enter your name"
            onChange={handleCardUserName}
          />
        </div>
        <div className="input-grp">
          <div className="input-container">
            <h4>Expiration Year</h4>
            <select value={cardExpireMonth} onChange={handleCardExpireMonth}>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </div>
          <div className="input-container">
            <h4>Month</h4>
            <select value={cardExpireYear} onChange={handleCardExpireYear}>
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
            <input
              type="text"
              placeholder="CVV"
              onFocus={handleCVVFocus}
              onBlur={handleCVVBlur}
              onChange={handleCVVNumber}
            />
          </div>
        </div>
        <div className="button__area">
          <button>Payment</button>
        </div>
      </form>
    </div>
  );
}

export default App;
