import { useState } from "react";
import "./app.scss";
import cardLogo from "./assets/visa.png";
import ReactCardFlip from "react-card-flip";
import Tilt from "react-parallax-tilt";

function App() {
  const [cardNumber, setCardNumber] = useState("#### #### #### ####");
  const [cardUserName, setCardUserName] = useState("");
  const [cardExpireMonth, setCardExpireMonth] = useState("");
  const [cardExpireYear, setCardExpireYear] = useState("");
  const [cvvNumber, setCvvNumber] = useState("***");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardNumber = (e) => {
    const inputCardNumber = e.target.value.replace(/\D/g, "");
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
    const inputMonth = e.target.value.replace(/\D/g, "");
    const formatMonth = inputMonth.slice(0, 2).trim();
    setCardExpireMonth(formatMonth);
  };

  const handleCardExpireYear = (e) => {
    const inputYear = e.target.value.replace(/\D/g, "");
    const formatYear = inputYear.slice(0, 4).trim();
    setCardExpireYear(formatYear);
  };

  const handleCVVNumber = (e) => {
    const inputCVVNumber = e.target.value.replace(/\D/g, "");
    const formatCVVNumber = inputCVVNumber.slice(0, 3).trim();
    setCvvNumber(formatCVVNumber);
  };

  const handlePayment = () => {
    if (
      cardNumber.trim() === "" ||
      cardUserName.trim() === "" ||
      cardExpireMonth.trim() === "" ||
      cardExpireYear.trim() === "" ||
      cvvNumber.trim() === "***"
    ) {
      alert("Please fill in all the required fields before making a payment.");
      return;
    }

    setCardNumber("");
    setCardUserName("Your Full Name");
    setCardExpireMonth("MM");
    setCardExpireYear("YY");
    setCvvNumber("***");
    alert("Payment done!");
  };

  const handleClickFlip = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className="container">
      <form className="form">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="card__front">
            <Tilt>
              <div className="card">
                <div className="header">
                  <div className="sticker"></div>
                  <div>
                    <img src={cardLogo} alt="visa logo" className="logo" />
                  </div>
                </div>
                <div className="body">
                  <h2 className="body__card-number">
                    <input
                      type="text"
                      placeholder="Please enter your credit card number"
                      onChange={handleCardNumber}
                      value={cardNumber}
                    />
                  </h2>
                </div>
                <div className="footer">
                  <div className="footer__context">
                    <h5>Card Holder name</h5>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      onChange={handleCardUserName}
                      value={cardUserName}
                    />
                  </div>
                  <div className="footer__expriy">
                    <h5>Expiry Date</h5>
                    <div className="monthYear">
                      <div className="month">
                        <input
                          style={{ width: "40px" }}
                          type="text"
                          value={cardExpireMonth}
                          onChange={handleCardExpireMonth}
                          placeholder="MM"
                        />
                      </div>
                      <div>/ &nbsp;</div>
                      <div className="year">
                        <input
                          type="text"
                          value={cardExpireYear}
                          onChange={handleCardExpireYear}
                          placeholder="YYYY"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            <button className="btn-flip" onClick={handleClickFlip}>
              Click for CVV
            </button>
          </div>

          <div className="card__back">
            <Tilt>
              <div className="card">
                <div className="cvv__content">
                  <p>Your Card Security Number </p>
                  <div className="cvv__number">
                    <input
                      type="text"
                      value={cvvNumber}
                      onChange={handleCVVNumber}
                      placeholder="***"
                    />
                  </div>
                </div>
              </div>
            </Tilt>

            <button className="btn-flip" onClick={handleClickFlip}>
              Back
            </button>
          </div>
        </ReactCardFlip>
        <div className="button__area">
          <button onClick={handlePayment}>Payment</button>
        </div>
      </form>
    </div>
  );
}

export default App;
