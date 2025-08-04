import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Agencia Pixel" className="w-8 h-8" />
              <span className="text-xl font-bold">Agencia Pixel</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformamos ideas en experiencias digitales extraordinarias que impulsan el crecimiento de tu negocio.
            </p>
            <div className="flex gap-4">
              <div 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/company/agencia-pixel/?viewAsMember=true', '_blank')}
              >
                <span className="text-primary">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Desarrollo Web</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Modelos de Negocio</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Gestión de Productos</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Consultoría</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>agenciapixelcl@gmail.com</li>
              <li>Lun - Dom: 7:00 - 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Agencia Pixel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;