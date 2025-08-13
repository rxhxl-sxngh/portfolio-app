import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import scaffoldingImage from '../assets/scaffolding.svg'
import scaffolding2Image from '../assets/Scaffolding2.webp'
import scaffolding3Image from '../assets/Scaffolding3.webp'
import scaffolding4Image from '../assets/Scaffolding4.webp'
import scaffolding5Image from '../assets/Scaffolding5.webp'
import scaffolding6Image from '../assets/Scaffolding6.webp'
import baseballImage from '../assets/baseball-diagram.webp'
import baseballImage2 from '../assets/baseball-diagram2.webp'
import baseballImage3 from '../assets/baseball-diagram3.webp'
import baseballImage4 from '../assets/baseball-diagram4.webp'
import baseballImage5 from '../assets/baseball-diagram5.webp'
import baseballImage6 from '../assets/baseball-diagram6.webp'
import robotImage from '../assets/maze-robot.png'
import lidarMapping from '../assets/lidar-mapping.gif'
import bezierCurves from '../assets/bezier-curves.webp'
import pathPlanning from '../assets/path-planning.webp'
import jetsonNano from '../assets/jetson-nano.webp'
import vonsvision from '../assets/vonsvision.jpg'
import leadership1 from '../assets/leadership1.jpg'
import leadership2 from '../assets/leadership2.jpg'
import hospice from '../assets/hospice.png'

interface ContentSectionsProps {
  activeSection: string | null
  onClose: () => void
}

const ContentSections: React.FC<ContentSectionsProps> = ({ activeSection, onClose }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [expandedExperience, setExpandedExperience] = React.useState<string | null>(null)
  const [activeProject, setActiveProject] = React.useState<string | null>(null)
  const [activeWriting, setActiveWriting] = React.useState<string | null>(null)
  const [isFullScreen, setIsFullScreen] = React.useState<boolean>(false)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Sync URL with activeProject and activeWriting
  React.useEffect(() => {
    const pathParts = location.pathname.substring(1).split('/')
    const section = pathParts[0]
    const subsection = pathParts[1]

    if (section === 'projects' && subsection) {
      const validProjects = ['scaffolding-project', 'baseball-analytics', 'maze-robot']
      if (validProjects.includes(subsection)) {
        setActiveProject(subsection)
      }
    } else if (section === 'projects') {
      setActiveProject(null)
    }

    if (section === 'writing' && subsection) {
      const validWritings = ['personal-growth', 'giving-back']
      if (validWritings.includes(subsection)) {
        setActiveWriting(subsection)
      }
    } else if (section === 'writing') {
      setActiveWriting(null)
    }
  }, [location.pathname])
  
  // Reset activeProject when switching sections or closing
  React.useEffect(() => {
    if (activeSection !== 'projects') {
      setActiveProject(null)
    }
  }, [activeSection])
  
  // Reset activeWriting when switching sections or closing
  React.useEffect(() => {
    if (activeSection !== 'writing') {
      setActiveWriting(null)
    }
  }, [activeSection])
  
  // Reset fullscreen when switching sections or closing
  React.useEffect(() => {
    setIsFullScreen(false)
  }, [activeSection])

  // Helper functions for navigation
  const handleProjectChange = (project: string | null) => {
    setActiveProject(project)
    if (project) {
      navigate(`/projects/${project}`, { replace: false })
    } else {
      navigate('/projects', { replace: false })
    }
  }

  const handleWritingChange = (writing: string | null) => {
    setActiveWriting(writing)
    if (writing) {
      navigate(`/writing/${writing}`, { replace: false })
    } else {
      navigate('/writing', { replace: false })
    }
  }
  
  if (!activeSection) return null

  return (
    <div className={`content-sections ${isFullScreen || isMobile ? 'fullscreen' : ''}`} onClick={(e) => {
      if (e.target === e.currentTarget || (e.target as Element).textContent === '×') {
        onClose()
      }
    }}>
      <div className="section-header-buttons">
        {!isMobile && (
          <button 
            className="expand-section" 
            onClick={() => setIsFullScreen(!isFullScreen)}
            title={isFullScreen ? 'Exit fullscreen' : 'Expand to fullscreen'}
          >
            {isFullScreen ? '⤋' : '⤢'}
          </button>
        )}
        <button className="close-section" onClick={onClose}>×</button>
      </div>
      
      {activeSection === 'about' && (
        <div className="section about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I desperately want to craft experiences that people remember. <strong>People are the reason why I do the work I do. </strong> 
              Oddly, that's what made just being a TA so rewarding for me - helping fellow students grasp complex programming concepts 
              and watching them succeed. This passion led me to start <a href="https://www.quaternionstudios.com/" target="_blank" rel="noopener noreferrer">Quaternion Studios</a> with 
              my brother where we strive to build memorable software experiences and work with unforgettable individuals.
            </p>
            <p>
              When I’m not designing experiences others will remember, I focus on building the ones that I'll never forget. I love traveling and going to music festivals.
              If you have fun travel stories, please reach out so I can live vicariously through you and we can build a personal connection.
            </p>
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skills-list">
                  <span>C/C++</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>Java</span>
                  <span>Haskell</span>
                  <span>SQL</span>
                  <span>GraphQL</span>
                  <span>HTML/CSS</span>
                  <span>Swift</span>
                  <span>Rust</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Frameworks</h4>
                <div className="skills-list">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Three.js</span>
                  <span>Git</span>
                  <span>TensorFlow</span>
                  <span>PyTorch</span>
                  <span>Google Cloud</span>
                  <span>Azure</span>
                </div>
              </div>
            </div>
            <div className="education-section">
              <h3>Education</h3>
              <p><strong>Texas A&M University</strong></p>
              <p>B.S. Computer Science (GPA: 3.9/4.0)</p>
              <p>Minors in Applied Mathematics and Statistics</p>
              <div className="awards">
                <h4>Awards</h4>
                <ul>
                  <li>Undergraduate Leadership Excellence Award from TAMU Computer Science Department</li>
                  <li>Dean's List</li>
                </ul>
              </div>
            </div>
            <div className="travel-section">
              <h3>Countries I've Visited</h3>
              <div className="countries-list">
                <span>Mexico</span>
                <span>UAE (Dubai)</span>
                <span>England</span>
                <span>Belize</span>
                <span>Jamaica</span>
                <span>Costa Rica</span>
                <span>Japan</span>
              </div>
              <p><em>I sincerely hope I can contribute at least five more countries to this list before the end of 2025.</em></p>
              <br></br>
              <br></br>
            </div>
            <p>
              P.S. The song playing in the background of this page is <strong>fade together by itsmurph.</strong> He 
              played this song the day after he officialy released it during a music festival I attended.
              Listening to this song, with the sun setting over the Austin skyline in the distance, is truly a moment I'll never forget.
            </p>
          </div>
        </div>
      )}
      
      {activeSection === 'projects' && !activeProject && (
        <div className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-content">
            
            <div 
              className="experience-card project-card-clickable"
              onClick={() => handleProjectChange('scaffolding-project')}
            >
              <div className="experience-header project-card-simple">
                <div className="project-details">
                  <h3>3D Platform for Scaffolding</h3>
                  <h4>Stillastorget.no</h4>
                  <div className="tech-tags">
                    <span>WebGPU</span>
                    <span>Three.js</span>
                    <span>ifc.js</span>
                    <span>Vue.js</span>
                    <span>TypeScript</span>
                    <span>WebAssembly (WASM)</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="experience-card project-card-clickable"
              onClick={() => handleProjectChange('baseball-analytics')}
            >
              <div className="experience-header project-card-simple">
                <div className="project-details">
                  <h3>Machine Learning Applied to Baseball</h3>
                  <h4>Texas A&M Baseball Research And Development Team</h4>
                  <div className="tech-tags">
                    <span>Python</span>
                    <span>RandomForest</span>
                    <span>Data Visualization</span>
                    <span>Sports Analytics</span>
                    <span>Scikit-learn</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="experience-card project-card-clickable"
              onClick={() => handleProjectChange('maze-robot')}
            >
              <div className="experience-header project-card-simple">
                <div className="project-details">
                  <h3>Autonomous Maze-Solving Robot with ROS 2 & LiDAR</h3>
                  <div className="tech-tags">
                    <span>ROS 2</span>
                    <span>C++</span>
                    <span>Python</span>
                    <span>LiDAR</span>
                    <span>SLAM</span>
                    <span>Path Planning</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {activeSection === 'projects' && activeProject === 'scaffolding-project' && (
        <div className="section project-detail-section">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => handleProjectChange(null)}
            >
              ← Back to Projects
            </button>
            <br></br>
            <h2>Scaffolding Graphics: Building Interactive and High-Performance 3D Applications</h2>
          </div>
          
          <div className="project-detail-content">
            <div className="scaffolding-intro">
              <p>
                The development of high-performance 3D applications demands the seamless integration of 
                intuitive user interfaces, efficient rendering techniques, and scalable resource 
                management. This project introduces a next-generation scaffolding graphics application 
                built for <strong>Stillastorget.no</strong>, a company operating in the <strong>Norway/Spain</strong> region specializing in 
                construction technology.
              </p>
              <p>
                By leveraging cutting-edge web technologies such as <strong>WebGPU, instanced mesh rendering, and 
                ifc.js</strong>, this application enables users to define building dimensions, extrude structures, 
                generate scaffolding, and create an automated Bill of Materials (BOM) with real-time 
                visualization.
              </p>
            </div>

            <div className="scaffolding-diagram-section">
              <div className="scaffolding-diagram">
                <img src={scaffoldingImage} alt="Scaffolding Application Interface" />
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Core Features</h3>
              
              <div className="feature-subsection">
                <h4>1. Interactive Building Design</h4>
                <ul>
                  <li>Users can draw, define, and modify building structures by setting measurements and extruding shapes.</li>
                  <li>Measurement tools allow precise input of dimensions (width, height, depth) for structures.</li>
                  <li>Supports real-time updates and modifications with intuitive UI controls.</li>
                </ul>
              </div>

              <div className="feature-subsection">
                <h4>2. Automated Scaffolding Generation</h4>
                <ul>
                  <li>Based on defined building dimensions, scaffolding structures are automatically generated.</li>
                  <li>Users can select specific building areas for scaffolding placement.</li>
                  <li>Customization options allow users to modify scaffold material types, dimensions, and structural configurations.</li>
                </ul>
              </div>

              <div className="feature-subsection">
                <h4>3. Bill of Materials (BOM) Generation</h4>
                <ul>
                  <li>A comprehensive BOM quantifies all scaffold elements used in the project.</li>
                  <li>Users can export the BOM in multiple formats (CSV, PDF) for further analysis and cost estimation.</li>
                </ul>
              </div>

              <div className="feature-subsection">
                <h4>4. Real-Time Editing and Visualization</h4>
                <ul>
                  <li>Drag-and-drop interface allows seamless manipulation of scaffold components.</li>
                  <li>Real-time updates ensure immediate feedback on modifications.</li>
                  <li>Advanced rendering optimizations improve performance and interactivity.</li>
                </ul>
              </div>
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding2Image} alt="Core Features Interface" />
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Technical Implementation</h3>
              
              <div className="tech-subsection">
                <h4>WebGPU as the Rendering Backend</h4>
                <p>
                  WebGPU provides a robust rendering pipeline, replacing WebGL for improved efficiency and 
                  performance. The key benefits include:
                </p>
              </div>

              <div className="tech-subsection">
                <h4>Instanced Mesh Rendering</h4>
                <ul>
                  <li>Uses GPU instancing to efficiently render thousands of scaffolding components with minimal draw calls.</li>
                  <li>Reduces CPU-GPU communication overhead, ensuring smooth real-time visualization.</li>
                </ul>
              </div>

              <div className="tech-subsection">
                <h4>Parallel Processing</h4>
                <ul>
                  <li>WebGPU's compute shaders handle geometry updates, physics simulations, and lighting calculations in parallel.</li>
                  <li>Enables real-time interaction with complex scaffolding structures without performance bottlenecks.</li>
                </ul>
              </div>

              <div className="tech-subsection">
                <h4>Memory Management Optimizations</h4>
                <ul>
                  <li><strong>Frustum Culling:</strong> Renders only the visible portions of the scaffolding within the camera's view, improving FPS.</li>
                  <li><strong>Level of Detail (LOD):</strong> Dynamically adjusts the detail level of scaffolds based on the camera distance.</li>
                  <li><strong>Buffer Updates:</strong> Ensures real-time scaffold transformations without reloading entire meshes.</li>
                </ul>
              </div>

              <div className="tech-subsection">
                <h4>Integration with ifc.js for BIM Models</h4>
                <p>
                  Ifc.js, an open-source JavaScript library, enables <strong>Building Information Modeling (BIM)</strong> 
                  integration for accurate construction planning.
                </p>
              </div>

              <div className="tech-subsection">
                <h4>WebAssembly (WASM) Backend</h4>
                <ul>
                  <li>Delivers high-performance parsing and rendering of <strong>Industry Foundation Classes (IFC)</strong> files directly in the browser.</li>
                  <li>Avoids heavy processing on the CPU by offloading computations to WebAssembly, ensuring faster load times.</li>
                </ul>
              </div>

              <div className="tech-subsection">
                <h4>Component Extraction</h4>
                <ul>
                  <li>Allows extraction of specific building elements (walls, floors, roofs) to define attachment points for scaffolding.</li>
                  <li>Enables seamless integration with architectural design files and construction planning tools.</li>
                </ul>
              </div>

              <div className="tech-subsection">
                <h4>Custom Materials & Textures</h4>
                <ul>
                  <li>Differentiate scaffolding from the main building structure using dynamically assigned materials and textures.</li>
                  <li>Supports material customization based on project requirements.</li>
                </ul>
              </div>
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding3Image} alt="Integration with ifc.js for BIM Models" />
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Development and Technology Stack</h3>
              <p>The application was built using a modern web-based stack:</p>
              
              <div className="tech-stack-table">
                <div className="tech-row">
                  <div className="tech-name">WebGPU</div>
                  <div className="tech-purpose">High-performance real-time rendering</div>
                </div>
                <div className="tech-row">
                  <div className="tech-name">ifc.js</div>
                  <div className="tech-purpose">BIM model integration and IFC file parsing</div>
                </div>
                <div className="tech-row">
                  <div className="tech-name">WebAssembly (WASM)</div>
                  <div className="tech-purpose">Optimized computation for IFC file handling</div>
                </div>
                <div className="tech-row">
                  <div className="tech-name">Three.js</div>
                  <div className="tech-purpose">3D scene management and geometry rendering</div>
                </div>
                <div className="tech-row">
                  <div className="tech-name">Vue.js</div>
                  <div className="tech-purpose">UI framework for interactive user controls</div>
                </div>
                <div className="tech-row">
                  <div className="tech-name">TypeScript</div>
                  <div className="tech-purpose">Type-safe application logic</div>
                </div>
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Challenges and Optimizations</h3>
              
              <div className="challenge-subsection">
                <h4>Performance Bottlenecks</h4>
                <p>
                  <strong>Solution:</strong> Used instanced rendering and LOD techniques to optimize large-scale 
                  scaffolding visualization.
                </p>
              </div>

              <div className="challenge-subsection">
                <h4>BIM Model Complexity</h4>
                <p>
                  <strong>Solution:</strong> Implemented custom IFC parsing strategies to extract only relevant components 
                  for scaffolding attachment.
                </p>
              </div>

              <div className="challenge-subsection">
                <h4>Real-Time UI Responsiveness</h4>
                <p>
                  <strong>Solution:</strong> Leveraged React's state management and GPU-driven updates for a smooth user 
                  experience.
                </p>
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Business Impact and Future Enhancements</h3>
              
              <div className="impact-subsection">
                <h4>Impact on Stillastorget.no</h4>
                <ul>
                  <li><strong>Efficiency Gains:</strong> Automated scaffolding planning reduces manual work and improves accuracy.</li>
                  <li><strong>Cost Savings:</strong> Optimized material estimation through BOM generation minimizes waste.</li>
                  <li><strong>Market Differentiation:</strong> Cutting-edge technology positions Stillastorget.no as an innovator in construction technology.</li>
                </ul>
              </div>

              <div className="scaffolding-diagrams-section">
                <div className="scaffolding-diagram">
                  <img src={scaffolding4Image} alt="Business Impact" />
                </div>
              </div>

              <div className="impact-subsection">
                <h4>Planned Enhancements</h4>
                <ul>
                  <li><strong>AI-driven Scaffold Placement:</strong> Implement reinforcement learning to optimize scaffold positioning.</li>
                  <li><strong>Augmented Reality (AR) Support:</strong> Enable scaffold visualization through AR for on-site construction planning.</li>
                  <li><strong>Cloud Integration:</strong> Store and retrieve scaffold designs via cloud-based project management platforms.</li>
                </ul>
              </div>

              <div className="scaffolding-diagrams-section">
                <div className="scaffolding-diagram">
                  <img src={scaffolding5Image} alt="Future Enhancements" />
                </div>
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Conclusion</h3>
              <p>
                This project demonstrates the power of modern web technologies in revolutionizing 
                scaffolding graphics for construction. By combining WebGPU, ifc.js, and real-time 
                optimizations, we have built a scalable and efficient solution for Stillastorget.no. 
                Future improvements will continue to enhance its capabilities, ensuring it remains at the 
                forefront of <strong>construction visualization technology</strong>.
              </p>
              <p>
                <a href="https://0477ecc2-5847-48e4-bdb9-32403bc35367.vercel.app/model" target="_blank" rel="noopener noreferrer" className="live-demo-link">live demo →</a>
              </p>
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding6Image} alt="Project Conclusion" />
              </div>
            </div>
            <br></br>
          </div>
        </div>
      )}

      {activeSection === 'projects' && activeProject === 'baseball-analytics' && (
        <div className="section project-detail-section baseball-detail">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => handleProjectChange(null)}
            >
              ← Back to Projects
            </button>
            <br></br>
            <h2>Baseball Umpire Decision Analysis (Detailed Overview)</h2>
          </div>
          
          <div className="project-detail-content">
            <div className="baseball-intro">
              <p>
                Along with one of my teammates for the Research and Development team for Texas A&M baseball, we took on an exciting project that 
                combined our love for sports with the power of machine learning. Our goal was to analyze and predict baseball umpire calls using 
                machine learning techniques, specifically focusing on how umpires decide whether a pitch is a ball or a strike.
              </p>
            </div>

            <div className="baseball-diagram-section">
              <div className="baseball-diagram">
                <img src={baseballImage} alt="Baseball Strike Zone Diagram" />
              </div>
            </div>

            <div className="baseball-section">
              <h3>Project Objective</h3>
              <p>
                Our primary objective was to develop a Python script that leverages a RandomForestClassifier to identify patterns in umpire decision-making. 
                By doing so, we aimed to understand the factors influencing these calls and improve the accuracy and objectivity of baseball officiating.
              </p>
            </div>

            <div className="baseball-section">
              <h3>Data Collection and Preprocessing</h3>
              <p>
                We began our journey by immersing ourselves in the world of baseball data. We meticulously gathered extensive pitch data from 
                multiple seasons, capturing crucial details like location coordinates, velocity, movement patterns, and of course, the umpire's call. 
                This wasn't just about collecting numbers—we were capturing decision moments that would help us understand the human element of 
                the game.
              </p>
              <p>
                Our preprocessing phase was where we really rolled up our sleeves. We cleaned messy data points, standardized measurements across 
                different stadiums, and normalized values to ensure fair comparisons. One of our most insightful decisions was to segregate the data by 
                individual umpires, allowing us to build personalized models that recognized each umpire's unique tendencies and decision-making 
                patterns. This approach helped us capture the subtleties that make baseball such a beautifully human game.
              </p>

              <div className="baseball-diagrams-section">
                <div className="baseball-diagram">
                  <img src={baseballImage2} alt="Baseball Data Collection" />
                </div>
                <div className="baseball-diagram">
                  <img src={baseballImage3} alt="Baseball Data Preprocessing" />
                </div>
              </div>
            </div>

            <div className="baseball-section">
              <h3>Building the RandomForestClassifier</h3>
              <p>
                With our data prepared, we turned to the RandomForestClassifier—a powerful machine learning algorithm that we felt was perfectly 
                suited for this challenge. We chose this approach because it excels at handling complex decision boundaries and can capture the 
                nuanced factors that influence an umpire's split-second judgment calls.
              </p>
              <p>
                We carefully divided our dataset into training and testing sets, making sure we had enough historical data to train robust models while 
                keeping some data aside for honest evaluation. This was our way of simulating how our models would perform in real-world scenarios. 
                Through countless iterative runs, fine-tuned the models, watching with excitement as they began to recognize patterns in the data that 
                aligned with what seasoned baseball fans intuitively understood about umpire tendencies.
              </p>
            </div>

            <div className="baseball-section">
              <h3>Visualization</h3>
              <p>
                To make our findings more intuitive, we incorporated visualization techniques, including decision boundary visualization to help 
                understand how different factors influence the umpire's calls. Recognizing areas for improvement in our initial script, we implemented 
                several enhancements and optimizations. Cross-validation was introduced to ensure the model's robustness and accuracy, 
                providing a more reliable performance evaluation.
              </p>
              <p>
                We also developed a hyperparameter tuning script to optimize the model for each umpire, resulting in more precise configurations 
                tailored to individual decision-making patterns. Additionally, feature importance analysis was conducted to identify the most influential 
                features, such as pitch location and type, in the decision-making process, thereby offering deeper insights into the factors that impact 
                umpire calls.
              </p>
              
              <div className="baseball-visualization-section">
                <div className="baseball-diagram">
                  <img src={baseballImage4} alt="Baseball Visualization 1" />
                </div>
                <div className="baseball-diagram">
                  <img src={baseballImage5} alt="Baseball Visualization 2" />
                </div>
                <div className="baseball-diagram">
                  <img src={baseballImage6} alt="Baseball Visualization 3" />
                </div>
              </div>
            </div>

            <div className="baseball-section">
              <h3>Outcomes and Insights</h3>
              <p>
                By integrating machine learning, our project significantly enhanced the understanding of umpire decision patterns in baseball. The 
                model provided deep insights into the decision-making process of umpires, potentially leading to fairer and more consistent officiating. 
                This technological integration promises to reduce human error and bias, thereby improving the overall quality of the sport.
              </p>
              <p>
                This project illustrated the dynamic intersection of technology and sports, highlighting how innovations in machine learning can 
                revolutionize traditional sports practices. The ability to predict umpire calls with high accuracy showcases the potential for continuous 
                improvement and innovation in sports analytics.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'projects' && activeProject === 'maze-robot' && (
        <div className="section project-detail-section robot-detail">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => handleProjectChange(null)}
            >
              ← Back to Projects
            </button>
            <br></br>
            <h2>Autonomous Maze-Solving Robot (Detailed Overview)</h2>
          </div>
          
          <div className="project-detail-content">
            <div className="robot-intro">
              <p>
                As a project manager and software developer for the Texas A&M Robotics Team, I led the development of a sophisticated 
                autonomous robot capable of navigating complex mazes. While the mechanical aspects were crucial, my primary focus was 
                on creating a robust software architecture that could process sensor data, make intelligent decisions, and control 
                the robot's movements with precision.
              </p>
            </div>

            <div className="robot-diagram-section">
              <div className="robot-diagram">
                <img src={robotImage} alt="LiDAR Maze-Solving Robot" />
              </div>
            </div>

            <div className="robot-section">
              <h3>The ROS 2 Backbone</h3>
              <p>
                At the core of our system was ROS 2 Humble, chosen for its improved message passing architecture, enhanced 
                reliability, and real-time capabilities. ROS 2 provided a modular framework that allowed us to develop independent 
                components (nodes) that could be tested and debugged separately before integration.
              </p>
              <p>
                We structured our system with several key nodes:
              </p>
              <ul>
                <li><strong>lidar_driver_node</strong>: Interfaced with the RPLidar A1 hardware to capture raw scan data</li>
                <li><strong>scan_processor_node</strong>: Filtered and processed raw LiDAR data to remove noise and extract meaningful features</li>
                <li><strong>mapping_node</strong>: Built and maintained an occupancy grid of the maze environment</li>
                <li><strong>localization_node</strong>: Determined the robot's position within the maze</li>
                <li><strong>path_planning_node</strong>: Generated optimal trajectories through the maze</li>
                <li><strong>motion_control_node</strong>: Translated planned paths into motor commands</li>
                <li><strong>visualization_node</strong>: Provided real-time monitoring and debugging capabilities</li>
              </ul>
            </div>

            <div className="robot-section">
              <h3>LiDAR Data Processing & Mapping</h3>
              <p>
                The RPLidar A1 provided 360-degree scan data at approximately 8000 points per second. Our software pipeline transformed 
                this raw data into usable environmental information through several processing steps:
              </p>
              <ol>
                <li>Raw data acquisition via UART communication</li>
                <li>Noise filtering using statistical outlier removal techniques</li>
                <li>Dynamic range thresholding to identify maze walls</li>
                <li>Point clustering to detect wall segments and corners</li>
                <li>Integration into a probabilistic occupancy grid map</li>
              </ol>
              <p>
                The mapping system employed a grid-based representation with 2cm resolution, providing sufficient detail for 
                navigation while remaining computationally efficient. We implemented a Bayesian update mechanism that allowed the 
                map to adapt to new observations, gradually improving accuracy as the robot explored the maze.
              </p>

              <div className="robot-diagrams-section">
                <div className="robot-diagram">
                  <img src={lidarMapping} alt="LiDAR Mapping Visualization" />
                </div>
              </div>
            </div>

            <div className="robot-section">
              <h3>Path Planning & Trajectory Generation</h3>
              <p>
                Our approach to path planning utilized a multi-stage process to generate efficient and smooth trajectories through 
                the maze environment. This sophisticated system combined multiple algorithmic approaches to ensure optimal navigation 
                while maintaining safety and efficiency constraints.
              </p>
              <p>
                <strong>1. Fast-Marching Trees (FMT*)</strong>: This sampling-based algorithm provided asymptotically optimal paths 
                by expanding a tree of collision-free trajectories from the start position. We chose FMT* over other algorithms 
                (like RRT or A*) because it produced higher-quality initial paths with better coverage of the configuration space.
              </p>
              <p>
                <strong>2. Path Smoothing with Bezier Curves</strong>: The piecewise linear paths from FMT* were then refined using 
                cubic Bezier curves. Each curve was defined by four control points carefully selected to maintain path clearance 
                while providing C² continuity (continuous position, velocity, and acceleration).
              </p>
              <p>
                <strong>3. Time-Optimal Path Parameterization (TOPPRA)</strong>: To generate velocity profiles that respected the 
                robot's dynamic constraints, we implemented TOPPRA. This algorithm computed the time-optimal velocity profile along 
                the path while respecting bounds on velocity, acceleration, and jerk.
              </p>

              <div className="robot-visualization-section">
                <div className="robot-diagram">
                  <img src={bezierCurves} alt="Bezier Curve Smoothing" />
                </div>
                <div className="robot-diagram">
                  <img src={pathPlanning} alt="Path Planning Visualization" />
                </div>
              </div>
            </div>

            <div className="robot-section">
              <h3>Motion Control & Motor Integration</h3>
              <p>
                Translating planned trajectories into precise motor commands required careful integration with the hardware control 
                systems. Our software stack seamlessly bridged the gap between high-level path planning and low-level motor control, 
                ensuring smooth and accurate robot movement throughout the maze navigation process.
              </p>
              <p>
                The ODrive 3.6 motor controller provided a sophisticated interface for controlling the high-torque 750Kv motors. 
                Our software integrated with the ODrive API to implement real-time velocity control with encoder feedback, differential 
                drive kinematics to convert desired robot motion into individual wheel speeds, PID control loops for position and 
                velocity tracking, and synchronized acceleration profiles to prevent wheel slippage.
              </p>
              <p>
                We implemented a custom controller node that subscribed to trajectory messages and published motor commands at 100Hz, 
                ensuring smooth and responsive motion. The node also processed encoder feedback to provide odometry data for 
                localization purposes, creating a closed-loop system that maintained high precision throughout operation.
              </p>
            </div>

            <div className="robot-section">
              <h3>Jetson Nano Computing Platform</h3>
              <p>
                The Jetson Nano, running Ubuntu 18.04 with CUDA support, provided the computational backbone for our system. We optimized 
                the software stack to efficiently utilize the available resources, implementing CUDA-accelerated LiDAR point cloud 
                processing, multi-threaded implementation of path planning algorithms, efficient memory management for map storage and 
                updates, and real-time scheduler configuration for critical control loops.
              </p>
              <p>
                The Jetson's WiFi module enabled remote monitoring and debugging, allowing us to visualize the robot's state during 
                maze navigation without physical connections. This wireless capability proved invaluable during testing and competition 
                scenarios where direct access to the robot was limited.
              </p>
              
              <div className="robot-visualization-section">
                <div className="robot-diagram">
                  <img src={jetsonNano} alt="Jetson Nano Computing Platform" />
                </div>
              </div>
            </div>

            <div className="robot-section">
              <h3>Results & Performance Achievements</h3>
              <p>
                Our software system successfully enabled the robot to navigate complex mazes with precision and reliability, 
                demonstrating the effectiveness of our integrated approach to autonomous navigation. The system consistently delivered 
                impressive performance metrics that validated our architectural decisions and implementation strategies.
              </p>
              <p>
                Key performance metrics included mapping accuracy within 1.5cm across the entire maze, localization precision of 0.8cm 
                in position and 2 degrees in orientation, path planning computation in under 200ms for typical maze segments, smooth 
                trajectory execution with velocity tracking error below 3%, and successful navigation of mazes with tight corners and 
                narrow passages.
              </p>
              <p>
                The project demonstrated the power of integrating modern robotics software with specialized hardware to solve complex 
                navigation challenges. The modular architecture we developed provides a foundation for future enhancements and can be 
                adapted to other autonomous navigation tasks beyond maze solving, showcasing the versatility and robustness of our 
                software design approach.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      )}
      
      {activeSection === 'experience' && (
        <div className="section experience-section">
          <h2>Experience</h2>
          <div className="experience-content">
            
            <div 
              className={`experience-card ${expandedExperience === 'cox-enterprises' ? 'expanded' : ''}`}
              onClick={() => setExpandedExperience(expandedExperience === 'cox-enterprises' ? null : 'cox-enterprises')}
            >
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <h4>Cox Enterprises</h4>
                <p className="period">June 2025 - Present</p>
              </div>
              
              {expandedExperience === 'cox-enterprises' && (
                <div className="experience-details">
                  <p><br></br>Details coming soon.</p>
                </div>
              )}
            </div>

            <div 
              className={`experience-card ${expandedExperience === 'ntt-data' ? 'expanded' : ''}`}
              onClick={() => setExpandedExperience(expandedExperience === 'ntt-data' ? null : 'ntt-data')}
            >
              <div className="experience-header">
                <h3>AI/ML Engineer</h3>
                <h4>NTT Data Corporation</h4>
                <p className="period">January 2024 - December 2024</p>
              </div>
              
              {expandedExperience === 'ntt-data' && (
                <div className="experience-details">
                  <p>
                    <br></br>
                    As an AI/ML Engineer at NTT Data Corporation, I was responsible for developing and implementing 
                    advanced machine learning solutions to enhance IT service management (ITSM) processes. My primary 
                    focus was on leveraging Natural Language Processing (NLP) and other AI technologies to automate 
                    and optimize incident resolution workflows.
                  </p>

                  <div className="achievements">
                    <h5>Key Achievements</h5>
                    <div className="achievement-items">
                      <div className="achievement-item">
                        <h6>NLP-Driven Resolution Prediction</h6>
                        <p>
                          Developed and implemented an NLP-driven application for incident/request resolution prediction, 
                          trained on two years of ticket data, and seamlessly integrated the solution into the ITSM 
                          platforms of 15+ client accounts. This system could analyze the content of incoming tickets 
                          and recommend appropriate resolution actions based on historical patterns.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>Automated Resolution Process</h6>
                        <p>
                          Pioneered an automation process that streamlined resolutions and closed tickets for 60% of 
                          incoming incidents and requests. This significantly reduced the manual workload for support 
                          teams and decreased the average time to resolution across all client accounts.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>LLM Integration with RAG Techniques</h6>
                        <p>
                          Applied Retrieval-Augmented Generation (RAG) techniques to integrate Large Language Models (LLMs) 
                          into client enterprises. These were tailored with data repositories, company applications, and 
                          internal documents to enhance decision-making and deliver context-rich results.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="impact-results">
                    <h5>Impact and Results</h5>
                    <div className="impact-grid">
                      <div className="impact-item">
                        <h6>Efficiency Improvement</h6>
                        <p>60% reduction in manual ticket handling, allowing support teams to focus on more complex tasks.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Resolution Time</h6>
                        <p>96% decrease in average time to resolution for common incidents and service requests.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Client Satisfaction</h6>
                        <p>Improved client satisfaction scores by 40% due to faster and more accurate resolution.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Knowledge Retention</h6>
                        <p>Enhanced organizational knowledge retention by capturing resolution patterns from experienced teams.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h5>Technologies Used</h5>
                    <div className="tech-tags">
                      <span>Python</span>
                      <span>TensorFlow</span>
                      <span>PyTorch</span>
                      <span>HuggingFace Transformers</span>
                      <span>SQL</span>
                      <span>Docker</span>
                      <span>FastAPI</span>
                      <span>Azure ML</span>
                      <span>Vector Databases (ChromaDB)</span>
                      <span>REST APIs</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div 
              className={`experience-card ${expandedExperience === 'teaching-assistant' ? 'expanded' : ''}`}
              onClick={() => setExpandedExperience(expandedExperience === 'teaching-assistant' ? null : 'teaching-assistant')}
            >
              <div className="experience-header">
                <h3>Teaching Assistant</h3>
                <h4>Texas A&M University</h4>
                <p className="period">August 2023 - May 2024</p>
              </div>
              
              {expandedExperience === 'teaching-assistant' && (
                <div className="experience-details">
                  <p>
                    <br></br>
                    As a teaching assistant for CSCE 121 (Introduction to Program Design and Concepts) and CSCE 221 
                    (Data Structures and Algorithms) at Texas A&M University, I played a crucial role in supporting 
                    undergraduate students learning fundamental computer science concepts and programming skills. This 
                    position allowed me to deepen my own technical knowledge while developing important instructional 
                    and mentorship capabilities.
                  </p>

                  <div className="achievements">
                    <h5>Key Responsibilities</h5>
                    <div className="achievement-items">
                      <div className="achievement-item">
                        <h6>Lab Instruction</h6>
                        <p>
                          Conducted weekly laboratory sessions for multiple student groups, providing hands-on instruction 
                          and guidance on programming concepts in C++. These lab sessions were designed to reinforce and 
                          extend the material covered in lectures, giving students practical experience with the concepts 
                          they were learning.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>Material Development</h6>
                        <p>
                          Produced supplementary instructional materials to clarify complex Data Structures and Algorithms 
                          concepts. This included creating detailed explanations, visual aids, and practice problems that 
                          helped students better understand challenging topics like linked lists, trees, graphs, sorting 
                          algorithms, and algorithm analysis.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>Student Guidance</h6>
                        <p>
                          Offered one-on-one guidance to students on utilizing various data structures and algorithms 
                          through hands-on programming projects using C++ within a Linux environment. This individualized 
                          support helped students overcome specific challenges they faced in their coursework and projects.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>Automated Testing</h6>
                        <p>
                          Designed and executed scripts for automating the testing of student assignments. These scripts 
                          streamlined the grading process, provided consistent evaluation metrics, and allowed for more 
                          detailed feedback to students on their code performance and correctness.
                        </p>
                      </div>

                      <div className="achievement-item">
                        <h6>Grading and Feedback</h6>
                        <p>
                          Evaluated student assignments and projects, providing constructive feedback on code quality, 
                          algorithm efficiency, and problem-solving approaches. This feedback was crucial for helping 
                          students improve their programming skills and develop good coding practices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="impact-results">
                    <h5>Impact and Skills Developed</h5>
                    <div className="impact-grid">
                      <div className="impact-item">
                        <h6>Technical Mastery</h6>
                        <p>Deepened understanding of fundamental CS concepts by teaching them to others with varying experience levels.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Communication Skills</h6>
                        <p>Developed ability to explain complex technical concepts in clear, accessible ways to diverse students.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Leadership Experience</h6>
                        <p>Led lab sessions for student groups, managing classroom dynamics and ensuring comprehensive support.</p>
                      </div>
                      <div className="impact-item">
                        <h6>Student Mentorship</h6>
                        <p>Provided mentorship beyond academics, offering guidance on career paths and learning opportunities.</p>
                      </div>
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h5>Technologies and Concepts Taught</h5>
                    <div className="tech-tags">
                      <span>C++</span>
                      <span>Linux</span>
                      <span>Data Structures</span>
                      <span>Algorithms</span>
                      <span>Object-Oriented Programming</span>
                      <span>Memory Management</span>
                      <span>Debugging Techniques</span>
                      <span>Git Version Control</span>
                      <span>Algorithm Analysis</span>
                      <span>Problem Solving</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
      
      {activeSection === 'writing' && !activeWriting && (
        <div className="section writing-section">
          <h2>Writing</h2>
          <div className="writing-content">
            
            <div 
              className="experience-card project-card-clickable"
              onClick={() => handleWritingChange('personal-growth')}
            >
              <div className="experience-header project-card-simple">
                <div className="project-details">
                  <h3>2024: A Year of Transformation and Learning</h3>
                  <h4>March 15, 2025</h4>
                  <p className="writing-excerpt">Reflecting on the most eventful year of my life, the challenges I faced, and the invaluable lessons I learned throughout my journey in 2024.</p>
                  <div className="tech-tags">
                    <span>Personal Growth</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="experience-card project-card-clickable"
              onClick={() => handleWritingChange('giving-back')}
            >
              <div className="experience-header project-card-simple">
                <div className="project-details">
                  <h3>The Unexpected Gifts of Giving Back</h3>
                  <h4>February 28, 2025</h4>
                  <p className="writing-excerpt">How my experiences with volunteering and community service have transformed my perspective on success, happiness, and purpose.</p>
                  <div className="tech-tags">
                    <span>Community</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {activeSection === 'writing' && activeWriting === 'personal-growth' && (
        <div className="section project-detail-section writing-detail">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => handleWritingChange(null)}
            >
              ← Back to Writing
            </button>
            <br></br>
            <h2>2024: A Year of Transformation and Learning</h2>
          </div>
          
          <div className="project-detail-content">
            <div className="writing-intro">
              <div className="writing-metadata">
                <span>March 15, 2025</span>
                <span className="category-tag">Personal Growth</span>
              </div>
              <p>
                Looking back at 2024, I can confidently say it was the most challenging and transformative year of my life. It was a roller coaster of triumphs and tribulations that pushed me to my limits and taught me invaluable lessons about myself, my priorities, and what truly matters in my professional journey.
              </p>
            </div>

            <div className="writing-section">
              <h3>January: Juggling Multiple Roles</h3>
              
              <p>
                The year kicked off with a sprint rather than a gentle start. I began my role as an AI/ML Engineer at NTT Data in January while maintaining my status as a full-time student at Texas A&M and continuing my position as an undergraduate teaching assistant. The hybrid arrangement with NTT seemed perfect on paper—I'd work remotely during the semester and transition to in-office during summer.
              </p>
              
              <p>
                Those first few weeks were equal parts exhilarating and exhausting. I'd bounce from morning classes to afternoon meetings with enterprise clients, then spend evenings preparing for the lab sessions I led as a TA. I remember sitting in my apartment at midnight, surrounded by half-finished assignments and work deliverables, wondering if I'd bitten off more than I could chew.
              </p>
            </div>

            <div className="writing-section">
              <h3>The International Scheduling Challenge</h3>
              
              <p>
                Working for an international company like NTT Data came with its own unique challenges—namely, the brutal time zone differences. There were several occasions when I'd be on calls at 3 AM with development teams based in Asia, only to drag myself out of bed a few hours later for the 8 AM lab I was responsible for leading.
              </p>
              
              <p>
                I still vividly remember one particularly grueling week in February when I had three consecutive nights of late calls followed by early morning commitments. I was running on pure caffeine and determination, my eyes burning from lack of sleep as I tried to explain pointer concepts to my students while my brain was still processing discussions about NLP model optimizations from hours earlier.
              </p>
            </div>

            <div className="writing-section">
              <h3>March: Recognition Amidst Chaos</h3>
              
              <p>
                As the semester progressed, the weight of my commitments became increasingly difficult to bear. Just when I was questioning whether all the sacrifice was worth it, I received some unexpected validation. In March, the Computer Science Department at A&M recognized me with the Undergraduate Leadership Excellence Award—an honor I'd mentioned in my previous blog, but one that came at a perfectly timed moment when I needed that affirmation.
              </p>
              
              <p>
                Standing on that stage, accepting the award while running on three hours of sleep, was a surreal moment. It felt like acknowledgment that yes, what I was doing was difficult, but it was also meaningful and noticed.
              </p>
            </div>

            <div className="writing-section">
              <h3>The Inevitable Breaking Point</h3>
              
              <p>
                Despite that boost of confidence, reality eventually caught up with me. As my first semester of 2024 progressed, I became overwhelmed by the competing demands on my time and energy. The breaking point came when I realized I was consistently missing lectures for two of my classes due to recurring conflicts with important meetings at NTT Data.
              </p>
              
              <p>
                Making the decision to drop those two classes was incredibly difficult. It felt like admitting defeat, like I couldn't handle what I'd set out to do. But looking back, it was my first lesson of the year in setting realistic expectations and making necessary sacrifices to preserve my wellbeing and the quality of my work.
              </p>
              
              <p>
                The sweet victory came at the end of the semester when I managed to earn all A's in my remaining classes. It wasn't the full course load I'd ambitiously planned, but it represented quality over quantity—a concept I'd continue to wrestle with throughout the year.
              </p>
            </div>

            <div className="writing-section">
              <h3>Summer: A Different Kind of Busy</h3>
              
              <p>
                Summer brought a shift in rhythm but not necessarily a lighter workload. I transitioned to working in-person at NTT Data, which eliminated the late-night international calls but introduced longer days at the office and a daily commute.
              </p>
              
              <p>
                My free time wasn't exactly "free" either—I dedicated much of it to working on the scaffolding project for a client through Quaternion Studios. Weekends became precious commodities spent hunched over my laptop, diving deep into 3D modeling and web graphics development.
              </p>
              
              <p>
                Despite the busy schedule, there was something refreshing about the change of pace. The more consistent hours and the diversity of projects kept me engaged and growing professionally in different directions.
              </p>
            </div>

            <div className="writing-section">
              <h3>August: Personal Upheaval and Rewarding Myself</h3>
              
              <p>
                August marked a significant turning point in both my personal and professional life. After two years together, my girlfriend and I broke up—a painful but necessary conclusion to a relationship that had been strained by my increasingly demanding schedule and shifting priorities.
              </p>
              
              <p>
                In the wake of that emotional upheaval, and feeling burnt out from months of relentless work, I decided to do something completely uncharacteristic for me. Fueled partly by beneficial tax returns for electric vehicles and a limited-time 1.99% APR deal expiring at the end of August, I made my first major "adult" purchase—a Tesla.
              </p>
              
              <p>
                Was it the most financially prudent decision? Perhaps not. But sitting behind the wheel of that car represented something important to me at that moment—a tangible reward for my hard work, a symbol of my independence, and honestly, a much-needed boost to my spirits during a difficult time.
              </p>
            </div>

            <div className="writing-section">
              <h3>Fall Semester: History Repeats Itself</h3>
              
              <p>
                As the fall semester began, I found myself back in the familiar juggling act between NTT Data and my academic commitments. My course load was particularly heavy, partly due to needing to make up for the classes I'd dropped in the spring.
              </p>
              
              <p>
                September brought one victory: the successful conclusion of our scaffolding project for Quaternion Studios' client. Seeing that project through to completion, with the client's enthusiastic approval, was deeply satisfying.
              </p>
              
              <p>
                But history has a way of repeating itself when we don't fully learn its lessons. Once again, I found myself struggling to balance my professional and academic responsibilities. Once again, I made the difficult decision to drop a class rather than compromise on quality or my wellbeing.
              </p>
            </div>

            <div className="writing-section">
              <h3>The Realization</h3>
              
              <p>
                As the semester wound down and I reflected on the year, something crystallized for me. While my role at NTT Data had been rewarding in many ways—the technical challenges, the exposure to enterprise-level AI implementations, the credibility of working for an international company—I realized I wanted something different for my future.
              </p>
              
              <p className="highlighted-text">
                I wanted to be somewhere where I could contribute to culture just as much as the end product.
              </p>
              
              <p>
                This wasn't just about technical work or building impressive systems. I wanted to be part of shaping an environment, influencing how teams collaborated, and building something with values aligned with my own. At NTT, I was a small cog in an enormous machine. I'd learned tremendously, but I couldn't see a path to having the kind of impact I now knew I wanted.
              </p>
              
              <p>
                With another semester of all A's in my remaining courses (a achievement I'm still proud of given the circumstances), I made my decision. I resigned from my position at NTT Data as the semester came to a close.
              </p>
            </div>

            <div className="writing-section">
              <h3>Lessons from a Year of Growth</h3>
              
              <p>
                Looking back at 2024, I can identify several invaluable lessons that will guide me moving forward:
              </p>
              
              <ol className="writing-list">
                <li>
                  <span className="list-highlight">Quality over quantity is not just a saying—it's a survival strategy.</span> Taking on too much doesn't serve anyone well, least of all yourself. I learned to be more selective about my commitments and to give my full attention to fewer things rather than spreading myself too thin.
                </li>
                <li>
                  <span className="list-highlight">Professional growth isn't linear.</span> Sometimes you need to take steps sideways or even backwards to ultimately move forward. Leaving NTT wasn't a failure; it was a recalibration based on a clearer understanding of what I truly value.
                </li>
                <li>
                  <span className="list-highlight">Sleep is non-negotiable.</span> Those 3 AM calls followed by 8 AM labs took a toll that no amount of caffeine could offset. I've learned to prioritize rest as an essential component of sustainable performance.
                </li>
                <li>
                  <span className="list-highlight">Personal milestones matter.</span> Buying my Tesla might seem trivial compared to professional accomplishments, but it represented an important personal milestone and a moment of joy during a difficult time.
                </li>
                <li>
                  <span className="list-highlight">Culture and values alignment are as important as technical challenges.</span> This was perhaps my biggest realization—that where and how I work matters just as much as what I'm working on.
                </li>
              </ol>

              <p>
                As I step into 2025, I feel both humbled by the challenges of the past year and optimistic about what lies ahead. I'm carrying forward not just new technical skills from my time at NTT Data and Quaternion Studios, but a much deeper understanding of my own limits, values, and aspirations.
              </p>
              
              <p>
                The road wasn't straight, and it certainly wasn't always smooth, but every twist, turn, and bump has shaped me into someone better equipped to navigate whatever comes next.
              </p>
              
              <p className="writing-conclusion">
                Here's to growth, to learning, and to the journey ahead.
              </p>
            </div>
            <br></br>
          </div>
        </div>
      )}

      {activeSection === 'writing' && activeWriting === 'giving-back' && (
        <div className="section project-detail-section writing-detail">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => handleWritingChange(null)}
            >
              ← Back to Writing
            </button>
            <br></br>
            <h2>The Unexpected Gifts of Giving Back</h2>
          </div>
          
          <div className="project-detail-content">
            <div className="writing-intro">
              <div className="writing-metadata">
                <span>February 28, 2025</span>
                <span className="category-tag">Community</span>
              </div>
              <p>
                In the competitive world of computer science and tech startups, it's easy to become fixated on building the next groundbreaking application, landing the perfect job, or mastering the latest programming language. While these pursuits have their place, my most profound lessons have come from somewhere unexpected – giving back to others.
              </p>
            </div>

            <div className="writing-section">
              <h3>A Commitment to Service: 100 Hours in One Semester</h3>
              
              <p>
                My journey with community service began with small volunteering efforts during my freshman year, but it was during my sophomore year at Texas A&M that I decided to make a more substantial commitment. I challenged myself to complete 100 hours of community service in a single semester – all while maintaining my academic responsibilities and other extracurricular activities.
              </p>
              
              <p>
                These hours were split across various initiatives: volunteering at local food banks, participating in campus clean-up events, tutoring underprivileged students in STEM subjects, and organizing charitable fundraisers. Some weekends, I would dedicate entire days to service projects, returning to my apartment exhausted but fulfilled in a way that coding sessions or exam preparation never quite matched.
              </p>
              
              <p>
                One of the most rewarding initiatives was my involvement with the Brazos Valley Hospice Happening fundraiser. Working alongside an incredible team of volunteers, we organized an event that raised thousands of dollars to support hospice care for patients and families in our community during their most vulnerable moments.
              </p>

              <div className="image-section">
                <div className="image-container">
                  <img src={hospice} alt="Brazos Valley Hospice Happening Fundraiser" />
                </div>
                <p className="image-caption">Sitting in front of my team at the Brazos Valley Hospice Happening fundraiser, where my team helped raise thousands of dollars to support compassionate end-of-life care for patients and families in need.</p>
              </div>
            </div>

            <div className="writing-section">
              <h3>Von Miller's Gig 'Em Gala: A Highlight of My Service Journey</h3>
              
              <p>
                Among the various service projects I participated in, one particular highlight was leading the auction fundraiser for Von Miller's Gig 'Em Gala. Super Bowl MVP Von Miller had established Von's Vision, a foundation dedicated to providing eye exams and glasses to underprivileged children.
              </p>
              
              <p>
                I still remember the blend of excitement and nervousness as I coordinated with donors, organized auction items, and managed a team of fellow volunteers. The event itself was a whirlwind of activity – NFL players in attendance, alumni making generous bids, and a palpable sense of community coming together for a cause greater than ourselves.
              </p>
              
              <p>
                By the end of the evening, we had raised over $300,000 – funds that would directly impact the lives of children who otherwise wouldn't have access to proper vision care. The number itself was impressive, but what stayed with me was something deeper: the realization that my skills in organization, communication, and leadership could be channeled toward making a tangible difference in people's lives.
              </p>

              <div className="image-section">
                <div className="image-container">
                  <img src={vonsvision} alt="Von Miller's Gig 'Em Gala Fundraiser" />
                </div>
                <p className="image-caption">At the Von Miller's Gig 'Em Gala auction, where our team worked with Super Bowl L MVP Von Miller to raise over $300,000 for children in need of vision care.</p>
              </div>
            </div>

            <div className="writing-section">
              <h3>The Undergraduate Leadership Excellence Award</h3>

              <p>
                My dedication to community service, combined with my academic achievements and other leadership roles, ultimately contributed to my receiving the Undergraduate Leadership Excellence Award from the Texas A&M Computer Science Department. This honor is one that I deeply cherish not merely for the recognition itself, but for what it represents: the validation that technical excellence and community service aren't separate paths but complementary journeys.
              </p>

              <p>
                I'm particularly grateful to Dr. Hyunyoung Lee, who played a major role in my receiving this award. Her mentorship and encouragement pushed me to excel not only in my technical pursuits but also in finding ways to use those skills to benefit others and the broader community.
              </p>

              <div className="image-grid">
                <div className="image-container">
                  <img src={leadership1} alt="Leadership Award Ceremony 1" />
                </div>
                <div className="image-container">
                  <img src={leadership2} alt="Leadership Award Ceremony 2" />
                </div>
              </div>
              <p className="image-caption">
                Receiving the Undergraduate Leadership Excellence Award from the Texas A&M Computer Science Department, recognizing both academic achievements and community service efforts.
              </p>
            </div>

            <div className="writing-section">
              <h3>The Robotics Team: Beyond Technical Skills</h3>
              
              <p>
                My involvement with the Texas A&M Robotics Team offered another dimension of giving back. While most of my time was dedicated to developing our maze-solving robot and contributing to the technical aspects of the project, some of my most meaningful experiences came from our outreach initiatives.
              </p>
              
              <p>
                We organized workshops for local high school students, introducing them to robotics and programming concepts in accessible, hands-on ways. Seeing the spark of curiosity in their eyes – especially from students who had never considered engineering as a potential path – was incredibly rewarding.
              </p>
              
              <p>
                Our fundraising efforts were equally significant. Through various events and initiatives, we raised over $1,000 to support both our team's projects and community programs. These experiences taught me that technical knowledge becomes exponentially more valuable when shared with others and applied toward collective goals.
              </p>
            </div>

            <div className="writing-section">
              <h3>Teaching: The Reciprocal Gift</h3>
              
              <p>
                Perhaps no experience has better exemplified the reciprocal nature of giving than my role as a Teaching Assistant at Texas A&M. While officially I was there to help students grasp complex programming concepts and navigate data structures and algorithms, the reality is that I've received as much as I've given.
              </p>
              
              <p>
                Each time I explain a concept to a struggling student, my own understanding deepens. Each time I help troubleshoot a challenging piece of code, my problem-solving skills sharpen. The questions students ask often push me to reconsider my assumptions and explore new perspectives.
              </p>
              
              <p>
                One particularly memorable experience involved a student who was consistently struggling with linked list implementations. After several one-on-one sessions and alternative explanations, something finally clicked. The joy and confidence on his face in that moment – and watching him go on to help other students with the same concept – reminded me that knowledge shared creates a beautiful multiplier effect.
              </p>
            </div>

            <div className="writing-section">
              <h3>Unexpected Benefits: What Giving Has Given Me</h3>
              
              <p>
                Through these varied experiences with community service, outreach, and teaching, I've received gifts I hadn't anticipated:
              </p>
              
              <ol className="writing-list">
                <li>
                  <span className="list-highlight">Perspective:</span> Immersing myself in service has repeatedly pulled me out of the tech bubble and connected me with diverse people and their unique challenges. This broader perspective has made me a more empathetic developer, focused on creating solutions that truly address human needs rather than just showcasing technical prowess.
                </li>
                <li>
                  <span className="list-highlight">Purpose:</span> While technical accomplishments bring satisfaction, nothing compares to the sense of purpose that comes from directly improving others' lives. This purpose has become a north star, guiding career decisions and project choices.
                </li>
                <li>
                  <span className="list-highlight">Network:</span> Through volunteering and community involvement, I've connected with remarkable people across various fields – people I wouldn't have met within the confined circles of tech and academia. These relationships have enriched both my personal and professional life.
                </li>
                <li>
                  <span className="list-highlight">Resilience:</span> Community service often presents unpredictable challenges and requires adaptability. These experiences have built a resilience that translates directly to entrepreneurial endeavors and technical problem-solving.
                </li>
                <li>
                  <span className="list-highlight">Leadership:</span> Leading volunteer initiatives has developed a different kind of leadership – one based on inspiration and shared purpose rather than authority. These skills have proven invaluable in both academic group projects and professional settings.
                </li>
              </ol>
            </div>

            <div className="writing-section">
              <h3>Making Giving a Lifelong Practice</h3>
              
              <p>
                As I look toward graduation and beyond, I'm committed to integrating service into my life and career. At Quaternion Studios, we're exploring ways to dedicate a percentage of our time to pro bono work for nonprofits that need technical solutions but lack resources. In my personal life, I'm seeking consistent volunteer opportunities rather than one-off events.
              </p>
              
              <p>
                The tech industry offers unique opportunities for giving back – whether through mentoring aspiring developers, contributing to open-source projects, or building tools that address social challenges. I believe we have both the capability and responsibility to use our skills for more than just profit and career advancement.
              </p>
            </div>

            <div className="writing-section">
              <h3>An Invitation</h3>
              
              <p>
                If you're reading this – especially if you're a fellow student or tech professional – I encourage you to explore how your specific skills might serve others. Start small and consistent rather than grand and occasional. Look for opportunities within your existing communities. Be open to the possibility that in giving, you'll receive far more than you expect.
              </p>
              
              <p>
                As the computer scientist Alan Kay once said, "The best way to predict the future is to invent it." Through giving back, we can collectively invent a future where technology and talent serve everyone, not just the privileged few.
              </p>
              
              <p className="writing-conclusion">
                "We make a living by what we get, but we make a life by what we give." - Winston Churchill
              </p>
            </div>
            <br></br>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContentSections