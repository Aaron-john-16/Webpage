import {
  ArrowRight,
  Code2,
  
  Cpu,
  
  Menu,
  X,
  LucideGem,
  
  
} from "lucide-react";
import { useState } from "react";
import ScrollAnimation from "./scrollAnimation";




function LandingPage() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

 

  return (
    <div  id="Home"  className="  min-h-screen bg-[#050816] text-white overflow-hidden">

    

      <nav className="fixed  top-0 z-50 left-0 right-0  border-b border-white/10  backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <LucideGem size={20} />
            </div>

            <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Zenora
            </span>
          </div>

          
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#Home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#Blog" className="hover:text-cyan-400 transition">
              Blog
            </a>

            <a href="#Aboutus" className="hover:text-cyan-400 transition">
              About us
            </a>

            <a href="#Ourteam" className="hover:text-cyan-400 transition">
              Our Team
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          
          <a
            href="#Signup"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition "
          >
            Sign up
            <ArrowRight size={16} />
          </a>

        
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        
        {menuOpen && (
          <div className="md:hidden border-t  bg-gradient-to-r from-blue-600 to-violet-500 bg-[#050816] px-6 py-6">
            <div className="flex flex-col gap-5 text-slate-300">

              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#Blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>

              <a href="#Aboutus" onClick={() => setMenuOpen(false)}>
                About us
              </a>

              <a href="#Ourteam" onClick={() => setMenuOpen(false)}>
                Our Team
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>

    

      <section
      
     
        className="relative min-h-screen flex items-center pt-28   "
      >

        <div className="absolute left-2/4 top-20  w-96 h-96 bg-cyan-600/40 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div  className="grid lg:grid-cols-2 gap-16 items-center ">

    
            <div >

               <ScrollAnimation>

              <h1  className=" text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight   ">

                Technology
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  that moves
                </span>

                <br />

                businesses forward.
              </h1>

              <p className="mt-7 text-lg text-slate-400 max-w-xl leading-8">
                We design and develop digital products, intelligent
                applications and scalable technology solutions that help
                ambitious businesses grow.
              </p>

               </ScrollAnimation>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#contact"
                  className="group text-white flex items-center gap-3 px-6 py-3.5 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 hover:bg-cyan-300 transition"
                >
                  Start a Project

                  <ArrowRight
                    size={18}
                    
                  />
                </a>

                <a
                  href="#projects"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/15  transition"
                >
                  View Our Work
                </a>

              </div>

            
              
            </div>

            
<div className="relative hidden lg:block">

  <div className="relative w-full aspect-square max-w-[550px] mx-auto">



    <div
      className="
        absolute
        inset-8
        rounded-full
        border
        border-cyan-400/20 
      "
    />



    <div
      className="
        absolute
        inset-20
        rounded-md
        border
        
        animate-[spin_10s_infinite]
      "
    />



    <div className="absolute inset-0 flex items-center justify-center">

      <div
        className="
          relative
          w-52
          h-52
           rounded-[30px]
         
          border
          border-cyan-300/20
              backdrop-blur-xl
          flex
          items-center
          justify-center
            animate-[pulse_4s_ease-in-out_infinite]
        "
      >

        

        <LucideGem
          size={90}
          strokeWidth={1}
          className="
            text-cyan-300
            animate-[pulse_3s_ease-in-out_infinite]
          "
        />


    

        <div
          className="
            absolute
            -top-5
            -right-5
            w-14
            h-14
            rounded-2xl
            bg-[#0b1225]
            border
            border-white/10
            flex
            items-center
            justify-center
            animate-[bounce_3s_ease-in-out_infinite]
          "
        >

          <Code2
            className="text-blue-400"
          />

        </div>




        <div
          className="
            absolute
            -bottom-5
            -left-5
            w-14
            h-14
            rounded-2xl
            bg-[#0b1225]
            border
            border-white/10
            flex
            items-center
            justify-center
            animate-[bounce_4s_ease-in-out_infinite]
          "
        >

          <Cpu
            className="text-purple-400"
          />

        </div>

      </div>

    </div>


    

    <div
      className="
        absolute
        top-16
        right-0
        px-5
        py-4
        rounded-2xl
          bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        animate-[bounce_3s_ease-in-out_infinite]
      "
    >

      <p className="text-xs text-slate-500">
        Performance
      </p>

      <p className="text-xl font-bold text-cyan-400">
        98%
      </p>

    </div>

    <div
      className="
        absolute
        bottom-20
        right-5
        px-5
        py-4
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        animate-[bounce_4s_ease-in-out_infinite]
      "
    >

      <p className="text-xs text-slate-500">
        Growth
      </p>

      <p className="text-xl font-bold text-blue-400">
        +240%
      </p>

    </div>

  </div>

</div>
          



          </div>
        </div>
      </section>

</div>
  )
}
export default LandingPage;