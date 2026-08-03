import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("campus");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    campus: [
      "/gallery/image1.jpg",
      "/gallery/image2.jpg",
      "/gallery/image3.jpg",
      "/gallery/image4.jpg",
      "/gallery/image5.jpg",
      "/gallery/image6.jpg",
      "/gallery/image7.jpg",
      "/gallery/image8.jpg",
      "/gallery/image9.jpg",
      "/gallery/image10.jpg",
      "/gallery/image11.jpg",
      "/gallery/image12.PNG",
    ],
    online: [
      "/gallery/image13.jpeg",
      "/gallery/image14.jpeg",
      "/gallery/image15.jpeg",
      "/gallery/image16.jpg",
      "/gallery/image17.jpg",
      "/gallery/image18.jpg",
      "/gallery/image19.jpg",
      "/gallery/image20.jpg",
      "/gallery/image21.jpg",
      "/gallery/image22.jpg",
      "/gallery/image23.jpg",
      "/gallery/image24.JPG",
    ],
  };

  return (
    <div className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-navy mb-12 text-center">
        {t("gallery.title")}
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("campus")}
          className={`px-8 py-2 rounded-full font-bold transition-all cursor-pointer ${
            activeTab === "campus"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {t("gallery.campus")}
        </button>
        <button
          onClick={() => setActiveTab("online")}
          className={`px-8 py-2 rounded-full font-bold transition-all cursor-pointer ${
            activeTab === "online"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {t("gallery.online")}
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images[activeTab].map((src, index) => (
          <div
            key={index}
            className="h-80 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white text-4xl hover:text-orange-500"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
