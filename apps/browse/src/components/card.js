import * as React from 'react';

export function Card({ id, name, description, rrp, href, onClick, onAddToCart }) {
  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('add to cart', id);
    onAddToCart(id);
  }

  return (
    <a class="card" style={{ width: '18rem' }} href={ href } onClick={ onClick }>
      <div class="card-body">
        <h5 class="card-title">{ name }</h5>
        <p class="card-text">{ description }</p>
        <div className="text-right">
          <span class="pr-2">{ rrp.toFixed(2) }€</span>
          <button class="btn btn-primary" onClick={ handleAddToCart }>Add to cart</button>
        </div>
      </div>
    </a>
  )
}
