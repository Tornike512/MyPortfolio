import { Header } from "./components/header";
import { PersonInfo } from "./components/header/personInfo";

function App() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <PersonInfo />
    </main>
  );
}

export default App;
