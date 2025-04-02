import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import techStacks from "./data/TechStacks";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import EducationCard from "../components/EducationCard";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, GraduationCapIcon } from "lucide-react";
import { Educations, displayedCertificates } from "./data/certificates";
// Import the JSON file
import Mon3emProjects from "./data/Mon3emProjects.json";
import { useMediaQuery, useTheme } from "@mui/material";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${
            isShowingMore
              ? "group-hover:-translate-y-0.5"
              : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// Define propTypes for ToggleButton
ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that 'onClick' is a function and is required
  isShowingMore: PropTypes.bool.isRequired, // Validate that 'isShowingMore' is a boolean and is required
};

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  // const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  // const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      // setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects
    ? Mon3emProjects
    : Mon3emProjects.slice(0, initialItems);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* Header section */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">
          <span
            style={{
              color: "#1e3a8a",
              backgroundImage:
                "linear-gradient(45deg, #1e3a8a 10%, #3b82f6 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(30, 58, 138, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant={isSmallScreen ? "scrollable" : "fullWidth"}
            scrollButtons={isSmallScreen ? "auto" : false}
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                backgroundColor: "transparent",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(30, 58, 138, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(30, 58, 138, 0.2)",
                  "& .lucide": {
                    color: "#3b82f6",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={
                <Code className="mb-2 w-4 h-5 transition-all duration-300" />
              }
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Boxes className="mb-2 w-4 h-5 transition-all duration-300" />
              }
              label="Skills"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <Award className="mb-2 w-4 h-5 transition-all duration-300" />
              }
              label="Certificates"
              {...a11yProps(2)}
            />
            <Tab
              icon={
                <GraduationCapIcon className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Education"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>

        {/* Swiper Component */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          onSlideChange={(swiper) => setValue(swiper.activeIndex)}
          initialSlide={value}
        >
          {/* Projects Tab */}
          <SwiperSlide>
            <TabPanel value={value} index={0}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5">
                  {displayedProjects.map((project, index) => (
                    <div
                      key={index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 0
                          ? "1000"
                          : index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <CardProject
                        Img={project.Image}
                        Title={project.title}
                        Description={project.description}
                        Link={project["live demo"]}
                        TechStack={project.TechStack}
                        Github={project["github demo"]}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {Mon3emProjects.length > initialItems && (
                <div className="mt-6 w-full flex justify-start">
                  <ToggleButton
                    onClick={() => toggleShowMore("projects")}
                    isShowingMore={showAllProjects}
                  />
                </div>
              )}
            </TabPanel>
          </SwiperSlide>

          {/* Skills Tab */}
          <SwiperSlide>
            <TabPanel value={value} index={1}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                  {techStacks.map((stack, index) => (
                    <div
                      key={index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 0
                          ? "1000"
                          : index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <TechStackIcon
                        TechStackIcon={stack.icon}
                        Language={stack.language}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
          {/* Certificates Tab */}
          <SwiperSlide>
            <TabPanel value={value} index={2}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4">
                  {/* Add certificate content here */}
                  {displayedCertificates.map((certificate, index) => (
                    <div
                      key={index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 0
                          ? "1000"
                          : index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <Certificate ImgSertif={certificate.Img} />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
          {/* Education Tab */}
          <SwiperSlide>
            <TabPanel value={value} index={3}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4">
                  {Educations.map((certificate, index) => (
                    <div
                      key={index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 0
                          ? "1000"
                          : index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <EducationCard
                        Img={certificate.Img}
                        Title={certificate.Title}
                        Description={certificate.description}
                        Link={certificate["live demo"]}
                        TechStack={certificate.TechStack}
                        Github={certificate["github demo"]}
                      />
                    </div>
                  ))}
                  {/* Add certificate content here */}
                  {/* {displayedCertificates.map((certificate, index) => (
                    <div
                      key={index}
                      data-aos={
                        index % 3 === 0
                          ? "fade-up-right"
                          : index % 3 === 1
                          ? "fade-up"
                          : "fade-up-left"
                      }
                      data-aos-duration={
                        index % 3 === 0
                          ? "1000"
                          : index % 3 === 1
                          ? "1200"
                          : "1000"
                      }
                    >
                      <Certificate ImgSertif={certificate.Img} />
                    </div>
                  ))} */}
                </div>
              </div>
            </TabPanel>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
}
