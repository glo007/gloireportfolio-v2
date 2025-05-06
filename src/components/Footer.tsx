import { PackageOpen } from "lucide-react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Import des logos

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <PackageOpen className="w-10 h-10" />
                <p className="font-bold">
                    Gloire <span className="text-accent">PORTFOLIO</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/gloire-bryan-boungou-mbimi-b31b072b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/gloire_bryan?igsh=MTBpMWc5aGgwZjBwaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/gloire_bryan?s=21" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
