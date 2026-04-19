/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AppProvider } from "./context/AppContext";
import { Layout } from "./components/Layout";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import Articles from "./pages/Articles";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="muiomba-theme">
      <AppProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/team" element={<Team />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Layout>
          <Toaster position="top-center" richColors />
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

