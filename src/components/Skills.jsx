import React, { useMemo, useEffect, useRef } from 'react';

const Skills = () => {
    const skills = useMemo(() => [
        'HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design', 'UI/UX Design (Figma)'
    ], []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        const boxes = document.querySelectorAll('.skill-box');
        boxes.forEach(box => observer.observe(box));
        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-box hidden">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
