import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Smart Search",
    desc: "Find your ideal job with advanced filters.",
  },
  {
    icon: "📈",
    title: "Salary Insights",
    desc: "Get real salary data to negotiate confidently.",
  },
  {
    icon: "📊",
    title: "Top Companies",
    desc: "Apply to vetted companies that are hiring.",
  },
  {
    icon: "🔖",
    title: "Saved Jobs",
    desc: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: "🖱️",
    title: "One-Click Apply",
    desc: "Simplify your job applications for an easier process!",
  },
  {
    icon: "📄",
    title: "Resume Builder",
    desc: "Create professional resumes with modern templates.",
  },
  {
    icon: "⬡",
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your skills and experience.",
  },
  {
    icon: "↗️",
    title: "Career Growth Resources",
    desc: "Boost your career with quick interview tips.",
  },
];

const Section2 = () => {
  return (
    <div className="bg-black text-white py-30 px-6">
      <div className="text-center mb-16">
        <p className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit mx-auto font-bold tracking-widest text-sm mb-4 uppercase">
          ■ Features Job ■
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Everything you need
          <br />
          to succeed
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 floating-card"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <span className="text-pink-400 text-2xl">
                {feature.icon}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;