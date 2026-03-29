import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // New Feature: Scroll Progress Logic
    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className="portfolio-wrapper">
            <div 
                className="scroll-progress" 
                style={{ width: `${scrollProgress}%` }} 
            />
            
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            
            <Footer />
        </div>
    );
};

export default App;
