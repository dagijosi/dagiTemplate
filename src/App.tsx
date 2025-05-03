import './App.css'

// Import components
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Templates from './components/Templates'
import QuickStart from './components/QuickStart'
import Footer from './components/Footer'

function App() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  // Common styles for responsive sizing
  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem max(1rem, 5%)'
  }

  const cardStyle = {
    backgroundColor: 'rgba(31, 41, 55, 0.6)',
    backdropFilter: 'blur(8px)',
    border: '1px solid #374151',
    borderRadius: '1rem',
    padding: 'clamp(1.5rem, 5%, 2.5rem)',
    transition: 'all 300ms',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const
  }

  const headingStyle = {
    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
    textAlign: 'center' as const,
    background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #111827, #1f2937, #000000)',
      color: 'white',
      overflowX: 'hidden'
    }}>
      <Hero sectionStyle={sectionStyle} />
      
      <Benefits 
        sectionStyle={sectionStyle} 
        cardStyle={cardStyle} 
        headingStyle={headingStyle} 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />
      
      <Features 
        sectionStyle={sectionStyle} 
        cardStyle={cardStyle} 
        headingStyle={headingStyle} 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />
      
      <Templates 
        sectionStyle={sectionStyle} 
        cardStyle={cardStyle} 
        headingStyle={headingStyle} 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />
      
      <QuickStart 
        sectionStyle={sectionStyle} 
        headingStyle={headingStyle} 
      />
      
      <Footer />
    </div>
  )
}

export default App
