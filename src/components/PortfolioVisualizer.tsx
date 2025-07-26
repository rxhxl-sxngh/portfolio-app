import { useEffect, useRef } from 'react'
import './PortfolioVisualizer.css'

declare global {
  interface Window {
    THREE: any;
  }
}

class VisualizerEngine {
  scene: any = null
  camera: any = null
  renderer: any = null
  audioContext: AudioContext | null = null
  analyser: AnalyserNode | null = null
  dataArray: Uint8Array | null = null
  audio: HTMLAudioElement | null = null
  isPlaying: boolean = false
  effectsEnabled: boolean = true
  audioEnabled: boolean = false
  mediaSource: MediaElementAudioSourceNode | null = null
  
  // Visual elements
  kaleidoscope: any[] = []
  fractalSpheres: any[] = []
  morphingTunnels: any[] = []
  psychedelicPlanes: any[] = []
  colorShiftingRings: any[] = []
  fluidGeometry: any[] = []
  lightBeams: any[] = []
  tunnelGeometry: any = null
  
  // Animation parameters
  time: number = 0
  bassLevel: number = 0
  midLevel: number = 0
  highLevel: number = 0
  
  // HTML5 Audio integration
  audioElement: HTMLAudioElement | null = null
  
  constructor(container: HTMLElement) {
    this.init(container)
  }

