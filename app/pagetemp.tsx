"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".about-image", {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    });

    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=250%",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    hero.to(".first-name", { x: 300 }, 0)
      .to(".last-name", { x: -300 }, 0)
      .to(".hero > div", {
        rotate: 0,
        width: "100%",
        height: "100%",
        top: 0,
        translateY: 0,
      }, 0)
    // .to(".about-image", {
    //   position: "absolute",
    //   top: "50%",
    //   translateY: "-50%",
    //   right: 64,
    //   width: "30rem",
    //   height: "35rem",
    // });

    // ─── ABOUT TEXT — separate ScrollTrigger, no scrub ────────────────────────
    gsap.set(".about-letter", { opacity: 0, y: -60 });
    gsap.set(".about-line", { opacity: 0, x: -40 });

    const aboutTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    aboutTextTl
      .to(".about-letter", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)",
      })
      .to(".about-line", {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "<0.2");
    // ─────────────────────────────────────────────────────────────────────────

    const cards = gsap.utils.toArray<HTMLElement>(".card");

    gsap.set(cards, {
      yPercent: 100,
    });

    gsap.set(cards[0], {
      yPercent: 0,
    });

    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      cardsTl
        .to(cards[i - 1], {
          yPercent: -20,
          scale: 0.95,
          ease: "none",
        })
        .to(card, {
          yPercent: 0,
          ease: "none",
        }, "<")
        .to(card.querySelector(".card-right"), {
          translateY: 0,
          ease: "none",
        }, "<")
    });

    const tracks = gsap.utils.toArray<HTMLElement>(".marquee-track");

    tracks.forEach((track) => {
      const direction = Number(track.dataset.direction) || 1;
      const width = track.scrollWidth / 2;

      gsap.set(track, {
        x: direction === 1 ? 0 : -width,
      });

      gsap.to(track, {
        x: direction === 1 ? -width : 0,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    });

    gsap.to(".my-journey > h1", {
      scrollTrigger: {
        trigger: ".my-journey",
        start: "top top",
        end: '+=200%',
        pin: true,
        scrub: 1,
        // markers: true,
      },
      scale: 50,
      x: "70%",
      ease: "sine.in",
    })

    return () => {
      hero.kill();
      cardsTl.kill();
      aboutTextTl.kill();
    };
  }, []);

  return (
    <div className="">
      <header className="padding uppercase text-xl font-extralight fixed w-full flex justify-between py-6">
        <Link href="/">HOME</Link>

        <div className="flex gap-4">
          <Link href="/">HOME</Link>
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Gallery</Link>
        </div>

        <Link href="/">CONTACT</Link>
      </header>

      {/* ── HERO — names + image only, no about text ── */}
      <div className="hero relative w-full h-screen text-[14rem] flex flex-col items-center justify-between">
        <h1 className="first-name translate-y-16">RANJIT</h1>


        <h1 className="last-name -z-2">SHRESTHA</h1>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-32 aspect-3/4 -rotate-12 bg-white">
        <div className="w-full h-full z-999 flex justify-between relative">
          <img src="/image.jpg" alt="image" className="w-full h-full about-image object-cover" />
        </div>
      </div>
      {/* ── ABOUT SECTION — after hero, own ScrollTrigger, no scrub ── */}
      <div className="about-section relative h-screen flex items-center">
        {/* Left side — text occupies same width as hero left side (image is on the right via GSAP) */}
        <div className="w-1/2 pl-16 flex flex-col gap-10">
          <div className="overflow-hidden about-text flex">
            <h1 className="text-9xl about-title">
              {"ABOUT ME".split("").map((char, i) => (
                <span key={i} className="inline-block about-letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
          <div className="text-4xl leading-[1.4] space-y-2">
            {[
              "I craft 👨🏽‍💻 experiences that balance form, function, and feasibility.",
              "With 7+ years of experience and 📚 background in Engineering and UX Design,",
              "I understand both ⌨️ code and 🎨 creativity.",
              "I blend 🧠 curiosity, ♟️ strategic thinking, and 🔮 playfulness",
              "to transform pixels into problem-solving 🧩📊 prototypes.",
              "My 🎯 focus is always on 🤩 delighting users and driving 📈 growth.",
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <p className="about-line">{line}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side — empty, the about-image from hero GSAP floats here */}
        <div className="w-1/2" />
      </div>

      <div className=" inset-0 h-screen flex items-center justify-center bg-black text-white text-[6vw]">
        <div className="relative text-center">
          WHAT ARE MY <br />SKILLS ?
          <div className="absolute bottom-8 -left-4 bg-cyan-500 w-32 h-32 rounded-full"></div>
          <div className="absolute -top-14 -right-24 bg-cyan-500 w-32 h-32 rounded-full"></div>
        </div>
      </div>

      <section className="cards-section bg-black relative h-screen w-full overflow-hidden">
        <div className="card absolute grid grid-cols-[2fr_1fr] gap-24 inset-0 flex items-center justify-center bg-purple-400 text-black">
          <div className="padding w-full h-full items-start">
            <div className="flex flex-col gap-12">
              <h1 className="text-[18rem] leading-50 mt-24">FRONTEND</h1>
              <p className="text-2xl">We partner with brands to create design systems that scale. Our work includes art direction, responsive web design, and
                visual content that communicates what words can't.</p>
              <div>
                {["JAVASCRIPT + TYPESCRIPT", "REACT", "NEXT JS", "GSAP", "SHOPIFY LIQUID + STOREFRONT API (GRAPHQL)"].map(
                  (e, i, arr) => {
                    const isFirst = i === 0;
                    const isLast = i === arr.length - 1;

                    return (
                      <div
                        key={i}
                        className={`text-2xl border-y-1 ${isFirst
                          ? "pb-5 border-t-0"
                          : isLast
                            ? "pt-5 border-b-0"
                            : "py-5 "
                          }`}
                      >
                        {e}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="card-right flex items-center justify-center w-full translate-y-[30%] h-full">
            <img src="/images/code-snippet.webp" alt="code-snippet" />
          </div>
        </div>

        <div className="card absolute grid grid-cols-[2fr_1fr] gap-24 inset-0 flex items-center justify-center bg-purple-400 text-black">
          <div className="padding w-full h-full flex flex-col gap-16">
            <h1 className="text-[18rem] leading-50 mt-24">BACKEND</h1>
            <p className="text-2xl">We partner with brands to create design systems that scale. Our work includes art direction, responsive web design, and
              visual content that communicates what words can't.</p>
            <div>
              {["NODE", "EXPRESS", "MONGODB", "POSTGRESQL (PRISMA)", "STRAPI"].map(
                (e, i, arr) => {
                  const isFirst = i === 0;
                  const isLast = i === arr.length - 1;

                  return (
                    <div
                      key={i}
                      className={`text-2xl border-y-1 ${isFirst
                        ? "pb-5 border-t-0"
                        : isLast
                          ? "pt-5 border-b-0"
                          : "py-5 "
                        }`}
                    >
                      {e}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="card-right flex items-center justify-center w-full translate-y-[30%] h-full">
            <img src="/images/code-snippet.webp" alt="code-snippet" />
          </div>
        </div>

        <div className="card absolute grid grid-cols-[2fr_1fr] gap-24 inset-0 flex items-center justify-center bg-purple-400 text-black">
          <div className="padding w-full h-full flex flex-col gap-16">
            <h1 className="text-[18rem] leading-50 mt-12">DESIGNING</h1>
            <p className="text-2xl">We partner with brands to create design systems that scale. Our work includes art direction, responsive web design, and
              visual content that communicates what words can't.</p>
            <div>
              {
                ["FIGMA", "ADOBE PHOTOSHOP", "ADOBE ILLUSTRATOR"].map((e, i) => (
                  <div key={i} className="text-2xl border-y-1 py-5">
                    {e}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="card-right flex items-center justify-center w-full translate-y-[30%] h-full">
            <img src="/images/code-snippet.webp" alt="code-snippet" />
          </div>
        </div>
      </section>

      <section className="marquee-section bg-cyan-500 overflow-hidden py-24 space-y-12">
        {[
          { dir: 1 },
          { dir: -1 },
          { dir: 1 },
        ].map((row, i) => (
          <div key={i} className="marquee-row overflow-hidden">
            <div
              className="marquee-track flex gap-24 whitespace-nowrap text-6xl font-bold"
              data-direction={row.dir}
            >
              {[
                "⚛️ React",
                "▲ Next.js",
                "🎞 GSAP",
                "🎨 Figma",
                "🧠 UX",
                "🧩 TypeScript",
              ].map((item, j) => (
                <span key={j}>{item}</span>
              ))}
              {[
                "⚛️ React",
                "▲ Next.js",
                "🎞 GSAP",
                "🎨 Figma",
                "🧠 UX",
                "🧩 TypeScript",
              ].map((item, j) => (
                <span key={`dup-${j}`}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="my-journey h-screen  bg-white flex justify-center items-center">
        <h1 className="text-[12rem]">MY JOURNEY</h1>
      </section>
    </div>
  );
}
