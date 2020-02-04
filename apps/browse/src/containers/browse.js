import * as React from 'react';
import { Card } from '../components/card';

export function Browse({ pushState, events }) {
  const [ products, setProducts ] = React.useState(null);

  React.useEffect(() => {
    let url = '/_/product';
    const search = new URLSearchParams(location.search);
    const category = search.get('category');

    if (category) {
      url += `?category=${ category }`;
    }

    fetch(url)
    .then((r) => r.json())
    .then((data) => setProducts(data));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    pushState(event.currentTarget.attributes.href.value);
  };

  const handleAddToCart = (id) => {
    events.emit('cart:add', id);
  };

  return (
    <main className="container mt-4">
      <div className="card-deck">
        { !products && 'Loading...' }
        { products && products.map((product) => (
            <Card { ...product }
                href={ `/browse/${ product.id }` }
                onClick={ handleClick }
                onAddToCart={ handleAddToCart } />
        )) }
      </div>
    </main>
  );
}
