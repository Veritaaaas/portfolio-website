import Landing_page from "./components/landing_page/Landing_page.jsx";
import About from "./components/tools/About.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0}>
        <Landing_page />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.6}>
        <About />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;