import { motion } from "framer-motion";
import Team from "./Team";

const blogPosts = [
  {
    title: "🧠 Why We’re Doing This",
    content:
      "Learning to code can feel like rocket science 🚀 — but it doesn't have to be. We're here to help absolute beginners get started with Java and Python. For free. No ads. No BS.",
  },
  {
    title: "💻 What You'll Learn",
    content:
      "In Java: Variables, Loops, OOP, Projects. In Python: Syntax, Functions, Lists, Projects. Everything beginner-friendly with hands-on examples.",
  },
  {
    title: "🌱 Who’s This For?",
    content:
      "Students, non-CS folks, career switchers — anyone curious about coding. We explain things clearly and practically.",
  },
  {
    title: "🤝 Why Trust Us?",
    content:
      "Built by learners, for learners. We keep it simple, helpful, and human — not robotic. No more tutorials that leave you hanging.",
  },
  {
    title: "🔥 What’s Coming Next?",
    content:
      "More content, practice problems, quizzes, career prep — and maybe even internships. Stay tuned!",
  },
];

const BlogSection = () => {
  return (
    <section className="px-4 py-12 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Blog Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white mt-[30px]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog <span className="text-purple-400">✍️</span>
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-400">
                {post.title}
              </h3>
              <p className="text-gray-300">{post.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section Heading */}
        <motion.h3
          className="text-3xl font-bold mt-20 mb-10 text-center text-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team 👩‍💻👨‍💻
        </motion.h3>

        {/* Team Component */}
        <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <Team />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
