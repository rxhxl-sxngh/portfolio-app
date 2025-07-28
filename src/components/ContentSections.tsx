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