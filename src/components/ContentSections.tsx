import React from 'react'

interface ContentSectionsProps {
  activeSection: string | null
  onClose: () => void
}

const ContentSections: React.FC<ContentSectionsProps> = ({ activeSection, onClose }) => {
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
              I'm a driven senior pursuing a Bachelor of Science in Computer Science at Texas A&M University. 
              My career aspirations center on becoming an innovative <strong>creator</strong>, with particular 
              emphasis on developing scalable systems and advancing the field of machine learning.
            </p>
            <p>
              <strong>I want to grow alongside the systems I build.</strong> I want to push myself to learn 
              inconceivable amounts while shipping code that has an undeniable impact on the end product.
            </p>
            <p>
              My professional experience includes working as an AI/ML engineer at NTT Data Corporation. 
              I'm also a Co-Founder at Quaternion Studios, an independent agency specializing in building 
              software for 2D/3D modeling within the web graphics sector.
            </p>
            <p>
              I have also been fortunate enough to serve as a teaching assistant during my time at A&M. 
              This is one of the most rewarding things I have done. I've deepened my technical understanding 
              of important concepts such as Data Structures and algorithms while developing strong instructional 
              capabilities, helping fellow students grasp complex programming concepts. This has also allowed 
              me to become exceedingly comfortable with <strong>my favorite programming language - C++. 😊</strong>
            </p>
            <p>
              Originally from Houston and now residing in Dallas, I maintain a well-rounded lifestyle outside 
              of technology. I'm an avid photographer and enjoy water skiing during my leisure time. I am a 
              huge Dallas Mavericks fan and if you want to ruin my day, mention the Luka trade. I love to 
              hear about the world and other cultures - please reach out if you have interesting stories.
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
            </div>
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
          <p>Content coming soon...</p>
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