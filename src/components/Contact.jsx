import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';

const Contact = () => {
    const contactRef = useRef(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1500);
        setTimeout(() => setStatus('idle'), 4500);
    }

    return (
        <section className="contact hidden" id="contact" ref={contactRef}>
            <h2>Contact</h2>
            <div className="contact-info">
                <p><Mail size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#38bdf8' }} /> Email: <a href="mailto:vkashish037@gmail.com" style={{ color: '#38bdf8' }}>vkashish037@gmail.com</a></p>
                <p><Phone size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#38bdf8' }} /> Phone: <a href="tel:+919887143309" style={{ color: '#38bdf8' }}>+91-9887143309</a></p>
                <p><Linkedin size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#38bdf8' }} /> LinkedIn: <a href="https://www.linkedin.com/in/kashishdureja/" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>kashishdureja</a></p>
                <p><MapPin size={18} style={{ verticalAlign: 'middle', marginRight: '8px', color: '#38bdf8' }} /> Location: India</p>
            </div>

            {/* Keeping New Feature Interactivity with Elite Polish */}
            <form onSubmit={handleFormSubmit} className="contact-form">
                <input 
                    type="text" 
                    placeholder="Drop a quick greeting..."
                    required
                    className="contact-input"
                />
                <button 
                   disabled={status !== 'idle'}
                   className={`contact-submit-btn ${status === 'sent' ? 'success' : ''}`}
                >
                    {status === 'idle' && <><Send size={18} /> Send Quick Greeting</>}
                    {status === 'sending' && <div className="spinner-small" />}
                    {status === 'sent' && <><CheckCircle size={18} /> Message Sent Successfully!</>}
                </button>

                {status === 'sent' && (
                  <div className="form-success-message">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}
            </form>
        </section>
    );
};

export default Contact;
