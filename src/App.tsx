import { Header } from "./components/header";
import { PersonInfo } from "./components/header/personInfo";
import { ProjectsSection } from "./components/header/projects";
import { Skills } from "./components/header/skills";
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
