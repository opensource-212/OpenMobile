
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk leading-tight mb-6">
              Build Smarter, <span className="gradient-text">Together.</span>
              <br />
              Open Mobile: {" "}
              <span className="text-[#3DDC84]">Android</span> &{" "}
              <span className="text-[#007AFF]">iOS</span>.
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Empower your projects with free, customizable, and community-driven mobile solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary text-lg px-8 py-6">
                Explore Our Apps
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Get Started for Free
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="flex items-center justify-center">
              {/* Android Phone */}
              <div className="phone-mockup rotate-1 transform -translate-x-5 z-10 animate-slide-left">
                <div className="phone-screen bg-forge-dark">
                  <div className="code-animation animate-code-slide">
                    <div className="code-line">import React from 'react';</div>
                    <div className="code-line">import {"{View, Text}"} from 'react-native';</div>
                    <div className="code-line code-line-highlight">// Open Mobile Component</div>
                    <div className="code-line">const App = () =&gt; {"{"}</div>
                    <div className="code-line">  return (</div>
                    <div className="code-line code-line-purple">    {'<View style={styles.container}>'}</div>
                    <div className="code-line">      {'<Text>Open Source Mobile App</Text>'}</div>
                    <div className="code-line">      {'<Button title="Start" />'}</div>
                    <div className="code-line code-line-purple">    {'</View>'}</div>
                    <div className="code-line">  );</div>
                    <div className="code-line">{"}"};</div>
                    <div className="code-line"></div>
                    <div className="code-line">const styles = StyleSheet.create({"{"})</div>
                    <div className="code-line">  container: {"{"})</div>
                    <div className="code-line">    flex: 1,</div>
                    <div className="code-line">    alignItems: 'center',</div>
                    <div className="code-line">    justifyContent: 'center',</div>
                    <div className="code-line code-line-highlight">    backgroundColor: '#ffffff',</div>
                    <div className="code-line">  {"}"},</div>
                    <div className="code-line">{"}"})</div>
                    <div className="code-line"></div>
                    <div className="code-line">export default App;</div>
                    <div className="code-line"></div>
                    <div className="code-line">// MIT License</div>
                    <div className="code-line">// Copyright (c) 2025 Open Mobile</div>
                    <div className="code-line"></div>
                    <div className="code-line">import {"{NavigationContainer}"} from '@react-navigation/native';</div>
                    <div className="code-line">import {"{createStackNavigator}"} from '@react-navigation/stack';</div>
                    <div className="code-line"></div>
                    <div className="code-line">const Stack = createStackNavigator();</div>
                  </div>
                </div>
              </div>
              
              {/* iOS Phone */}
              <div className="phone-mockup -rotate-1 transform translate-x-5 animate-slide-right">
                <div className="phone-screen">
                  <div className="h-full w-full bg-white p-4 flex flex-col">
                    <div className="bg-forge-blue/10 rounded-xl p-3 mb-4">
                      <div className="h-8 w-8 bg-forge-blue rounded-lg mb-2"></div>
                      <div className="h-3 w-24 bg-forge-blue rounded-full mb-2"></div>
                      <div className="h-2 w-32 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    <div className="bg-forge-purple/10 rounded-xl p-3 mb-4">
                      <div className="h-8 w-8 bg-forge-purple rounded-lg mb-2"></div>
                      <div className="h-3 w-28 bg-forge-purple rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    <div className="flex gap-3 mb-4">
                      <div className="flex-1 bg-forge-green/10 rounded-xl p-3">
                        <div className="h-6 w-6 bg-forge-green rounded-lg mb-2"></div>
                        <div className="h-2 w-12 bg-forge-green rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-xl p-3">
                        <div className="h-6 w-6 bg-gray-300 rounded-lg mb-2"></div>
                        <div className="h-2 w-12 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="mt-auto bg-forge-blue rounded-xl py-3 flex items-center justify-center">
                      <div className="h-4 w-24 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Code snippets background effect */}
            <div className="absolute -bottom-10 -right-20 w-64 h-64 bg-forge-dark rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-10 -left-20 w-64 h-64 bg-forge-purple rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
