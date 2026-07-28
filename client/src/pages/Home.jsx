import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Carousel from '../components/Carousel'; 

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Load arrays from translation files
  const programmesList = t('programmes.list', { returnObjects: true }) || [];
  const testimonials = t('home.testimonials', { returnObjects: true }) || [];

  const heroSlides = [
    {
      image: '/gallery/image12.PNG', 
      title: t('home.heroTitle'),
      subtitle: t('home.heroSubtitle'),
      ctaText: t('home.heroCta'),
      ctaLink: '/programmes'
    },
    {
      image: '/gallery/image14.jpeg', 
      title: t('about.missionTitle'),
      subtitle: t('about.missionText'),
      ctaText: t('nav.about'),
      ctaLink: '/about'
    },
    {
      image: '/gallery/image17.jpg', 
      title: t('home.programmesTitle'),
      subtitle: t('home.aboutPreview'),
      ctaText: t('nav.programmes'),
      ctaLink: '/programmes'
    },
    {
      image: '/gallery/image8.jpg', 
      title: t('home.galleryTitle'),
      subtitle: t('about.visionText'),
      ctaText: t('nav.gallery'),
      ctaLink: '/gallery'
    },
    {
      image: '/gallery/image9.jpg', 
      title: t('contact.title'),
      subtitle: t('home.faqPreviewText'),
      ctaText: t('nav.contact'),
      ctaLink: '/contact'
    }
  ];

  return (
    <div className="flex flex-col">
      <Carousel slides={heroSlides} />

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">10+</h3>
            <p className="text-gray-600 font-medium">{t('home.stats.experience')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">5000+</h3>
            <p className="text-gray-600 font-medium">{t('home.stats.students')}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">200+</h3>
            <p className="text-gray-600 font-medium">{t('home.stats.classes')}</p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeading title={t('nav.about')} />
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t('home.aboutPreview')}
          </p>
          <Button variant="outline" onClick={() => navigate('/about')}>
            {t('home.readMore')}
          </Button>
        </div>
      </section>

      {/* Programmes Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title={t('home.programmesTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmesList.slice(0, 3).map((prog, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="h-48 bg-blue-50 flex items-center justify-center text-blue-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{prog.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow text-sm line-clamp-3">{prog.desc}</p>
                  <Button onClick={() => navigate('/programmes')} variant="outline" className="w-full">
                    {t('home.readMore')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-3xl font-bold mb-12 text-center text-white">{t('home.testimonialsTitle')}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {testimonials.map((testimonial, idx) => (
               <div key={idx} className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm relative">
                  <div className="text-orange-500 text-4xl absolute top-6 left-6 opacity-50">"</div>
                  <p className="text-lg leading-relaxed mb-6 relative z-10 pl-4">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Gallery & FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Preview */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('home.galleryTitle')}</h3>
            <div className="grid grid-cols-2 gap-4">
               
               {}
               {[
                 { src: '/gallery/image2.jpg', classes: 'object-cover object-center' },
                 { src: '/gallery/image8.jpg', classes: 'object-cover object-center' },
                 { src: '/gallery/image17.jpg', classes: 'object-cover object-center' },
                 { src: '/gallery/image22.jpg', classes: 'object-contain bg-gray-200' }
               ].map((img, i) => (
                 <img 
                   key={i} 
                   src={img.src} 
                   alt="School Life" 
                   loading="lazy"
                   className={`w-full h-48 md:h-56 rounded-xl shadow-sm hover:scale-105 transition-transform cursor-pointer ${img.classes}`} 
                   onClick={() => navigate('/gallery')} 
                 />
               ))}

            </div>
            <Button variant="outline" className="mt-6" onClick={() => navigate('/gallery')}>{t('nav.gallery')}</Button>
          </div>
          
          {/* FAQ & Contact Preview */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('home.faqPreviewTitle')}</h3>
            <p className="text-gray-600 mb-8 text-lg">{t('home.faqPreviewText')}</p>
            <div className="flex gap-4">
              <Button onClick={() => navigate('/faq')} variant="outline">{t('nav.faq')}</Button>
              <Button onClick={() => navigate('/contact')}>{t('nav.contact')}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-8">{t('home.partnersTitle')}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Placeholder Partner Logos */}
            <div className="text-2xl font-black text-blue-900">Cambridge<br/><span className="text-sm font-normal">Assessment</span></div>
            <div className="text-2xl font-black text-blue-900">Oxford<br/><span className="text-sm font-normal">University Press</span></div>
            <div className="text-2xl font-black text-blue-900">British<br/><span className="text-sm font-normal">Council</span></div>
            <div className="text-2xl font-black text-blue-900">Macmillan<br/><span className="text-sm font-normal">Education</span></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;