import React from 'react';

const DescriptionBoxAlt = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Sistema Catedráticos</h2>
        <p className="text-gray-600">
          Plataforma integral para la gestión académica universitaria
        </p>
      </div>
      
      <div className="mt-6">
        <p className="text-gray-700 mb-4">
          El Sistema Catedráticos facilita a los docentes universitarios la administración 
          completa de sus actividades académicas, incluyendo la gestión de cursos, 
          evaluaciones y seguimiento de estudiantes.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <h3 className="font-medium text-blue-700 mb-3">Características principales</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center mt-0.5">
                <span className="text-blue-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Gestión completa de cursos y asignaturas</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center mt-0.5">
                <span className="text-blue-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Creación y calificación de evaluaciones</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center mt-0.5">
                <span className="text-blue-700 text-xs">✓</span>
              </div>
              <span className="ml-2 text-sm text-gray-600">Informes y estadísticas de rendimiento</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBoxAlt;