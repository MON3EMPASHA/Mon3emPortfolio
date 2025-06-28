// import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const CardProject = ({
  Img,
  Title,
  Description,
  Link: ProjectLink,
  TechStack,
  id,
}) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
    }
  };

  // const handleDetails = (e) => {
  //   if (!id) {
  //     e.preventDefault();
  //   }
  // };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 via-[#3b82f6]/10 to-[#1e3a8a]/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg w-100 h-40">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            {/* Tech Stack */}
            {TechStack && TechStack.length > 0 && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-2">
                  {TechStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-blue-900/30 text-blue-300 border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Project Title */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex items-center justify-between gap-2">
              {ProjectLink ? (
                <a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">
                  Demo Not Available
                </span>
              )}
              {/* Details Page */}
              {typeof id === "number" ? (
                <Link
                  to={`/project/${id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <span className="text-sm font-medium">Details →</span>
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">
                  Details Not Available
                </span>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  Img: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Link: PropTypes.string,
  id: PropTypes.number,
  TechStack: PropTypes.array,
};
export default CardProject;
