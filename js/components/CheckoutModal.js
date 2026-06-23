import { store } from '../core/store.js';
import { BaseComponent } from './BaseComponent.js';

export class CheckoutModal extends BaseComponent {
  constructor(containerId) {
    super(containerId);
  }

  render() {
    if (!this.container) return;

    const state = store.getState();
    if (!state.isCheckoutOpen) {
      this.container.innerHTML = '';
      this.container.classList.remove('open');
      return;
    }

    this.container.classList.add('open');
    const total = store.getCartTotal();

    this.container.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content glass-effect slide-in-bottom">
        <div class="modal-header">
          <h3>Secure Checkout</h3>
          <button class="btn-icon close-checkout" aria-label="Close checkout">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="checkout-steps">
            <div class="step active">
              <div class="step-icon">1</div>
              <span>Shipping</span>
            </div>
            <div class="step-divider"></div>
            <div class="step">
              <div class="step-icon">2</div>
              <span>Payment</span>
            </div>
            <div class="step-divider"></div>
            <div class="step">
              <div class="step-icon">3</div>
              <span>Confirm</span>
            </div>
          </div>
          
          <form id="checkoutForm" class="checkout-form">
            <h4>Shipping Information</h4>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control" value="${state.user ? state.user.name : ''}" required>
            </div>
            <div class="form-group">
              <label>Delivery Address</label>
              <textarea class="form-control" rows="3" required>${state.user ? state.user.address : ''}</textarea>
            </div>
            
            <h4 class="mt-4">Payment Method</h4>
            <div class="payment-methods">
              <label class="payment-card">
                <input type="radio" name="payment" value="alipay" checked>
                <div class="card-content">
                  <span class="icon">📱</span> Alipay
                </div>
              </label>
              <label class="payment-card">
                <input type="radio" name="payment" value="wechat">
                <div class="card-content">
                  <span class="icon">💬</span> WeChat Pay
                </div>
              </label>
              <label class="payment-card">
                <input type="radio" name="payment" value="harmony">
                <div class="card-content">
                  <span class="icon">🌐</span> HarmonyOS Pay
                </div>
              </label>
            </div>
            
            <div class="order-summary mt-4">
              <div class="summary-row total">
                <span>Total Amount:</span>
                <span class="amount text-primary">$${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block mt-4 btn-pay">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    `;
  }

  bindEvents() {
    if (!this.container) return;

    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.close-checkout') || e.target.closest('.modal-overlay')) {
        store.dispatch('TOGGLE_CHECKOUT');
      }
    });

    const form = this.container.querySelector('#checkoutForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-pay');
        btn.innerHTML = '<span class="loader-inline"></span> Processing Transaction...';
        btn.disabled = true;

        setTimeout(() => {
          store.dispatch('CLEAR_CART');
          store.dispatch('TOGGLE_CHECKOUT');
          alert("🎉 Transaction Successful!\n\nOrder #HM-" + Math.floor(Math.random() * 1000000) + " has been placed.");
        }, 2000);
      });
    }
  }
}
