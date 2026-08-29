import { LucideGem } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#050816] text-white ">

    
      <div className="absolute right-1/2 top-0 h-96 w-96  rounded-full bg-cyan-600/30 blur-[120px]" />

    
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-8">

        
          <div>

            <div className="flex items-center justify-center gap-2 sm:justify-start">

              <LucideGem className="h-7 w-7 text-cyan-400" />

              <h1 className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-2xl font-bold text-transparent">
                Zenora
              </h1>

            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400 sm:text-left">
              Building innovative digital solutions that help businesses
              grow and succeed.
            </p>

          </div>


        
          <div>

            <h2 className="mb-4 font-bold text-white">
              ADDRESS
            </h2>

            <p className="space-y-1 text-sm leading-6 text-gray-400">
              <span className="block">
                RMZ Millenia Business Park
              </span>

              <span className="block">
                No. 143, Dr. M.G.R. Road
              </span>

              <span className="block">
                Perungudi, Chennai - 600096
              </span>

              <span className="block">
                Tamil Nadu, India.
              </span>
            </p>

          </div>


    
          <div>

            <h2 className="mb-4 font-bold text-white">
              CONTACT
            </h2>

            <p className="text-sm text-gray-400">
              +91 996 200 1122
            </p>

            <p className="mt-2 text-sm text-gray-400">
              info@zenora.com
            </p>

            
            <div className="mt-5 flex justify-center gap-4 sm:justify-start">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 "
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 "
              >
                <FaTwitter />
              </a>

            </div>

          </div>


        
          <div>

            <h2 className="mb-4 font-bold text-white">
              QUICK LINKS
            </h2>

            <div className="space-y-2 text-sm text-gray-400">

              <p className="cursor-pointer transition">
                About Us
              </p>

              <p className="cursor-pointer transition ">
                Blog
              </p>

              <p className="cursor-pointer transition ">
                Our Team
              </p>

              <p className="cursor-pointer transition ">
                Terms and Conditions
              </p>

              <p className="cursor-pointer transition">
                Privacy Policy
              </p>

              <p className="cursor-pointer transition">
                Cancellation Policy
              </p>

            </div>

          </div>

        </div>


    
        <div className="mt-10 border-t border-gray-500 pt-6 text-center">

          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Zenora. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;