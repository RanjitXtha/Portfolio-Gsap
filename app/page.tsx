"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ArrowUpRight, FolderCode, FolderGit, History } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ABOUT_TEXT = `I create digital experiences where code, design, and imagination work together. From developing full-stack applications to crafting smooth animations, I enjoy building products that feel alive.`;


const ABOUT_PARA = `I'm a full-stack developer who enjoys turning ideas into interactive digital experiences. My work focuses on the MERN stack, Next.js, and modern web architectures, combining thoughtful UI, smooth animations, and powerful backend systems. I build with technologies like React, Node.js, MongoDB, Strapi, and Shopify to create products that are both beautiful and practical. When I'm away from code, I explore graphic design and game development, constantly looking for new ways to mix creativity with technology.`;


const menuItems = ["HOME", "ABOUT", "SKILLS", "MY JOURNEY", "SERVICES", "PROJECTS", "CONTACT"];

const services = [
  {
    label: "WEB DEVELOPMENT",
    techs: ["NEXT.JS", "REACT", "NODE", "MONGODB", "POSTGRES", "JS", "TS"],
  },
  {
    label: "UI/UX DESIGNING",
    techs: ["FIGMA", "PHOTOSHOP", "ILLUSTRATOR"],
  },
  {
    label: "GSAP ANIMATION",
    techs: ["GSAP", "SCROLLTRIGGER", "MOTIONPATH"],
  },
  {
    label: "SHOPIFY THEME",
    techs: ["LIQUID", "STOREFRONT API", "GRAPHQL", "JS"],
  },
  {
    label: "HEADLESS & CMS ARCHITECTURE",
    techs: ["STRAPI", "SHOPIFY HEADLESS"],
  },
  {
    label: "GRAPHICS DESIGNING",
    techs: ["PHOTOSHOP", "ILLUSTRATOR", "LOGO DESIGN", "PHOTO MANIPULATION"],
  },
];

const circlePositionsDesktop = [
  "left-[8%] top-[15%]",
  "left-[18%] bottom-[40%]",
  "right-[10%] top-[20%]",
  "right-[10%] bottom-[12%]",
  "left-[14%] top-[35%]",
  "right-[20%] bottom-[36%]",
  "left-[10%] bottom-[14%]",
];

const circlePositionsMobile = [
  "left-[5%] top-[10%]",
  "right-[8%] top-[18%]",
  "left-[5%] top-[27%]",
  "right-[5%] bottom-[30%]",
  "left-[5%] bottom-[28%]",
  "right-[10%] bottom-[0%]",
  "left-[10%] bottom-[0%]",
];

type Skill = { label: string; image: string };
type Card = { title: string; description: string; skills: Skill[] };

function useCirclePositions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? circlePositionsMobile : circlePositionsDesktop;
}

const cards: Card[] = [
  {
    title: "FRONTEND",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, possimus consequatur tempore ut quas eius dignissimos adipisci eaque nulla deserunt",
    skills: [
      { label: "JAVASCRIPT + TYPESCRIPT", image: "/images/skills/jsts.png" },
      { label: "REACT", image: "/images/skills/react.png" },
      { label: "NEXT JS", image: "/images/skills/next.png" },
      { label: "GSAP", image: "/images/skills/gsap.png" },
      { label: "SHOPIFY LIQUID + STOREFRONT API (GRAPHQL)", image: "/images/skills/shopify.png" },
    ],
  },
  {
    title: "BACKEND",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, possimus consequatur tempore ut quas eius dignissimos adipisci eaque nulla deserunt",
    skills: [
      { label: "NODE & EXPRESS", image: "/images/skills/node.png" },
      { label: "DATABASE - MONGODB ", image: "/images/skills/mongodb.png" },
      { label: "DATABASE - POSTGRESQL (PRISMA)", image: "/images/skills/prisma.png" },
      { label: "STRAPI", image: "/images/skills/strapi.png" },
    ],
  },
  {
    title: "DESIGNING",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, possimus consequatur tempore ut quas eius dignissimos adipisci eaque nulla deserunt",
    skills: [
      { label: "FIGMA", image: "/images/skills/figma.png" },
      { label: "ADOBE PHOTOSHOP", image: "/images/skills/photoshop.png" },
      { label: "ADOBE ILLUSTRATOR", image: "/images/skills/illustrator.png" },
    ],
  },
];

