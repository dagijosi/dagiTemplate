import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiReactquery } from 'react-icons/si';

interface TemplatesProps {
  sectionStyle: React.CSSProperties;
  cardStyle: React.CSSProperties;
  headingStyle: React.CSSProperties;
  containerVariants: any;
  itemVariants: any;
}

const Templates: React.FC<TemplatesProps> = ({ 
  sectionStyle, 
  cardStyle, 
  headingStyle,
  containerVariants,
  itemVariants
}) => {
  const templates = [
    { 
      title: "Redux Toolkit + React Query", 
      description: "Complete setup with global state and data fetching", 
      icons: [<FaReact key="react" />, <SiRedux key="redux" />, <SiReactquery key="query" />] 
    },
    { 
      title: "React Query", 
      description: "Lightweight setup for data fetching", 
      icons: [<FaReact key="react" />, <SiReactquery key="query" />] 
    },
    { 
      title: "Zustand + React Query", 
      description: "Modern alternative with simpler state management", 
      icons: [<FaReact key="react" />, <SiReactquery key="query" />] 
    },
    { 
      title: "Redux Toolkit + Redux Saga", 
      description: "Advanced setup for complex async workflows", 
      icons: [<FaReact key="react" />, <SiRedux key="redux" />] 
    }
  ];

  return (
    <section style={{ 
      ...sectionStyle,
      margin: '0 auto clamp(3rem, 8vw, 5rem)',
      padding: 'clamp(2rem, 6vw, 4rem) max(1rem, 5%)',
      backgroundColor: 'rgba(17, 24, 39, 0.4)',
      borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)',
      width: 'calc(100% - max(2rem, 8%))'
    }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={headingStyle}
      >
        Starter Templates
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
          lineHeight: '1.6',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          padding: '0 max(0.5rem, 3%)'
        }}
      >
        Choose the perfect template for your project
      </motion.p>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: 'clamp(1.5rem, 4vw, 2.5rem)'
        }}
      >
        {templates.map((template, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(0.75rem, 2vw, 1rem)', 
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {template.icons.map((icon, i) => (
                <div key={i} style={{ 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                  color: '#22d3ee' 
                }}>
                  {icon}
                </div>
              ))}
            </div>
            <h3 style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
              fontWeight: 'bold', 
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              {template.title}
            </h3>
            <p style={{ 
              color: '#9ca3af', 
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'
            }}>
              {template.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Templates; 