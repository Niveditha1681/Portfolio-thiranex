import profile from "./assets/profile.jpg"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-cyan-400">
          Niveditha
        </h1>

        <div className="flex gap-4 text-sm md:text-base">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5">

        {/* Profile Image */}
        <img
          src={profile}
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6 object-cover"
        />

        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Niveditha
          </span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          AI & Data Science Student | Full Stack Developer
        </p>

        <p className="mt-3 text-gray-400">
          Chennai, India
        </p>

        {/* View Projects Button */}
        <a
          href="#projects"
          className="mt-8 bg-cyan-500 px-6 py-3 rounded-xl text-black font-bold hover:bg-cyan-400 transition"
        >
          View Projects
        </a>

        {/* Social Buttons */}
        <div className="flex gap-4 mt-6">

          <a
            href="https://github.com/Niveditha1681"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-5 py-2 rounded-xl hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/niveditha-govindaraj-1974a9329/"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 px-5 py-2 rounded-xl text-black hover:bg-cyan-400 transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 transition"
        >
          Download Resume
        </a>

      </section>

      {/* About Section */}
      <section id="about" className="p-10">

        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>

        <p className="text-lg leading-8 text-gray-300 max-w-4xl">
          I am a 3rd year AI & Data Science student passionate about
          full-stack development, AI applications, and software engineering.
          I enjoy building modern, scalable, and user-friendly web applications
          using React, Node.js, and MongoDB.
        </p>

      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10">

        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Skills
        </h2>

        <div className="flex flex-wrap gap-5">

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            React
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            Node.js
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            MongoDB
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            Python
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            SQL
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            Java
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            FastAPI
          </div>

          <div className="bg-gray-800 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            GitHub
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10">

        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h3 className="text-2xl font-bold">
              AI Fake Review Detection
            </h3>

            <p className="mt-4 text-gray-300">
              AI-powered web application to identify fake product reviews
              in e-commerce platforms.
            </p>

            <a
              href="https://github.com/Niveditha1681"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-cyan-400"
            >
              View Project →
            </a>

          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

            <h3 className="text-2xl font-bold">
              Task Management App
            </h3>

            <p className="mt-4 text-gray-300">
              Full-stack productivity application with authentication
              and task tracking features.
            </p>

            <a
              href="https://github.com/Niveditha1681"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-cyan-400"
            >
              View Project →
            </a>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10">

        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Contact
        </h2>

        <form className="flex flex-col gap-5 max-w-xl">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl text-black"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-xl text-black"
          ></textarea>

          <button className="bg-cyan-500 p-4 rounded-xl text-black font-bold hover:bg-cyan-400 transition">
            Send Message
          </button>

        </form>

      </section>

    </div>
  )
}

export default App