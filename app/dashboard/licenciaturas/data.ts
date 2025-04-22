export type Clase = string;

export interface Catedratico {
  id: number;
  name: string;
  classes: Clase[];
}

export interface Licenciatura {
  id: number;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  catedraticos: Catedratico[];
}

// Datos de ejemplo
export const licenciaturasData: Licenciatura[] = [
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

// Funciones auxiliares
export function getLicenciatura(id: number): Licenciatura | undefined {
  return licenciaturasData.find(lic => lic.id === id);
}

export function getCatedratico(licenciaturaId: number, catedraticoId: number): Catedratico | undefined {
  const licenciatura = getLicenciatura(licenciaturaId);
  return licenciatura?.catedraticos.find(cat => cat.id === catedraticoId);
}