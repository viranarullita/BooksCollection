import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer>
          <h3>&copy; 2025 - Vira Collection</h3>
          <p>Temukan koleksi buku terbaik di sini.</p>
          <p>Ikuti kami:</p>
          <div className="social-icons">
            <a href="#" title="Facebook"><Facebook size={25} /></a>
            <a href="#" title="Twitter"><Twitter size={25} /></a>
            <a href="#" title="Instagram"><Instagram size={25} /></a>
          </div>
    </footer>
  );
};

export default Footer;