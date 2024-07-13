import { Header } from "./components/header";
import { PersonInfo } from "./components/header/personInfo";
import { Skills } from "./components/header/skills";

function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <PersonInfo />/
      <Skills />
    </main>
  );
}

export default App;
