import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { websData } from "@/data/webs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Smartphone, Search } from "lucide-react";

const WebsLanding = () => {
  const [searchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Opcional: verificar parámetro de acceso
    const accessKey = searchParams.get("k");
    // Si quieres implementar la verificación, descomenta:
    // if (accessKey !== "ok") {
    //   return <NotFound />;
    // }
    
    setIsVisible(true);
  }, [searchParams]);

  const handleCTAClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa conocer más sobre tus servicios de desarrollo web. ¿Podríamos agendar una consulta?`
    );
    window.open(`https://wa.me/${websData.cta.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Meta tags para no indexación */}
      <div style={{ display: 'none' }}>
        <meta name="robots" content="noindex,nofollow" />
      </div>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 hero-bg">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">{websData.hero.title}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {websData.hero.subtitle}
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {websData.hero.description}
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover px-8 py-4 text-lg"
                onClick={handleCTAClick}
              >
                Solicitar Cotización Gratuita
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {websData.features.map((feature, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-4 flex justify-center">
                    {index === 0 && <Zap className="w-12 h-12 text-primary" />}
                    {index === 1 && <Smartphone className="w-12 h-12 text-primary" />}
                    {index === 2 && <Search className="w-12 h-12 text-primary" />}
                    {index === 3 && <Shield className="w-12 h-12 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Paquetes de Desarrollo</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige el paquete que mejor se adapte a las necesidades de tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {websData.packages.map((pkg, index) => (
                <div 
                  key={pkg.id} 
                  className={`project-card animate-scale-in relative ${
                    pkg.highlighted ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${pkg.highlighted ? 'bg-primary hover:bg-primary-hover' : ''}`}
                    variant={pkg.highlighted ? 'default' : 'outline'}
                    onClick={handleCTAClick}
                  >
                    Seleccionar Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-bg">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">{websData.cta.title}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {websData.cta.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover px-8 py-4 text-lg"
                onClick={handleCTAClick}
              >
                {websData.cta.buttonText}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="py-8 border-t border-border bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Emilio Zavala - Desarrollo Web Profesional
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WebsLanding;