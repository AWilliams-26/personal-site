'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="/You are winner.png"
              alt={siteConfig.personalInfo.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
        </div>

        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            {siteConfig.personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            {siteConfig.personalInfo.title}
          </h2>
        </div>

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.personalInfo.tagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${siteConfig.personalInfo.email}`}
            className="
              px-8 py-4 bg-purple-600 hover:bg-purple-700 
              text-white font-semibold rounded-full
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
            "
          >
            Get In Touch
          </a>
          <button
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="
              px-8 py-4 border-2 border-gray-300 dark:border-gray-600
              text-gray-700 dark:text-gray-300 font-semibold rounded-full
              hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400
              transition-all duration-300 ease-in-out
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
            "
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
