import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import logo from "../assets/logo.png";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Load arrays from translation files
  const programmesList = t("programmes.list", { returnObjects: true }) || [];
  const testimonials = t("home.testimonials", { returnObjects: true }) || [];

  const heroSlides = [
    {
      image: "/gallery/image17.jpg",
      title: t("home.heroTitle"),
      subtitle: t("home.heroSubtitle"),
      ctaText: t("home.heroCta"),
      ctaLink: "/programmes",
    },
    {
      image: "/gallery/image14.jpeg",
      title: t("about.missionTitle"),
      subtitle: t("about.missionText"),
      ctaText: t("nav.about"),
      ctaLink: "/about",
    },
    {
      image: "/gallery/image12.PNG",
      title: t("home.programmesTitle"),
      subtitle: t("home.aboutPreview"),
      ctaText: t("nav.programmes"),
      ctaLink: "/programmes",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <Carousel slides={heroSlides} />

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-orange-600 font-bold tracking-widest text-sm mb-4">
            {t("home.whoWeAre.label")}
          </h4>
          <h2 className="text-5xl font-serif text-blue-900 mb-6 leading-tight">
            {t("home.whoWeAre.title")}{" "}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t("home.whoWeAre.description")}{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "10+", l: t("home.stats.years") },
            { n: "1,500+", l: t("home.stats.students") },
            { n: "30+", l: t("home.stats.classes") },
            { n: "95%", l: t("home.stats.satisfaction") },
          ].map((stat, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-1">
                {stat.n}
              </h3>
              <p className="text-sm font-medium text-gray-600">{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 font-bold tracking-widest text-sm mb-6 uppercase">
              {t("home.founder.title")}
            </p>
            <h2 className="text-4xl font-serif mb-8 italic">
              "{t("home.founder.quote")}"
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              {t("home.founder.message")}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <img src={logo} alt="Founder" />
              </div>
              <div>
                <h4 className="font-bold">{t("home.founder.name")}</h4>
                <p className="text-blue-300 text-sm">
                  {t("home.founder.role")}
                </p>
              </div>
            </div>
          </div>

          <div className="h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/gallery/image19.jpg"
              alt="Founder of NECYL"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading title={t("home.programmesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmesList.map((prog, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Blue Header Area */}
                <div className="h-48 bg-blue-100 flex items-center justify-center text-blue-300">
                  <svg
                    className="w-16 h-16"
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

                {/* Details Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
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
                    onClick={() => navigate("/contact")}
                    className="w-full text-lg shadow-md hover:shadow-lg"
                  >
                    {t("programmes.enquire")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at NECYL Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Title and Button Row */}
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif text-blue-900">
              {t("home.gallery.title")}
            </h2>
            <button
              onClick={() => navigate("/gallery")}
              className="text-blue-900 font-bold border-b-2 border-blue-900 hover:opacity-70 transition-opacity"
            >
              {t("home.gallery.viewFull")}
            </button>
          </div>

          {/* 3-Column Grid for the images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/gallery/image1.jpg"
                alt="Gallery 1"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/gallery/image8.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/gallery/image3.jpg"
                alt="Gallery 3"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-blue-950 italic">
            {t("home.testimonialsTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((tst, i) => (
              <div
                key={i}
                className="p-10 border border-gray-100 rounded-3xl bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                  "{tst.text}"
                </p>
                <div className="font-bold text-orange-500 text-xl uppercase tracking-wider">
                  {tst.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">
            {t("home.partnersTitle")}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <span className="text-xl font-medium text-blue-900/60">
              Cambridge Assessment
            </span>
            <span className="text-xl font-medium text-blue-900/60">
              Oxford University Press
            </span>
            <span className="text-xl font-medium text-blue-900/60">
              British Council
            </span>
            <span className="text-xl font-medium text-blue-900/60">
              Macmillan Education
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
