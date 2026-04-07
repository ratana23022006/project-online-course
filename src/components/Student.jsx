import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Davin",
    image: "https://i.pinimg.com/1200x/4b/94/6f/4b946f6c33c483aebd95d505ea93ee96.jpg", // 👈 replace with your image path or URL
    stars: 4,
    quote:
      "The courses are well structured and easy to follow along. I completed the full web dev track and landed a freelance client.",
  },
  {
    name: "Sophea",
    image: "/images/sophea.jpg",
    stars: 5,
    quote:
      "KL.Learn changed how I approach learning. The instructors explain concepts clearly and the projects are practical and relevant.",
  },
  {
    name: "Ratanak",
    image: "/images/ratanak.jpg",
    stars: 5,
    quote:
      "I went from zero coding knowledge to building my own app in 3 months. The community support is incredible.",
  },
  {
    name: "Mealea",
    image: null, // 👈 null = auto fallback to initials
    stars: 4,
    quote:
      "The UI/UX design course was exactly what I needed for my career switch. Very hands-on and up-to-date with industry trends.",
  },
  {
    name: "Virak",
    image: "/images/virak.jpg",
    stars: 5,
    quote:
      "Best investment I made this year. The mentors are responsive and the curriculum is world-class even for Cambodian students.",
  },
  {
    name: "Chenda",
    image: null,
    stars: 4,
    quote:
      "I appreciated the flexible schedule. I could learn at my own pace while still working a full-time job.",
  },
  {
    name: "Piseth",
    image: "/images/piseth.jpg",
    stars: 5,
    quote:
      "The data science track gave me real skills I could immediately apply at work. My manager was impressed within weeks.",
  },
];

// Auto-generate initials from name as fallback
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

// Avatar: shows image if available, falls back to initials on error or null
function Avatar({ image, name }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [image]);

  if (image && !imgError) {
    return (
      <img
        src={image}
        alt={name}
        onError={() => setImgError(true)}
        className="w-24 h-24 rounded-full object-cover object-top border-2 border-blue-100"
      />
    );
  }

  return (
    <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl font-bold text-[#1a2a4a] select-none">
      {getInitials(name)}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="w-full py-12 px-4 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        What do students say about{" "}
        <span className="text-red-500">KL.Learn</span>?
      </h2>

      {/* Slider row */}
      <div className="flex items-center gap-3 md:gap-5 w-full max-w-3xl">
        {/* Prev button */}
        <button
          onClick={prev}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1a2a4a] hover:bg-[#253662] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Card */}
        <div className="flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8"
            >
              {/* Avatar column */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0 sm:w-36">
                <Avatar image={t.image} name={t.name} />
                <p className="font-bold text-gray-900 text-base text-center">
                  {t.name}
                </p>
                <p className="text-xs text-gray-400 text-center">
                  KL.Learn Student
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < t.stars ? "text-yellow-400" : "text-gray-200"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote column */}
              <div className="flex-1 relative px-2">
                <span className="absolute -top-2 left-0 text-6xl leading-none text-gray-200 font-serif select-none">
                  "
                </span>
                <p className="text-gray-500 italic text-base leading-relaxed pt-6 pb-4 px-2">
                  {t.quote}
                </p>
                <span className="absolute -bottom-4 right-0 text-6xl leading-none text-gray-200 font-serif select-none">
                  "
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1a2a4a] hover:bg-[#253662] text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#1a2a4a] w-6"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}