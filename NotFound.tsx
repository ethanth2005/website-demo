import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold display text-accent hover:text-accent/80 transition-colors">
            ET
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
          </Link>
          <Link href="/talent">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              Talent
            </a>
          </Link>
          <Link href="/services">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              Services
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <a className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Get Started
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/">
              <a className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </a>
            </Link>
            <Link href="/talent">
              <a className="text-foreground hover:text-accent transition-colors font-medium">
                Talent
              </a>
            </Link>
            <Link href="/services">
              <a className="text-foreground hover:text-accent transition-colors font-medium">
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
