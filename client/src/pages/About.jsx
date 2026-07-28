import React from "react";
import { useTranslation } from "react-i18next";

// Helper component for section headings
const SectionHeading = ({ title }) => (
  <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
    {title}
  </h2>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Replace static "About Us" with dynamic key */}
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          {t("about.title")}
        </h2>

        <div className="prose prose-lg text-gray-600 mb-16 mx-auto">
          <p className="text-xl leading-relaxed text-gray-800 text-center">
            {t("about.aboutText")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {t("about.missionTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.missionText")}
            </p>
          </div>
          <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              {t("about.visionTitle")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.visionText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
