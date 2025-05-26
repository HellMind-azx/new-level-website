import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';

export default function Home() {
  return (
    <div className="home-wrapper-page">
      <Hero />
      <About />
      <Benefits />
    </div>)
}