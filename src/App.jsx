import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Video from "./components/Video";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Experience />
      <Footer />
      <CursorGlow />
    </>
  );
}
