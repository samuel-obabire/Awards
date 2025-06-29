import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Features from "./components/Features.tsx";

const App = () => {
    return <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero/>
        <About/>
        <Features/>
    </main>
}

export default App
