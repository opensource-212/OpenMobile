
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const AppShowcase: React.FC = () => {
  const apps = [
    {
      id: 1,
      name: "Productivity Tool",
      description: "Boost efficiency with our customizable task manager.",
      image: "https://source.unsplash.com/random/600x400/?app,task",
      tags: ["React Native", "Redux", "TypeScript"],
    },
    {
      id: 2,
      name: "Health & Fitness Tracker",
      description: "Track goals, open-source style. Customize for your health journey.",
      image: "https://source.unsplash.com/random/600x400/?health,fitness",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      id: 3,
      name: "Social Media Kit",
      description: "Build your own social platform with our customizable components.",
      image: "https://source.unsplash.com/random/600x400/?social,media",
      tags: ["React Native", "GraphQL", "JavaScript"],
    },
    {
      id: 4,
      name: "E-Commerce Solution",
      description: "Launch your mobile store with our open-source e-commerce app.",
      image: "https://source.unsplash.com/random/600x400/?ecommerce,shop",
      tags: ["Flutter", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-grotesk mb-4">
            Featured <span className="gradient-text">Open-Source Apps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-quality open-source mobile applications
            ready for you to use, customize, or contribute to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div key={app.id} className="app-card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{app.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{app.description}</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} /> Fork
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-forge-blue">
                    Learn more <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-4">
          <Button className="btn-primary">
            View All Apps
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Github size={18} />
            GitHub Repository
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
