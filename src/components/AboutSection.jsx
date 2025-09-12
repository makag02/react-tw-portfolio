import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="container mx-auto max-w-5x">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              4th year Computer Science Student @ University of Washington
            </h3>

            <p className="text-muted-foreground">
              I spent 7 years in the United States Air Force as an aircraft mechanic.
              I've always been passionate for anything to do with tech and purused my studies in Computer Science in 2022.
              I transferred and got accepted into The Allen School of Computer Science & Engineering in 2024. I plan on graduating in Summer 2026 but am 100% willing to take an internship before hand.
            </p>

            <p className="text-muted-foreground">
              I am currently seeking internships and/or junior dev roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};