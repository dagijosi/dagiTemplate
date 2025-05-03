import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaReact } from 'react-icons/fa';

interface HeroProps {
  sectionStyle: React.CSSProperties;
}

const Hero: React.FC<HeroProps> = ({ sectionStyle }) => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      ...sectionStyle,
      padding: 'clamp(3rem, 10vh, 6rem) max(1rem, 5%)',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'
        }}
      >
        <FaReact style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          color: '#22d3ee' 
        }} />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ 
          fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
          fontWeight: 'bold',
          marginBottom: 'clamp(1rem, 3vw, 2rem)',
          background: 'linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.1'
        }}
      >
        react-dagis
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ 
          fontSize: 'clamp(1.125rem, 3vw, 1.75rem)',
          color: '#d1d5db',
          maxWidth: '42rem',
          margin: '0 auto clamp(2rem, 6vw, 3.5rem)',
          lineHeight: '1.5',
          padding: '0 max(0.5rem, 3%)'
        }}
      >
        Generate React starter projects in seconds with your preferred stack
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{
          padding: 'clamp(1.25rem, 3vw, 1.75rem)',
          marginBottom: 'clamp(2rem, 6vw, 3.5rem)',
          backgroundColor: 'rgba(31, 41, 55, 0.5)',
          borderRadius: '1rem',
          border: '1px solid #374151',
          maxWidth: '42rem',
          margin: '0 auto clamp(2rem, 6vw, 3.5rem)',
          backdropFilter: 'blur(8px)',
          width: 'calc(100% - max(1rem, 5%))'
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '1rem' 
        }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '9999px', backgroundColor: '#ef4444' }}></div>
            <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '9999px', backgroundColor: '#eab308' }}></div>
            <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '9999px', backgroundColor: '#22c55e' }}></div>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Terminal</div>
        </div>
        <pre style={{ 
          textAlign: 'left', 
          overflowX: 'auto', 
          padding: 'clamp(1rem, 3vw, 1.25rem)', 
          backgroundColor: '#111827',
          borderRadius: '0.5rem',
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'
        }}>
          <code style={{ color: '#d1d5db' }}>
            <span style={{ color: '#4ade80' }}>$</span> npx react-dagis
          </code>
        </pre>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCTA ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href="https://github.com/dagijosi/react-template" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: '600',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #06b6d4, #2563eb)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
            transition: 'all 200ms',
            transform: 'scale(1)',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'linear-gradient(to right, #0891b2, #1d4ed8)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'linear-gradient(to right, #06b6d4, #2563eb)';
          }}
        >
          <FaGithub style={{ marginRight: '0.75rem', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }} /> Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 