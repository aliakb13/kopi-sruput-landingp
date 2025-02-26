import { createContext, useContext } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import getData from "./utils/data";
import { Data } from "./types/types";

const dataContext = createContext<Data[] | null>(null);

function App() {
  // const [count, setCount] = useState(0);
  const data = getData();

  return (
    <dataContext.Provider value={data}>
      <Header />
      <HeroSection />
      <Intro />
      <BestSeller />
      <Footer />
    </dataContext.Provider>
  );
}

export function useData() {
  return useContext(dataContext);
}

export default App;
