import { useState, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Github, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mon3em from "../assets/Mana3emo.jpeg";
import { Code, FileText } from "lucide-react";
const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h2
      className="text-3xl sm:text-4xl lg:text-5xl font-bold"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">
        Hello, I&apos;m
      </span>
      <span
        className="block mt-2 text-gray-200"
        data-aos="fade-right"
        data-aos-duration="1300"
      >
        Abdelmonem Hatem
      </span>
    </h2>
  </div>
));
MainTitle.displayName = "MainTitle";
const ProfileImage = memo(() => (
  <div className="flex justify-center items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#3b82f6] via-[#1e3a8a] to-[#3b82f6] rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6]/20 via-transparent to-[#1e3a8a]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src={Mon3em}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

ProfileImage.displayName = "ProfileImage";

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));
TechStack.displayName = "TechStack";
TechStack.propTypes = {
  tech: PropTypes.string.isRequired,
};

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#1e3a8a]/20 to-[#3b82f6]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === "Contact"
                ? "group-hover:translate-x-1"
                : "group-hover:rotate-45"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));
CTAButton.displayName = "CTAButton";
CTAButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const SocialLink = memo(({ icon: Icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  );
});
SocialLink.displayName = "SocialLink";
SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
};

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = [
  "Computer Science Student at MSA",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/MON3EMPASHA" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/abdelmonem-hatem/" },
  { icon: Instagram, link: "https://www.instagram.com/abdelmonem_hatem/" },
  {
    link: "mailto:Abdelmonem5hatem@gmail.com",
    icon: Mail,
  },
  {
    link: "tel:01093820412",
    icon: Phone,
  },
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener("resize", initAOS);
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden pt-20" id="Home">
      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20 mt-10 lg:mt-0 mb-40 lg:mb-2">
            {/* Left Column */}
            <div
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="space-y-4 sm:space-y-6">
                <MainTitle />

                {/* Typing Effect */}
                <div
                  className="h-8 flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#1e3a8a] to-[#3b82f6] ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <div
                  className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  I&apos;m a third-year Computer Science student at MSA
                  University and a full-stack developer proficient in the MERN
                  stack. I specialize in building scalable and efficient web
                  applications, ensuring seamless front-end and back-end
                  integration. Passionate about crafting innovative digital
                  solutions..
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-wrap gap-3 w-full justify-center sm:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <a
                    href="https://drive.google.com/file/d/1isrXJ1-OKhTEmKbs94del9bydbG_6ow5/view?usp=drive_link"
                    className="w-full sm:w-auto"
                    target="_blank"
                  >
                    <button
                      data-aos="fade-up"
                      data-aos-duration="800"
                      className="w-full sm:w-auto px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                    >
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                    </button>
                  </a>
                  <a href="#Portofolio" className="w-full sm:w-auto">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="w-full sm:w-auto px-6 py-2 sm:py-3 rounded-lg border border-[#3b82f6]/50 text-[#3b82f6] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#3b82f6]/10 animate-bounce-slow delay-200"
                    >
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                    </button>
                  </a>
                </div>

                {/* Social Links */}
                <div
                  className="text-center sm:flex gap-4 justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink
                      key={index}
                      icon={social.icon}
                      link={social.link}
                      type={social.type}
                      label={social.label}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Optimized Lottie Animation */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="relative w-full opacity-90">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/10 to-[#3b82f6]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}
                ></div>

                <div
                  className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}
                >
                  {/* <DotLottieReact
                    src={lottieOptions.src}
                    loop={lottieOptions.loop}
                    autoplay={lottieOptions.autoplay}
                    rendererSettings={lottieOptions.rendererSettings} // Passed directly to DotLottieReact
                    style={lottieOptions.style}
                    className={lottieOptions.className}
                  /> */}
                  <ProfileImage />
                </div>

                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-blue-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
