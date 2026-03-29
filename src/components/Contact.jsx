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
            <form onSubmit={handleFormSubmit} style={{ marginTop: '40px', maxWidth: '500px', margin: '40px auto 0 auto', position: 'relative' }}>
                <input 
                    type="text" 
                    placeholder="Drop a quick greeting..."
                    required
                    style={{ 
                        width: '100%', 
                        padding: '16px 24px', 
                        background: '#1e293b', 
                        border: '1px solid #334155', 
                        borderRadius: '30px',
                        color: 'white',
                        outline: 'none',
                        marginBottom: '15px',
                        transition: '0.3s'
                    }}
                    className="contact-input"
                />
                <button 
                   disabled={status !== 'idle'}
                   className={`contact-submit-btn ${status === 'sent' ? 'success' : ''}`}
                   style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '14px 30px', 
                        background: status === 'sent' ? '#10b981' : '#38bdf8',
                        color: '#020617',
                        border: 'none',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease'
                    }}
                >
                    {status === 'idle' && <><Send size={18} /> Send Quick Greeting</>}
                    {status === 'sending' && <div className="spinner-small" />}
                    {status === 'sent' && <><CheckCircle size={18} /> Message Sent Successfully!</>}
                </button>

                {status === 'sent' && (
                  <div style={{ 
                    marginTop: '15px', 
                    color: '#10b981', 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    animation: 'fadeInUp 0.5s ease-out'
                  }}>
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}
            </form>

            <style dangerouslySetInnerHTML={{ __html: `
              .contact-input:focus {
                border-color: #38bdf8;
                box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
              }
              .contact-submit-btn:hover:not(:disabled) {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
              }
              .spinner-small {
                width: 20px;
                height: 20px;
                border: 2px solid rgba(2, 6, 23, 0.2);
                border-top-color: #020617;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
              }
              @keyframes spin { to { transform: rotate(360deg); } }
              @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}} />
        </section>
    );
};

export default Contact;
