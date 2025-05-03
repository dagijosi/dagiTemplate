import { motion } from 'framer-motion';

interface QuickStartProps {
  sectionStyle: React.CSSProperties;
  headingStyle: React.CSSProperties;
}

const QuickStart: React.FC<QuickStartProps> = ({ sectionStyle, headingStyle }) => {
  return (
    <section style={{ 
      ...sectionStyle,
      margin: '0 auto clamp(3rem, 8vw, 5rem)'
    }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={headingStyle}
      >
        🚀 Quick Start
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ 
          maxWidth: '48rem', 
          margin: '0 auto',
          width: 'calc(100% - max(1rem, 5%))'
        }}
      >
        <div style={{
          padding: 'clamp(1.5rem, 4vw, 2rem)',
          backgroundColor: 'rgba(31, 41, 55, 0.5)',
          borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
          border: '1px solid #374151',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: 'clamp(1rem, 3vw, 1.25rem)'
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
            padding: 'clamp(1rem, 3vw, 1.5rem)', 
            backgroundColor: '#111827',
            borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            lineHeight: '1.75'
          }}>
            <code style={{ color: '#d1d5db' }}>
              <div><span style={{ color: '#4ade80' }}>$</span> npx react-dagis</div>
              <div style={{ color: '#6b7280' }}># Follow the prompts</div>
              <div><span style={{ color: '#4ade80' }}>$</span> cd my-app</div>
              <div><span style={{ color: '#4ade80' }}>$</span> npm run dev</div>
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStart; 