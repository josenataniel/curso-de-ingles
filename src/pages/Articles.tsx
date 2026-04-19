import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight, Play, Bookmark } from "lucide-react";
import { motion } from "motion/react";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "O Futuro do Marketing Digital em Angola",
      description: "Descubra as tendências que estão a moldar o mercado angolano em 2024.",
      category: "Marketing",
      readTime: "5 min",
      date: "10 Abr 2024",
      image: "https://picsum.photos/seed/future/400/250"
    },
    {
      id: 2,
      title: "Manutenção Preventiva: Por que é essencial?",
      description: "Saiba como evitar custos inesperados com a manutenção correta dos seus equipamentos.",
      category: "TI",
      readTime: "3 min",
      date: "08 Abr 2024",
      image: "https://picsum.photos/seed/tech/400/250"
    },
    {
      id: 3,
      title: "Dicas para uma Instalação Elétrica Segura",
      description: "O que você precisa saber antes de iniciar uma obra na sua casa ou escritório.",
      category: "Técnico",
      readTime: "7 min",
      date: "05 Abr 2024",
      image: "https://picsum.photos/seed/electric/400/250"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-4xl font-black tracking-tighter">Artigos e Dicas</h2>
          <p className="text-muted-foreground font-medium">Conhecimento especializado para o seu crescimento.</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ y: -8 }}
            className="group bg-card/40 hover:bg-card/80 rounded-[2rem] overflow-hidden transition-all border border-border/50 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-6 h-6 text-primary-foreground fill-current" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/20 backdrop-blur-md border-none text-white font-black text-[9px] uppercase tracking-widest">
                  {article.category}
                </Badge>
              </div>
            </div>
            
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime} de leitura</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-black leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <Button variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-[10px] gap-2">
                  Ler Artigo Completo
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
