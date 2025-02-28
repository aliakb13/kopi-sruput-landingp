import { useContext, createContext } from "react";
// import Header from "./Header";
import HeroSection from "./HeroSection";
import Intro from "./Intro";
import BestSeller from "./BestSeller";
// import Footer from "./Footer";
import getData from "@/utils/data";
import { Data } from "@/types/types";

const dataContext = createContext<Data[] | null>(null);

const Home = () => {
  const data = getData();

  return (
    <dataContext.Provider value={data}>
      <HeroSection />
      <Intro />
      <BestSeller />
    </dataContext.Provider>
  );
};

export function useData() {
  return useContext(dataContext);
}

export default Home;
