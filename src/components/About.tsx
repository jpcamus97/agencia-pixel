const About = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Nosotros</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertos en transformación digital con pasión por la innovación
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Innovación en cada píxel
              </h3>
              <p className="text-muted-foreground mb-6">
                En Agencia Pixel, combinamos creatividad y tecnología para crear experiencias digitales 
                que no solo se ven increíbles, sino que generan resultados reales para tu negocio.
              </p>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo multidisciplinario tiene experiencia en las últimas tecnologías y 
                metodologías ágiles, garantizando que cada proyecto se entregue a tiempo y supere 
                las expectativas.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card rounded-xl p-8 border border-primary/10">
                <h4 className="text-xl font-bold mb-4">Nuestros Valores</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">🎯</span>
                    </div>
                    <span>Enfoque en resultados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">🚀</span>
                    </div>
                    <span>Innovación constante</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">🤝</span>
                    </div>
                    <span>Colaboración transparente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">⚡</span>
                    </div>
                    <span>Entrega ágil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;