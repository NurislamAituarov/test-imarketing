import './Footer.scss';
import { Logo } from '../Svg';
import { Button } from '../Button';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__block footer__block_1">
        <p className="footer__block_title">Quick Links</p>
        <p>About Us </p>
        <p>Blog</p>
        <p>Contact</p>
        <p>FAQ</p>
      </div>
      <div className="footer__block footer__block_2">
        <p className="footer__block_title">Legal Stuff</p>
        <p>Disclaimer </p>
        <p>Financing </p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <form className="footer__block footer__block_3">
        <p className="footer__block_title">Knowing you're always on the best energy deal.</p>
        <input type="text" placeholder="Enter your phone Number" />
        <Button size="s" title="Sign up Now" active={true} />
      </form>
    </footer>
  );
}
