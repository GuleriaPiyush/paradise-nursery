import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Decorative floating leaves */}
      <span className="landing-decorative leaf-1">🌿</span>
      <span className="landing-decorative leaf-2">🌱</span>
      <span className="landing-decorative leaf-3">🍃</span>
      <span className="landing-decorative leaf-4">🌾</span>

      <div className="landing-content">
        <span className="landing-badge">🌱 Premium Indoor Plants</span>

        <h1 className="landing-title">
          Paradise<br />
          <span>Nursery</span>
        </h1>

        <p className="landing-subtitle-line">Where Nature Meets Your Home</p>

        <p className="landing-tagline">
          Discover handpicked, lovingly grown houseplants that transform your
          living space into a lush, breathing sanctuary. Free delivery on
          orders over ₹999.
        </p>

        <button
          className="btn-get-started"
          onClick={() => navigate('/plants')}
        >
          Get Started
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default App;
