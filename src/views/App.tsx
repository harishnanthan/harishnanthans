import { Outlet, Route, Routes } from "react-router-dom";

import Navigation from "../components/Navigation";
import Home from "./Home";
import AboutMe from "./AboutMe";

import Works from "./Works";
import Footer from "../components/Footer";
import Projects from "./Projects";
import { useEffect } from "react";
import Contact from "./Contact";

const App: React.FunctionComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://sdk.flowpoint.ai?apiKey=t_0b8b853dc7a125d71f00480008f7fa05&clientId=vwMB0LDzlGurpdWS5gaZXH93blKi06";

    script.async = true;

    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Home />
              <Works />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <AboutMe />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="*" element={<>No Match</>} />
      </Route>
    </Routes>
  );
};

const Layout: React.FunctionComponent = () => (
  <div>
    <Navigation />
    <Outlet />
    <Footer />
  </div>
);

export default App;
