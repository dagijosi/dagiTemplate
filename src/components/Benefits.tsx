import { motion } from 'framer-motion';
import { FaCog, FaRocket, FaDownload } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

interface BenefitsProps {
  sectionStyle: React.CSSProperties;
  cardStyle: React.CSSProperties;
  headingStyle: React.CSSProperties;
  containerVariants: any;
  itemVariants: any;
}

const Benefits: React.FC<BenefitsProps> = ({ 
  sectionStyle, 
  cardStyle, 
  headingStyle,
  containerVariants,
  itemVariants
}) => {
  const benefits = [
    { 
      title: "Lightning Fast Setup", 
      description: "Get your project running in seconds, not minutes",
      icon: <FaRocket style={{ fontSize: '2.5rem', color: '#22d3ee' }} />
    },
    { 
      title: "Best Practice Architecture", 
      description: "Modern patterns for scalable apps",
      icon: <FaCog style={{ fontSize: '2.5rem', color: '#3b82f6' }} />
    },
    { 
      title: "Ready for Production", 
      description: "Built on Vite for optimized performance",
      icon: <SiVite style={{ fontSize: '2.5rem', color: '#a855f7' }} />
    },
    { 
      title: "No Dependencies Bloat", 
      description: "Only what you need, nothing more",
      icon: <FaDownload style={{ fontSize: '2.5rem', color: '#4ade80' }} />
    },
  ];

  return (
    <section style={{ 
      ...sectionStyle,
      margin: 'clamp(2rem, 6vw, 5rem) auto',
      padding: 'clamp(2rem, 6vw, 4rem) max(1rem, 5%)',
      backgroundColor: 'rgba(17, 24, 39, 0.5)',
      borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)',
      width: 'calc(100% - max(2rem, 8%))'
    }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={headingStyle}
      >
        Why Choose react-dagis?
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 2.5rem)'
        }}
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.9)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              {benefit.icon}
            </div>
            <h3 style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
              fontWeight: 'bold', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)' 
            }}>
              {benefit.title}
            </h3>
            <p style={{ 
              color: '#9ca3af', 
              lineHeight: '1.6', 
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' 
            }}>
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits; 