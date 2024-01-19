import { ImportContactsSharp } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button  className="footer__button" type="button" onClick={scrollToTop}>
        {/* < ArrowUpwardSharpIcon/> */}<b><i>BACK TO TOP</i></b>
      </button>

      <div className="footer__columns">
        <div className="footer__column">
          <strong>Get to Know Us</strong>
          <p>Carrers</p>
          <p>Blogs</p>
          <p>About Dkarts</p>
          <p> Dkarts Science</p>
        </div>
        <div className="footer__column">
          <strong>Make Money with Us</strong>
          <p>Sell products on  Dkarts</p>
          <p>Sell apps on  Dkarts</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
        </div>
        <div className="footer__column">
          <strong> Dkarts Payment Products</strong>
          <p> Dkarts Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p> DkartsCurrency Converter</p>
        </div>
        <div className="footer__column">
          <strong>Let Us Help You</strong>
          <p> Dkarts and COVID-19</p>
          <p>Shipping Rates & Policies</p>
          <p> Dkarts Assistant</p>
          <p>Help</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;