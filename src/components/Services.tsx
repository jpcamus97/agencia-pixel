import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web y aplicaciones modernas, responsivas y optimizadas para conversión.",
      features: ["React & Next.js", "E-commerce", "CMS Personalizado", "SEO Optimizado"],
      icon: "🌐"
    },
    {
      title: "Modelos de Negocio",
      description: "Estrategias digitales que transforman tu visión en un negocio rentable y escalable.",
      features: ["Análisis de Mercado", "MVP Development", "Validación de Ideas", "Go-to-Market"],
      icon: "📊"
    },
    {
      title: "Gestión de Productos",
      description: "Metodologías ágiles para optimizar el desarrollo y priorización de funcionalidades.",
      features: ["Backlog Management", "Sprint Planning", "User Stories", "Análisis de KPIs"],
      icon: "🚀"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="bg-gradient-primary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para llevar tu negocio al siguiente nivel digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card border border-primary/10 rounded-xl p-8 hover:shadow-glow transition-all duration-500 hover:border-primary/30 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;