import React from 'react'

interface ContentSectionsProps {
  activeSection: string | null
  onClose: () => void
}

const ContentSections: React.FC<ContentSectionsProps> = ({ activeSection, onClose }) => {
  const [expandedExperience, setExpandedExperience] = React.useState<string | null>(null)
  
  if (!activeSection) return null

  return (
    <div className="content-sections" onClick={(e) => {
      if (e.target === e.currentTarget || (e.target as Element).textContent === '×') {
        onClose()
      }
    }}>
      <button className="close-section" onClick={onClose}>×</button>
      
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
      
      {activeSection === 'projects' && (
        <div className="section projects-section">
          <h2>Projects</h2>
          <p>Content coming soon...</p>
        </div>
      )}
      
      {activeSection === 'experience' && (
        <div className="section experience-section">
          <h2>Experience</h2>
          <div className="experience-content">
            
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