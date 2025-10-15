import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-background rounded-lg p-1 flex items-center justify-center">
            <img src={logo} alt="Agencia Pixel" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold">Agencia Pixel</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <Button 
          variant="hero" 
          size="sm"
          onClick={() => scrollToSection('contacto')}
        >
          Comenzar Proyecto
        </Button>
      </div>
    </header>
  );
};

export default Header;