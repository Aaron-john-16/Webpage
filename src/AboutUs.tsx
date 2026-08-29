import indiamap from './pics/indiamap.jpg';
import ScrollAnimation from "./scrollAnimation";
function AboutUs ()  {
  return (
   <section id="Aboutus" className="relative py-10 min-h-full overflow-hidden bg-[#062b4f] text-white">


  <div
    className="
      absolute
      inset-[0]
      bg-cover
      bg-center
      bg-no-repeat
         animate-[pulse_4s_ease-in-out_infinite]
    "
    style={{
      backgroundImage: `url(${indiamap})`,
    }}
  />

  
  <div className="absolute inset-0 bg-[#062b4f]/50" />


  <div className="relative z-10 mx-auto flex min-h-full h-screen max-w-[1800px] items-center px-7 py-16 lg:px-14">

    <div className="w-full lg:w-[52]">

      <ScrollAnimation>

      <h1 className="
        mb-5 text-5xl font-bold
        bg-gradient-to-r from-blue-500 to-violet-500
        text-transparent bg-clip-text
        tracking-tight md:text-6xl lg:text-7xl
      ">
        About Us
      </h1>

      <h2 className="max-w-[850px] text-2xl font-bold leading-[1.45] md:text-3xl">
        We are the experts behind your digital journey,
        transforming ideas into action with cutting-edge IT
        and analytics solutions.
      </h2>

      <p className="
        mt-7 max-w-[850px]
        text-lg leading-[1.7]
        text-gray-100 md:text-xl
      ">
        Our journey of “serving with love” started with a simple
        but powerful idea: to help businesses like yours thrive
        through the power of technology. And over the years,
        we have become more than just a service provider, we have
        become a trusted partner in your digital transformation,
        helping you turn opportunities into results.
      </p>
       </ScrollAnimation>

      <button className="
        mt-10 flex items-center gap-5
        rounded-full
        bg-cyan-400
        px-8 py-4 text-lg font-bold
        transition-all duration-300
        hover:scale-105
      ">
        Learn More
        <span className="text-2xl">→</span>
      </button>

    </div>

  </div>
</section>
  );
};

export default AboutUs;