import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          🌱 CropPulse
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="badge">
            AI + IoT • Sustainable Agriculture
          </div>

          <h1>
            AI-IoT Plant
            <span> Stress Intelligence</span>
          </h1>

          <p className="hero-text">
            Listening to the plant. Predicting stress.
            Enabling timely action.
          </p>

          <div className="hero-buttons">
            <a href="#dashboard" className="primary-btn">
              View Dashboard →
            </a>

            <a href="#how" className="secondary-btn">
              How It Works
            </a>
          </div>

        </div>

        <div className="plant-card">
          <div className="plant-icon">🌱</div>
          <div className="pulse-ring"></div>
          <p>Plant Intelligence</p>
          <small>Monitoring in real time</small>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section problem">
        <div className="section-title">
          <span>THE CHALLENGE</span>
          <h2>Understand the plant before stress becomes visible.</h2>
          <p>
            Environmental data alone may not reveal how an individual
            plant is responding physiologically.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="icon">🌱</div>
            <h3>Plant Response</h3>
            <p>
              Monitor plant bioelectrical variations
              alongside environmental conditions.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">💧</div>
            <h3>Water Efficiency</h3>
            <p>
              Support targeted irrigation instead of
              routine watering.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Resource Efficiency</h3>
            <p>
              Help reduce unnecessary water and energy
              consumption through early awareness.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="section workflow" id="how">

        <div className="section-title">
          <span>HOW CROPPULSE WORKS</span>
          <h2>Sense → Filter → Fuse → Predict → Explain → Act</h2>
        </div>

        <div className="workflow-grid">

          <div className="workflow-card">
            <div>🌿</div>
            <h3>Sense</h3>
            <p>Plant and environmental sensors collect data.</p>
          </div>

          <div className="workflow-card">
            <div>⚙️</div>
            <h3>Filter</h3>
            <p>Signal conditioning and preprocessing.</p>
          </div>

          <div className="workflow-card">
            <div>🔗</div>
            <h3>Fuse</h3>
            <p>Combine plant and environmental information.</p>
          </div>

          <div className="workflow-card">
            <div>🧠</div>
            <h3>Predict</h3>
            <p>AI identifies abnormal stress patterns.</p>
          </div>

          <div className="workflow-card">
            <div>📊</div>
            <h3>Explain</h3>
            <p>Generate an interpretable Plant Stress Score.</p>
          </div>

          <div className="workflow-card">
            <div>🚜</div>
            <h3>Act</h3>
            <p>Provide timely recommendations.</p>
          </div>

        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section dashboard-section" id="dashboard">

        <div className="section-title">
          <span>LIVE MONITORING</span>
          <h2>Plant Health Dashboard</h2>
          <p>
            A simple view of the information collected by CropPulse.
          </p>
        </div>

        <div className="dashboard">

          <div className="dashboard-header">
            <div>
              <h3>Tomato Plant — TP01</h3>
              <p>● System Online</p>
            </div>

            <div className="stress-status">
              NORMAL
            </div>
          </div>

          <div className="sensor-grid">

            <div className="sensor">
              <span>💧</span>
              <p>Soil Moisture</p>
              <strong>62%</strong>
            </div>

            <div className="sensor">
              <span>🌡️</span>
              <p>Temperature</p>
              <strong>28.4°C</strong>
            </div>

            <div className="sensor">
              <span>💦</span>
              <p>Humidity</p>
              <strong>71%</strong>
            </div>

            <div className="sensor">
              <span>☀️</span>
              <p>Light</p>
              <strong>680 lux</strong>
            </div>

          </div>

          <div className="stress-score">
            <div>
              <p>PLANT STRESS SCORE</p>
              <h2>24<span>/100</span></h2>
            </div>

            <div className="score-circle">
              24
            </div>
          </div>

          <div className="recommendation">
            <h3>💡 AI Recommendation</h3>
            <p>
              Current plant conditions appear normal.
              Continue monitoring the plant and maintain
              the current conditions.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">

        <div className="section-title">
          <span>ABOUT CROPPULSE</span>
          <h2>From sensing plant stress to intelligent decisions.</h2>

          <p>
            CropPulse combines plant-centric sensing,
            environmental monitoring, ESP32-based IoT,
            and AI analysis to provide an early-warning
            view of plant stress.
          </p>
        </div>

        <div className="tech-list">
          <div>⚡ Bioelectrical Sensing</div>
          <div>🌡 Environmental Sensors</div>
          <div>📡 ESP32 + IoT</div>
          <div>🧠 AI / ML</div>
          <div>📊 Stress Analytics</div>
          <div>🌱 Sustainable Agriculture</div>
        </div>

      </section>

      {/* Footer */}
      <footer>
        <h3>🌱 CropPulse</h3>
        <p>AI-IoT Plant Stress Intelligence</p>
        <small>
          Sense • Predict • Explain • Act
        </small>
      </footer>

    </div>
  )
}

export default App