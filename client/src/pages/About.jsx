import React from 'react';

// --- Mock definitions to resolve preview compiler errors ---
const useTranslation = () => ({ t: (key) => key });
const SectionHeading = ({ title }) => <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{title}</h2>;

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {}
        <div className="mb-12">
          <SectionHeading title={t('about.title')} />
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {t('about.missionTitle')}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.missionText')}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {t('about.visionTitle')}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about.visionText')}
            </p>
          </div>
        </div>

        {}
        <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-full flex-shrink-0 border-4 border-blue-100 shadow-inner overflow-hidden flex items-center justify-center text-gray-400">
            <span className="text-sm font-medium">Founder Photo</span>
          </div>

          {/* Founder Message */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              {t('about.founderTitle')}
            </h3>
            <div className="relative">
              <svg className="absolute -top-4 -left-6 w-10 h-10 text-orange-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
              </svg>
              <p className="text-xl text-gray-700 leading-relaxed italic relative z-10 pl-4 border-l-4 border-orange-500">
                "{t('about.founderMessage')}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;