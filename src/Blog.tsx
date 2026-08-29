import Ai from "./pics/ai.jpg";  
import Web from "./pics/web.jpg";
import Cyber from "./pics/cyber.jpg";
import Cloud from "./pics/cloud.jpg";
import Tech from "./pics/technology.jpg";
import Business from "./pics/business.jpg";

import { ArrowRight } from "lucide-react";
import ScrollAnimation from "./scrollAnimation";
const blogs = [
  {
    id: 1,
    category: "AI & ML",
    title: "How Artificial Intelligence Is Transforming Modern Businesses",
    description:
      "Discover how AI is helping businesses automate processes, improve decisions, and create better customer experiences.",
    author: "Alex Johnson",
    date: "Aug 20, 2026",
    image:Ai
  },

  {
    id: 2,
    category: "Web Development",
    title: "Building Fast and Scalable Web Applications",
    description:
      "Learn the key technologies and development practices used to build modern, scalable web applications.",
    author: "David Smith",
    date: "Aug 15, 2026",
    image:Web
      
  },
  {
    id: 3,
    category: "Cybersecurity",
    title: "Essential Cybersecurity Practices for Businesses",
    description:
      "Protect your business from common security threats with these practical cybersecurity strategies.",
    author: "Michael Lee",
    date: "Aug 10, 2026",
    image:Cyber
      
  },
  {
    id: 4,
    category: "Cloud",
    title: "Why Cloud Computing Is Important for Growing Companies",
    description:
      "Explore how cloud technology can improve flexibility, performance, and operational efficiency.",
    author: "Sarah Wilson",
    date: "Aug 05, 2026",
    image:Cloud
    
  },
  {
    id: 5,
    category: "Technology",
    title: "Technology Trends Every Business Should Know",
    description:
      "Take a look at the technology trends that are shaping the future of digital businesses.",
    author: "Daniel Brown",
    date: "Jul 28, 2026",
    image:Tech
      
  },
  {
    id: 6,
    category: "Business",
    title: "Using Technology to Improve Business Productivity",
    description:
      "Discover practical ways technology can help teams work smarter and improve productivity.",
    author: "Emma Davis",
    date: "Jul 20, 2026",
    image:Business
    
  },
];

function Blog() {
  return (
    
    <div id="Blog" className=" min-h-screen  bg-slate-950 text-white">
    
    
      <section className="relative page-animation overflow-hidden px-6 py-24 md:py-32">

      
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/50 blur-[120px]" />

        <div className=" relative mx-auto max-w-5xl text-center">

<ScrollAnimation>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Blog
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Insights that shape the
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              future of technology.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore the latest ideas, technologies, strategies and insights
            from our team of technology experts.
          </p>

 </ScrollAnimation>
        </div>
       

        
        <div className="mx-auto max-w-7xl">

          <div className="mt-12 gap-7 ">

            {blogs.map((blog) => (

                <article
                  key={blog.id}
                  className="group grid gap-6 border-t border-white/30 py-8 md:grid-cols-[260px_1fr] md:gap-10"
                >

              

                  <div className="h-48 overflow-hidden rounded-xl md:h-40">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>


                

                  <div className="flex flex-col justify-center">

                    <div className="mb-3 flex items-center gap-3 text-xs  ">

                      <span className="font-semibold text-cyan-400">
                        {blog.category}
                      </span>

                      <span className="text-gray-600">
                        /
                      </span>

                      <span className="text-gray-500">
                        {blog.date}
                      </span>

                    </div>


                    <h3 className="text-2xl font-bold leading-tight transition duration-300  md:text-3xl">
                      {blog.title}
                    </h3>


                    <p className="mt-3 max-w-3xl text-sm  text-gray-400">
                      {blog.description}
                    </p>


                    <div className="mt-5 ">

                      <button className="font-semibold flex items-center text-gray-300 transition hover:text-cyan-400">

                        Read More

                        <span className="ml-2">
                          <ArrowRight size={15}/>
                        </span>

                      </button>

                    </div>

                  </div>

                </article>

            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Blog;