
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom mx-auto">
        <div className="bg-gradient-to-br from-forge-blue to-forge-purple rounded-2xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Abstract shapes in background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk mb-6">
              Ready to Innovate with Open-Source?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Download, contribute, or customize. The power is yours.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-forge-blue hover:bg-white/90 text-lg px-8 py-6">
                Browse Apps
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Join Our Community
              </Button>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/20 flex flex-col lg:flex-row gap-8 justify-center items-center">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Need help?</p>
                  <p className="font-medium">Check our documentation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8L22 12L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 8L2 12L6 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Want to contribute?</p>
                  <p className="font-medium">Fork us on GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
