import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    desc: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Backend Developer",
    desc: "Build scalable APIs and backend systems for modern applications",
    location: "London, UK",
    type: "Remote",
    salary: "€30–€50/hour",
  },
  {
    title: "UI/UX Designer",
    desc: "Design clean and modern interfaces with better user experience",
    location: "Berlin, Germany",
    type: "Onsite",
    salary: "€20–€35/hour",
  },
  {
    title: "Full Stack Developer",
    desc: "Work on both frontend and backend technologies seamlessly",
    location: "Toronto, Canada",
    type: "Hybrid",
    salary: "€40–€60/hour",
  },
  {
    title: "DevOps Engineer",
    desc: "Manage CI/CD pipelines and cloud infrastructure efficiently",
    location: "Sydney, Australia",
    type: "Remote",
    salary: "€45–€70/hour",
  },
  {
    title: "Mobile App Developer",
    desc: "Create high-performance Android and iOS applications",
    location: "Dubai, UAE",
    type: "Hybrid",
    salary: "€35–€55/hour",
  },
];

const Section1 = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <p className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit mx-auto font-bold tracking-widest text-sm mb-4 uppercase">
          ■ SMART JOB DISCOVERY ■
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          The roles you did never <br /> find by searching
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#151516] p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>

            <p className="text-gray-400 mb-6 text-sm">{job.desc}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-black text-gray-300 px-4 py-2 rounded-full text-xs flex items-center gap-2 border border-gray-700">
                📍 {job.location}
              </span>

              <span className="bg-black text-gray-300 px-4 py-2 rounded-full text-xs flex items-center gap-2 border border-gray-700">
                💼 {job.type}
              </span>

              <span className="bg-black text-gray-300 px-4 py-2 rounded-full text-xs flex items-center gap-2 border border-gray-700">
                💰 {job.salary}
              </span>
            </div>

            <a
              href="#"
              className="text-white font-medium flex items-center hover:text-blue-400 transition"
            >
              Apply Now →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
          View all job open
        </button>
      </div>
    </div>
  );
};

export default Section1;