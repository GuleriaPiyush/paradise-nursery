import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalCost,
} from './store/CartSlice';

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🌿</span> Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-link active">
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

// ─── Cart Item Row ─────────────────────────────────────────────────────────────
function CartItemRow({ item, onIncrease, onDecrease, onRemove }) {
  const [imgError, setImgError] = useState(false);
  const itemTotal = (item.cost * item.quantity).toFixed(2);

  return (
    <div className="cart-item-card">
      {/* Thumbnail */}
      <div className="cart-item-img">
        {!imgError && item.image ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <span style={{ fontSize: '2.2rem' }}>{item.emoji || '🌿'}</span>
        )}
      </div>

      {/* Info */}
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-unit-price">Unit price: ₹{item.cost}</p>
        <p className="cart-item-total">Total: ₹{itemTotal}</p>
      </div>

      {/* Controls */}
      <div className="cart-item-controls">
        {/* Quantity +/- */}
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => onDecrease(item)}
            title="Decrease quantity"
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onIncrease(item)}
            title="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Delete button */}
        <button
          className="btn-delete"
          onClick={() => onRemove(item.id)}
          title="Remove from cart"
        >
          🗑 Remove
        </button>
      </div>
    </div>
  );
}

// ─── CartItem (main page) ─────────────────────────────────────────────────────
function CartItem() {
  const dispatch = useDispatch();
  const items       = useSelector(selectCartItems);
  const totalQty    = useSelector(selectCartTotalQuantity);
  const totalCartAmount = items.reduce(
  (total, item) => total + item.cost * item.quantity, 0
);

  const [showToast, setShowToast] = useState(false);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  // Delivery: free over ₹999, otherwise ₹79
  const delivery = totalCost >= 999 ? 0 : 79;
  const grandTotal = (totalCost + delivery).toFixed(2);

  return (
    <div className="cart-page">
      <Navbar cartCount={totalQty} />

      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <h1>🛒 Your Cart</h1>
          {items.length > 0 && (
            <span className="cart-count-pill">{totalQty} item{totalQty !== 1 ? 's' : ''}</span>
          )}
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🪴</div>
            <h2>Your cart is empty</h2>
            <p>Browse our collection and add some green to your life!</p>
            <Link to="/plants" className="btn-get-started" style={{ display: 'inline-flex' }}>
              Browse Plants <span className="arrow">→</span>
            </Link>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="cart-items-list">
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {/* Order summary */}
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal ({totalQty} item{totalQty !== 1 ? 's' : ''})</span>
                <span>₹{totalCost.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>{delivery === 0 ? '🎉 Free' : `₹${delivery}`}</span>
              </div>

              {delivery > 0 && (
                <div className="summary-row" style={{ fontSize: '0.78rem', color: '#7a8c80' }}>
                  <span>Add ₹{(999 - totalCost).toFixed(0)} more for free delivery</span>
                </div>
              )}

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{totalCartAmount}</span>
              </div>

              <div className="cart-actions">
                <Link to="/plants" className="btn-continue">
                  ← Continue Shopping
                </Link>

                <button className="btn-checkout" onClick={handleCheckout}>
                  🔒 Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Coming Soon Toast */}
      {showToast && (
        <div className="checkout-toast">
          🚧 Coming Soon! Checkout is under construction.
        </div>
      )}
    </div>
  );
}

export default CartItem;
