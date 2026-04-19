import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, ThumbsUp, Share2, Megaphone, Calendar, 
  MoreHorizontal, Heart, Globe, MapPin, TrendingUp,
  Newspaper, Sparkles, Image as ImageIcon, Video, Smile,
  Plus
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const { country, user } = useAppContext();
  const [postText, setPostText] = useState("");

  const stories = [
    { id: 1, name: "Seu Story", image: user?.avatar, isUser: true },
    { id: 2, name: "Muiomba", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muiomba" },
    { id: 3, name: "Carlos", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos" },
    { id: 4, name: "Ana", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" },
    { id: 5, name: "Ricardo", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo" },
    { id: 6, name: "Sofia", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia" },
  ];

  const handlePublish = () => {
    toast.success("Publicação enviada com sucesso!");
    setPostText("");
  };

  const news = [
    {
      id: 1,
      author: "Muiomba Alfa",
      date: "Há 2 horas",
      content: `Estamos entusiasmados em anunciar novos cursos online de Marketing Digital e TI em ${country}! Inscreva-se já para garantir sua vaga.`,
      image: "https://picsum.photos/seed/marketing/800/400",
      likes: 24,
      comments: 5,
      category: "Cursos"
    },
    {
      id: 2,
      author: "Equipa de Manutenção",
      date: "Há 5 horas",
      content: `Realizamos hoje a manutenção preventiva em mais de 10 escritórios no centro da cidade. Qualidade e eficiência sempre para nossos clientes em ${country}!`,
      image: "https://picsum.photos/seed/cleaning/800/400",
      likes: 15,
      comments: 2,
      category: "Serviços"
    }
  ];

  const worldNews = [
    {
      id: 101,
      title: "Novas tendências em TI para 2026",
      source: "Tech Global",
      time: "1h",
      image: "https://picsum.photos/seed/tech/400/250"
    },
    {
      id: 102,
      title: "O impacto da IA na economia mundial",
      source: "World News",
      time: "3h",
      image: "https://picsum.photos/seed/world/400/250"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stories Section (Spotify/Facebook Fusion) */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {stories.map((story) => (
          <motion.div 
            key={story.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
          >
            <div className={`relative p-1 rounded-full ${story.isUser ? "" : "bg-gradient-to-tr from-yellow-400 to-primary"}`}>
              <Avatar className="w-16 h-16 border-2 border-background">
                <AvatarImage src={story.image} />
                <AvatarFallback>{story.name[0]}</AvatarFallback>
              </Avatar>
              {story.isUser && (
                <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-background">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <span className="text-[10px] font-bold text-muted-foreground truncate w-16 text-center">{story.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Hero Section (Spotify Style) */}
      <section className="relative h-64 md:h-80 rounded-[3rem] overflow-hidden group">
        <img 
          src="https://picsum.photos/seed/alfa/1200/600" 
          alt="Hero" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 space-y-2">
          <Badge className="bg-primary text-primary-foreground font-black px-3 py-1">DESTAQUE</Badge>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
            Soluções Alfa em {country}
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md font-medium">
            Líderes em tecnologia, manutenção e consultoria digital.
          </p>
        </div>
      </section>

      {/* Post Creator (Facebook Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Mural de Avisos (from XML) */}
          <div className="bg-primary/10 p-6 rounded-[2rem] border border-primary/20 shadow-xl shadow-primary/5">
            <h3 className="text-primary font-black flex items-center gap-2 mb-4 uppercase tracking-widest text-xs">
              <Megaphone className="w-5 h-5" /> Mural de Avisos
            </h3>
            <ul className="text-sm space-y-2 font-medium text-foreground/80">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Novos cursos de TI e Marketing disponíveis!</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Manutenção preventiva em escritórios agendada.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Contacte-nos pelo 932404995 para orçamentos.</li>
            </ul>
          </div>

          <Card className="border-none bg-card/40 backdrop-blur-xl rounded-[2rem] p-4">
            <CardContent className="p-0 space-y-4">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border border-border">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.name[0]}</AvatarFallback>
                </Avatar>
                <Input 
                  placeholder={`No que você está pensando, ${user?.name.split(" ")[0]}?`}
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="bg-secondary/50 border-none rounded-full h-10 focus-visible:ring-1 focus-visible:ring-primary/30"
                />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2">
                    <Video className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-bold">Vídeo</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2">
                    <ImageIcon className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold">Foto</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2">
                    <Smile className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-bold">Sentimento</span>
                  </Button>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm" 
                    className="rounded-full px-6 font-bold" 
                    disabled={!postText.trim()}
                    onClick={handlePublish}
                  >
                    Publicar
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="hidden lg:block space-y-6">
          {/* Trending Topics */}
          <Card className="border-none bg-card/40 rounded-[2rem]">
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Populares Agora
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { tag: "#MarketingDigital", posts: "1.2k posts" },
                { tag: "#TI_Angola", posts: "850 posts" },
                { tag: "#MuiombaAlfa", posts: "2.4k posts" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col hover:bg-secondary/50 p-3 rounded-2xl transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-primary">{item.tag}</span>
                  <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{item.posts}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Feed Tabs */}
      <Tabs defaultValue="foryou" className="w-full">
        <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
          <TabsList className="bg-transparent h-auto p-0 gap-6">
            <TabsTrigger 
              value="foryou" 
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 pb-2 text-base font-bold transition-all"
            >
              Feed {country}
            </TabsTrigger>
            <TabsTrigger 
              value="world" 
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 pb-2 text-base font-bold transition-all"
            >
              Mundo
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Tendências</span>
          </div>
        </div>

        <TabsContent value="foryou" className="space-y-6 mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feed Column */}
            <div className="lg:col-span-2 space-y-6">
              {news.map((post) => (
                <Card key={post.id} className="border-none bg-card/40 hover:bg-card/60 transition-colors overflow-hidden group rounded-[2rem]">
                  <CardHeader className="flex flex-row items-center justify-between p-5">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-border">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} />
                        <AvatarFallback>MA</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm hover:underline cursor-pointer">{post.author}</span>
                          <Badge variant="secondary" className="text-[10px] h-4 px-1.5 font-black uppercase tracking-widest">OFICIAL</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-bold uppercase tracking-tight">
                          <MapPin className="w-3 h-3" />
                          <span>{country}</span>
                          <span className="mx-1">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="px-5 pb-4 text-sm leading-relaxed font-medium">
                      {post.content}
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt="Post" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="gap-2 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="font-bold">{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                          <MessageSquare className="w-5 h-5" />
                          <span className="font-bold">{post.comments}</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Mural de Avisos */}
              <Card className="border-none bg-primary/10 shadow-xl shadow-primary/5 rounded-[2rem]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-black flex items-center gap-2 text-primary uppercase tracking-widest">
                    <Megaphone className="w-4 h-4" />
                    Mural de Avisos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Reunião geral na próxima sexta às 15:00.",
                      "Novo protocolo de atendimento implementado.",
                      "Lançamento do novo site em breve!"
                    ].map((notice, i) => (
                      <li key={i} className="text-xs font-medium flex items-start gap-3 group cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-primary transition-colors">{notice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="border-none bg-card/40 rounded-[2rem]">
                <CardHeader>
                  <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Populares Agora
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { tag: "#MarketingDigital", posts: "1.2k posts" },
                    { tag: "#TI_Angola", posts: "850 posts" },
                    { tag: "#MuiombaAlfa", posts: "2.4k posts" },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col hover:bg-secondary/50 p-3 rounded-2xl transition-colors cursor-pointer">
                      <span className="text-sm font-bold text-primary">{item.tag}</span>
                      <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{item.posts}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="world" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {worldNews.map((item) => (
              <Card key={item.id} className="border-none bg-card/40 hover:bg-card/60 transition-all overflow-hidden group cursor-pointer rounded-[2rem]">
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-48 h-48 shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-primary/30 text-primary">MUNDO</Badge>
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{item.time} atrás</span>
                      </div>
                      <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Globe className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.source}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
