import React, { useState } from 'react';

// NOTE: For your local Vite project, uncomment these external imports:
// import { useTranslation } from 'react-i18next';
// import SectionHeading from '../components/SectionHeading';

// --- Mock definitions to resolve preview compiler errors ---
const useTranslation = () => ({ t: (key) => key === 'gallery.title' ? 'Gallery' : key });
const SectionHeading = ({ title }) => <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{title}</h2>;

const Gallery = () => {
  const { t } = useTranslation();
  
  // 1. UPDATE THIS LIST TO MATCH YOUR REAL FILE NAMES IN THE PUBLIC/GALLERY FOLDER
  const images = [
    '/gallery/image1.jpg',
    '/gallery/image2.jpg',
    '/gallery/image3.jpg',
    '/gallery/image4.jpg',
    '/gallery/image5.jpg',
    '/gallery/image6.jpg',
    '/gallery/image7.jpg',
    '/gallery/image8.jpg',
    '/gallery/image9.jpg',
    '/gallery/image10.jpg',
    '/gallery/image11.jpg',
    '/gallery/image12.PNG',
    '/gallery/image13.jpeg',
    '/gallery/image14.jpeg',
    '/gallery/image15.jpeg',
    '/gallery/image16.jpg',
    '/gallery/image17.jpg',
    '/gallery/image18.jpg',
    '/gallery/image19.jpg',
    '/gallery/image20.jpg',
    '/gallery/image21.jpg',
    '/gallery/image22.jpg',
    '/gallery/image23.jpg',
    '/gallery/image24.JPG'
  ];
  
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-16 container mx-auto px-4 min-h-screen">
      <SectionHeading title={t('gallery.title')} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="aspect-square bg-gray-200 cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden group"
            onClick={() => setSelectedImage(img)}
          >
             {/* 2. SHOW THE ACTUAL IMAGE HERE */}
             <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox / Enlarged View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full h-3/4 rounded-2xl flex flex-col items-center justify-center overflow-hidden" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white hover:text-red-500 bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors focus:outline-none z-10" onClick={() => setSelectedImage(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            {/* 3. SHOW THE ENLARGED IMAGE HERE */}
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;