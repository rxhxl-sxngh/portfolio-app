import { useEffect, useRef, useState } from 'react'
import VisualizerEngine from './VisualizerEngine'
import Navigation from './Navigation'
import ContentSections from './ContentSections'
import './PortfolioVisualizer.css'

const PortfolioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const visualizerRef = useRef<VisualizerEngine | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)

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
        
        <Navigation onSectionChange={setActiveSection} />

        <ContentSections activeSection={activeSection} onClose={() => setActiveSection(null)} />

        <audio id="audioElement" preload="auto" style={{ display: 'none' }}>
          <source src="Fade Together.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="audio-permission" id="audioPermission">
          <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🎵 WELCOME TO MY PAGE</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '10px' }}>
            Best experienced with sound on.<br />
          </div>
          <button id="enableAudio">MEET ME</button>
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