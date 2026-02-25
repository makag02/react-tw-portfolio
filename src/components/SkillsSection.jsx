// import { useState } from "react";
// import { cn } from "@/lib/utils";

const skills = [
  {name: "Java", courses: "Relevant Courses: Data Structures and Parallelism"},
  {name: "C/C++", courses: "Relevant Courses: Systems Programming, Hardware/Software interface"},
  {name: "Python", courses: "Relevant Courses: Computer Vision, Artificial Intelligence"},
  {name: "Unix", courses: "Relevant Courses: Systems programming, System and Software tools"},
  {name: "Database Design", courses: "Relevant Courses: Intro to Databases"}
];

export const SkillsSection = () => {
  return (
  <section id="skills" className="py-24 px-4 relative bg-secondary/30"
  >
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              
              </div>
              <div className="text-left mt-1">
                <span className="text-sm text-muted-foreground">{skill.courses}</span>
              </div>
             </div>
          ))}
      </div>
    </div>
  </section>)
}