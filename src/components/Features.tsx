import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiRedux } from 'react-icons/si';
import { HiOutlineTerminal } from 'react-icons/hi';

interface FeaturesProps {
  sectionStyle: React.CSSProperties;
  cardStyle: React.CSSProperties;
  headingStyle: React.CSSProperties;
  containerVariants: any;
  itemVariants: any;
}

const Features: React.FC<FeaturesProps> = ({ 
  sectionStyle, 
  cardStyle, 
  headingStyle,
  containerVariants,
  itemVariants
}) => {
  const features = [
    { 
      icon: <FaReact style={{ fontSize: '2.5rem', color: '#22d3ee' }} />, 
      title: "React Templates", 
      description: "Multiple starter templates for different needs" 
    },
    { 
      icon: <SiTypescript style={{ fontSize: '2.5rem', color: '#3b82f6' }} />, 
      title: "TypeScript/JavaScript", 
      description: "Choose your preferred language" 
    },
    { 
      icon: <HiOutlineTerminal style={{ fontSize: '2.5rem', color: '#4ade80' }} />, 
      title: "Simple Setup", 
      description: "Start with a single command" 
    },
    { 
      icon: <SiRedux style={{ fontSize: '2.5rem', color: '#a855f7' }} />, 
      title: "State Management", 
      description: "Redux Toolkit and Zustand options" 
    }
  ];

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
        Key Features
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto clamp(2rem, 6vw, 4rem)',
          color: '#9ca3af',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          lineHeight: '1.6',
          padding: '0 max(0.5rem, 3%)'
        }}
      >
        Everything you need to build modern React applications
      </motion.p>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 2.5rem)',
          marginBottom: 'clamp(2rem, 6vw, 4rem)'
        }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>{feature.icon}</div>
            <h3 style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
              fontWeight: 'bold', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)' 
            }}>
              {feature.title}
            </h3>
            <p style={{ 
              color: '#9ca3af', 
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'
            }}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features; 