import React, { useState, useMemo, useEffect } from 'react';

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);

    const projects = useMemo(() => [
        {
            title: "Rajasthan:A Digital Chronicle",
            description: "Preserving the Architectural and Cultural Grandeur of the Land of King using HTML,CSS And JS.",
            link: "https://rajasthan-heritage.netlify.app",
            code: "https://github.com/kashisharora-dav/Rajasthan-Map.git",
            skills: ["HTML", "CSS", "JS", "SVG", "Responsive", "Interactive Design"]
        },
        {
            title: "Amazon E-commerce Clone",
            description: "Built a responsive Amazon clone using HTML And CSS to practice e-commerce UI design.",
            link: "https://amazonprojct.netlify.app",
            code: "https://github.com/kashisharora-dav/Amazon-clone.git",
            skills: ["HTML", "CSS", "JS"]
        },
        {
            title: "AI Agency Landing Page",
            description: "Designed a modern AI agency website showcasing services, features and responsive layout.",
            link: "https://lazarevpro.netlify.app",
            skills: ["HTML", "CSS", "JS", "Interactive Design", "Smooth Animation"]
        },
        {
            title: "Personal Portfolio",
            description: "Developed a modern, responsive React-based portfolio to showcase frontend expertise.",
            link: "#", // Current site
            skills: ["React.js", "HTML", "CSS", "JS", "Responsive", "Interactive Design"]
        }
    ], []);

    // Get all unique skills for filter chips
    const allSkills = useMemo(() => {
        const skillsCount = new Set();
        projects.forEach(p => p.skills.forEach(s => skillsCount.add(s)));
        return Array.from(skillsCount).sort();
    }, [projects]);

    const toggleSkill = (skill) => {
        setSelectedSkills(prev => 
            prev.includes(skill) 
                ? prev.filter(s => s !== skill) 
                : [...prev, skill]
        );
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSkills = selectedSkills.length === 0 || 
                selectedSkills.every(s => project.skills.includes(s));
            return matchesSearch && matchesSkills;
        });
    }, [searchTerm, selectedSkills, projects]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, [filteredProjects]);

    return (
        <section id="Projects">
            <h2>Projects</h2>
            
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by title..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Elite Feature: Multi-select Skill Filters */}
            <div className="filter-container">
                <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: 'gray' }}>Filter by Skills:</p>
                <div className="skill-filters">
                    {allSkills.map(skill => (
                        <button 
                            key={skill} 
                            onClick={() => toggleSkill(skill)}
                            className={`filter-chip ${selectedSkills.includes(skill) ? 'active' : ''}`}
                        >
                            {skill}
                        </button>
                    ))}
                    {selectedSkills.length > 0 && (
                        <button className="clear-filter" onClick={() => setSelectedSkills([])}>
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card hidden">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                        {/* Skill Tags on Card */}
                        <div className="card-tags">
                            {project.skills.map(s => (
                                <span key={s} className="tag">{s}</span>
                            ))}
                        </div>

                        <div className="project-btns">
                            <a href={project.link} target="_blank" rel="noreferrer" className="btn-view">
                                View Project
                            </a>
                            {project.code && (
                                <a href={project.code} target="_blank" rel="noreferrer" className="btn-code">
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {filteredProjects.length === 0 && (
                <p style={{ textAlign: 'center', color: 'gray', marginTop: '40px' }}>
                    No matching projects found.
                </p>
            )}
        </section>
    );
};

export default Projects;
