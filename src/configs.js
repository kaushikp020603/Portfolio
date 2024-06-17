import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from "./constants/pageData";

const configs = {
  title: "Kaushik ",
  subTitle: "Dev portfolio.",
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: "Kaushik Prabhu Nerurkar portfolio.",
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt("About"),
      title: "Who Am I?",
      infos: [
        "* I am a final-year Information Technology student at AP Shah Institute of Technology.",
        "* My journey as a Mern Stack Developer and Cyber Security Enthusiast started when I was a just a teenager trying to figure out how  these websites  where made and secured.",
        "*My primary interests lie in MERN stack development, Python programming, cybersecurity, and exploring new technologies.",
        "* Looking ahead, I aspire to build a career in cybersecurity and am actively working towards achieving this goal..",
      ],
    },
    {
      scale: 15,
      displayAt: displayAt("Experience"),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: "Certifications",
      imageList: EXPERIENCE,
      footer: "Visit my LinkedIn Profile To View All.",
    },
    {
      scale: 15,
      displayAt: displayAt("Skills"),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: "Skills",
      footer: "And more...",
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt("Download CV"),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: "Here is my CV!",
      footer: "Click the icon above to view!",
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: "icons/resume.png",
            websiteURL:
              "https://docs.google.com/document/d/1-ib6Qz3vbCWe5T8Cl1tIdGkvpAv8KHMQ9cVk-cXdVLY/edit?usp=sharing",
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt("Personal Projects"),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: "Personal Projects",
      footer: "(And also this web-app)",
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: "websites-preview/1.gif",
            websiteURL: "https://github.com/kaushikp020603/E-Diary",
          },
          {
            url: "websites-preview/2.gif",
            websiteURL: "https://github.com/kaushikp020603/E-Commerce-website",
          },
          {
            url: "websites-preview/logo9.png",
            websiteURL: "https://github.com/kaushikp020603/SehatSathi",
          },
          {
            url: "websites-preview/download6.png",
            websiteURL:
              "https://github.com/kaushikp020603/Fire-Detection-using-YOLOV9r",
          },
          {
            url: "websites-preview/download7.png",
            websiteURL:
              "https://github.com/kaushikp020603/Hate-Speech-Detection-using-Machine-Learning",
          },
          {
            url: "websites-preview/download8.png",
            websiteURL:
              "https://www.linkedin.com/posts/kaushik-prabhu-nerurkar_ai-ibm-watsonassistant-activity-7207784843647102976-qEqQ?utm_source=share&utm_medium=member_desktop",
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt("Get In Touch"),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: "You can find me in:",
      footer: "Almost done but keep scrolling :)",
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: "icons/download.jpeg",
            websiteURL:
              "https://www.instagram.com/_phoenix._.kaushik?igsh=MTM1NGt3eXljNGlkbg==",
          },
          {
            url: "icons/linkedin.png",
            websiteURL: "https://www.linkedin.com/in/kaushik-prabhu-nerurkar/",
          },
          {
            url: "icons/github.png",
            websiteURL: "https://github.com/kaushikp020603",
          },
          {
            url: "icons/email.png",
            websiteURL: "mailto:kaushik020603@gmail.com",
          },
        ],
      },
    },
  ],
};

export default configs;
