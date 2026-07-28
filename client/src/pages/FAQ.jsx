import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  // Initialize with 0 to have the first item open by default
  const [openIndex, setOpenIndex] = useState(0); 
  
  const faqList = t('faq.list', { returnObjects: true });

  return (
    <div className="flex-grow bg-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">
            {t('faq.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-6">
          {faqList.map((faq, index) => (
            <div 
              key={index} 
              className={`border-l-4 transition-all duration-300 ${
                openIndex === index 
                  ? 'border-orange-500 bg-blue-50/50 shadow-lg' 
                  : 'border-transparent bg-gray-50 hover:bg-gray-100'
              } rounded-r-2xl overflow-hidden`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-xl font-bold ${openIndex === index ? 'text-blue-950' : 'text-blue-900'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-orange-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;