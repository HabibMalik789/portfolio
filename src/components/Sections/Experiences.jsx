import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2022 - 2026",
    degree: "Bachelor Degree",
    content:
      "Bachelor of Science in Computer Science (BSCS) — University of Mianwali, Graduated with a strong foundation in software development and web technologies.",
  },
  {
    id: 2,
    year: "March 30, 2023",
    degree: "Course Certificate",
    content: (
    <span>
      I completed the online course Website Frontend Development (Intermediate Level) {" "}
      <a
        href="https://www.coursera.org/account/accomplishments/verify/WXLGXXPMF4RR"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        View Certificate
      </a>
    </span>
  ),
  },
  {
  id: 3,
  year: "2023 – Present",
  degree: "Freelance Designer",
  content: (
    <span>
      Working on Fiverr as a Frontend & Graphic Designer, delivering high-quality designs to international clients.{" "}
      <a
        href="https://www.fiverr.com/hm4design?source=gig_page"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        View Profile
      </a>
    </span>
  ),
}
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
