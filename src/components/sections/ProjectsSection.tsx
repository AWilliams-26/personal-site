'use client';

import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic': return '🎓';
      case 'internship': return '💼';
      case 'personal': return '🛠️';
      default: return '📁';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'internship': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'personal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="
      group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
      hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
      h-full flex flex-col
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)}`}>
          {getTypeIcon(project.type)} {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across academic projects, internships, and personal development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-purple-100 dark:bg-purple-900 rounded-full">
            <span className="text-purple-800 dark:text-purple-300 font-medium">
              🚀 More projects coming soon!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
