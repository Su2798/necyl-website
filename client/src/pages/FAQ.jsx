import React, { useState } from 'react';

// --- Mock definitions to resolve preview compiler errors ---
const useTranslation = () => ({ 
  t: (key, options) => {
    if (key === 'faq.title') return 'Frequently Asked Questions';
    if (key === 'faq.list') return [
      { q: "How do I enroll in a course?", a: "You can enroll by filling out the contact form on our website or by visiting our campus in person." },
      { q: "Do you offer placement tests?", a: "Yes, we provide free placement tests to ensure you are enrolled in the correct level." },
      { q: "Are the teachers native speakers?", a: "We have a mix of highly qualified local and native English-speaking teachers." }
    ];
    return key;
  }
});
const SectionHeading = ({ title }) => <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{title}</h2>;

const FAQ = () => {
  const { t } = useTranslation();
  const faqList = t('faq.list', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 container mx-auto px-4 max-w-3xl min-h-screen">
      <SectionHeading title={t('faq.title')} />
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              className="w-full px-6 py-5 text-left font-semibold text-blue-900 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg pr-4">{faq.q}</span>
              <span className="text-2xl text-orange-500 font-light flex-shrink-0 transition-transform duration-300">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {}
            {openIndex === index && (
              <div className="px-6 py-5 text-gray-700 border-t border-gray-100 bg-blue-50/50 leading-relaxed text-lg animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;