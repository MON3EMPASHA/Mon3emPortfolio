import PropTypes from "prop-types";

const EducationCard = ({ Img, Title, Description }) => {
  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 via-[#3b82f6]/10 to-[#1e3a8a]/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg w-100 h-100 group-hover:scale-105 transition-transform duration-500 object-cover ">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3 whitespace-pre-line">
              {Description}
            </p>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  Img: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Link: PropTypes.string,
  id: PropTypes.number,
};
export default EducationCard;
