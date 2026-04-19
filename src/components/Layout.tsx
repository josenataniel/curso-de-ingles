import { Link, useLocation } from "react-router-dom";
import { 
  Home, Briefcase, CheckSquare, Users, User, Search, 
  Moon, Sun, Bell, BookOpen, Globe, Languages,
  Zap, Smartphone, Share2, Trash2, Laptop, Ship, GraduationCap,
  Menu, X, ChevronDown, Globe2, MessageCircle, Monitor
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const { country, setCountry, language, setLanguage, user } = useAppContext();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Início", path: "/" },
    { icon: Briefcase, label: "Serviços", path: "/services" },
    { icon: BookOpen, label: "Artigos", path: "/articles" },
    { icon: CheckSquare, label: "Tarefas", path: "/tasks" },
    { icon: Users, label: "Equipa", path: "/team" },
    { icon: User, label: "Conta", path: "/auth" },
  ];

  const categories = [
    { icon: Globe, label: "Marketing Digital" },
    { icon: Zap, label: "Instalação Elétrica" },
    { icon: Home, label: "Projeção de Casas" },
    { icon: Smartphone, label: "Consultoria em TI" },
    { icon: Smartphone, label: "Sites e Apps" },
    { icon: Share2, label: "Redes Sociais" },
    { icon: Trash2, label: "Limpeza" },
    { icon: Laptop, label: "Manutenção PC" },
    { icon: Ship, label: "Importação" },
    { icon: GraduationCap, label: "Cursos Online" },
  ];

  const countries = ["Angola", "Portugal", "Brasil", "Moçambique", "Mundo"];
  const languages = ["Português", "English", "Español", "Français"];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary/20 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="text-white hover:bg-white/10">
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-inner">M</div>
            <h1 className="font-black text-xl tracking-tighter">ALFA</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar className="w-8 h-8 border border-white/20">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Sidebar (Spotify Style) */}
      <aside className={`
        fixed inset-y-0 left-0 z-[60] w-72 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <span className="font-black text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-black text-lg leading-none tracking-tighter">MUIOMBA</h1>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">ALFA PRO</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-6 pb-20 md:pb-6">
          {/* Main Nav */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                    isActive 
                      ? "bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20" 
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "" : "group-hover:scale-110 transition-transform"}`} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Categories Section */}
          <div className="space-y-2">
            <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Categorias</h3>
            <div className="grid grid-cols-1 gap-1">
              {categories.map((cat, i) => (
                <button 
                  key={i}
                  className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground group"
                >
                  <cat.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile Footer (Desktop) */}
        <div className="p-4 border-t border-border bg-secondary/30">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
            <Avatar className="w-10 h-10 border border-border shadow-sm">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{user?.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{user?.name}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold">Premium Plan</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex sticky top-0 z-40 bg-primary text-primary-foreground border-b border-primary/20 px-8 py-4 items-center justify-between shadow-lg">
          <div className="flex-1 max-w-xl flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-white/10 rounded-full shrink-0"
              onClick={() => toast.success("Iniciando busca...")}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Pesquisar serviços, notícias ou equipa..." 
              className="bg-white/10 border-none h-11 rounded-full focus-visible:ring-2 focus-visible:ring-white/20 w-full placeholder:text-white/50 text-white"
            />
          </div>

          <div className="flex items-center gap-4 ml-8">
            {/* Country/Lang Switcher */}
            <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full border border-border">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full gap-2 h-8 px-3 hover:bg-background">
                    <Globe2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{country}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl">
                  {countries.map((c) => (
                    <DropdownMenuItem key={c} onClick={() => setCountry(c)} className="rounded-lg">
                      {c}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="w-px h-4 bg-border" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full gap-2 h-8 px-3 hover:bg-background">
                    <Languages className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl">
                  {languages.map((l) => (
                    <DropdownMenuItem key={l} onClick={() => setLanguage(l)} className="rounded-lg">
                      {l}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {theme === "dark" ? <Moon className="w-5 h-5" /> : theme === "light" ? <Sun className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 rounded-xl">
                <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 rounded-lg">
                  <Sun className="w-4 h-4" /> Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 rounded-lg">
                  <Moon className="w-4 h-4" /> Escuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 rounded-lg">
                  <Monitor className="w-4 h-4" /> Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </Button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-secondary/20 to-background">
          <div className="container max-w-5xl mx-auto p-4 md:p-8 pb-32">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border px-2 py-3 flex justify-around items-center z-50">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all ${
                isActive ? "text-primary scale-110" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "fill-primary/10" : ""}`} />
              <span className="text-[9px] font-black uppercase tracking-tighter">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Floating Support Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => toast.info("Suporte Alfa: Como podemos ajudar hoje?")}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center z-[100] group"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 bg-card px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
          Suporte Online
        </span>
      </motion.button>
    </div>
  );
}
