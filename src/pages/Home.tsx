import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceTraining from "@/assets/service-training.jpg";

const Home = () => {
  const services = [
    {
      title: "Audit IA",
      description: "Analyse complète de vos besoins et opportunités d'intégration IA",
      icon: Brain,
      image: serviceAudit,
    },
    {
      title: "Création de Contenu",
      description: "Articles, vidéos, images et automatisation de workflows avec IA",
      icon: Sparkles,
      image: serviceContent,
    },
    {
      title: "Formation Personnalisée",
      description: "Accompagnement sur-mesure en français, arabe et anglais",
      icon: Users,
      image: serviceTraining,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneuse",
      content: "Aura a transformé ma façon de créer du contenu. Les outils IA qu'elle m'a recommandés ont multiplié ma productivité par 3.",
      rating: 5,
    },
    {
      name: "Mohamed K.",
      role: "Directeur Marketing",
      content: "Formation claire et accessible, même pour quelqu'un sans compétences techniques. Résultats impressionnants.",
      rating: 5,
    },
    {
      name: "Fatima L.",
      role: "Créatrice de contenu",
      content: "L'accompagnement personnalisé et le support continu font toute la différence. Je recommande vivement.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(109, 40, 217, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transformez Votre Business avec l'IA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Solutions IA personnalisées et création de contenu digital pour entrepreneurs et PME
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Diagnostic IA Gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/services">Découvrir nos Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions IA simples, efficaces et adaptées à vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                Voir tous les services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Aura ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "35 ans d'expérience", desc: "Expertise technique et IA éprouvée" },
              { title: "Approche personnalisée", desc: "Solutions adaptées à vos besoins" },
              { title: "Support continu", desc: "Accompagnement à chaque étape" },
              { title: "Confidentialité garantie", desc: "Vos données en toute sécurité" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Transformer Votre Business ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Profitez d'une session découverte gratuite pour explorer vos opportunités IA
          </p>
          <Button variant="hero" size="xl" asChild className="bg-accent">
            <Link to="/contact">
              Demandez votre diagnostic gratuit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ElevenLabsWidget />
    </div>
  );
};

export default Home;
