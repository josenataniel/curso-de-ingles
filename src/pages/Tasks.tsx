import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, CheckCircle2, ListTodo, Clock, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: "Alta" | "Média" | "Baixa";
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finalizar projeto de eletricidade - Casa Silva", completed: false, priority: "Alta" },
    { id: 2, text: "Enviar orçamento de marketing digital para Alfa Corp", completed: true, priority: "Média" },
    { id: 3, text: "Manutenção mensal dos servidores TI", completed: false, priority: "Alta" },
    { id: 4, text: "Preparar material para curso de Excel", completed: false, priority: "Baixa" },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, priority: "Média" }]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-primary">
            <ListTodo className="w-8 h-8" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Workspace</span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter">Minhas Tarefas</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tasks.length} tarefas</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> {completedCount} concluídas</span>
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Input 
            placeholder="Adicionar nova tarefa..." 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="bg-secondary/50 border-none h-12 rounded-xl md:w-64"
          />
          <Button onClick={addTask} size="icon" className="h-12 w-12 rounded-xl shadow-lg shadow-primary/20">
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="bg-card/40 rounded-[2rem] border border-border/50 overflow-hidden">
        <div className="grid grid-cols-[48px_1fr_120px_48px] gap-4 px-6 py-4 border-b border-border/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          <div className="text-center">#</div>
          <div>Título da Tarefa</div>
          <div className="hidden md:block">Prioridade</div>
          <div className="text-center">Ação</div>
        </div>

        <div className="divide-y divide-border/30">
          <AnimatePresence initial={false}>
            {tasks.map((task, index) => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`grid grid-cols-[48px_1fr_120px_48px] gap-4 px-6 py-4 items-center hover:bg-secondary/30 transition-colors group ${task.completed ? "opacity-50" : ""}`}
              >
                <div className="text-center text-xs font-bold text-muted-foreground group-hover:hidden">
                  {index + 1}
                </div>
                <div className="hidden group-hover:flex justify-center">
                  <Checkbox 
                    checked={task.completed} 
                    onCheckedChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded-md border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                </div>
                
                <div className={`text-sm font-bold truncate ${task.completed ? "line-through" : ""}`}>
                  {task.text}
                </div>

                <div className="hidden md:block">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                    task.priority === "Alta" ? "bg-destructive/10 text-destructive" :
                    task.priority === "Média" ? "bg-primary/10 text-primary" :
                    "bg-secondary text-muted-foreground"
                  }`}>
                    {task.priority}
                  </span>
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {tasks.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="font-bold">Tudo limpo!</p>
              <p className="text-xs text-muted-foreground">Você não tem tarefas pendentes no momento.</p>
            </div>
          </div>
        )}
      </div>

      {/* Productivity Tip */}
      <Card className="border-none bg-secondary/30 p-6 rounded-3xl flex items-center gap-6">
        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
          <Calendar className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm">Dica de Produtividade</h4>
          <p className="text-xs text-muted-foreground">Tente focar em apenas 3 tarefas principais por dia para manter o ritmo constante.</p>
        </div>
      </Card>
    </div>
  );
}
