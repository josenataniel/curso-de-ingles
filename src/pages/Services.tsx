import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, Zap, Home as HomeIcon, Laptop, Smartphone, 
  Share2, Trash2, Settings, Ship, GraduationCap,
  Mail, Phone, Play, Info
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    { icon: Globe, title: "Marketing Digital", category: "Digital", color: "bg-blue-500" },
    { icon: Zap, title: "Instalação Elétrica", category: "Técnico", color: "bg-yellow-500" },
    { icon: HomeIcon, title: "Projeção de Casas", category: "Arquitetura", color: "bg-green-500" },
    { icon: Settings, title: "Consultoria em TI", category: "TI", color: "bg-purple-500" },
    { icon: Smartphone, title: "Criação de Sites e Apps", category: "TI", color: "bg-indigo-500" },
    { icon: Share2, title: "Gestão de Redes Sociais", category: "Digital", color: "bg-pink-500" },
    { icon: Trash2, title: "Limpeza de Escritórios", category: "Manutenção", color: "bg-orange-500" },
    { icon: Laptop, title: "Manutenção de Computadores", category: "TI", color: "bg-red-500" },
    { icon: Ship, title: "Importação de Produtos", category: "Logística", color: "bg-cyan-500" },
    { icon: GraduationCap, title: "Formação e Cursos", category: "Educação", color: "bg-primary" },
  ];

  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-4xl font-black tracking-tighter">Nossos Serviços</h2>
        <p className="text-muted-foreground font-medium">Soluções profissionais para todas as suas necessidades.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative bg-card/40 hover:bg-card/80 p-5 rounded-2xl transition-all cursor-pointer border border-border/50"
                    onClick={() => setSelectedService(service.title)}
                  >
                  <div className={`w-full aspect-square rounded-xl ${service.color} mb-4 flex items-center justify-center shadow-2xl shadow-black/20 relative overflow-hidden`}>
                    <Icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Spotify Play Button Style */}
                    <div className="absolute bottom-3 right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm leading-tight truncate">{service.title}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{service.category}</p>
                    </div>
                    <Button className="w-full h-8 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/10">Solicitar</Button>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="rounded-3xl border-none bg-card/95 backdrop-blur-xl max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black tracking-tighter">Solicitar {selectedService}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Seu Nome</label>
                    <Input placeholder="Digite seu nome completo" className="bg-secondary/50 border-none h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email ou Telefone</label>
                    <Input placeholder="Como podemos contactá-lo?" className="bg-secondary/50 border-none h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Detalhes do Pedido</label>
                    <textarea 
                      className="w-full min-h-[120px] rounded-xl border-none bg-secondary/50 px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                      placeholder="Descreva o que você precisa..."
                    />
                  </div>
                  <Button className="w-full h-14 rounded-full text-base font-bold shadow-xl shadow-primary/20">Enviar Solicitação</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          );
        })}
      </div>

      <Card className="border-none bg-primary/10 p-8 rounded-[2rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <Info className="w-32 h-32 text-primary" />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-black tracking-tighter text-primary">Precisa de ajuda direta?</h3>
            <p className="text-muted-foreground font-medium max-w-md">
              Nossa equipa está disponível 24/7 para suporte técnico e consultoria personalizada.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="mailto:muiombaalfa@gmail.com" className="flex items-center gap-3 bg-background/50 p-4 rounded-2xl hover:bg-background transition-all border border-border/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm">muiombaalfa@gmail.com</span>
            </a>
            <a href="tel:932404995" className="flex items-center gap-3 bg-background/50 p-4 rounded-2xl hover:bg-background transition-all border border-border/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm">932 404 995</span>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
