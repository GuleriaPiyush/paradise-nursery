import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from './store/CartSlice';

function AboutUs() {
  const cartTotal = useSelector(selectCartTotalQuantity);

  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🌿</span> Paradise Nursery
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              🛒 Cart
              {cartTotal > 0 && (
                <span className="cart-badge">{cartTotal}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p>Bringing nature's finest into your home since 2018</p>
      </div>

      {/* Content */}
      <div className="about-container">

        <div className="about-section">
          <h2>🌱 Our Story</h2>
          <p>
            Paradise Nursery was born out of a simple belief: every home deserves the life and
            warmth that plants bring. Founded in 2018 in a small greenhouse in Chandigarh, we
            started as a family-run operation with a passion for rare and beautiful houseplants.
            Today, we ship premium, healthy plants across India — carefully packaged and delivered
            straight to your door.
          </p>
          <p style={{ marginTop: '0.9rem' }}>
            Every plant in our collection is hand-selected by our horticulture team, nurtured
            in controlled greenhouse conditions, and inspected for health before dispatch. We
            believe plants aren't just décor — they're living companions that improve your air,
            your mood, and your home.
          </p>
        </div>

        <div className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            To make premium plant ownership accessible, joyful, and sustainable. We curate the
            world's most beautiful indoor plants and make it effortless for every household to
            enjoy the physical and mental benefits of living with greenery. We're committed to
            ethical sourcing, eco-friendly packaging, and a zero-plastic shipping promise.
          </p>
        </div>

        <div className="about-section">
          <h2>💚 Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="v-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>100% recyclable packaging and carbon-neutral delivery partners.</p>
            </div>
            <div className="value-card">
              <div className="v-icon">🔬</div>
              <h3>Quality</h3>
              <p>Every plant is greenhouse-grown and certified healthy before shipping.</p>
            </div>
            <div className="value-card">
              <div className="v-icon">❤️</div>
              <h3>Care</h3>
              <p>Detailed care guides included with every order so your plant thrives.</p>
            </div>
            <div className="value-card">
              <div className="v-icon">🤝</div>
              <h3>Community</h3>
              <p>We support local growers and give back to urban greening projects.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📍 Find Us</h2>
          <p>
            <strong>Headquarters:</strong> Sector 17, Chandigarh, Punjab 160017, India<br />
            <strong>Email:</strong> hello@paradisenursery.in<br />
            <strong>Phone:</strong> +91 98765 43210<br />
            <strong>Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM IST
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/plants" className="btn-get-started" style={{ display: 'inline-flex' }}>
            Shop Our Plants <span className="arrow">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
