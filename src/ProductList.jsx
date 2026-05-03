import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartTotalQuantity } from './store/CartSlice';

// ─── Plant Data ───────────────────────────────────────────────────────────────
const plantCategories = [
  {
    id: 'air-purifiers',
    name: 'Air Purifiers',
    icon: '💨',
    description: 'NASA-approved plants that clean and refresh your indoor air naturally',
    plants: [
      {
        id: 'ap-1',
        name: 'Peace Lily',
        emoji: '🤍',
        description: 'Elegant white blooms; removes benzene, formaldehyde & ammonia.',
        cost: 349,
        image: 'https://images.unsplash.com/photo-1616690236878-cacacdc3c11d?w=400&q=80',
      },
      {
        id: 'ap-2',
        name: 'Spider Plant',
        emoji: '🕷️',
        description: 'Fast-growing and nearly indestructible. Absorbs CO and xylene.',
        cost: 199,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      },
      {
        id: 'ap-3',
        name: "Devil's Ivy",
        emoji: '🌿',
        description: 'Trailing golden pothos that thrives in low light and kills toxins.',
        cost: 229,
        image: 'https://images.unsplash.com/photo-1609823969694-76c5bf0d64f9?w=400&q=80',
      },
      {
        id: 'ap-4',
        name: 'Boston Fern',
        emoji: '🌾',
        description: 'Lush, feathery fronds that humidify and purify simultaneously.',
        cost: 279,
        image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=400&q=80',
      },
      {
        id: 'ap-5',
        name: 'Rubber Plant',
        emoji: '🍃',
        description: 'Bold, glossy leaves with powerful formaldehyde-fighting ability.',
        cost: 449,
        image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80',
      },
      {
        id: 'ap-6',
        name: 'Aloe Vera',
        emoji: '🌵',
        description: 'Iconic succulent that purifies air and soothes skin burns.',
        cost: 189,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
      },
      {
        id: 'ap-7',
        name: 'Chrysanthemum',
        emoji: '🌸',
        description: 'Colourful blooms that filter out ammonia and benzene indoors.',
        cost: 299,
        image: 'https://images.unsplash.com/photo-1487530811015-780a84a35f19?w=400&q=80',
      },
    ],
  },
  {
    id: 'low-maintenance',
    name: 'Low Maintenance',
    icon: '😌',
    description: 'Perfect for busy plant parents — thriving on minimal attention',
    plants: [
      {
        id: 'lm-1',
        name: 'ZZ Plant',
        emoji: '💚',
        description: 'Thrives on neglect. Waxy leaves, drought tolerant, near zero care.',
        cost: 399,
        image: 'https://images.unsplash.com/photo-1632307411863-9889aab3f49e?w=400&q=80',
      },
      {
        id: 'lm-2',
        name: 'Snake Plant',
        emoji: '🗡️',
        description: 'Hardy architectural plant; survives low light and forgetful owners.',
        cost: 329,
        image: 'https://images.unsplash.com/photo-1551893665-f843f600794e?w=400&q=80',
      },
      {
        id: 'lm-3',
        name: 'Cactus Mix',
        emoji: '🌵',
        description: 'Set of 3 assorted mini cacti — water once a month and forget.',
        cost: 249,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
      },
      {
        id: 'lm-4',
        name: 'Jade Plant',
        emoji: '🌱',
        description: 'Feng shui money tree; grows slowly with very occasional watering.',
        cost: 359,
        image: 'https://images.unsplash.com/photo-1620127252536-03bdfab56978?w=400&q=80',
      },
      {
        id: 'lm-5',
        name: 'Cast Iron Plant',
        emoji: '🖤',
        description: 'Lives up to its name — tolerates dust, dim light and dry spells.',
        cost: 419,
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80',
      },
      {
        id: 'lm-6',
        name: 'Chinese Evergreen',
        emoji: '🌿',
        description: 'Vibrant patterned leaves that practically care for themselves.',
        cost: 289,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
      },
      {
        id: 'lm-7',
        name: 'Dracaena Marginata',
        emoji: '🌴',
        description: 'Slender, spiky leaves on elegant stems. Water bi-weekly, done.',
        cost: 479,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
      },
    ],
  },
  {
    id: 'tropical',
    name: 'Tropical Beauties',
    icon: '🌺',
    description: 'Lush, exotic statement plants that make every room unforgettable',
    plants: [
      {
        id: 'tr-1',
        name: 'Monstera Deliciosa',
        emoji: '🌿',
        description: 'The iconic split-leaf plant. A true Instagram-worthy showstopper.',
        cost: 649,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
      },
      {
        id: 'tr-2',
        name: 'Bird of Paradise',
        emoji: '🦜',
        description: 'Giant paddle-shaped leaves that scream tropical luxury.',
        cost: 899,
        image: 'https://images.unsplash.com/photo-1534425787700-7a0f41e23e90?w=400&q=80',
      },
      {
        id: 'tr-3',
        name: "Fiddle-Leaf Fig",
        emoji: '🎻',
        description: 'Designer darling — large violin-shaped leaves for dramatic interiors.',
        cost: 799,
        image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=400&q=80',
      },
      {
        id: 'tr-4',
        name: 'Pink Princess Philodendron',
        emoji: '👑',
        description: 'Rare and striking with pink-variegated dark leaves. A collector gem.',
        cost: 1199,
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&q=80',
      },
      {
        id: 'tr-5',
        name: 'Calathea Orbifolia',
        emoji: '🌀',
        description: 'Stunning silver-striped leaves that fold at night like a prayer.',
        cost: 549,
        image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80',
      },
      {
        id: 'tr-6',
        name: 'Alocasia Black Velvet',
        emoji: '🖤',
        description: 'Velvety dark leaves with striking silver veins. Rare and dramatic.',
        cost: 749,
        image: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=400&q=80',
      },
      {
        id: 'tr-7',
        name: 'Anthurium Clarinervium',
        emoji: '❤️',
        description: 'Heart-shaped leaves with contrasting white veins. Truly gorgeous.',
        cost: 699,
        image: 'https://images.unsplash.com/photo-1604762514861-f7b44ff74a94?w=400&q=80',
      },
    ],
  },
];

