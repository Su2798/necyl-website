import React from 'react';

// Helper component for section headings
const SectionHeading = ({ title }) => (
  <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">{title}</h2>
);

const About = () => {
  // Mock translation function for the preview environment
  const t = (key) => {
    const translations = {
      'about.title': 'About Us',
      'about.missionTitle': 'Our Mission',
      'about.missionText': 'To provide accessible, high-quality English language education that empowers students to achieve their academic and professional goals through innovative teaching methods.',
      'about.visionTitle': 'Our Vision',
      'about.visionText': 'To be the leading English language school in Myanmar, recognized for our commitment to excellence, student-centered learning, and community impact.',
      'about.founderTitle': 'A Message from our Founder',
      'about.founderMessage': 'Language is more than just words; it is the bridge to global opportunity. At NECYL, we are dedicated to building that bridge for every student who walks through our doors.'
    };
    return translations[key] || key;
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title={t('about.title')} />
        
        <div className="prose prose-lg text-gray-600 mb-16 mx-auto">
          <p className="text-xl leading-relaxed text-gray-800 text-center">
            Welcome to NECYL English School. Founded with a vision to bridge the gap between local learners and global opportunities, we have spent the last decade refining our pedagogical approach to ensure every student feels supported, challenged, and inspired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('about.missionTitle')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('about.missionText')}</p>
          </div>
          <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 shadow-sm">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">{t('about.visionTitle')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('about.visionText')}</p>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-3xl text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t('about.founderTitle')}</h3>
          <p className="italic text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">"{t('about.founderMessage')}"</p>
        </div>
      </div>
    </div>
  );
};

export default About;