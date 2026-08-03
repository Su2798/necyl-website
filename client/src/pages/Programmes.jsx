import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const Programmes = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // This fetches your list from en.json or my.json based on language
  const programmesList = t("programmes.list", { returnObjects: true }) || [];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <SectionHeading title={t("programmes.title")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmesList.map((prog, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Keeping your existing UI structure */}
              <div className="h-56 bg-blue-100 flex items-center justify-center text-blue-300 relative overflow-hidden">
                <svg
                  className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {prog.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {prog.desc}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100 space-y-2">
                  <p className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-500 uppercase tracking-wider">
                      {t("programmes.level")}
                    </span>
                    <span className="font-bold text-blue-900">
                      {prog.level}
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-500 uppercase tracking-wider">
                      {t("programmes.duration")}
                    </span>
                    <span className="font-bold text-orange-500">
                      {prog.duration}
                    </span>
                  </p>
                </div>

                <Button
                  onClick={() => navigate(`/programmes/${prog.id}`)}
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;
