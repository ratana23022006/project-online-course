import { motion } from "framer-motion";
const stats = [
  { value: "50+", label: "Courses", color: "text-red-500" },
  { value: "1.2k", label: "Students", color: "text-indigo-700" },
  { value: "4.9★", label: "Rating", color: "text-amber-500" },
];

export default function Courses() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 overflow-hidden flex items-center">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 opacity-60 blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 w-full max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-600 mb-8 shadow-sm"
            >
              <span className="text-red-400">✦</span>
              KHdemy Learning Platform
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              <span className="text-red-500">Courses</span>
              <br />
              <span className="text-indigo-700">For Learners</span>
              <br />
              <span className="text-indigo-700">and Users</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md"
            >
              This KHdemy course provides interactive exercises, step-by-step
              problem-solving guides, and real-time assignments to help students
              practice and master core concepts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(67,56,202,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-full shadow-lg shadow-indigo-200 transition-colors duration-200 text-[15px]"
              >
                Explore Courses
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-[15px]"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <div className="flex items-center gap-10">
              {stats.map(({ value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className={`text-2xl font-bold ${color}`}>{value}</span>
                  <span className="text-gray-400 text-sm mt-0.5 font-medium">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-2xl relative"
          >
            {/* Floating gentle bounce */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImg}
                alt="Student learning online at KHdemy"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Floating card — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute top-8 left-4 sm:left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
            >
              <div>
                <p className="text-xs text-gray-400 font-medium">New Course</p>
                <p className="text-sm font-semibold text-gray-800">Web Design</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}