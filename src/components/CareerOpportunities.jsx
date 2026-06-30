import React from "react";
import { useInView } from "react-intersection-observer";
import careerOppImg from "/assets/admission/careeroppo.png";
import {
  Briefcase,
  Brain,
  MessageSquare,
  Eye,
  Target,
  Bot,
  Database,
  Wifi,
  Cloud,
  Building2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";

const careerRoles = [
  {
    name: "Machine Learning Engineer",
    icon: Brain,
  },
  {
    name: "NLP Engineer",
    icon: MessageSquare,
  },
  {
    name: "Computer Vision Engineer",
    icon: Eye,
  },
  {
    name: "AI Engineer",
    icon: Bot,
  },
  {
    name: "AI Systems Engineer",
    icon: Target,
  },
  {
    name: "ML Platform Engineer",
    icon: Cloud,
  },
  {
    name: "GPU Development Engineer",
    icon: Cpu,
  },
  {
    name: "MLOps Engineer",
    icon: Layers,
  },
];

export default function CareerOpportunities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`py-20 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-8 md:p-12 shadow-2xl">

          {/* Animated Background Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-spin opacity-30" style={{ animationDuration: '30s' }}></div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}

          <div className="relative z-10">
            {/* Tag */}
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-dark/80 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 animate-glow">
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-accent font-bold text-sm tracking-wider uppercase">
                  Career Opportunities
                </span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Career Opportunities
                </h2>

                <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary-light rounded-full"></div>

                <p className="text-white/90 text-lg leading-relaxed">
                  Training in full AI stack systems engineering opens doors to highly sought-after roles at top technology companies, cloud providers, and semiconductor giants.
                </p>

                <p className="text-white/80 text-base leading-relaxed">
                  Graduates are equipped for both AI model development and AI systems engineering roles across industry and research labs.
                </p>

                {/* Stats/Highlights */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {[
                    { icon: Zap, label: "High Demand", color: "from-accent to-orange-500" },
                    { icon: Building2, label: "Top Companies", color: "from-primary to-primary-dark" },
                    { icon: Cpu, label: "Cutting-edge Tech", color: "from-primary-light to-primary" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Career Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerRoles.map((role, index) => (
                  <div
                    key={index}
                    className={`
                      group relative overflow-hidden rounded-xl
                      bg-white/10 backdrop-blur-sm
                      border border-white/20
                      p-4
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:shadow-accent/30
                      hover:border-accent/50
                      hover:bg-white/15
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ transitionDelay: `${(index * 100) + 300}ms` }}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all duration-500"></div>

                    <div className="relative z-10 flex items-center gap-3">
                      {/* Icon Container */}
                      <div className={`
                        w-12 h-12 rounded-xl
                        bg-gradient-to-br from-accent to-orange-500
                        flex items-center justify-center
                        shadow-lg
                        group-hover:scale-110
                        group-hover:rotate-12
                        group-hover:shadow-accent/50
                        transition-all duration-500
                      `}>
                        <role.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Role Name */}
                      <span className="text-white font-semibold text-base group-hover:text-accent transition-colors duration-300">
                        {role.name}
                      </span>
                    </div>

                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary-light w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}