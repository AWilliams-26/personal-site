'use client';

import { PersonalInfo } from '@/types';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export function ContactSection({ personalInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="
              group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
              hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
              hover:border-purple-300 dark:hover:border-purple-600
              text-center
            "
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm break-all">
              {personalInfo.email}
            </p>
          </a>

          {/* Location */}
          <div className="
            p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
            text-center
          ">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Phone */}
          <a
            href={`tel:${personalInfo.phone}`}
            className="
              group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700
              hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
              hover:border-green-300 dark:hover:border-green-600
              text-center
            "
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {personalInfo.phone}
            </p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`mailto:${personalInfo.email}?subject=Hello Alexander!&body=Hi Alexander,%0D%0A%0D%0AI'd like to discuss...`}
            className="
              inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 
              text-white font-semibold rounded-full
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              dark:focus:ring-offset-gray-900
            "
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
}
