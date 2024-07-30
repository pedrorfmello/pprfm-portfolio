import Link from "next/link";
import { Button } from "../../ui/button";

// Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    PedroMello<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Computador NAV e Btn Me Contrate */}
            <div className="hidden xl:flex items-cente gap-8">
              <Nav />
              <Link href="/">
                <Button>Me Contrate</Button>
              </Link>
            </div>

            {/* Mobile NAV */}
            <div className="xl:hidden">Mobile Nav</div>
        </div>
    </header>
  );
};

export default Header