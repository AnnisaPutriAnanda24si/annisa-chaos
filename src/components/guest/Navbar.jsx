import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-neutral-200">

            <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

                {/* Logo */}

                <Link
                    to="/"
                    className="font-playfair text-3xl tracking-[0.18em] font-semibold"
                >
                    SKINOVA
                </Link>

                {/* Navigation */}

                <nav className="hidden md:flex items-center gap-10 font-urbanist text-[15px]">

                    <a
                        href="#home"
                        className="hover:text-[#E67E22] transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="#services"
                        className="hover:text-[#E67E22] transition duration-300"
                    >
                        Services
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-[#E67E22] transition duration-300"
                    >
                        Contact Us
                    </a>

                </nav>

                {/* Login */}
                <Button
                    to="/login"
                    variant="outline"
                    size="sm"
                >
                    Login / Register
                </Button>

            </div>

        </header>
    );
};

export default Navbar;