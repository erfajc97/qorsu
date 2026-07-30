export type Language = 'es' | 'en';

export interface Pillar {
  badge: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Translations {
  navbar: {
    es: string;
    en: string;
    brand: string;
  };
  hero: {
    subtitle: string;
    categories: string;
    dateLocation: string;
  };
  etymology: {
    nameWord: string;
    pronunciation: string;
    goldenSun: string;
    energyLine: string;
    qoriTitle: string;
    qoriMeaning: string;
    qoriOrigin: string;
    sueTitle: string;
    sueMeaning: string;
    sueOrigin: string;
  };
  missionBadge: string;
  pillars: Pillar[];
  footer: {
    socialLinks: SocialLink[];
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    navbar: {
      es: 'ES',
      en: 'EN',
      brand: 'QORSU',
    },
    hero: {
      subtitle: 'Más allá del agente IA, al servicio de todos.',
      categories: 'Lujo · Turismo · Hospitalidad',
      dateLocation: 'Septiembre 2026 · Qarybe Summit, Cartagena',
    },
    etymology: {
      nameWord: 'qor·su',
      pronunciation: '[ kor·sú ]',
      goldenSun: 'Sol Dorado',
      energyLine: 'La energía dorada que impulsa su propiedad y sus experiencias de lujo.',
      qoriTitle: 'qori',
      qoriMeaning: '«oro»',
      qoriOrigin: 'quechua · Andes',
      sueTitle: 'sué',
      sueMeaning: '«sol»',
      sueOrigin: 'muisca · Colombia',
    },
    missionBadge: 'Al servicio de todos',
    pillars: [
      {
        badge: '01',
        title: 'Multilingüe',
        desc: 'Por diseño, no por traducción. Cada huésped, en su lengua.',
      },
      {
        badge: '02',
        title: 'A toda hora',
        desc: 'Presente cuando el huésped lo necesita. Sin horario, sin espera.',
      },
      {
        badge: '03',
        title: 'Memoria',
        desc: 'Cada huésped es recordado. Cada regreso, reconocido.',
      },
      {
        badge: '04',
        title: 'Manos humanas',
        desc: 'Lo humano no se reemplaza. Se eleva, por arquitectura.',
      },
    ],
    footer: {
      socialLinks: [
        { label: 'Instagram', href: 'https://www.instagram.com/qorsu_?igsh=cWNqdmhyMmVrcDh1' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qorsu/' },
        { label: 'Contacto', href: 'mailto:hola@qorsu.com' },
      ],
      copyright: 'Una vertical de',
    },
  },
  en: {
    navbar: {
      es: 'ES',
      en: 'EN',
      brand: 'QORSU',
    },
    hero: {
      subtitle: 'Beyond agentic AI, at the service of all.',
      categories: 'Luxury · Tourism · Hospitality',
      dateLocation: 'September 2026 · Qarybe Summit, Cartagena',
    },
    etymology: {
      nameWord: 'qor·su',
      pronunciation: '[ kor·sú ]',
      goldenSun: 'Golden Sun',
      energyLine: 'The golden energy powering your property and luxury experiences.',
      qoriTitle: 'qori',
      qoriMeaning: '"gold"',
      qoriOrigin: 'Quechua · Andes',
      sueTitle: 'sué',
      sueMeaning: '"sun"',
      sueOrigin: 'Muisca · Colombia',
    },
    missionBadge: 'At the service of all',
    pillars: [
      {
        badge: '01',
        title: 'Multilingual',
        desc: 'By design, not translation. Every guest, in their own tongue.',
      },
      {
        badge: '02',
        title: 'At every hour',
        desc: 'Present whenever the guest needs it. No schedule, no waiting.',
      },
      {
        badge: '03',
        title: 'Memory',
        desc: 'Every guest remembered. Every return recognized.',
      },
      {
        badge: '04',
        title: 'Human hands',
        desc: 'The human is not replaced. It is elevated, by architecture.',
      },
    ],
    footer: {
      socialLinks: [
        { label: 'Instagram', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Contact', href: 'mailto:hola@qorsu.com' },
      ],
      copyright: 'A Shepwashi vertical · 2026',
    },
  },
};
