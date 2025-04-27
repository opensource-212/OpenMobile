import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-forge-dark text-white py-12">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center mb-6">
              <span className="font-grotesk font-bold text-2xl">
                <span className="text-white">Open</span>
                <span className="text-forge-blue">Mobile</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Building the future of mobile development through open-source collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.41 4.865 20.136 8.84 21.629C9.34 21.721 9.52 21.421 9.52 21.16C9.52 20.928 9.512 20.232 9.508 19.38C6.726 19.978 6.139 17.89 6.139 17.89C5.685 16.723 5.029 16.425 5.029 16.425C4.121 15.80 5.097 15.811 5.097 15.811C6.101 15.881 6.629 16.836 6.629 16.836C7.521 18.394 8.969 17.937 9.541 17.685C9.632 17.023 9.89 16.566 10.175 16.311C7.954 16.055 5.62 15.195 5.62 11.398C5.62 10.318 6.01 9.434 6.649 8.741C6.546 8.493 6.203 7.495 6.747 6.12C6.747 6.12 7.587 5.855 9.497 7.141C10.294 6.919 11.15 6.808 12.001 6.804C12.85 6.808 13.707 6.919 14.506 7.141C16.413 5.855 17.251 6.12 17.251 6.12C17.796 7.495 17.452 8.493 17.351 8.741C17.991 9.434 18.379 10.318 18.379 11.398C18.379 15.205 16.041 16.051 13.814 16.301C14.167 16.609 14.488 17.222 14.488 18.16C14.488 19.487 14.473 20.837 14.473 21.16C14.473 21.423 14.65 21.726 15.158 21.628C19.13 20.135 22 16.41 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.492C18.787 3.797 17.147 3.291 15.432 3.001C15.414 2.999 15.396 3.007 15.387 3.024C15.184 3.368 14.958 3.818 14.799 4.171C12.9687 3.9022 11.1145 3.9022 9.28427 4.171C9.12454 3.8172 8.89145 3.368 8.68756 3.024C8.67912 3.007 8.66084 2.999 8.64256 3.001C6.92839 3.291 5.28883 3.797 3.75831 4.492C3.75 4.492 3.74307 4.499 3.73752 4.504C0.54287 9.327 -0.325464 14.0389 0.0998322 18.6968C0.101301 18.7118 0.110023 18.7266 0.122045 18.7352C2.17665 20.2296 4.159 21.1334 6.10899 21.7279C6.12726 21.7337 6.14692 21.7279 6.15814 21.7128C6.61658 21.0828 7.0268 20.4156 7.37918 19.7141C7.39457 19.6816 7.37918 19.6432 7.34519 19.63C6.70594 19.3868 6.09244 19.0925 5.50036 18.7566C5.4621 18.7349 5.45794 18.6812 5.49193 18.6553C5.60278 18.5724 5.71363 18.4855 5.81863 18.3985C5.83402 18.385 5.85646 18.3817 5.87474 18.39C9.74844 20.1926 13.9138 20.1926 17.7459 18.39C17.7642 18.3801 17.7867 18.3835 17.8037 18.3969C17.9087 18.4839 18.0195 18.5724 18.132 18.6553C18.166 18.6812 18.1635 18.7349 18.1253 18.7566C17.5332 19.0974 16.9197 19.3868 16.2789 19.6283C16.2449 19.6416 16.2311 19.6816 16.2465 19.7141C16.6055 20.4139 17.0158 21.0811 17.466 21.7111C17.4756 21.7279 17.4969 21.7337 17.5152 21.7279C19.4769 21.1334 21.4592 20.2296 23.5138 18.7352C23.5274 18.7266 23.5345 18.7134 23.536 18.6984C24.0398 13.3331 22.6349 8.66156 20.3466 4.50553C20.3427 4.499 20.3358 4.492 20.3275 4.492H20.317Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API References</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get updates on new apps and features</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 rounded-lg py-3 px-4 text-white outline-none focus:ring-2 focus:ring-forge-blue"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-forge-blue hover:bg-forge-blue/80 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">© 2025 Open Mobile. Proudly open-source. Licensed under MIT.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
