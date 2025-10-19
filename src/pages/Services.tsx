import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Sparkles, 
  Users, 
  CheckCircle, 
  FileText, 
  Video, 
  Image as ImageIcon,
  Workflow,
  Languages,
  BookOpen,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Audit IA & Accompagnement",
      image: serviceAudit,
      description: "Diagnostic complet de vos besoins et opportunités d'intégration IA",
      features: [
        "Analyse de vos processus actuels",
        "Identification des opportunités d'automatisation",
        "Recommandations d'outils IA adaptés (open source & gratuits)",
        "Plan d'implémentation personnalisé",
        "Installation et configuration sur PC Windows",
        "Formation à l'utilisation des outils",
      ],
      price: "Sur devis",
    },
    {
      icon: Sparkles,
      title: "Création de Contenu Digital",
      image: serviceContent,
      description: "Production de contenu optimisé avec l'intelligence artificielle",
      features: [
        "Articles de blog optimisés SEO",
        "Scripts et montages vidéo avec IA",
        "Génération d'images et visuels",
        "Création d'avatars virtuels",
        "Carrousels pour réseaux sociaux",
        "Automatisation de workflows de publication",
      ],
      price: "À partir de 500 DT",
    },
    {
      icon: Users,
      title: "Formation Personnalisée",
      image: serviceTraining,
      description: "Accompagnement sur-mesure en français, arabe et anglais",
      features: [
        "Sessions de formation individuelles ou en groupe",
        "Tutoriels vidéo personnalisés",
        "Support direct par email/WhatsApp",
        "Documentation en français adaptée",
        "Exercices pratiques et cas d'usage réels",
        "Suivi post-formation inclus",
      ],
      price: "À partir de 300 DT",
    },
  ];

  const contentTypes = [
    { icon: FileText, label: "Articles optimisés" },
    { icon: Video, label: "Vidéos professionnelles" },
    { icon: ImageIcon, label: "Visuels IA" },
    { icon: Workflow, label: "Automatisation" },
  ];

  const languages = [
    { icon: Languages, label: "Français" },
    { icon: Languages, label: "العربية" },
    { icon: Languages, label: "English" },
  ];

  const faqs = [
    {
      question: "Les outils IA sont-ils vraiment gratuits ?",
      answer: "Oui, je me spécialise dans l'intégration d'outils IA open source et gratuits. Certains outils premium peuvent être recommandés selon vos besoins, mais toujours avec des alternatives gratuites proposées.",
    },
    {
      question: "Ai-je besoin de compétences techniques ?",
      answer: "Absolument pas ! Mon approche est conçue pour les personnes sans compétences techniques. Je vous guide pas à pas dans l'utilisation de chaque outil.",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer: "La confidentialité est une priorité absolue. Je privilégie les solutions d'IA locale sur votre PC Windows, garantissant que vos données restent sous votre contrôle.",
    },
    {
      question: "Combien de temps dure une formation ?",
      answer: "Cela dépend de vos besoins. Une session découverte dure 1-2h, tandis qu'une formation complète peut s'étendre sur plusieurs sessions de 2-3h chacune.",
    },
    {
      question: "Proposez-vous un support après l'installation ?",
      answer: "Oui, un support continu est inclus. Vous pouvez me contacter par email ou WhatsApp pour toute question ou problème technique.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions IA complètes pour transformer votre façon de travailler et créer du contenu
            </p>
          </div>

          {/* Main Services */}
          <div className="space-y-12 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`h-64 md:h-auto ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <p className="text-sm text-accent font-semibold mt-1">{service.price}</p>
                        </div>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Content Types */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Types de Contenu Digital</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <type.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <p className="font-medium">{type.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Formation Multilingue</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow p-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-accent/10 rounded-full">
                      <lang.icon className="h-10 w-10 text-accent" />
                    </div>
                    <p className="text-xl font-semibold">{lang.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Session Découverte Gratuite</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Profitez d'une consultation gratuite pour explorer comment l'IA peut transformer votre business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild className="bg-accent">
                  <Link to="/contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Planifier ma session gratuite
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
