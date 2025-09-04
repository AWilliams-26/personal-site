'use client';

import { siteConfig } from '@/data/siteConfig';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'program': return '🚀';
      default: return '📚';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'education': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'program': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div 
      className={`
        group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
        hover:shadow-lg transition-all duration-500 ease-in-out
        transform hover:-translate-y-1
        ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}
      `}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Timeline connector */}
      <div className={`
        hidden lg:block absolute top-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900
        ${index % 2 === 0 ? '-right-10' : '-left-10'}
      `}></div>

      {/* Type badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(experience.type)}`}>
          {getTypeIcon(experience.type)} {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {experience.period}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {experience.title}
      </h3>
      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">
        {experience.company}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {experience.location}
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {experience.description}
      </p>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = siteConfig.experiences;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through technology, education, and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-600"></div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`
                  lg:flex lg:items-center lg:justify-center
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}
              >
                <div className="lg:w-1/2">
                  <ExperienceCard experience={experience} index={index} />
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
