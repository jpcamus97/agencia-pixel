import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="bg-gradient-primary bg-clip-text text-transparent">Comenzar?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hablemos sobre tu próximo proyecto y cómo podemos ayudarte a alcanzar tus objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-card border border-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">agenciapixelcl@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-muted-foreground">+56946645535</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary">⏰</span>
                  </div>
                  <div>
                    <div className="font-semibold">Horario</div>
                    <div className="text-muted-foreground">Lun - Dom: 7:00 - 20:00</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="glow" 
                    size="sm"
                    onClick={() => window.open('https://www.linkedin.com/company/agencia-pixel/?viewAsMember=true', '_blank')}
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card border border-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              
              <form action="https://formspree.io/f/xeozraon" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Servicio de Interés</label>
                  <select name="service" className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors">
                    <option>Desarrollo Web</option>
                    <option>Modelo de Negocio</option>
                    <option>Gestión de Productos</option>
                    <option>Consultoría Integral</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    name="message"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;