const milestones = [
  { progress: 0.1, year: "2017", text: "Completed SEE from Pawan Prakriti School", alignment: "-translate-x-[8rem]", image: "/images/journey/pawan.jpeg" },
  { progress: 0.15, year: "2019", text: "Graduated +2 From MileStone Int'l College", alignment: "-translate-y-6 -translate-x-[8rem]", image: "/images/journey/milestone.jpg" },
  { progress: 0.27, year: "2021", text: "Joined Bachelors Bsc.CSIT at Bhaktapur Multiple Campus", alignment: "-translate-x-[8rem]", image: "/images/journey/bmc.jpeg" },
  { progress: 0.38, year: "2022", text: "Exploring Web Development, Game Development and Graphics Designing...", alignment: "translate-y-18 -translate-x-16", image: "/videos/portfolio.mp4" },
  { progress: 0.48, year: "2024", text: "Started MERN internship at Palmmind Technology", alignment: "-translate-x-[8rem]", image: "/images/journey/palmmind-logo.webp" },
  { progress: 0.57, year: "2024", text: "Completed Internship. Started Full-time Role at Palmmind Technology", alignment: "translate-y-8 -translate-x-[7rem]", image: "/images/journey/palmmind-logo.webp" },
  { progress: 0.69, year: "2024", text: "Completed Bsc.CSIT bachelor's degree", alignment: "-translate-y-8 -translate-x-[8rem]", image: "/images/journey/bmc.jpeg" },
];

const REVEAL_DELAY = 0.03;

const projects = [
  { title: "TripMandu", description: "A Tourist Destination Planner utlizing A*, Held Karp, Cosine Similarity and OSM data to provide shorest optimize routes and round trips, allowing discoering of popular destinations in kathmandu.", tags: ["NODE", "REACT", "OSM", "POSTGRESQL"], image: "/images/projects/tripmandu.png" },
  { title: "Portfolio Website", description: "A portfolio website created using Next and GSAP for modern and elegant design.", tags: ["NEXTJS", "GSAP"], image: "/images/projects/portfolio.png" },
  { title: "E-Commerce Website", description: "An e-commerce website built with MERN, utilizing cloudinary and esewa payment integration.", tags: ["MERN", "CLOUDINARY", "ESEWA"], image: "/images/projects/ecommerce.png" },
  { title: "Nepflix", description: "A movie website utilizing data from TMDB", tags: ["REACT", "TMDB", "CLOUDINARY  "], image: "/images/projects/nepflix.png" },
  { title: "Chat Application", description: "A real-time chat application built with socket.io", tags: ["SOCKET.IO", "NODE", "REACT"], image: "/images/projects/chatapp.png" },
  { title: "Old Portfolio ", description: "A previous version of my portfolio website", tags: ["REACT", "GSAP"], image: "/images/projects/old-portfolio.png" },
];

const stats = [
  { icon: FolderCode, value: "10+", label: "Projects Completed" },
  { icon: History, value: "1.5+", label: "Years of Experience" },
  { icon: FolderGit, value: "7+", label: "Personal Projects" },
];

