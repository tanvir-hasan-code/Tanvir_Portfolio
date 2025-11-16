import React from "react";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  StarIcon,
  BookOpenIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

const educationData = [
  {
    _id: "691a2d744fb4b1a58d5fc775",
    id: 1,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kagoil Koruna Kanta High School",
    session: "2019-2020",
    passingYear: 2021,
    gpa: 4.33,
    subjects: ["Physics", "Chemistry", "Biology", "Agriculture"],
    description:
      "Completed Secondary School Certificate with a strong focus on science and agriculture subjects, demonstrating consistent academic performance and curiosity in agricultural studies."
  },
  {
    _id: "691a2d744fb4b1a58d5fc776",
    id: 2,
    degree: "Diploma in Agriculture",
    institution: "Agriculture Training Institute, Gaibandha",
    session: "2022 - Present",
    passingYear: "Ongoing",
    gpa: null,
    subjects: ["Agriculture"],
    description:
      "Pursuing a Diploma in Agriculture to enhance practical knowledge and skills in modern farming techniques, crop management, and sustainable agriculture practices. Actively engaged in hands-on training and research projects."
  }
];

export default function EducationCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0118] via-[#0D0220] to-[#0A0118] flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-3 text-white">My Education</h1>
      <p className="text-center text-pink-200 mb-10 max-w-2xl">
        Here is a summary of my academic journey so far, showcasing both my strong foundation
        in science and my practical experience in agriculture. Each step represents
        my dedication, curiosity, and continuous learning.
      </p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {educationData.map((edu) => (
          <div
            key={edu._id}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10"
          >
            {/* Degree */}
            <div className="flex items-center mb-2">
              <AcademicCapIcon className="w-5 h-5 text-pink-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">{edu.degree}</h2>
            </div>

            {/* Institution */}
            <div className="flex items-center mb-1">
              <BuildingLibraryIcon className="w-5 h-5 text-pink-300 mr-2" />
              <h3 className="text-md font-medium text-pink-200">{edu.institution}</h3>
            </div>

            {/* Session & Passing Year */}
            <div className="flex items-center text-sm text-pink-100 mb-2">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>Session: {edu.session} | Passing Year: {edu.passingYear}</span>
            </div>

            {/* GPA as button-pill (only if exists) */}
            {edu.gpa && (
              <div className="flex items-center mb-2">
                <StarIcon className="w-4 h-4 mr-1 text-yellow-300" />
                <span className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                  GPA: {edu.gpa}
                </span>
              </div>
            )}

            {/* Subjects as pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {edu.subjects.map((sub, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-pink-500/20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {sub}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="flex items-start text-pink-100 text-sm">
              <InformationCircleIcon className="w-4 h-4 mr-2 mt-1" />
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
