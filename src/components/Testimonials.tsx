
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Using OpenMobile's apps cut our development time by 60%. The community support is unmatched!",
      author: "John D., CTO at TechStartup",
      image: "https://source.unsplash.com/random/100x100/?portrait,man",
    },
    {
      text: "Finally, open-source apps that don't compromise on design or functionality.",
      author: "Sarah L., Freelance Developer",
      image: "https://source.unsplash.com/random/100x100/?portrait,woman",
    },
    {
      text: "The cross-platform compatibility saved us months of development. Highly recommended!",
      author: "Michael R., Mobile Team Lead",
      image: "https://source.unsplash.com/random/100x100/?portrait,person",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-grotesk mb-4">
            What Our <span className="gradient-text">Community Says</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied developers and businesses using our open-source mobile solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 20H4L8 12H5.33333L1.33333 20V28H9.33333V20Z" fill="#0EA5E9"/>
                  <path d="M22.6667 20H17.3333L21.3333 12H18.6667L14.6667 20V28H22.6667V20Z" fill="#0EA5E9"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span className="font-medium">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-forge-dark text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forge-blue rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-forge-purple rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold font-grotesk mb-4">Join Our Growing Community</h3>
              <p className="text-white/80 max-w-lg">
                Connect with thousands of developers, contribute to projects, and help shape the future of open-source mobile apps.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#"
                className="bg-white text-forge-dark px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Join Discord
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.492C18.787 3.797 17.147 3.291 15.432 3.001C15.414 2.999 15.396 3.007 15.387 3.024C15.184 3.368 14.958 3.818 14.799 4.171C12.9687 3.9022 11.1145 3.9022 9.28427 4.171C9.12454 3.8172 8.89145 3.368 8.68756 3.024C8.67912 3.007 8.66084 2.999 8.64256 3.001C6.92839 3.291 5.28883 3.797 3.75831 4.492C3.75 4.492 3.74307 4.499 3.73752 4.504C0.54287 9.327 -0.325464 14.0389 0.0998322 18.6968C0.101301 18.7118 0.110023 18.7266 0.122045 18.7352C2.17665 20.2296 4.159 21.1334 6.10899 21.7279C6.12726 21.7337 6.14692 21.7279 6.15814 21.7128C6.61658 21.0828 7.0268 20.4156 7.37918 19.7141C7.39457 19.6816 7.37918 19.6432 7.34519 19.63C6.70594 19.3868 6.09244 19.0925 5.50036 18.7566C5.4621 18.7349 5.45794 18.6812 5.49193 18.6553C5.60278 18.5724 5.71363 18.4855 5.81863 18.3985C5.83402 18.385 5.85646 18.3817 5.87474 18.39C9.74844 20.1926 13.9138 20.1926 17.7459 18.39C17.7642 18.3801 17.7867 18.3835 17.8037 18.3969C17.9087 18.4839 18.0195 18.5724 18.132 18.6553C18.166 18.6812 18.1635 18.7349 18.1253 18.7566C17.5332 19.0974 16.9197 19.3868 16.2789 19.6283C16.2449 19.6416 16.2311 19.6816 16.2465 19.7141C16.6055 20.4139 17.0158 21.0811 17.466 21.7111C17.4756 21.7279 17.4969 21.7337 17.5152 21.7279C19.4769 21.1334 21.4592 20.2296 23.5138 18.7352C23.5274 18.7266 23.5345 18.7134 23.536 18.6984C24.0398 13.3331 22.6349 8.66156 20.3466 4.50553C20.3427 4.499 20.3358 4.492 20.3275 4.492H20.317ZM7.90078 15.8987C6.73302 15.8987 5.77561 14.8311 5.77561 13.5219C5.77561 12.2128 6.71763 11.1451 7.90078 11.1451C9.09155 11.1451 10.0424 12.2211 10.026 13.5219C10.026 14.8311 9.0899 15.8987 7.90078 15.8987ZM16.116 15.8987C14.9483 15.8987 13.9909 14.8311 13.9909 13.5219C13.9909 12.2128 14.9329 11.1451 16.116 11.1451C17.3068 11.1451 18.2576 12.2211 18.2412 13.5219C18.2412 14.8311 17.3068 15.8987 16.116 15.8987Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.41 4.865 20.136 8.84 21.629C9.34 21.721 9.52 21.421 9.52 21.16C9.52 20.928 9.512 20.232 9.508 19.38C6.726 19.978 6.139 17.89 6.139 17.89C5.685 16.723 5.029 16.425 5.029 16.425C4.121 15.80 5.097 15.811 5.097 15.811C6.101 15.881 6.629 16.836 6.629 16.836C7.521 18.394 8.969 17.937 9.541 17.685C9.632 17.023 9.89 16.566 10.175 16.311C7.954 16.055 5.62 15.195 5.62 11.398C5.62 10.318 6.01 9.434 6.649 8.741C6.546 8.493 6.203 7.495 6.747 6.12C6.747 6.12 7.587 5.855 9.497 7.141C10.294 6.919 11.15 6.808 12.001 6.804C12.85 6.808 13.707 6.919 14.506 7.141C16.413 5.855 17.251 6.12 17.251 6.12C17.796 7.495 17.452 8.493 17.351 8.741C17.991 9.434 18.379 10.318 18.379 11.398C18.379 15.205 16.041 16.051 13.814 16.301C14.167 16.609 14.488 17.222 14.488 18.16C14.488 19.487 14.473 20.837 14.473 21.16C14.473 21.423 14.65 21.726 15.158 21.628C19.13 20.135 22 16.41 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
