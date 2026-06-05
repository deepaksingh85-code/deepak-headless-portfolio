import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-orange-500 uppercase tracking-widest text-sm font-medium mb-3">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Looking for a WordPress, Shopify or Headless CMS developer?
              Let's discuss your next project.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:dddeepaksingh85@gmail.com"
                className="flex items-center gap-4 hover:text-orange-500 transition"
              >
                <FaEnvelope size={22} />
                <span>dddeepaksingh85@gmail.com</span>
              </a>

              <a
                href="tel:+919560938565"
                className="flex items-center gap-4 hover:text-orange-500 transition"
              >
                <FaPhone size={22} />
                <span>+91 95609 38565</span>
              </a>

              <a
                href="https://www.linkedin.com/in/deepak-kumar-singh085/"
                target="_blank"
                className="flex items-center gap-4 hover:text-orange-500 transition"
              >
                <FaLinkedin size={22} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/deepaksingh85-code/"
                target="_blank"
                className="flex items-center gap-4 hover:text-orange-500 transition"
              >
                <FaGithub size={22} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:border-orange-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:border-orange-500 outline-none"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:border-orange-500 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:border-orange-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  w-full
                "
              >
                Send Message 🚀
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}