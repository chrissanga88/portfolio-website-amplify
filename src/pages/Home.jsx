import Experience from "../components/experience/Experience";
import Hero from "../components/hero/Hero";

function HomePage() {
  return (
    <main className="bg-black pb-4 pb-md-5">
      <Hero />
      <Experience />
    </main>
  )
}

export default HomePage;