import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Target, Heart, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Des solutions testées et éprouvées, avec un accompagnement transparent à chaque étape",
    },
    {
      icon: Target,
      title: "Résultats",
      description: "Approche orientée vers l'atteinte de vos objectifs business concrets",
    },
    {
      icon: Heart,
      title: "Simplicité",
      description: "Technologies IA complexes rendues accessibles, même sans compétences techniques",
    },
  ];

  const expertise = [
    "35 ans d'expérience en technique et IA",
    "Spécialiste des outils IA open source et gratuits",
    "Expert en création de contenu digital optimisé",
    "Maîtrise des workflows d'automatisation",
    "Formation trilingue (français, arabe, anglais)",
    "Accompagnement personnalisé sur PC Windows",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos d'Aura</h1>
            <p className="text-xl text-muted-foreground">
              Votre partenaire de confiance pour l'intelligence artificielle et la création de contenu digital
            </p>
          </div>

          {/* Story Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Mon Parcours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Avec 35 ans d'expérience dans le domaine technique et l'intelligence artificielle, 
                j'ai accompagné de nombreux entrepreneurs, PME et créateurs de contenu dans leur 
                transformation digitale.
              </p>
              <p>
                Ma mission est simple : rendre l'intelligence artificielle accessible à tous, 
                en proposant des solutions concrètes, pratiques et adaptées aux besoins réels 
                de mes clients.
              </p>
              <p>
                Spécialisée dans l'intégration d'outils IA gratuits et open source sur PC Windows, 
                je vous accompagne pas à pas dans la découverte et l'utilisation de ces technologies 
                pour booster votre productivité et votre créativité.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Mes Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Expertise Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Mon Expertise</CardTitle>
              <CardDescription>
                Des compétences solides au service de votre réussite
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Approach Section */}
          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Mon Approche</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Écoute et analyse :</strong> Je commence toujours par 
                comprendre vos besoins spécifiques et vos objectifs business.
              </p>
              <p>
                <strong className="text-foreground">Solutions personnalisées :</strong> Chaque client est unique, 
                et mérite une approche sur-mesure adaptée à son contexte.
              </p>
              <p>
                <strong className="text-foreground">Accompagnement continu :</strong> Je reste à vos côtés 
                après l'implémentation, avec un support direct et des tutoriels adaptés.
              </p>
              <p>
                <strong className="text-foreground">Confidentialité garantie :</strong> Vos données et vos 
                projets restent strictement confidentiels.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à démarrer ?</h2>
            <p className="text-muted-foreground mb-6">
              Profitez d'une session découverte gratuite pour discuter de vos besoins
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Planifier une session gratuite</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
