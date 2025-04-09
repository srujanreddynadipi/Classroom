import React, { useState, useEffect } from 'react';
import ad from './assets/ad.jpg';
import cjnlogo from './assets/cjnlogo.jpg';
import './App.css'; 


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [activeNav, setActiveNav] = useState('#chat-section');


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCandidateClick = (name) => {
    setSelectedCandidate(name);
    console.log('Candidate selected: ' + name);
  };

  const handleNavClick = (href) => {
    setActiveNav(href);
    // Smooth scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <img src={cjnlogo} alt="CJN Logo" className="logo" />
            <button className="menu-toggle" onClick={toggleMobileMenu}>☰</button>
            <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <a 
                href="#chat-section" 
                className={activeNav === '#chat-section' ? 'active' : ''}
                onClick={() => handleNavClick('#chat-section')}
              >
                <i>💬</i> Chat
              </a>
              <a 
                href="#statistics-section" 
                className={activeNav === '#statistics-section' ? 'active' : ''}
                onClick={() => handleNavClick('#statistics-section')}
              >
                <i>📊</i> Statistics
              </a>
              <a 
                href="#advertisements-section" 
                className={activeNav === '#advertisements-section' ? 'active' : ''}
                onClick={() => handleNavClick('#advertisements-section')}
              >
                <i>📢</i> Advertisements
              </a>
              <a 
                href="#qr-section" 
                className={activeNav === '#qr-section' ? 'active' : ''}
                onClick={() => handleNavClick('#qr-section')}
              >
                <i>📱</i> QR
              </a>
              <a 
                href="#video-section" 
                className={activeNav === '#video-section' ? 'active' : ''}
                onClick={() => handleNavClick('#video-section')}
              >
                <i>🎥</i> Video
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="statistics-section" className="dashboard">
          <h2 className="section-title">Statistics</h2>
          <div className="stats-bar">
            <StatCard title="Openings" value="156" />
            <StatCard title="Interviews" value="144" />
            <StatCard title="Offered" value="56" />
          </div>

          <div className="main-content">
            <div className="sidebar">
              <h2 id="chat-section" className="section-title">Chat</h2>
              <div className="candidate-list">
                <CandidateCard 
                  initials="CJ" 
                  name="CJN NOW" 
                  status="candidate" 
                  message=""
                  selected={selectedCandidate === "CJN NOW"}
                  onClick={() => handleCandidateClick("CJN NOW")}
                />
                <CandidateCard 
                  initials="GK" 
                  name="Gouthami Kadimellla" 
                  status="candidate" 
                  message="good experience"
                  selected={selectedCandidate === "Gouthami Kadimellla"}
                  onClick={() => handleCandidateClick("Gouthami Kadimellla")}
                />
                <CandidateCard 
                  initials="SP" 
                  name="Shivaji Pawar" 
                  status="viewer" 
                  message="Hello, I am on app.cjnnow.com"
                  selected={selectedCandidate === "Shivaji Pawar"}
                  onClick={() => handleCandidateClick("Shivaji Pawar")}
                />
                <CandidateCard 
                  initials="VB" 
                  name="Vinayak B" 
                  status="candidate" 
                  message=""
                  selected={selectedCandidate === "Vinayak B"}
                  onClick={() => handleCandidateClick("Vinayak B")}
                />
              </div>
            </div>

            <div className="content-area">
              <section id="advertisements-section">
                <h2 className="section-title">Advertisements</h2>
                <AdBanner 
                  title="Blockchain Technology Workshop"
                  description="Join our exclusive workshop to learn about blockchain implementation in business applications. Limited seats available!"
                  buttonText="Register Now"
                  imageUrl="ad"
                />

                <JobPosting 
                  title="Blockchain and Decentralized Technologies Intern"
                  responsibilities={[
                    "Explore and implement blockchain and decentralized technologies for specific use cases",
                    "Ensure the security and integrity of blockchain-based features",
                    "Collaborate with development teams to integrate blockchain solutions"
                  ]}
                  skills={[
                    "Knowledge of blockchain principles and technologies",
                    "Security considerations for decentralized systems",
                    "Collaboration with development teams"
                  ]}
                  employerId="SCRPL"
                  employerName="Smart Cookie"
                  jobCode="SCR137"
                />
              </section>

              <section id="video-section">
                <h2 className="section-title">Video</h2>
                <div className="video-container">
                  <div className="video-wrapper">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/NpbvPOo2flk"
                      title="Digital Marketing Video" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="progress-list">
                    <ProgressItem title="Developing A Strategic Plan" completed={true} />
                    <ProgressItem title="Executing The Campaign" completed={true} />
                    <ProgressItem title="Monitoring Performance Metrics" completed={false} />
                  </div>
                </div>
              </section>

              <section id="qr-section">
                <h2 className="section-title">QR Codes</h2>
                <div className="qr-section">
                  <QRCard title="Testing Team" />
                  <QRCard title="Task Assignment" />
                  <QRCard title="Design Team" />
                  <QRCard title="HR M&G" />
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <div className="chat-button">💬</div>
    </>
  );
}

// Component for stat cards
function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h2 className="stat-title">{title}</h2>
      <div className="stat-value">{value}</div>
    </div>
  );
}

// Component for candidate cards
function CandidateCard({ initials, name, status, message, selected, onClick }) {
  return (
    <div 
      className="candidate-card" 
      style={{ backgroundColor: selected ? '#e0e0e0' : '' }}
      onClick={onClick}
    >
      <div className="avatar">{initials}</div>
      <div className="candidate-info">
        <div className="candidate-name">{name}</div>
        <div className="candidate-status">({status})</div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

// Component for ad banner
function AdBanner({ title, description, buttonText, imageUrl }) {
  return (
    <div className="ad-banner">
      <div className="ad-content">
        <div className="ad-text">
          <h3 className="ad-title">{title}</h3>
          <p className="ad-description">{description}</p>
          <button className="ad-button">{buttonText}</button>
        </div>
        <img src={ad} alt="Workshop Banner" className="ad-image" />
      </div>
    </div>
  );
}

// Component for job posting
function JobPosting({ title, responsibilities, skills, employerId, employerName, jobCode }) {
  return (
    <div className="job-posting">
      <h2 className="hiring-badge">WE'RE HIRING</h2>
      <h3>{title}</h3>

      <div className="job-details">
        <div className="job-section">
          <h3>Responsibilities:</h3>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={`resp-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="job-section">
          <h3>Skills:</h3>
          <ul>
            {skills.map((item, index) => (
              <li key={`skill-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p><strong>Employer ID:</strong> {employerId}</p>
        <p><strong>Employer Name:</strong> {employerName}</p>
        <p><strong>Job Code:</strong> {jobCode}</p>
      </div>

      <button className="apply-button">Send Your Resume</button>
    </div>
  );
}

// Component for progress items
function ProgressItem({ title, completed }) {
  return (
    <div className="progress-item">
      <h3>{title}</h3>
      {completed && <span className="check">✓</span>}
    </div>
  );
}

// Component for QR cards
function QRCard({ title }) {
  return (
    <div className="qr-card">
      <img src="/api/placeholder/150/150" alt="QR Code" />
      <div className="qr-title">{title}</div>
    </div>
  );
}


export default App;