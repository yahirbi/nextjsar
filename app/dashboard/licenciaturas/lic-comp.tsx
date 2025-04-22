'use client';

import React, { useState } from 'react';
import { ChevronLeft, BookOpen, User, GraduationCap } from 'lucide-react';

const licenciaturasData = [
  {
    id: 1,
    name: 'Sistemas Computacionales',
    shortName: 'Sistemas',
    description: 'Grado en sistemas de información y desarrollo de software',
    icon: 'systems',
    catedraticos: [
      { id: 1, name: 'Jaime Ricardo Lagunas Piñon', classes: ['Programación I', 'Estructura de Datos', 'Algoritmos Avanzados'] },
      { id: 2, name: 'Pavel Sumano Ortega', classes: ['Bases de Datos', 'Ingeniería de Software'] },
      { id: 3, name: 'Gustavo Hamlet Oropeza Arevalo', classes: ['Redes', 'Seguridad Informática'] }
    ]
  },
  {
    id: 2,
    name: 'Derecho',
    shortName: 'Derecho',
    description: 'Licenciatura en ciencias jurídicas',
    icon: 'law',
    catedraticos: [
      { id: 4, name: 'Dra. Ana Martínez', classes: ['Derecho Civil', 'Derecho Mercantil'] },
      { id: 5, name: 'Lic. Roberto Gómez', classes: ['Derecho Penal', 'Criminología'] },
      { id: 6, name: 'Mtro. Jorge Sánchez', classes: ['Derecho Constitucional', 'Amparo'] }
    ]
  },
  {
    id: 3,
    name: 'Nutrición',
    shortName: 'Nutrición',
    description: 'Licenciatura en ciencias de la nutrición y alimentación',
    icon: 'nutrition',
    catedraticos: [
      { id: 7, name: 'Dra. Sofía Torres', classes: ['Bioquímica', 'Nutrición Clínica'] },
      { id: 8, name: 'Lic. Daniel García', classes: ['Dietoterapia', 'Evaluación Nutricional'] },
      { id: 9, name: 'Mtra. Laura Hernández', classes: ['Nutrición Comunitaria', 'Educación Alimentaria'] }
    ]
  }
];

export default function LicenciaturasComponent() {
  const [selectedLicenciatura, setSelectedLicenciatura] = useState<any>(null);
  const [selectedCatedratico, setSelectedCatedratico] = useState<any>(null);
  const [view, setView] = useState('licenciaturas'); // 'licenciaturas', 'catedraticos', 'classes'

  const handleLicenciaturaClick = (licenciatura: any) => {
    setSelectedLicenciatura(licenciatura);
    setView('catedraticos');
  };

  const handleCatedraticoClick = (catedratico: any) => {
    setSelectedCatedratico(catedratico);
    setView('classes');
  };

  const handleBack = () => {
    if (view === 'classes') {
      setView('catedraticos');
      setSelectedCatedratico(null);
    } else if (view === 'catedraticos') {
      setView('licenciaturas');
      setSelectedLicenciatura(null);
    }
  };

  const getIconForLicenciatura = (iconType: string) => {
    switch (iconType) {
      case 'systems':
        return <div className="p-4 bg-blue-100 rounded-lg">
          <BookOpen size={48} className="text-blue-500" />
        </div>;
      case 'law':
        return <div className="p-4 bg-red-100 rounded-lg">
          <BookOpen size={48} className="text-red-500" />
        </div>;
      case 'nutrition':
        return <div className="p-4 bg-green-100 rounded-lg">
          <BookOpen size={48} className="text-green-500" />
        </div>;
      default:
        return <BookOpen size={48} className="text-gray-500" />;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        {view !== 'licenciaturas' && (
          <button 
            onClick={handleBack}
            className="mr-4 p-1 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        <h1 className="text-2xl font-bold">
          {view === 'licenciaturas' && 'Licenciaturas'}
          {view === 'catedraticos' && selectedLicenciatura?.name}
          {view === 'classes' && selectedCatedratico?.name}
        </h1>
      </div>

      {view === 'licenciaturas' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {licenciaturasData.map((licenciatura) => (
            <div 
              key={licenciatura.id}
              onClick={() => handleLicenciaturaClick(licenciatura)}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                {getIconForLicenciatura(licenciatura.icon)}
                <h2 className="mt-4 text-xl font-semibold">{licenciatura.name}</h2>
                <p className="mt-2 text-gray-600 text-sm">{licenciatura.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'catedraticos' && selectedLicenciatura && (
        <div>
          <div className="mb-6">
            <span className="text-gray-500 text-sm">
              Catedráticos asignados a la licenciatura
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedLicenciatura.catedraticos.map((catedratico: any) => (
              <div 
                key={catedratico.id}
                onClick={() => handleCatedraticoClick(catedratico)}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <User size={32} className="text-blue-600" />
                  </div>
                  <h3 className="mt-3 font-medium">{catedratico.name}</h3>
                  <p className="mt-1 text-gray-500 text-sm">{catedratico.classes.length} clases</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'classes' && selectedCatedratico && (
        <div>
          <div className="mb-4">
            <span className="text-gray-500">
              Clases impartidas por {selectedCatedratico.name}
            </span>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <ul className="divide-y divide-gray-200">
              {selectedCatedratico.classes.map((className: string, index: number) => (
                <li key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-blue-100 rounded-full">
                      <GraduationCap size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{className}</h4>
                      <p className="text-sm text-gray-500">
                        {selectedLicenciatura.name}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}