'use client';

import { siteConfig } from '@/data/siteConfig';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'advanced': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'beginner': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical': return '⚡';
      case 'language': return '🌍';
      case 'creative': return '🎵';
      default: return '📚';
    }
  };

  return (
    <div className="
      group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
      hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
    ">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl">{getCategoryIcon(skill.category)}</span>
        {skill.proficiency && (
          <div className={`w-3 h-3 rounded-full ${getProficiencyColor(skill.proficiency)}`}></div>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
        {skill.name}
      </h3>
      {skill.proficiency && (
        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
          {skill.proficiency}
        </p>
      )}
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: string;
}

function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const technicalSkills = siteConfig.skills.filter(skill => skill.category === 'technical');
  const languageSkills = siteConfig.skills.filter(skill => skill.category === 'language');
  const creativeSkills = siteConfig.skills.filter(skill => skill.category === 'creative');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, languages, and creative pursuits
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          <SkillCategory 
            title="Technical Skills" 
            skills={technicalSkills} 
            icon="⚡" 
          />
          <SkillCategory 
            title="Languages" 
            skills={languageSkills} 
            icon="🌍" 
          />
          <SkillCategory 
            title="Creative Skills" 
            skills={creativeSkills} 
            icon="🎵" 
          />
        </div>
      </div>
    </section>
  );
}
