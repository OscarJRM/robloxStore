import React from 'react';
import { Store, Clock, Zap, ShieldCheck, Award } from 'lucide-react';

const products = [
  { 
    id: 1, 
    amount: 100, 
    price: 1, 
    delivery: '5 días', 
    instant: false,
    popular: false,
    bonus: '1 punto de sorteo'
  },
  { 
    id: 2, 
    amount: 200, 
    price: 2, 
    delivery: '5 días', 
    instant: false,
    popular: false,
    bonus: '2 puntos de sorteo'
  },
  { 
    id: 3, 
    amount: 500, 
    price: 5, 
    delivery: 'Instantáneo', 
    instant: true,
    popular: true,
    bonus: '5 puntos de sorteo'
  },
  { 
    id: 4, 
    amount: 1000, 
    price: 10, 
    delivery: 'Instantáneo', 
    instant: true,
    popular: false,
    bonus: '10 puntos de sorteo'
  },
  { 
    id: 5, 
    amount: 5000, 
    price: 45, 
    delivery: 'Instantáneo', 
    instant: true,
    popular: false,
    bonus: '50 puntos de sorteo + 1 entrada gratis'
  },
];

function Shop() {
  const [filter, setFilter] = React.useState<'all' | 'instant' | 'delayed'>('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'instant') return product.instant;
    if (filter === 'delayed') return !product.instant;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Tienda de Robux</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Obtén Robux de forma segura y económica. ¡Cada compra te da puntos para participar en nuestros sorteos mensuales!
        </p>
      </div>
      
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2
            ${filter === 'all' 
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300'}`}
        >
          <Store className="w-5 h-5" />
          Todos
        </button>
        <button
          onClick={() => setFilter('instant')}
          className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2
            ${filter === 'instant' 
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300'}`}
        >
          <Zap className="w-5 h-5" />
          Entrega instantánea
        </button>
        <button
          onClick={() => setFilter('delayed')}
          className={`px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2
            ${filter === 'delayed' 
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300'}`}
        >
          <Clock className="w-5 h-5" />
          Ahorra con espera
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200
              ${product.popular ? 'border-2 border-blue-500 dark:border-blue-400' : ''}`}
          >
            {product.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <Store className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              {product.instant ? (
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Instantáneo
                </span>
              ) : (
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 días
                </span>
              )}
            </div>
            <div className="text-2xl font-bold mb-2 dark:text-white">{product.amount} Robux</div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">${product.price}</div>
            <div className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="text-sm">{product.bonus}</span>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Comprar ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;