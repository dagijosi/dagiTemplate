import { FaGithub, FaNpm } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#111827',
      padding: 'clamp(3rem, 8vw, 4rem) 0 clamp(2rem, 5vw, 3rem)',
      borderTop: '1px solid #1f2937'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 max(1rem, 5%)', 
        textAlign: 'center' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(1.5rem, 4vw, 2rem)', 
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
        }}>
          <a 
            href="https://github.com/dagijosi/react-template" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#9ca3af', transition: 'color 150ms' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
          >
            <FaGithub style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }} />
          </a>
          <a 
            href="https://www.npmjs.com/package/react-dagis" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#9ca3af', transition: 'color 150ms' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'white'}
            onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
          >
            <FaNpm style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }} />
          </a>
        </div>
        <p style={{ 
          color: '#9ca3af', 
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
          marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
        }}>
          Built with <span style={{ color: '#ef4444' }}>❤️</span> by{" "}
          <a 
            href="https://github.com/dagijosi" 
            style={{ color: '#22d3ee' }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Dagmawi Yoseph
          </a>
        </p>
        <p style={{ 
          color: '#6b7280', 
          fontSize: 'clamp(0.875rem, 2vw, 1rem)', 
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
        }}>
          MIT © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer; 