  init(container: HTMLElement) {
    this.setupThreeJS(container)
    this.createVisualElements()
    this.setupAudioElement()
    this.setupEventListeners()
    this.animate()
    
    // Hide loading screen after setup
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) loading.classList.add('hidden')
    }, 2000)
  }

  setupAudioElement() {
    this.audioElement = document.getElementById('audioElement') as HTMLAudioElement
    
    if (this.audioElement) {
      // Set up audio element events
      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true
      })
      
      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false
      })
      
      this.audioElement.addEventListener('ended', () => {
        // Loop the audio
        this.audioElement!.currentTime = 0
        this.audioElement!.play()
      })
      
      // Set audio to loop
      this.audioElement.loop = true
    }
  }

  setupThreeJS(container: HTMLElement) {
    const THREE = window.THREE
    
    // Scene setup
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.Fog(0x000000, 50, 200)

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 200

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0x000000, 1)
    container.appendChild(this.renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.2)
    this.scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x00ffff, 1, 100)
    pointLight.position.set(0, 0, 50)
    this.scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100)
    pointLight2.position.set(0, 0, -50)
    this.scene.add(pointLight2)
  }

  createVisualElements() {
    this.createKaleidoscope()
    this.createFractalSpheres()
    this.createMorphingTunnels()
    this.createPsychedelicPlanes()
    this.createColorShiftingRings()
    this.createFluidGeometry()
    this.createLightBeams()
  }

  createKaleidoscope() {
    const THREE = window.THREE
    
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.PlaneGeometry(30, 100, 32, 32)
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          audioLevel: { value: 0 },
          colorShift: { value: i * 0.1 }
        },
        vertexShader: `
          uniform float time;
          uniform float audioLevel;
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 0.1 + time) * (5.0 + audioLevel * 10.0);
            pos.z += cos(pos.y * 0.1 + time * 1.5) * (3.0 + audioLevel * 8.0);
            vPosition = pos;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float audioLevel;
          uniform float colorShift;
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            float angle = atan(vUv.y - center.y, vUv.x - center.x);
            
            float pattern = sin(dist * 20.0 - time * 2.0) * cos(angle * 8.0 + time);
            pattern += sin(vPosition.z * 0.1 + time) * 0.5;
            
            float hue = colorShift + pattern * 0.3 + audioLevel;
            vec3 color = vec3(
              sin(hue * 6.28) * 0.5 + 0.5,
              sin(hue * 6.28 + 2.09) * 0.5 + 0.5,
              sin(hue * 6.28 + 4.18) * 0.5 + 0.5
            );
            
            gl_FragColor = vec4(color * (0.8 + audioLevel * 0.5), 0.7);
          }
        `,
        transparent: true
      })
      
      const plane = new THREE.Mesh(geometry, material)
      plane.rotation.y = (i / 12) * Math.PI * 2
      plane.position.set(
        Math.cos(plane.rotation.y) * 20,
        0,
        Math.sin(plane.rotation.y) * 20
      )
      this.kaleidoscope.push(plane)
      this.scene.add(plane)
    }
  }

  createFractalSpheres() {
    const THREE = window.THREE
    
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.IcosahedronGeometry(3 + i * 2, 2)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i * 0.125, 1, 0.5),
        transparent: true,
        opacity: 0.6,
        wireframe: true
      })
      
      const sphere = new THREE.Mesh(geometry, material)
      const angle = (i / 8) * Math.PI * 2
      sphere.position.set(
        Math.cos(angle) * (15 + i * 3),
        Math.sin(angle * 0.7) * 10,
        Math.sin(angle) * (15 + i * 3)
      )
      this.fractalSpheres.push(sphere)
      this.scene.add(sphere)
    }
  }

  createMorphingTunnels() {
    const THREE = window.THREE
    
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.CylinderGeometry(5 + i * 5, 8 + i * 6, 60, 16, 8, true)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i * 0.3, 1, 0.4),
        transparent: true,
        opacity: 0.3,
        wireframe: true,
        side: THREE.DoubleSide
      })
      
      const tunnel = new THREE.Mesh(geometry, material)
      tunnel.rotation.x = Math.PI / 2
      tunnel.position.z = i * 20 - 30
      this.morphingTunnels.push(tunnel)
      this.scene.add(tunnel)
    }
  }

  createPsychedelicPlanes() {
    const THREE = window.THREE
    
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.PlaneGeometry(40, 40, 32, 32)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i * 0.16, 1, 0.5),
        transparent: true,
        opacity: 0.4,
        wireframe: true,
        side: THREE.DoubleSide
      })
      
      const plane = new THREE.Mesh(geometry, material)
      plane.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      plane.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 60
      )
      this.psychedelicPlanes.push(plane)
      this.scene.add(plane)
    }
  }

  createColorShiftingRings() {
    const THREE = window.THREE
    
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.TorusGeometry(8 + i * 2, 0.5, 8, 16)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(i * 0.07, 1, 0.6),
        transparent: true,
        opacity: 0.7
      })
      
      const ring = new THREE.Mesh(geometry, material)
      const angle = (i / 15) * Math.PI * 4
      ring.position.set(
        Math.cos(angle) * (20 + i),
        Math.sin(angle * 1.3) * 15,
        Math.sin(angle) * (20 + i)
      )
      ring.rotation.set(
        angle * 0.3,
        angle * 0.5,
        angle * 0.7
      )
      this.colorShiftingRings.push(ring)
      this.scene.add(ring)
    }
  }

  createFluidGeometry() {
    const THREE = window.THREE
    
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.OctahedronGeometry(2 + Math.random() * 3, 1)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
        transparent: true,
        opacity: 0.8
      })
      
      const shape = new THREE.Mesh(geometry, material)
      shape.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 100
      )
      this.fluidGeometry.push(shape)
      this.scene.add(shape)
    }
  }

  createTunnel() {
    const THREE = window.THREE
    
    const geometry = new THREE.CylinderGeometry(60, 60, 200, 32, 1, true)
    const material = new THREE.MeshBasicMaterial({
      color: 0x001122,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
      side: THREE.BackSide
    })
    
    this.tunnelGeometry = new THREE.Mesh(geometry, material)
    this.tunnelGeometry.rotation.x = Math.PI / 2
    this.scene.add(this.tunnelGeometry)
  }

  createLightBeams() {
    const THREE = window.THREE
    
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.ConeGeometry(0.5, 30, 8)
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ffff : 0xff00ff,
        transparent: true,
        opacity: 0.4
      })
      
      const beam = new THREE.Mesh(geometry, material)
      const angle = (i / 8) * Math.PI * 2
      beam.position.x = Math.cos(angle) * 25
      beam.position.y = Math.sin(angle) * 25
      beam.position.z = 0
      beam.lookAt(new window.THREE.Vector3(0, 0, 0))
      
      this.lightBeams.push(beam)
      this.scene.add(beam)
    }
  }

  setupAudio() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.analyser = this.audioContext.createAnalyser()
      this.analyser.fftSize = 512
      
      const bufferLength = this.analyser.frequencyBinCount
      this.dataArray = new Uint8Array(bufferLength)
    }

    // Connect HTML5 audio element to analyser
    if (this.audioElement && !this.mediaSource) {
      this.mediaSource = this.audioContext.createMediaElementSource(this.audioElement)
      this.mediaSource.connect(this.analyser)
      this.analyser.connect(this.audioContext.destination)
    }
  }

  updateAudioData() {
    if (this.analyser && this.isPlaying && this.audioEnabled) {
      this.analyser.getByteFrequencyData(this.dataArray!)
      
      // Calculate frequency bands with better separation for electronic music
      const bassEnd = Math.floor(this.dataArray!.length * 0.1)
      const midEnd = Math.floor(this.dataArray!.length * 0.4)
      
      this.bassLevel = this.getAverage(this.dataArray!.slice(0, bassEnd)) / 255
      this.midLevel = this.getAverage(this.dataArray!.slice(bassEnd, midEnd)) / 255
      this.highLevel = this.getAverage(this.dataArray!.slice(midEnd)) / 255
      
      // Apply some smoothing and boost for better visual response
      this.bassLevel = Math.min(1, this.bassLevel * 1.5)
      this.midLevel = Math.min(1, this.midLevel * 1.2)
      this.highLevel = Math.min(1, this.highLevel * 1.3)
    } else if (this.isPlaying && !this.audioEnabled) {
      // Fallback when audio analysis isn't enabled
      const time = Date.now() * 0.001
      this.bassLevel = (Math.sin(time * 2.1) * 0.5 + 0.5) * 0.8
      this.midLevel = (Math.sin(time * 0.8) * 0.5 + 0.5) * 0.6
      this.highLevel = (Math.sin(time * 3.7) * 0.5 + 0.5) * 0.4
    } else {
      // Gradually fade out levels when not playing
      this.bassLevel *= 0.95
      this.midLevel *= 0.95
      this.highLevel *= 0.95
    }
  }

  getAverage(array: Uint8Array) {
    return array.reduce((sum, value) => sum + value, 0) / array.length
  }

  updateVisuals() {
    this.time += 0.01
    const THREE = window.THREE

    if (this.effectsEnabled) {
      // Update kaleidoscope
      this.kaleidoscope.forEach((plane, index) => {
        // Update shader uniforms
        plane.material.uniforms.time.value = this.time
        plane.material.uniforms.audioLevel.value = this.bassLevel + this.midLevel + this.highLevel
        
        // Rotate and scale based on audio
        plane.rotation.x += 0.01 + this.bassLevel * 0.05
        plane.rotation.z += 0.005 + this.midLevel * 0.03
        plane.scale.setScalar(1 + this.bassLevel * 0.3)
        
        // Dynamic positioning
        const angle = (index / 12) * Math.PI * 2 + this.time * 0.1
        const radius = 20 + this.highLevel * 10
        plane.position.x = Math.cos(angle) * radius
        plane.position.z = Math.sin(angle) * radius
        plane.position.y = Math.sin(this.time + index) * (5 + this.bassLevel * 8)
      })

      // Update fractal spheres
      this.fractalSpheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.02 + this.bassLevel * 0.08
        sphere.rotation.y += 0.01 + this.midLevel * 0.05
        sphere.rotation.z += 0.015 + this.highLevel * 0.06
        
        // Pulsating scale
        const scale = 1 + Math.sin(this.time * 3 + index) * 0.5 + this.bassLevel * 1.2
        sphere.scale.setScalar(scale)
        
        // Color shifting
        const hue = (this.time * 0.1 + index * 0.125 + this.midLevel * 0.5) % 1
        sphere.material.color.setHSL(hue, 1, 0.3 + this.highLevel * 0.4)
        
        // Orbital movement
        const angle = (index / 8) * Math.PI * 2 + this.time * 0.2
        const radius = 15 + index * 3 + this.bassLevel * 15
        sphere.position.x = Math.cos(angle) * radius
        sphere.position.z = Math.sin(angle) * radius
        sphere.position.y = Math.sin(angle * 0.7 + this.time) * (10 + this.midLevel * 10)
      })

      // Update morphing tunnels
      this.morphingTunnels.forEach((tunnel, index) => {
        tunnel.rotation.z += 0.01 + this.bassLevel * 0.08
        tunnel.scale.set(
          1 + this.bassLevel * 0.5,
          1 + this.midLevel * 0.3,
          1 + this.highLevel * 0.4
        )
        tunnel.material.color.setHSL((this.time * 0.05 + index * 0.3) % 1, 1, 0.3 + this.bassLevel * 0.4)
        tunnel.material.opacity = 0.3 + this.midLevel * 0.5
      })

      // Update psychedelic planes
      this.psychedelicPlanes.forEach((plane, index) => {
        plane.rotation.x += 0.005 + this.bassLevel * 0.02
        plane.rotation.y += 0.008 + this.midLevel * 0.03
        plane.rotation.z += 0.003 + this.highLevel * 0.015
        
        // Morphing geometry
        const positions = plane.geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i]
          const y = positions[i + 1]
          positions[i + 2] = Math.sin(x * 0.1 + this.time + index) * (2 + this.bassLevel * 5) +
                            Math.cos(y * 0.1 + this.time * 1.3) * (1 + this.midLevel * 3)
        }
        plane.geometry.attributes.position.needsUpdate = true
        
        plane.material.color.setHSL((this.time * 0.08 + index * 0.16) % 1, 1, 0.4 + this.highLevel * 0.3)
      })

      // Update color shifting rings
      this.colorShiftingRings.forEach((ring, index) => {
        ring.rotation.x += 0.02 + this.bassLevel * 0.05
        ring.rotation.y += 0.015 + this.midLevel * 0.04
        ring.rotation.z += 0.01 + this.highLevel * 0.03
        
        const scale = 1 + Math.sin(this.time * 2 + index * 0.4) * 0.3 + this.bassLevel * 0.7
        ring.scale.setScalar(scale)
        
        // Intense color cycling
        const hue = (this.time * 0.2 + index * 0.07 + this.midLevel) % 1
        ring.material.color.setHSL(hue, 1, 0.5 + this.highLevel * 0.4)
        ring.material.opacity = 0.6 + this.bassLevel * 0.4
      })

      // Update fluid geometry
      this.fluidGeometry.forEach((shape, index) => {
        shape.rotation.x += (0.01 + this.bassLevel * 0.04) * (index % 3 + 1)
        shape.rotation.y += (0.02 + this.midLevel * 0.06) * (index % 4 + 1)
        shape.rotation.z += (0.015 + this.highLevel * 0.05) * (index % 5 + 1)
        
        // Chaotic movement
        shape.position.x += Math.sin(this.time + index) * (0.5 + this.bassLevel * 2)
        shape.position.y += Math.cos(this.time * 1.3 + index) * (0.3 + this.midLevel * 1.5)
        shape.position.z += Math.sin(this.time * 0.7 + index) * (0.4 + this.highLevel * 1.2)
        
        // Reset position if too far
        if (shape.position.length() > 80) {
          shape.position.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 40
          )
        }
        
        // Rapid color changes
        const hue = (this.time * 0.3 + index * 0.05) % 1
        shape.material.color.setHSL(hue, 1, 0.4 + (this.bassLevel + this.midLevel + this.highLevel) * 0.2)
      })

      // Update tunnel
      if (this.tunnelGeometry) {
        this.tunnelGeometry.rotation.z += 0.005 + this.bassLevel * 0.02
        this.tunnelGeometry.material.opacity = 0.1 + this.highLevel * 0.2
      }

      // Update light beams
      this.lightBeams.forEach((beam, index) => {
        const angle = (index / this.lightBeams.length) * Math.PI * 2 + this.time
        beam.position.x = Math.cos(angle) * (25 + this.bassLevel * 10)
        beam.position.y = Math.sin(angle) * (25 + this.bassLevel * 10)
        beam.material.opacity = 0.4 + this.highLevel * 0.4
        beam.scale.y = 1 + this.midLevel * 2
      })

      // Intense camera movement
      this.camera.position.x = Math.sin(this.time * 0.3 + this.bassLevel) * (25 + this.bassLevel * 30)
      this.camera.position.y = Math.cos(this.time * 0.2 + this.midLevel) * (20 + this.midLevel * 25)
      this.camera.position.z = 200 + Math.sin(this.time * 0.1) * (40 + this.highLevel * 50)
      
      // Camera rotation based on audio
      this.camera.rotation.z = Math.sin(this.time + this.bassLevel) * 0.1
      this.camera.lookAt(
        Math.sin(this.time * 0.5) * this.midLevel * 10,
        Math.cos(this.time * 0.3) * this.highLevel * 8,
        0
      )
    }
  }

  setupEventListeners() {
    // Resize handler
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // Audio permission button
    const enableAudioBtn = document.getElementById('enableAudio')
    if (enableAudioBtn) {
      enableAudioBtn.addEventListener('click', () => {
        this.audioEnabled = true
        this.setupAudio()
        const audioPermission = document.getElementById('audioPermission')
        if (audioPermission) audioPermission.classList.add('hidden')
        
        // Auto-start the music
        if (this.audioContext?.state === 'suspended') {
          this.audioContext.resume().then(() => {
            this.audioElement?.play()
          })
        } else {
          this.audioElement?.play()
        }
      })
    }

    // Click anywhere to start (fallback)
    document.addEventListener('click', (e) => {
      if (!this.audioEnabled && !(e.target as Element)?.closest('#audioPermission')) {
        // Show audio permission prompt
        const audioPermission = document.getElementById('audioPermission')
        if (audioPermission) audioPermission.classList.remove('hidden')
      }
    }, { once: true })
  }

  animate() {
    requestAnimationFrame(() => this.animate())
    
    this.updateAudioData()
    this.updateVisuals()
    this.renderer.render(this.scene, this.camera)
  }

  destroy() {
    if (this.renderer) {
      this.renderer.dispose()
    }
    if (this.audioContext) {
      this.audioContext.close()
    }
  }
}

const PortfolioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const visualizerRef = useRef<VisualizerEngine | null>(null)

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
          <div style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.8 }}>EXPERIENCE</div>
        </div>

        <audio id="audioElement" preload="auto" style={{ display: 'none' }}>
          <source src="Fade Together.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="audio-permission" id="audioPermission">
          <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>🎵 AUDIO VISUALIZER</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '10px' }}>
            The music will start automatically and loop continuously.<br />
            The 3D visuals will react to the real audio frequencies.
          </div>
          <button id="enableAudio">ENABLE VISUAL EXPERIENCE</button>
        </div>

        <div className="loading" id="loading">
          <div>INITIALIZING VISUAL ENGINE</div>
          <div className="loading-spinner"></div>
          <div style={{ fontSize: '1rem', opacity: 0.7 }}>Loading complete - Use audio player to start music</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioVisualizer