import { MessageCircle, Heart, SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

function InstagramPost() {
  return (
    <div 
      feedspring="post" 
      className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:translate-y-[-4px]"
    >
      <div className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover overflow-hidden">
        <img 
          feed-field="img" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-6 2xl:p-8 text-white">
        <div 
          feed-field="caption" 
          className="font-proza text-sm md:text-base line-clamp-3 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" 
        />
        
        <div className="flex items-center gap-6 font-proza text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-white" />
            <span feed-field="like-count" />
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-white" />
            <span feed-field="comment-count" />
          </div>
        </div>

        <a 
          feed-field="link"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/30"
        >
          <SquareArrowOutUpRight className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
}

export function InstagramFeed() {
  useEffect(() => {
    const SCRIPT_ID = 'feedspring-script';
    
    // Function to load/reload the script
    const loadScript = () => {
      // Remove existing script if it exists to force re-initialization
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = "https://scripts.feedspring.com/instagram-attrs.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      // Optional: keep script if other pages might use it immediately, 
      // but the useEffect ensures it re-loads when this component remounts.
    };
  }, []);

  return (
    <section id="instagram" className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 2xl:mb-20">
          <div className="flex flex-col gap-4">
            <p className="font-proza font-semibold text-white/80 text-base">
              Social Media
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-[52px] leading-tight tracking-tight text-white" 
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              Instagram <span className="text-eggshell/60">Feed</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://www.instagram.com/link_lauffener_kartoffeln/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-lg text-dusty-olive font-proza font-medium text-base shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/90 transition-all hover:translate-y-[-2px]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Folge uns</span>
            </a>
          </motion.div>
        </div>

        {/* FeedSpring Wrapper */}
        <div 
          feedspring="inst_UeITM4rImQzX55AJRVmQK" 
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
          <InstagramPost />
        </div>
      </div>
    </section>
  );
}
