export type Language = 'es' | 'en';

export const translations = {
  es: {
    hero: {
      categories:
        'Ciudades del futuro · Real Estate · Lujo · Turismo · Hospitalidad',
      summit:
        'Presentado en Qarybe Summit · Cartagena, septiembre de 2026',
    },
    city: {
      title: 'Qué significa una ciudad del futuro',
      sectors:
        'Residencial · Comercial · Retail · Turismo · Hospitalidad · Lujo · Salud y medicina · Vivienda para mayores · Gastronomía · Entretenimiento y eventos · Educación · Movilidad · Entregas y logística · Seguridad y emergencias',
      closing:
        'La ciudad del futuro se centraliza bajo una sola infraestructura tecnológica cohesiva. Eso es lo que venimos a hacer.',
    },
    about: {
      title: 'Qué es Qorsu',
      lead: 'Infraestructura tecnológica para quienes construyen, desarrollan y mueven el futuro.',
      p1: 'Qorsu se integra a cualquier ciudad, resort, centro comercial, hotel, desarrollo residencial o centro médico, y lo lleva al futuro. Completamente interactivo, conectado y centralizado. Lo comercial, lo médico, la vida diaria o la visita: quien vive ahí y quien llega tienen un solo lugar para reservar, agendar, pedir, resolver y hasta atender una emergencia.',
      p2: 'Cada tienda. Cada visitante. Cada interacción. Cada comida. Hasta cada emergencia. Todo, desde un solo lugar.',
      p3: 'Y a eso se suma la robótica. Robótica de vanguardia, del más alto nivel que existe. Y sobre ella, nuestra tecnología y nuestra inteligencia, para que funcione en nuestros mercados.',
      p4: 'Todo, en uno solo.',
    },
    intro: {
      skip: 'Saltar intro',
    },
    contact: {
      title: 'Conversemos.',
      email: 'hola@qorsu.com',
    },
    film: {
      title: 'El amanecer de una nueva ciudad',
      outro: 'Todo, en uno solo.',
    },
    marquee: {
      items: [
        'Ciudades del futuro',
        'Real Estate',
        'Lujo',
        'Turismo',
        'Hospitalidad',
        'Salud',
        'Movilidad',
        'Gastronomía',
        'Robótica',
      ],
    },
    footer: {
      before: 'Una vertical de',
      after: '',
      contact: 'Contacto',
    },
  },
  en: {
    hero: {
      categories:
        'Cities of the future · Real Estate · Luxury · Tourism · Hospitality',
      summit:
        'Presented at Qarybe Summit · Cartagena, September 2026',
    },
    city: {
      title: 'What a city of the future means',
      sectors:
        'Residential · Commercial · Retail · Tourism · Hospitality · Luxury · Healthcare and medical · Senior living · Dining · Entertainment and events · Education · Mobility · Delivery and logistics · Safety and emergencies',
      closing:
        'The city of the future is centralized under one cohesive technological infrastructure. That is what we are here to do.',
    },
    about: {
      title: 'What Qorsu is',
      lead: 'Technology infrastructure for the builders, developers and movers of the future.',
      p1: 'Qorsu integrates into any city, resort, shopping centre, hotel, residential development or medical centre, and takes it into the future. Fully interactive, connected and centralized. Commerce, healthcare, daily life or the visit: whoever lives there and whoever arrives has one place to book, schedule, order, resolve, and even handle an emergency.',
      p2: 'Every store. Every guest. Every interaction. Every meal. Even every emergency. All of it, from one place.',
      p3: 'And on top of it, robotics. Cutting-edge robotics, at the highest level that exists, with our technology and our intelligence running on it, built for our markets.',
      p4: 'All of it, in one.',
    },
    intro: {
      skip: 'Skip intro',
    },
    contact: {
      title: "Let's talk.",
      email: 'hola@qorsu.com',
    },
    film: {
      title: 'The dawn of a new city',
      outro: 'All of it, in one.',
    },
    marquee: {
      items: [
        'Cities of the future',
        'Real Estate',
        'Luxury',
        'Tourism',
        'Hospitality',
        'Healthcare',
        'Mobility',
        'Dining',
        'Robotics',
      ],
    },
    footer: {
      before: 'A',
      after: 'vertical',
      contact: 'Contact',
    },
  },
} as const;

export type Translations = (typeof translations)['es'];
