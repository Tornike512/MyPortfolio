import { Header } from "./components/header";
import { PersonInfo } from "./components/personInfo";
import { ProjectsSection } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <PersonInfo />/
      <Skills />
      <ProjectsSection />
      <Contact />
    </main>
  );
}

export default App;
