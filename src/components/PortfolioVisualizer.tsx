import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import VisualizerEngine from './VisualizerEngine'
import Navigation from './Navigation'
import ContentSections from './ContentSections'
import './PortfolioVisualizer.css'

const PortfolioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const visualizerRef = useRef<VisualizerEngine | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Sync URL path with activeSection state
  useEffect(() => {
    const path = location.pathname
    if (path === '/' || path === '') {
      setActiveSection(null)
    } else {
      const pathParts = path.substring(1).split('/') // Remove leading '/' and split
      const section = pathParts[0]
      const validSections = ['about', 'projects', 'experience', 'writing']
      if (validSections.includes(section)) {
        setActiveSection(section)
      }
    }
  }, [location.pathname])

  // Handle section changes - update URL without page reload
  const handleSectionChange = (section: string | null) => {
    setActiveSection(section)
    if (section) {
      navigate(`/${section}`, { replace: false })
    } else {
      navigate('/', { replace: false })
    }
  }

  useEffect(() => {
    // Load Three.js
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => {
      if (canvasRef.current) {
        visualizerRef.current = new VisualizerEngine(canvasRef.current)
      }
    }
    document.head.appendChild(script)

    return () => {
      if (visualizerRef.current) {
        visualizerRef.current.destroy()
      }
      // Clean up script
      const existingScript = document.querySelector('script[src*="three.min.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="portfolio-visualizer">
      <div ref={canvasRef} id="canvas-container"></div>

      <div id="ui-overlay">
        <div className="portfolio-header">
          <div>Rahul Singh</div>
          <div style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.8 }}>CRAFT EXPERIENCES WORTH REMEMBERING.</div>
        </div>
        
        <Navigation onSectionChange={handleSectionChange} />

        <ContentSections activeSection={activeSection} onClose={() => handleSectionChange(null)} />

        <audio id="audioElement" preload="auto" style={{ display: 'none' }}>
          <source src="Fade Together.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="audio-permission-overlay" id="audioPermissionOverlay">
          <div className="audio-permission" id="audioPermission">
            <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🎵 WELCOME TO MY PAGE</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '10px' }}>
              Best experienced with sound on.<br />
            </div>
            <button id="enableAudio">MEET ME</button>
          </div>
        </div>

        <div className="loading" id="loading">
          <div>INITIALIZING VISUAL ENGINE</div>
          <div className="loading-spinner"></div>
          <div style={{ fontSize: '1rem', opacity: 0.7 }}>Loading complete - listening for audio...</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioVisualizer