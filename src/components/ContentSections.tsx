import React from 'react'
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

interface ContentSectionsProps {
  activeSection: string | null
  onClose: () => void
}

const ContentSections: React.FC<ContentSectionsProps> = ({ activeSection, onClose }) => {
  const [expandedExperience, setExpandedExperience] = React.useState<string | null>(null)
  const [activeProject, setActiveProject] = React.useState<string | null>(null)
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
  
  // Reset activeProject when switching sections or closing
  React.useEffect(() => {
    if (activeSection !== 'projects') {
      setActiveProject(null)
    }
  }, [activeSection])
  
  // Reset fullscreen when switching sections or closing
  React.useEffect(() => {
    setIsFullScreen(false)
  }, [activeSection])
  
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
              onClick={() => setActiveProject('scaffolding-project')}
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
              onClick={() => setActiveProject('baseball-analytics')}
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
              onClick={() => setActiveProject('maze-robot')}
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
              onClick={() => setActiveProject(null)}
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
              onClick={() => setActiveProject(null)}
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
              onClick={() => setActiveProject(null)}
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
      
      {activeSection === 'writing' && (
        <div className="section writing-section">
          <h2>Writing</h2>
          <p>Content coming soon...</p>
        </div>
      )}
    </div>
  )
}

export default ContentSections