import React from "react";

const Home = () => {
  // Self-contained data to ensure preview works without external dependencies
  const programmesList = [
    {
      title: "Young Learners English",
      desc: "Fun and interactive classes designed for children aged 6-12 to build a strong foundation in English.",
    },
    {
      title: "General English for Teens",
      desc: "Comprehensive courses focusing on grammar, vocabulary, speaking, and listening skills for teenagers.",
    },
    {
      title: "Adult Communicative English",
      desc: "Practical English for daily communication, travel, and workplace environments.",
    },
  ];

  const testimonials = [
    {
      text: "NECYL has transformed my child's confidence in speaking English. The teachers are amazing and so supportive!",
      author: "Daw Hla Hla",
    },
    {
      text: "The curriculum is perfectly structured. I highly recommend it to anyone wanting to improve their language skills.",
      author: "U Aung Tun",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section Placeholder */}
      <section className="py-24 bg-blue-950 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to NECYL English School
        </h1>
        <p className="text-xl text-blue-200">
          Empowering students through excellent English education.
        </p>
      </section>

      {/* Programmes Section (White) */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-blue-950 text-center mb-16">
            Our Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmesList.map((prog, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col gap-4"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500 text-white font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-blue-950">
                  {prog.title}
                </h3>
                <p className="text-gray-600 flex-grow">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section (White - matching your request) */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-blue-950 italic">
            "A community where learners thrive."
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((tst, i) => (
              <div
                key={i}
                className="p-10 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Made quote text larger: text-xl and leading-relaxed */}
                <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                  "{tst.text}"
                </p>
                {/* Made author name larger: text-lg */}
                <div className="font-bold text-orange-500 text-xl uppercase tracking-wider">
                  {tst.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section (White) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "Cambridge Assessment",
              "Oxford University Press",
              "British Council",
              "Macmillan Education",
            ].map((name, i) => (
              <span key={i} className="text-xl font-medium text-blue-900/60">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
