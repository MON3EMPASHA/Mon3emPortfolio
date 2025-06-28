import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "./data/Mon3emProjects.json";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) return <div className="p-8 text-xl">Project not found</div>;

  // Determine which images to show
  const imagesToShow = Array.isArray(project.DetailsImage) && project.DetailsImage.length > 0
    ? project.DetailsImage
    : [project.Image];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 bg-[#030014]">
      {/* Top Row: Back Button + Breadcrumb */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
//       bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50

          className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-white/20 bg-white/5 text-white text-xl font-normal shadow-md hover:bg-white/10 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        {/* Breadcrumb */}
        <nav className="flex items-center text-gray-400 text-lg font-medium">
          <span className="hover:text-white cursor-pointer" onClick={() => navigate(-1)}>Projects</span>
          <span className="mx-2">&gt;</span>
          <span className="text-white">{project.title}</span>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl py-1.5 md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] tracking-tight">
            {project.title}
          </h1>
          <div className="text-base md:text-lg text-slate-400 mb-2">
            My role. <span className="font-semibold text-white">Full Stack Developer</span>
          </div>
          <div className="text-lg md:text-xl text-slate-400 mb-6 font-medium">Project description.</div>
          <div className="mb-8">
            <div className="prose max-w-none text-slate-300 text-base md:text-lg leading-relaxed">
              {project.description}
            </div>
          </div>
          {/* Skills and deliverables */}
          <div className="mb-8">
            <div className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">Skills and deliverables</div>
            <div className="flex flex-wrap gap-2">
              {project.TechStack && project.TechStack.map((skill, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium border border-blue-200 dark:border-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project["live demo"] && (
              <a
                href={project["live demo"]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-colors"
              >
                Live Demo
              </a>
            )}
            {project["github demo"] && (
              <a
                href={project["github demo"]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        {/* Right: Images */}
        <div className="w-full md:w-3/5 flex-[2] max-w-3xl flex flex-col gap-8 overflow-x-auto md:overflow-y-auto md:max-h-[80vh]">
          {imagesToShow.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 object-cover w-full min-h-0 max-h-[220px] sm:min-h-[220px] sm:max-h-[320px] md:min-h-[355px] md:max-h-[480px] bg-white transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage; 