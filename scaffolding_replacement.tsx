      {activeSection === 'projects' && activeProject === 'scaffolding-project' && (
        <div className="section project-detail-section">
          <div className="project-detail-header">
            <button 
              className="back-button"
              onClick={() => setActiveProject(null)}
            >
              ← Back to Projects
            </button>
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
                <img src={scaffoldingImage} alt="Scaffolding Graphics Application" />
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
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding3Image} alt="Technical Implementation" />
              </div>
            </div>

            <div className="scaffolding-section">
              <h4>Component Extraction</h4>
              <ul>
                <li>Allows extraction of specific building elements (walls, floors, roofs) to define attachment points for scaffolding.</li>
                <li>Enables seamless integration with architectural design files and construction planning tools.</li>
              </ul>

              <h4>Custom Materials & Textures</h4>
              <ul>
                <li>Differentiate scaffolding from the main building structure using dynamically assigned materials and textures.</li>
                <li>Supports material customization based on project requirements.</li>
              </ul>
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding4Image} alt="Custom Materials and Textures" />
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
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding5Image} alt="Business Impact" />
              </div>
            </div>

            <div className="scaffolding-section">
              <h3>Planned Enhancements</h3>
              <ul>
                <li><strong>AI-driven Scaffold Placement:</strong> Implement reinforcement learning to optimize scaffold positioning.</li>
                <li><strong>Augmented Reality (AR) Support:</strong> Enable scaffold visualization through AR for on-site construction planning.</li>
                <li><strong>Cloud Integration:</strong> Store and retrieve scaffold designs via cloud-based project management platforms.</li>
              </ul>
            </div>

            <div className="scaffolding-diagrams-section">
              <div className="scaffolding-diagram">
                <img src={scaffolding6Image} alt="Planned Enhancements" />
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
                <a href="https://0477ecc2-5847-48e4-bdb9-32403bc35367.vercel.app/model" target="_blank" rel="noopener noreferrer" className="live-demo-link">live demo</a>
              </p>
            </div>
          </div>
        </div>
      )}