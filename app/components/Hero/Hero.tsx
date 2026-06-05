import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-orange-500 tracking-widest uppercase mb-4">
              Available for work
            </p>

            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Hi, I'm <span className="text-orange-500">Deepak</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10">
              Full <strong>Stack Developer</strong>.
              I design and build digital products that people love to use.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-black text-white px-7 py-3 rounded-full"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-7 py-3 rounded-full"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t">
              <div>
                <p className="font-bold text-3xl">54+</p>
                <p className="text-xs text-gray-500">Projects Done</p>
              </div>

              <div>
                <p className="font-bold text-3xl">42+</p>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>

              <div>
                <p className="font-bold text-3xl">9y</p>
                <p className="text-xs text-gray-500">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/deepak.jpeg"
                alt="Hero"
                fill
                className="object-cover rounded-3xl"
              />

              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold">
                Open to projects
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}