import "./style.css";
import insta from "../assets/instagram.png";
import whats from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedias">
        <a target="_blanck" href="https://www.instagram.com/pedro_leuchs/">
          <img src={insta} alt="" width={25} />
        </a>
        <a target="_blanck" href="https://wa.me/5544920027613">
          <img src={whats} alt="" width={25} />
        </a>
        <a
          target="_blanck"
          href="https://www.linkedin.com/in/pedro-leuchs-899456244/"
        >
          <img src={linkedin} alt="" width={25} />
        </a>
      </div>
      <p>
        <i>By Pedro_Leuchs</i>
      </p>
    </footer>
  );
}
export default Footer;
