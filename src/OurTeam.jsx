import React from "react";
import alex from "./pics/alex.jpg";
import sara from "./pics/sara.jpg";
import miller from "./pics/miller.jpg";
import emma from "./pics/emma.jpg";
import micheal from "./pics/micheal.jpg";
import sophia from "./pics/sophia.jpg";
import ScrollAnimation from "./scrollAnimation";

const team = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    description:
      "Leads the company vision and drives innovation across technology and business.",
    image:
      alex,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    description:
      "Focuses on technology strategy, architecture, and building scalable solutions.",
    image:
         sara,
  },
  {
    id: 3,
    name: "David Miller",
    role: "Lead Software Engineer",
    description:
      "Builds reliable applications and leads the engineering team.",
    image:
      miller,
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "UI/UX Designer",
    description:
      "Creates intuitive and engaging digital experiences for our customers.",
    image:
      emma,
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Backend Developer",
    description:
      "Develops secure APIs, databases, and backend systems.",
    image:
      micheal,
  },
  {
    id: 6,
    name: "Sophia Davis",
    role: "Project Manager",
    description:
      "Coordinates teams and ensures projects are delivered successfully.",
    image:
      sophia,
  },
];

function OurTeam() {
  return (
  
    <div id="Ourteam" className="min-h-screen bg-slate-950 text-white">

   
      <section className="relative overflow-hidden px-6 py-24 md:py-32">

  
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">

    
 <ScrollAnimation>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Team
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Meet the people behind
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              our technology.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Our talented team of developers, designers, engineers, and
            strategists work together to create powerful digital solutions.
          </p>

 </ScrollAnimation>
        </div>
      </section>

   
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl">


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((member) => (

              <div
                key={member.id}
                className="group overflow-hidden rounded-3xl border border-white/10  transition duration-500 hover:-translate-y-3 hover:border-cyan-400"
              >

              
                <div className="relative h-80 overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover  transition duration-700 group-hover:scale-120"
                  />

                
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  
                 

                </div>

              
                <div className="p-6">

                  <h2 className="text-2xl font-bold transition ">
                    {member.name}
                  </h2>

                  <p className="mt-1 font-medium text-cyan-400">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {member.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

   
        </div>
      </section>

    
      

    </div>
   
  );
}

export default OurTeam;