import { useEffect, useState } from "react";
import "./app.scss";
import Email from "./components/Email";
import Icons from "./components/Icons";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Works from "./pages/Works";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [2000]);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <div class="force-overflow"></div>
      <Navbar />
      <Landing />
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Works /> */}
      {/* <Contact /> */}
      {/* <Icons /> */}
      {/* <Email /> */}
    </div>
  );
}

export default App;
