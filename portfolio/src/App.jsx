import Landing_page from "./components/landing_page/Landing_page.jsx";
import About from "./components/tools/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <Parallax pages={4.5}>
      <ParallaxLayer offset={0}>
        <Landing_page />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.4}>
        <About />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.7}>
        <Projects />
      </ParallaxLayer>
      <ParallaxLayer offset={3.9} speed={0}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;