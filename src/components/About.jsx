import React, { useRef, useEffect } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about hidden" ref={aboutRef}>
            <h2>About Me</h2>
            <p>
                I am a creative Frontend Developer with a passion for designing visually appealing and functional websites. 
                I enjoy solving problems through code and continuously improving my frontend skills by working on practical projects. 
                My goal is to build digital experiences that are both user-friendly and impactful.
            </p>
        </section>
    );
};

export default About;
