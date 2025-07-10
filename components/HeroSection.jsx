// components/HeroSection.jsx
export default function HeroSection() {
    return (
      <section className="relative h-screen w-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero.mp4" // place your video in the public folder as hero.mp4
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-syne font-bold">
            Explore the World Smartly
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-xl">
            Personalized trip planning powered by AI and your preferences.
          </p>
        </div>
  
        {/* Optional Overlay Tint */}
        <div className="absolute inset-0 bg-black/40 z-0" />
      </section>
    );
  }
  