const gallery = [
  { image: "/images/gallery/1.png", position: "left-24 w-[22rem] h-[28rem]" },
  { image: "/images/gallery/2.jpg", position: "right-24 top-52 w-[22rem] h-[28rem]" },
  { image: "/images/gallery/3.jpg", position: "translate-x-[1rem] translate-y-[80rem] w-[22rem] h-[28rem]" },
  { image: "/images/gallery/4.jpg", position: "translate-y-[50rem] right-1/2 translate-x-1/2 w-[22rem] h-[28rem]" },
  { image: "/images/gallery/5.jpg", position: "right-0 translate-y-[88rem] w-[22rem] h-[15rem]" },
  { image: "/images/gallery/6.jpg", position: "right-0 translate-y-[120rem] w-[22rem] h-[28rem]" },
  { image: "/images/gallery/7.jpg", position: "left-64 translate-y-[130rem] w-[22rem] h-[28rem]" },
];
function CardItem({ card, index }: { card: Card; index: number }) {
  const [activeImage, setActiveImage] = useState<string>(card.skills[0].image);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleEnter = (skill: Skill, j: number) => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        opacity: 0, scale: 0.92, duration: 0.15, ease: "power2.in",
        onComplete: () => {
          setActiveImage(skill.image);
          gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
        },
      });
    }
  };

  return (
    <div
      className={`card-item card-${index} sticky top-0 h-screen w-full overflow-hidden`}
      style={{ zIndex: index + 1 }}
    >
      <div className="card-inner w-full h-full flex flex-col md:grid grid-cols-2  bg-[#111111] text-white">
        <div className="padding w-full h-full flex flex-col gap-4 md:gap-12 px-16 py-12">
          <h1 className="text-[5rem] md:text-[7rem] xl:text-[10rem] leading-none font-bold">{card.title}</h1>
          <div style={{ fontFamily: "var(--font-inter)" }}>
            <p className="text-base  lg:text-xl text-white/60  md:max-w-lg">{card.description}</p>

            <div className="mt-4 md:mt-10">
              {card.skills.map((skill, j, arr) => (
                <div
                  key={j}
                  onMouseEnter={() => handleEnter(skill, j)}
                  className={`group flex items-center justify-between text-xs md:text-base xl:text-lg border-white/20 border-y
                    hover:bg-white hover:text-[#111111] transition-all px-2 cursor-default py-2 md:py-3 xl:py-5
                    ${j === 0 ? " border-t-0"
                      : j === arr.length - 1 && " border-b-0"
                    }`}
                >
                  <p className="group-hover:translate-x-4 transition">{skill.label}</p>
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card-right flex items-center justify-center w-full h-full overflow-hidden">
          <img
            ref={imgRef}
            src={activeImage}
            alt={card.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const circlePositions = useCirclePositions();

  useEffect(() => {
    const ctx = gsap.context(() => {

      const menu = menuRef.current;
      if (!menu) return;

      gsap.set(menu, { opacity: 0, pointerEvents: "none" });

      const tl = gsap.timeline({ paused: true });
      tl.to(menu, {
        width: "45rem",
        height: "100dvh",
        duration: 0.6,
        ease: "power3.in",
      });
      tl.fromTo(
        ".menu-item",
        { display: "none", opacity: 0, y: 40 },
        { display: "flex", opacity: 1, y: 0, duration: 0.4 }
      );

      document.querySelectorAll<HTMLElement>(".menu-item").forEach((item) => {
        const letters = item.querySelectorAll("span > span");
        const duplicates = item.querySelectorAll("span > div");

        item.addEventListener("mouseenter", () => {
          gsap.to(letters, { scaleY: 0, transformOrigin: "bottom center", y: "-100%", stagger: -0.03, duration: 0.2, ease: "sine.inOut" });
          gsap.to(duplicates, { scaleY: 1, transformOrigin: "top center", top: "0%", stagger: -0.03, duration: 0.2, ease: "sine.inOut" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(letters, { scaleY: 1, y: "0%", stagger: -0.03, duration: 0.2, ease: "sine.inOut" });
          gsap.to(duplicates, { scaleY: 0, top: "100%", stagger: -0.03, duration: 0.2, ease: "sine.inOut" });
        });
      });

      const handleEnter = () => {
        gsap.to(".menu-label", { opacity: 0, duration: 0.15 });
        tl.timeScale(1).play();
      };
      const handleLeave = () => {
        tl.timeScale(2).reverse();
        tl.eventCallback("onReverseComplete", () => {
          gsap.to(".menu-label", { opacity: 1, duration: 0.2 });
        });
      };

      menu.addEventListener("mouseenter", handleEnter);
      menu.addEventListener("mouseleave", handleLeave);

      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        onLeave: () => gsap.to(menu, { opacity: 1, pointerEvents: "auto", duration: 0.4 }),
        onEnterBack: () => gsap.to(menu, { opacity: 0, pointerEvents: "none", duration: 0.3 }),
      });

      gsap.set('.hero-location', {
        yPercent: 100,
      });

      gsap.to('.hero-location', {
        yPercent: 0,
        duration: 0.4,
        delay: 0.7,
        ease: "power3.out",
      });


      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        onLeave: () => gsap.to(navLinksRef.current, { opacity: 0, y: -10, duration: 0.3, pointerEvents: "none" }),
        onEnterBack: () => gsap.to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.3, pointerEvents: "auto" }),
      });

      gsap.set(".first-name .letter, .last-name .letter", { yPercent: 100 });
      gsap.set(".about-image", { scale: 0 });
      gsap.to(".about-image", { scale: 1, delay: 0.5 });
      gsap.to(".first-name .letter", { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.02, delay: 0.2 });
      gsap.to(".last-name .letter", { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.02, delay: 0.4 });

      gsap.set(".about-image", { xPercent: -50, left: "50%", top: "50%", yPercent: -50 });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
        .to(".first-name", { x: 300 }, 0)
        .to(".last-name", { x: -300 }, 0)
        .to(".about-image", { width: "100%", height: "100vh", rotate: 0, ease: "none" }, 0);

      const groupWordsByLine = (selector: string) => {
        const words = gsap.utils.toArray<HTMLElement>(selector);
        const lines: HTMLElement[][] = [];
        let currentLine: HTMLElement[] = [];
        let currentY: number | null = null;

        words.forEach((word) => {
          const y = Math.round(word.parentElement!.getBoundingClientRect().top);
          if (currentY === null || Math.abs(y - currentY) > 2) {
            if (currentLine.length) lines.push(currentLine);
            currentLine = [word];
            currentY = y;
          } else {
            currentLine.push(word);
          }
        });
        if (currentLine.length) lines.push(currentLine);
        return lines;
      };

      // ABOUT_TEXT - line by line
      gsap.set(".about-line", { yPercent: 110 });
      ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 60%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          const lines = groupWordsByLine(".about-line");
          lines.forEach((lineWords, i) => {
            gsap.to(lineWords, {
              yPercent: 0,
              duration: 0.8,
              ease: "power4.out",
              delay: i * 0.12,
            });
          });
        },
        onLeaveBack: () => {
          gsap.to(".about-line", { yPercent: 110, duration: 0.4 });
        },
      });

      // ABOUT_PARA - line by line with offset delay
      gsap.set(".about-para-word", { yPercent: 110 });
      ScrollTrigger.create({
        trigger: ".about-section",
        start: "top 50%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          const lines = groupWordsByLine(".about-para-word");
          lines.forEach((lineWords, i) => {
            gsap.to(lineWords, {
              yPercent: 0,
              duration: 0.8,
              ease: "power4.out",
              delay: 0.8 + i * 0.1,
            });
          });
        },
        onLeaveBack: () => {
          gsap.to(".about-para-word", { yPercent: 110, duration: 0.4 });
        },
      });

      // Stats remain the same
      gsap.set(".about-stat", { opacity: 0, y: 32 });
      gsap.to(".about-stat", {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 1.8,
        scrollTrigger: { trigger: ".about-section", start: "top 30%", toggleActions: "play none none reverse" },
      });

      gsap.set(".about-stat", { opacity: 0, y: 32 });
      gsap.to(".about-stat", {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 1.8,
        scrollTrigger: { trigger: ".about-section", start: "top 30%", toggleActions: "play none none reverse" },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: () => window.innerWidth > 1280 ? "top+=50% top" : "top+=80% 40%",
          scrub: 1, markers: true
        },
      }).to(".skill-text", { fontSize: "2rem" });

      gsap.utils.toArray<HTMLElement>(".card-inner").forEach((card, i, arr) => {
        if (i === arr.length - 1) return;
        gsap.to(card, {
          ease: "none",
          scrollTrigger: {
            trigger: card.closest(".card-item"),
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      const newMarquee = document.querySelector(".marquee-track-new") as HTMLElement;
      if (newMarquee) {
        const itemWidth = newMarquee.scrollWidth / 2;
        gsap.set(newMarquee, { x: 0 });
        gsap.to(newMarquee, { x: -itemWidth, duration: 40, ease: "none", repeat: -1 });
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: ".journey",
          start: "top top",
          end: "bottom+=2000 bottom",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }).to(".my-journey > h1", { scale: 120, x: "120%", ease: "none" });

    });

    const svgPath = document.querySelector(".svg-container path") as SVGPathElement;
    const dot = document.querySelector(".path-dot") as HTMLElement;
    const svgEl = document.querySelector(".svg-container svg") as SVGSVGElement;
    const svgRect = svgEl.getBoundingClientRect();
    const containerRect = document.querySelector(".svg-container")!.getBoundingClientRect();
    const pathLength = svgPath.getTotalLength();

    if (svgPath && dot) {
      gsap.set(svgPath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      const scrollConfig = {
        trigger: ".svg-section",
        start: "top 150",
        end: "bottom bottom",
        scrub: 1,
      };

      gsap.to(svgPath, { strokeDashoffset: 0, ease: "none", scrollTrigger: scrollConfig });
      gsap.to(dot, {
        ease: "none",
        motionPath: { path: svgPath, align: svgPath, alignOrigin: [0.5, 0.5], autoRotate: false },
        scrollTrigger: scrollConfig,
      });
    }

    milestones.forEach((milestone, i) => {
      const point = svgPath.getPointAtLength(milestone.progress * pathLength);
      const scaleX = svgRect.width / 782;
      const scaleY = svgRect.height / 3297;
      const x = svgRect.left - containerRect.left + point.x * scaleX;
      const y = svgRect.top - containerRect.top + point.y * scaleY;
      const el = document.querySelector(`.milestone-${i}`) as HTMLElement;
      if (el) { el.style.left = `${x}px`; el.style.top = `${y}px`; }
    });



    ScrollTrigger.create({
      trigger: ".svg-section",
      start: "top 100",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        milestones.forEach((milestone, i) => {
          const el = document.querySelector(`.milestone-${i}`) as HTMLElement;
          if (!el) return;
          if (self.progress >= milestone.progress + REVEAL_DELAY) {
            gsap.to(el, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
          } else {
            gsap.to(el, { opacity: 0, scale: 0, duration: 0.2 });
          }
        });
      },
    });

    const projectsEl = document.querySelector(".projects") as HTMLElement;
    const wrapperEl = projectsEl.parentElement as HTMLElement; // .overflow-x-hidden
    const projectTexts = gsap.utils.toArray<HTMLElement>(".project-text");

    const getScrollDistance = () => projectsEl.scrollWidth - wrapperEl.clientWidth;

    const projectsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // recalc functions below on resize/refresh
        onUpdate: (self) => {
          const pct = self.progress * 100;
          gsap.to(".progress-line", {
            width: `${pct}%`,
            height: `${2 + self.progress * 3}px`,
            marginTop: `-${self.progress * 1.5}px`,
            duration: 0,
          });
          gsap.to(".progress-dot", { left: `${pct}%`, duration: 0 });
          const currentCard = Math.min(Math.ceil(self.progress * projects.length) || 1, projects.length);
          const counterEl = document.querySelector(".progress-counter");
          if (counterEl) counterEl.textContent = `0${currentCard} / 0${projects.length}`;
        },
      },
    });


    projectsTl.to(".projects", {
      x: () => -getScrollDistance(),
      ease: "none",
    });


    projectTexts.forEach((text) => {
      gsap.fromTo(text, { x: 300 }, {
        x: 0, ease: "none",
        scrollTrigger: {
          trigger: text.closest(".shrink-0"),
          containerAnimation: projectsTl,
          start: "left 80%",
          end: "left 10%",
          scrub: 1,
        },
      });
    });

    gsap.to(".gallery", {
      y: -2800,
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top top",
        end: "bottom+=1500 top",
        scrub: 1,
        pin: true,
      },
    });

    return () => { ctx.revert(); };
  }, []);

  return (
    <div className="home relative bg-white text-[#111111]">

      <header className="padding uppercase hidden md:flex text-lg lg:text-xl font-extralight fixed w-full justify-between py-6 z-50 mix-blend-difference">
        <Link href="/" className="text-white">RANJIT XTHA</Link>
        <div ref={navLinksRef} className="flex gap-8" >
          {
            menuItems.map((item, i) => (
              <Link key={i} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-white">
                {`[ ${item} ]`}
              </Link>
            ))
          }
        </div>
        <div />
      </header>

      <div
        ref={menuRef}
        className="fixed z-50 right-2 w-24 bg-black h-24 m-4 menu flex flex-col justify-center font-extrabold"
      >
        <span className="menu-label text-white text-xs tracking-widest font-light absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          MENU
        </span>

        <div className="flex flex-col justify-center px-8">
          <ul className="space-y-0 flex flex-col">
            {menuItems.map((item, i) => (
              <Link href={`#${item.toLowerCase().replace(/\s/g, "-")}`} key={i} className="flex w-full h-full menu-item cursor-pointer overflow-hidden">
                {item.split("").map((e, index) => (
                  <span key={index} className="text-white text-[8vw] font-bold leading-[0.95] relative overflow-hidden">
                    <span className="inline-block">{e}</span>
                    <div className="text-gray-300 absolute top-[100%] left-0 inline-block">{e}</div>
                  </span>
                ))}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <section className="main-body">

        <div id="home" className="hero relative w-full h-screen text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] flex flex-col items-center justify-between overflow-x-hidden">
          <div className="about-image absolute top-[50vh] left-1/2 w-48 aspect-3/4 -rotate-12 bg-white z-99 max-h-screen overflow-hidden">
            <video src="/videos/portfolio.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
          </div>
          <div className="first-name w-full flex justify-center relative">
            <h1 className="flex overflow-hidden translate-y-16">
              {"RANJIT".split("").map((char, i) => (
                <span key={i} className="overflow-hidden">
                  <span className="letter inline-block">{char}</span>
                </span>
              ))}

            </h1>

            <span className="hidden lg:block absolute overflow-hidden text-sm tracking-[4px]  2xl:tracking-[6px] left-[82%] xl:left-[80%] 2xl:left-[76%]  -translate-x-1/2 z-50 bottom-2" style={{ fontFamily: "var(--font-inter)" }}>
              <span className="inline-block hero-location whitespace-nowrap">
                {`[ BASED IN KATHMANDU ]`}
              </span>
            </span>


          </div>

          <div className="last-name w-full flex justify-center relative">
            <h1 className="flex overflow-hidden -z-2">
              {"SHRESTHA".split("").map((char, i) => (
                <span key={i} className="overflow-hidden">
                  <span className="letter inline-block">{char}</span>
                </span>
              ))}
            </h1>
            <div className=" hidden lg:block absolute tracking-[4px]  2xl:tracking-[6px] text-sm  left-[10%]  xl:left-[12%] 2xl:left-[18%] flex flex-col gap-4 -translate-x-1/2 z-50 bottom-17" style={{ fontFamily: "var(--font-inter)" }}>
              <a>[ GITHUB ]</a>
              <a>[ LINKEDIN ]</a>
              <a>[ EMAIL ]</a>
              <a>[ INSTAGRAM ]</a>
            </div>
            {/* <span >{`[ SHRESTHA.RANJIT.NP@GMAIL.COM ]`}</span> */}
          </div>
        </div>

        <div id="about" className="px-10 lg:px-16 about-section overflow-x-hidden relative py-28 grid gap-y-12 grid-rows-none lg:grid-rows-1 lg:grid-cols-[2.2fr_1fr] 2xl:grid-cols-[2fr_1fr] w-full items-center">

          <div className="flex flex-col gap-12 row-start-2 lg:row-start-auto">

            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-light about-text-container" style={{ fontFamily: "var(--font-inter)" }}>
              {ABOUT_TEXT.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-1">
                  <span className="about-line inline-block">{word}</span>
                </span>
              ))}
            </div>

            <div className="text-sm  sm:text-base md:text-lg lg:text-xl order-2 lg:order-1 font-normal w-full max-w-3xl ml-0 lg:ml-[30%] font-inter tracking-tight" style={{ fontFamily: "var(--font-inter)" }}>
              <p className="text-[#666666]">
                {ABOUT_PARA.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <span className="about-para-word inline-block">{word}</span>
                  </span>
                ))}
              </p>

              <div className="flex justify-between gap-6 mt-14">
                {stats.map((stat, i) => (
                  <div key={i} className="about-stat">
                    <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex items-center gap-4 font-light">
                      <span className="[&>svg]:size-7 sm:[&>svg]:size-10 md:[&>svg]:size-14 2xl:[&>svg]:size-16">
                        <stat.icon />
                      </span>
                      <p>{stat.value}</p>
                    </span>
                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="row-start-1 lg:row-start-auto translate-y-0 lg:-translate-y-48 w-full flex justify-center">
            <img src="/image.jpg" alt="image" className="w-64 lg:w-72 xl:w-80 aspect-square object-cover overflow-hidden rounded-full" />
          </div>

        </div>

        <div className="h-screen w-full flex justify-center items-center overflow-hidden">
          <h1 className="text-center skill-text  text-[6rem] xl:text-[10rem] 2xl:text-[14rem] whitespace-nowrap">SKILLS THAT I'VE BEEN <br /> WORKING ON</h1>
        </div>

        <div id="skills" className="cards-section">
          {cards.map((card, i) => (
            <CardItem key={i} card={card} index={i} />
          ))}
        </div>

        <section id="services" className="h-auto md:h-screen services-section relative overflow-hidden">
          <h1 className="text-center text-5xl my-12">SERVICES</h1>

          {services.map((service, i) =>
            service.techs.map((tech, j) => (
              <div
                key={`${i}-${j}`}
                style={{ fontFamily: "var(--font-inter)", transitionProperty: "none" }}
                className={`tech-circle tech-circle-${i} absolute ${circlePositions[j % circlePositions.length]}
          border rounded-full p-2 md:p-4 flex items-center justify-center text-center
          text-xs md:text-base opacity-0 scale-0 pointer-events-none transition-none z-10`}
              >
                {tech}
              </div>
            ))
          )}

          <section className="services-list text-[2.2rem] md:text-[4rem] xl:text-[6rem] 2xl:text-[7rem] w-full flex flex-col gap-2 md:gap-4 justify-center items-center">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-item w-full text-center cursor-default overflow-hidden leading-[0.95]"
                onMouseEnter={(e) => {
                  const item = e.currentTarget;
                  const letters = item.querySelectorAll(".svc-letter");
                  const duplicates = item.querySelectorAll(".svc-letter-dup");

                  gsap.to(letters, { scaleY: 0, transformOrigin: "bottom center", y: "-100%", stagger: -0.02, duration: 0.2, ease: "sine.inOut" });
                  gsap.to(duplicates, { scaleY: 1, transformOrigin: "top center", top: "0%", stagger: -0.02, duration: 0.2, ease: "sine.inOut" });

                  document.querySelectorAll(".tech-circle").forEach((el) => {
                    gsap.killTweensOf(el);
                    gsap.to(el, { opacity: 0, scale: 0, duration: 0.15 });
                  });
                  gsap.to(document.querySelectorAll(`.tech-circle-${i}`), {
                    opacity: 1, scale: 1, duration: 0.4, stagger: 0.07, ease: "back.out(1.7)",
                  });
                }}
                onMouseLeave={(e) => {
                  const item = e.currentTarget;
                  const letters = item.querySelectorAll(".svc-letter");
                  const duplicates = item.querySelectorAll(".svc-letter-dup");

                  gsap.to(letters, { scaleY: 1, y: "0%", stagger: -0.02, duration: 0.2, ease: "sine.inOut" });
                  gsap.to(duplicates, { scaleY: 0, top: "100%", stagger: -0.02, duration: 0.2, ease: "sine.inOut" });

                  gsap.to(document.querySelectorAll(`.tech-circle-${i}`), {
                    opacity: 0, scale: 0, duration: 0.2, stagger: 0.04, ease: "power2.in",
                  });
                }}
              >
                <div className="flex flex-wrap justify-center px-4">
                  {service.label.split(" ").map((word, wIndex) => (
                    <span key={wIndex} className="flex flex-wrap justify-center">
                      {word.split("").map((char, index) => (
                        <span key={index} className="relative overflow-hidden inline-block leading-[0.95]">
                          <span className="svc-letter inline-block text-[#111111]/60">
                            {char}
                          </span>
                          <div className="svc-letter-dup text-[#111111] absolute top-[100%] left-0 inline-block">
                            {char}
                          </div>
                        </span>
                      ))}
                      <span className="inline-block w-[0.3em]">&nbsp;</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>

        <section>
          <div className="marquee-section overflow-hidden mt-30 md:mt-40 lg:mt-58">
            <div className="marquee-track-new flex gap-8 tracking-wider whitespace-nowrap  text-4xl md:text-5xl  lg:text-7xl xl:text-8xl font-bold will-change-transform">
              {[...Array(2)].flatMap((_, copyIdx) =>
                ["SOCKET.IO", "TWILIO", "STRAPI", "BULLMQ", "REDIS", "SENDGRID", "UNITY", "FIREBASE", "GIT"].map((item, j) => (
                  <span key={`${copyIdx}-${j}`} className="shrink-0 text-[#111111]">
                    {item} <span className="text-[#111111]/50">✦</span>
                  </span>
                ))
              )}
            </div>
          </div>
        </section>

        <section id="my-journey" className="journey hidden md:block">
          <section className="my-journey pt-24 overflow-clip h-screen bg-white flex justify-center items-center">
            <h1 className="text-[12rem] whitespace-nowrap text-[#111111]">MY JOURNEY</h1>
          </section>
        </section>

        <div className=" svg-section bg-[#111111] overflow-hidden">
          <div className="svg-container flex justify-center items-center -translate-x-[36%] relative">
            <div
              className="path-dot absolute w-12 h-12 bg-white rounded-full z-10 pointer-events-none"
              style={{ transform: "translate(-50%, -50%)" }}
            />

            {milestones.map((m, i) => (
              <div
                key={i}
                className={`milestone-${i} absolute z-20 opacity-0 scale-0 pointer-events-none w-full`}
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div className="w-20 h-20 rounded-full translate-[-50%] bg-white" />
                <div className="absolute top-0 ">
                  <p className={`text-white font-bold text-3xl leading-none ${m.alignment}`}>{m.year}</p>
                  <div className="text-gray-400 text-xl translate-x-[8rem] -translate-y-10 relative flex w-full gap-24">
                    <p className="max-w-[30rem]">{m.text}</p>

                    {m.image.endsWith(".mp4") || m.image.endsWith(".webm") ? (
                      <video
                        src={m.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-[38rem] h-[24rem] object-contain top-1/2 -translate-y-1/2"
                      />
                    ) : (
                      <img
                        src={m.image}
                        alt={m.year}
                        className="max-w-[38rem] max-h-[24rem] object-contain top-1/2 -translate-y-1/2"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}

            <svg width="782" height="3297" viewBox="0 0 782 3297" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M99.5 6.74631C297.833 103.08 650.647 419.828 587.5 612.246C534.5 773.746 268 781.746 223 904.746C151.34 1100.62 656 1066.25 694 1203.25C751.705 1411.29 223 1330.25 223 1534.75C223 1778.25 759.246 1676.2 773.5 1893.25C784.5 2060.75 264 2110.25 245.5 2173.75C220.183 2260.65 737.422 2219.9 728.5 2376.25C718 2560.25 79 2401.36 593 2552.75C701.5 2584.7 194.5 2515.25 550.5 2603.25C773.5 2640.25 263 2654.75 524.5 2666.25C786 2677.75 520.579 2652.23 428 2746.75C237 2941.75 386.5 3289.25 0 3289.25"
                stroke="#FFFEFE"
                strokeWidth="15"
              />
            </svg>
          </div>
        </div>

      </section>

      <div id="projects" className="bg-[#111111]  h-screen px-4 lg:px-[2rem] xl:px-[4rem] py-[2rem] lg:py-[5rem] projects-section">
        <div className="overflow-x-hidden w-full h-[80%]">
          <div className="projects flex w-full h-full gap-10 2xl:gap-14">
            {projects.map((project, i) => (
              <div key={i} className="shrink-0 flex flex-col lg:grid  lg:grid-cols-[2.6fr_1fr] 2xl:grid-cols-[2.3fr_1fr] gap-6 xl:gap-10 2xl:gap-14 h-full w-full">
                <div className={` w-full h-full`} >
                  <img src={project.image} alt={project.title} className="object-fill h-full w-full" />
                </div>
                <div className="flex flex-col justify-between project-text">
                  <h1 className="text-4xl lg:text-6xl text-white">PROJECT {i + 1}</h1>
                  <div className="space-y-4">
                    <h1 className="text-2xl lg:text-4xl text-white">{project.title}</h1>
                    <div>
                      {
                        project.tags.map((tag, j) => (
                          <span key={j} className="tracking-widest text-sm lg:text-base underline underline-offset-8 text-white/50 mr-6" style={{ fontFamily: "var(--font-inter)" }}>{tag}</span>
                        ))
                      }
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)" }} className="text-base lg:text-lg text-white">{project.description}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-24 flex items-center">
          <div className="progress-track w-full h-[2px] bg-white/15 relative">
            <div className="progress-line absolute top-0 left-0 h-full w-0 bg-white" />
            <div className="progress-dot absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white" style={{ left: "0%" }} />
          </div>
          <div className="ml-6 text-white/40 text-sm font-mono whitespace-nowrap progress-counter">
            01 / 0{projects.length}
          </div>
        </div>
      </div>

      {/* <div id="blogs" className="flex flex-col xl:grid grid-cols-2 h-screen overflow-hidden px-[3rem] py-12 blog-section">
        <div>
          <h1 className="text-2xl md:text-5xl mb-10">LATEST BLOGS</h1>
        </div>
        <div className="flex flex-col justify-between blogs">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border-t-1 border-gray-500 flex gap-4 lg:gap-8 py-6">
              <div className="bg-red-400 w-[22rem] aspect-video" />
              <div className="text-2xl">
                <h2 className="text-sm lg:text-base">Blog Title sample here.</h2>
                <p className="text-xs lg:text-lg">Blog description to be showed in this section.</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div id="gallery" className="h-screen w-full gallery-section overflow-hidden">
        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-[3rem] lg:text-[6rem] 2xl:text-[8rem]">MY GALLERY</h1>
          <h1 style={{ fontFamily: 'var(--font-inter)' }} className="text-xl lg:text-3xl xl:text-4xl max-w-lg text-center">Creative photo manipulations, digital arts and logo designing showcase</h1>
        </div>
        <div className="relative max-w-[75%] mx-auto gallery">
          {gallery.map((item, i) => (
            <div key={i} className={`absolute overflow-hidden ${item.position}`}>
              <img
                src={item.image}
                alt={`Gallery item ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <footer id="contact">
        <div className="px-12 flex flex-col lg:grid grid-cols-2 xl:grid-cols-[1fr_1.5fr] gap-8 lg:gap-18 xl:gap-28 text-[5rem] 2xl:text-[6rem] 3xl:text-[8rem] w-full">
          <div className="leading-24 xl:leading-36">
            <h1>LET'S WORK</h1>
            <div className="flex gap-2 items-center">
              <video src="/images/emoji.mp4" autoPlay loop muted playsInline className="w-28  xl:w-34 2xl:w-44 object-contain" />
              <p>TOGETHER</p>
            </div>
            <p className="text-base mt-8 max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>
              If you want to start a project, share an idea or simply say hi, we want to hear from you.
            </p>
          </div>

          <div style={{ fontFamily: "var(--font-inter)" }} className="grid grid-cols-2 gap-x-6 3xl:gap-y-14 text-sm text-gray-600">
            <div className="flex flex-col">
              <input className="w-full border-b border-gray-400 focus:outline-0 text-lg lg:text-xl xl:text-2xl 3xl:text-4xl text-black placeholder:text-[#111111] py-3 bg-transparent" type="text" placeholder="First Name" />
            </div>
            <div className="flex flex-col">
              <input className="w-full border-b border-gray-400 focus:outline-0 text-lg lg:text-xl xl:text-2xl 3xl:text-4xl text-black placeholder:text-[#111111] py-3 bg-transparent" type="text" placeholder="Last Name" />
            </div>
            <div className="flex flex-col col-span-2">
              <input className="w-full border-b border-gray-400 focus:outline-0 text-lg lg:text-xl xl:text-2xl 3xl:text-4xl text-black placeholder:text-[#111111] py-3 bg-transparent" type="email" placeholder="Email Address" />
            </div>
            <div className="col-span-2 flex flex-col">
              <textarea className="w-full border-b border-gray-400 focus:outline-0 text-lg lg:text-xl xl:text-2xl 3xl:text-4xl text-black placeholder:text-[#111111] py-3 resize-none bg-transparent" placeholder="Write your message here..." rows={1} />
            </div>
            <button className="text-base xl:text-lg bg-[#111111] justify-self-start px-6 max-h-14 py-3 mt-8 lg:mt-0 text-white">Send Message</button>
          </div>
        </div>

        <div className="bg-[#111111] text-white py-16 w-full px-12 mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between ">
            <h1 className="text-[20vw] tracking-tight leading-34 sm:leading-90">RANJIT
            </h1>
            <h1 className="text-[20vw] tracking-tight leading-34 sm:leading-90">XTHA</h1>
          </div>

          <div style={{ fontFamily: "var(--font-inter)" }} className="text-sm lg:text-base font-light flex flex-col md:flex-row mt-12 justify-between px-3 gap-12">
            <div className="flex flex-col gap-4 w-full max-w-[36rem]">
              {menuItems.map((label, i, arr) => (
                <Link
                  href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
                  key={i}
                  className={`hover:bg-white group hover:text-[#111111] transition-all py-4 flex items-center gap-4
                    ${i < arr.length - 1 ? "border-b-[1px] border-white/50" : ""}`}
                >
                  <p className="group-hover:translate-x-4 transition">{label}</p>
                  <ArrowUpRight className="group-hover:translate-x-4 transition group-hover:rotate-45" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col text-xl items-start md:items-end justify-between">
              <div className="max-w-lg">
                <p className="text-base lg:text-2xl font-normal">Thanks for visiting. Ready to start a conversation?</p>
                <p className="text-xs lg:text-sm mt-2">Reach out via email or connect with me on LinkedIn and GitHub. I'll get back to you as soon as possible.</p>
              </div>
              <div className="w-full text-sm lg:text-base mt-6">
                <p>Lalitpur, Nepal</p>
                <div className="flex gap-6 items-end">
                  <p>shrestha.ranjit.np@gmail.com</p>
                  <a href="">
                    <svg className="w-8 fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a href="">
                    <svg className="w-8 fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" />
                    </svg>
                  </a>
                  <a href="">
                    <svg className="w-8 fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a href="">
                    <svg className="w-8 fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Page;