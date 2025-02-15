import React from 'react';
import Countdown from 'react-countdown';
import { ArrowRight, Gift, Clock, Shield, Store } from 'lucide-react';

function Home() {
  const raffleEndDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000); // 15 days from now

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 dark:text-white">
          ¡Robux más baratos que en la tienda oficial! 🤑
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl font-bold mb-2 dark:text-white">100 Robux</div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$1</div>
            <div className="text-gray-600 dark:text-gray-300 mb-4">Entrega en 5 días</div>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full">
              Comprar ahora
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-600 dark:border-blue-500">
            <div className="text-2xl font-bold mb-2 dark:text-white">1000 Robux</div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$10</div>
            <div className="text-gray-600 dark:text-gray-300 mb-4">Entrega instantánea</div>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>

      {/* Raffle Counter */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-16">
        <div className="text-center">
          <Gift className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">¡Sorteo mensual de 5000 Robux!</h2>
          <div className="text-xl">
            Tiempo restante:{' '}
            <Countdown
              date={raffleEndDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <span className="font-mono">
                  {days}d:{hours}h:{minutes}m:{seconds}s
                </span>
              )}
            />
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Cómo Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">1. Elige tu paquete</h3>
            <p className="text-gray-600 dark:text-gray-300">Selecciona la cantidad de Robux que deseas</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">2. Paga seguro</h3>
            <p className="text-gray-600 dark:text-gray-300">Realiza el pago de forma segura</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">3. Recibe tus Robux</h3>
            <p className="text-gray-600 dark:text-gray-300">Obtén tus Robux + puntos para el sorteo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;