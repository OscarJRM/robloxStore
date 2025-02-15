import React from 'react';
import { History, Gift, LogOut, Award } from 'lucide-react';

function Profile() {
  const purchaseHistory = [
    { id: 1, amount: 1000, date: '2024-03-15', status: 'Entregado' },
    { id: 2, amount: 500, date: '2024-03-10', status: 'Entregado' },
    { id: 3, amount: 100, date: '2024-03-05', status: 'En proceso' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Stats Cards */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <History className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">Total Robux</h3>
          </div>
          <p className="text-3xl font-bold">1,600</p>
          <p className="text-gray-600">Comprados hasta ahora</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">Puntos</h3>
          </div>
          <p className="text-3xl font-bold">15</p>
          <p className="text-gray-600">Para el próximo sorteo</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">Entradas</h3>
          </div>
          <p className="text-3xl font-bold">2</p>
          <p className="text-gray-600">En el sorteo actual</p>
        </div>
      </div>

      {/* Purchase History */}
      <div className="bg-white rounded-xl shadow-lg mt-8 p-6">
        <h2 className="text-2xl font-bold mb-6">Historial de Compras</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Fecha</th>
                <th className="text-left py-3 px-4">Cantidad</th>
                <th className="text-left py-3 px-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((purchase) => (
                <tr key={purchase.id} className="border-b">
                  <td className="py-3 px-4">{purchase.date}</td>
                  <td className="py-3 px-4">{purchase.amount} Robux</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        purchase.status === 'Entregado'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {purchase.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-8 flex justify-end">
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;