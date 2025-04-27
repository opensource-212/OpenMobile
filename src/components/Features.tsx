
import React from "react";
import { Code, Smartphone, Users, ShieldCheck } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-forge-blue" />,
      title: "Open-Source Freedom",
      description: "Full access to source code. Modify, redistribute, and innovate without limits.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-forge-purple" />,
      title: "Cross-Platform Compatibility",
      description: "Seamless apps for both Android and iOS. One codebase, endless possibilities.",
    },
    {
      icon: <Users className="h-12 w-12 text-forge-green" />,
      title: "Community-Powered",
      description: "Built by developers, for developers. Contribute, suggest features, or fork projects.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-forge-blue" />,
      title: "Enterprise-Ready",
      description: "Secure, scalable, and backed by professional support for businesses.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-grotesk mb-4">
            Key <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why developers around the world choose our open-source mobile solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="mb-6 p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-grotesk">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 lg:p-10 bg-white rounded-2xl shadow-md border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-grotesk mb-4">
                Why Developers and Businesses Trust Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-forge-green font-bold mr-2">✓</span>
                  <span>100% transparent code. No hidden costs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forge-green font-bold mr-2">✓</span>
                  <span>Easy customization for any use case.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forge-green font-bold mr-2">✓</span>
                  <span>Active global community (10,000+ contributors).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forge-green font-bold mr-2">✓</span>
                  <span>Regular updates & security patches.</span>
                </li>
              </ul>
            </div>
            <div className="code-background rounded-xl p-6 overflow-hidden">
              <div className="text-gray-200 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-forge-green">// Clone the repository</p>
                <p className="text-gray-300">git clone https://github.com/openmobileforge/awesome-app.git</p>
                <p className="mt-2 text-gray-300">cd awesome-app</p>
                <p className="mt-2 text-forge-green">// Install dependencies</p>
                <p className="text-gray-300">npm install</p>
                <p className="mt-2 text-forge-green">// Run on iOS or Android</p>
                <p className="text-gray-300">npm run ios</p>
                <p className="text-gray-300">npm run android</p>
                <p className="mt-2 text-forge-purple">// Happy coding! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
