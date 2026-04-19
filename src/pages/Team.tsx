import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Team() {
  const members = [
    {
      name: "Muiomba Alfa",
      role: "CEO & Fundador",
      bio: "Especialista em Marketing Digital e Gestão de TI com mais de 10 anos de experiência no mercado angolano.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muiomba",
      specialties: ["Marketing", "TI", "Gestão"]
    },
    {
      name: "Carlos Bento",
      role: "Diretor Técnico",
      bio: "Responsável pela área de instalações elétricas e projeção de casas. Focado em inovação e sustentabilidade.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      specialties: ["Eletricidade", "Arquitetura"]
    },
    {
      name: "Ana Sofia",
      role: "Social Media",
      bio: "Criativa e apaixonada por comunicação. Ajuda empresas a construir uma presença digital forte e autêntica.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      specialties: ["Social Media", "Design"]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-black tracking-tighter">Nossa Equipa</h2>
        <p className="text-muted-foreground font-medium">Os talentos por trás da excelência da Muiomba Alfa.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-card/40 hover:bg-card/80 p-6 rounded-[2rem] transition-all border border-border/50 text-center space-y-4"
          >
            <div className="relative mx-auto w-40 h-40">
              <Avatar className="w-full h-full border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <AvatarImage src={member.image} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full shadow-lg">
                <Star className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-black text-lg tracking-tight">{member.name}</h3>
              <p className="text-primary text-xs font-black uppercase tracking-widest">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {member.specialties.map((s) => (
                  <Badge key={s} variant="secondary" className="text-[9px] font-black uppercase tracking-widest">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {member.bio}
            </p>

            <div className="flex justify-center gap-2 pt-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-primary/10 hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-primary/10 hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join the team CTA */}
      <Card className="border-none bg-gradient-to-r from-primary/20 to-secondary/20 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-3xl font-black tracking-tighter">Quer fazer parte da equipa?</h3>
          <p className="text-muted-foreground font-medium">Estamos sempre à procura de novos talentos para crescer connosco.</p>
        </div>
        <Button size="lg" className="rounded-full px-8 h-14 font-black text-base gap-2 shadow-xl shadow-primary/20">
          Ver Vagas Abertas
          <ExternalLink className="w-5 h-5" />
        </Button>
      </Card>
    </div>
  );
}
