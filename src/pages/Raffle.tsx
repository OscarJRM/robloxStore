import React from 'react';
import { Gift, Trophy, Users } from 'lucide-react';
import Countdown from 'react-countdown';

function Raffle() {
  const raffleEndDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
  const userPoints = 15;
  const pointsNeeded = 20;
  const participants = [
    'Player123',
    'RobloxKing',
    'GamerPro',
    'BlockMaster',
    'RobuxFan',
    // Add more participants as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Gift className="w-16 h-16 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl font-bold mb-4">Sorteo Mensual de Robux</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          ¡Participa y gana 5000 Robux!
        </p>
      </div>

      {/* Progress and Timer */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Tu Progreso</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Puntos actuales:</span>
              <span className="font-bold">{userPoints}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(userPoints / pointsNeeded) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-white mb-4">
            Necesitas {pointsNeeded - userPoints} puntos más para una entrada
          </p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Canjear puntos por entradas
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-4">Tiempo Restante</h2>
          <div className="text-center">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <Countdown
              date={raffleEndDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
                    <div className="text-3xl font-bold">{days}</div>
                    <div className="text-sm text-gray-600 dark:text-white">Días</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
                    <div className="text-3xl font-bold">{hours}</div>
                    <div className="text-sm text-gray-600 dark:text-white">Horas</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
                    <div className="text-3xl font-bold">{minutes}</div>
                    <div className="text-sm text-gray-600 dark:text-white">Minutos</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-700">
                    <div className="text-3xl font-bold">{seconds}</div>
                    <div className="text-sm text-gray-600 dark:text-white">Segundos</div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Participants */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Participantes</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {participants.map((participant, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
              <div className="font-medium">{participant}</div>
              <div className="text-sm text-gray-600 dark:text-white">2 entradas</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Raffle;