import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import SubReddit from "./components/SubReddit";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key !== "/") return;

    e.preventDefault();
    setShowSearchBox(!showSearchBox);
  };

  useEffect(() => {
    document.addEventListener("keypress", handleKeyDown);

    return () => {
      document.removeEventListener("keypress", handleKeyDown);
    };
  },[]);

  return (
    <div className="h-100 container-fluid">
      {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox} />}
      <Header />
      <SubReddit />
      <Footer/>
    </div>
  );
}
