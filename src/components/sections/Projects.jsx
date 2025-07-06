import { useState } from "react";

const images = import.meta.glob('../../assets/ScoopAbility/*.png', { eager: true });
const imagePaths = Object.values(images).map((mod) => mod.default);

const projects = [
  { id: 1, 
    title: "Scoopability", 
    image: imagePaths[1],
    description: "Assistive wrist device to enhance physical activity for children with cerebral palsy", 
    skills: ["Engineering Design", "Collaboration", "Prototyping", "Technical Documentation"],
    details: (
      <div className="space-y-3 text-left">
        <p>
          Physical and recreational activities are essential for children’s physical, mental, and social development.
          However, children with disabilities often face significant barriers that limit their participation, impacting their overall growth.
        </p>
        
        <p>
          This project aims to design a product that enhances safety and supports inclusive engagement in physical activity for children living with disabilities.
        </p>
        <div className="flex gap-2 my-2 dislay-flex items-center">
          <img src={imagePaths[0]} className="w-1/3 h-auto" />
          <img src={imagePaths[1]} className="h-32 w-auto object-contain rounded" />
        </div>
        <h4 className="font-bold mt-2">Stages</h4>
        <ul className="list-disc ml-4">
          <li>
            <span className="font-semibold">Needs Assessment &amp; Defining Problem Space:</span>
            <ul className="list-disc ml-4">
              <li>Conducted research on types/levels of CP and developed user personas</li>
              <li>Interviewed stakeholders to better understand real life needs and obstacles</li>
              <li>Skills: human-centered design, user research, needs assessment</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Requirements and Constraints:</span>
            <ul className="list-disc ml-4">
              <li>Developed engineering and design requirements/constraints</li>
              <li>Applied ethical and regulatory considerations from ISPO and human-centered design frameworks</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Concept Generation:</span>
            <ul className="list-disc ml-4">
              <li>Ideated 3 initial design concepts varying in complexity (mechanical, electrical components)</li>
              <li>Evaluated requirement tradeoffs (e.g., durability vs cost, functionality vs complexity)</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Iteration Based on Feedback:</span>
            <ul className="list-disc ml-4">
              <li>Conducted gallery walk and mentorship sessions for feedback</li>
              <li>Integrated feedback and iterated design by simplifying the design and narrowing the problem space to ataxic CP</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Prototyping:</span>
            <ul className="list-disc ml-4">
              <li>Built low-fidelity prototypes</li>
              <li>Used ANSYS Granta to analyze material properties (e.g., Young’s modulus) to optimize comfort, weight, flexibility, and adaptability</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">User Testing and Engineering Analysis:</span>
            <ul className="list-disc ml-4">
              <li>Tested low-fidelity prototypes, measuring:</li>
              <ul className="list-disc ml-8">
                <li>Ease of use (time to wear) - buttons vs velcro</li>
                <li>Functionality (effectiveness of scooping mechanism) - ladle vs scoop-ball racket</li>
              </ul>
              <li>Chose components based on empirical data</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  { id: 2, title: "Project Two", 
    description: "Another awesome project description...", 
    skills: ["React", "UI/UX", "API Integration"] },
  { id: 3, 
    title: "Project Three", 
    description: "Yet another project description...", 
    skills: ["JavaScript", "Testing", "Deployment"] },
  { id: 4, 
    title: "Project Four", 
    description: "A fourth project description...", 
    skills: ["Design", "Docs", "Teamwork"] }
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (project) => setActiveProject(project);
  const closePopup = () => setActiveProject(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xs mb-1">projects</h3>
          <h2 className="koulen-font text-4xl">NO POTS OF GOLD HERE</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-[20px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-md border-[0.5px] border-yellow/10 hover:-translate-y-1 hover:border-[var(--light)]/75 hover:shadow-[0_2px_8px_rgba(246,199,59,0.2)] transition text-left bg-[var(--background)]">
              <div className="w-full h-40 flex items-center justify-center rounded-md mb-3 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full object-contain"
                  />
                )}
              </div>
              <h3 className="text-md font-bold mt-3">{project.title}</h3>
              <p className="text-[10px] font-light">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.skills.map((skill, key) => (
                  <span
                    key={key}
                    className="text-[8px] bg-[var(--light)] text-[var(--background)] py-1 px-1 rounded transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="text-sm text-[var(--light)] hover:text-[#E4C9FB] transition-colors my-3"
                  onClick={() => openPopup(project)}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Overlay */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[var(--background)] rounded-xl p-8 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh] hide-scrollbar">
              <button
                className="absolute top-2 right-4 text-[var(--light)] text-xl font-bold"
                onClick={closePopup}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-2">{activeProject.title}</h2>
              <p className="mb-4 text-xs font-normal">{activeProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold mb-2">Project Details</h3>
                <p className="text-[10px] font-normal">{activeProject.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};