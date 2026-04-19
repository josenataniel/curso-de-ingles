import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LogIn, UserPlus, Github, Mail, User, Settings, 
  LogOut, Shield, CreditCard, Bell, HelpCircle,
  ChevronRight, Camera, Palette, Monitor
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";
import { useAppContext } from "@/context/AppContext";
import { useTheme } from "@/components/ThemeProvider";

export default function Auth() {
  const { primaryColor, setPrimaryColor } = useAppContext();
  const { theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated for demo
  const [isLoading, setIsLoading] = useState(false);

  const themeColors = [
    { name: "Lilás", value: "#6d28d9" },
    { name: "Azul", value: "#2563eb" },
    { name: "Verde", value: "#16a34a" },
    { name: "Rosa", value: "#db2777" },
    { name: "Laranja", value: "#ea580c" },
  ];

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 1500);
  };

  if (isLoggedIn) {
    return (
      <div className="space-y-10 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-primary/20 to-secondary/20 p-10 rounded-[3rem] border border-border/50">
          <div className="relative group">
            <Avatar className="w-32 h-32 border-4 border-background shadow-2xl">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Muiomba" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full shadow-lg text-primary-foreground hover:scale-110 transition-transform">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <h2 className="text-4xl font-black tracking-tighter">Utilizador Alfa</h2>
              <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest">Premium</span>
            </div>
            <p className="text-muted-foreground font-medium">muiombaalfa@gmail.com</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Button variant="outline" size="sm" className="rounded-full border-border/50 bg-background/50">Editar Perfil</Button>
              <Button variant="ghost" size="sm" className="rounded-full text-destructive hover:bg-destructive/10" onClick={() => setIsLoggedIn(false)}>Sair</Button>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none bg-card/40 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-black text-lg tracking-tight">Cor do Tema</h3>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {themeColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setPrimaryColor(color.value)}
                  className={`w-full aspect-square rounded-full border-4 transition-all ${
                    primaryColor === color.value ? "border-white scale-110 shadow-lg" : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </Card>

          <Card className="border-none bg-card/40 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-black text-lg tracking-tight">Modo do App</h3>
            </div>
            <div className="flex gap-2">
              {[
                { id: "light", label: "Claro" },
                { id: "dark", label: "Escuro" },
                { id: "system", label: "Sistema" },
              ].map((m) => (
                <Button
                  key={m.id}
                  variant={theme === m.id ? "default" : "secondary"}
                  onClick={() => setTheme(m.id as any)}
                  className="flex-1 rounded-xl font-bold text-xs"
                >
                  {m.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none bg-card/40 hover:bg-card/60 transition-colors cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Segurança</h4>
                <p className="text-xs text-muted-foreground font-medium">Senha, autenticação em dois fatores</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>

          <Card className="border-none bg-card/40 hover:bg-card/60 transition-colors cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Pagamentos</h4>
                <p className="text-xs text-muted-foreground font-medium">Métodos de pagamento e faturas</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>

          <Card className="border-none bg-card/40 hover:bg-card/60 transition-colors cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                <Bell className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Notificações</h4>
                <p className="text-xs text-muted-foreground font-medium">Preferências de alerta e email</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>

          <Card className="border-none bg-card/40 hover:bg-card/60 transition-colors cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Suporte</h4>
                <p className="text-xs text-muted-foreground font-medium">Centro de ajuda e contacto direto</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md border-none bg-card/40 backdrop-blur-xl rounded-[2.5rem] p-4">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mx-auto shadow-2xl shadow-primary/20">
            <span className="font-black text-3xl">M</span>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-3xl font-black tracking-tighter">Área do Utilizador</CardTitle>
            <CardDescription className="font-medium">
              Aceda aos seus cursos e solicitações.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary/50 rounded-xl p-1">
              <TabsTrigger value="login" className="rounded-lg font-bold">Login</TabsTrigger>
              <TabsTrigger value="signup" className="rounded-lg font-bold">Cadastro</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-6 mt-0">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Email</label>
                  <Input type="email" placeholder="exemplo@email.com" required className="bg-secondary/50 border-none h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Senha</label>
                  <Input type="password" placeholder="••••••••" required className="bg-secondary/50 border-none h-12 rounded-xl" />
                </div>
                <Button className="w-full h-14 rounded-full text-base font-black shadow-xl shadow-primary/20" type="submit" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                  {!isLoading && <LogIn className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="space-y-6 mt-0">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Nome Completo</label>
                  <Input placeholder="João Silva" required className="bg-secondary/50 border-none h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Email</label>
                  <Input type="email" placeholder="exemplo@email.com" required className="bg-secondary/50 border-none h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">Senha</label>
                  <Input type="password" placeholder="••••••••" required className="bg-secondary/50 border-none h-12 rounded-xl" />
                </div>
                <Button className="w-full h-14 rounded-full text-base font-black shadow-xl shadow-primary/20" type="submit" disabled={isLoading}>
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                  {!isLoading && <UserPlus className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-card px-4 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full h-12 rounded-xl border-border/50 bg-secondary/30 font-bold">
              <Github className="mr-2 w-5 h-5" />
              Github
            </Button>
            <Button variant="outline" className="w-full h-12 rounded-xl border-border/50 bg-secondary/30 font-bold">
              <Mail className="mr-2 w-5 h-5" />
              Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
