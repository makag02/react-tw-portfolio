// import { useState } from "react";
// import { cn } from "@/lib/utils";

const skills = [
  {name: "Java", courses: "asf", category: "frontend"},
  {name: "C/C++", courses: 95, category: "frontend"},
  {name: "Git", courses: 95, category: "frontend"},
  {name: "Unix", courses: 95, category: "frontend"}
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