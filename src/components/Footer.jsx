import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
        <div style={{ marginBottom: '10px' }}>
          <a 
            href="https://www.linkedin.com/in/kashishdureja/" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: '#94a3b8', transition: '0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
            onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            <Linkedin size={24} />
          </a>
        </div>
        © {new Date().getFullYear()} Kashish Dureja | All Rights Reserved
    </footer>
  );
};

export default Footer;