// ─── Navbar Component ─────────────────────────────────────────────────────────
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🌿</span> Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plants" className="active">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// ─── Plant Card ────────────────────────────────────────────────────────────────
function PlantCard({ plant, onAddToCart, isAdded }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="plant-card">
      <div className="plant-image-wrap">
        {!imgError ? (
          <img
            src={plant.image}
            alt={plant.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="plant-emoji-fallback">{plant.emoji}</div>
        )}
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">₹{plant.cost}</span>
          <button
            className="btn-add-cart"
            onClick={() => onAddToCart(plant)}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ProductList ───────────────────────────────────────────────────────────────
function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotalQty = useSelector(selectCartTotalQuantity);

  // Track which plant IDs have been added
  const [addedIds, setAddedIds] = useState(new Set());

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      id:    plant.id,
      name:  plant.name,
      image: plant.image,
      cost:  plant.cost,
      emoji: plant.emoji,
    }));
    setAddedIds((prev) => new Set([...prev, plant.id]));
  };

  return (
    <div className="product-page">
      <Navbar cartCount={cartTotalQty} />

      <div className="page-hero">
        <h1>🌿 Our Plant Collection</h1>
        <p>Handpicked, lovingly grown, delivered to your door</p>
      </div>

      <div className="products-container">
        {plantCategories.map((category) => (
          <div key={category.id} className="category-section">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <div>
                <h2 className="category-title">{category.name}</h2>
                <p className="category-desc">{category.description}</p>
              </div>
            </div>

            <div className="plants-grid">
              {category.plants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                  isAdded={addedIds.has(plant.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
