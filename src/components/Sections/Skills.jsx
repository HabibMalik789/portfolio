import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I build full-stack web solutions with clean architecture, combining responsive UI design, efficient backend logic, and robust databases for scalable performance.",
  endContent:
    "I build frontends with HTML, CSS, JavaScript, and React; develop backends with Node.js and Express; use MongoDB and PostgreSQL for databases, and manage projects with Git and GitHub.",
  progressData: [
    {
      id: 1,
      name: "UI/UX Design",
      percentage: 80,
    },
    {
      id: 2,
      name: "Frontend Development",
      percentage: 85,
    },
    {
      id: 3,
      name: "Backend Development",
      percentage: 75,
    },
    {
      id: 4,
      name: "Database Management",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5">{skillData.endContent}</p>
    </>
  );
}

export default Skills;
