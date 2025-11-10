import React from "react";
import Service from "../Items/Service";

const servicesData = [
  
  {
    id: 1,
    name: "UI/UX Design",
    content: "Designing modern and user-friendly interfaces with Figma and design tools.",
    icon: "icon-chemistry",
  },
  {
    id: 2,
    name: "Development",
    content: "Building clean and responsive websites using HTML, CSS, JavaScript, and React.",
    icon: "icon-globe",
  },
  {
    id: 3,
    name: "Responsive",
    content: "Creating layouts that adapt perfectly across desktops, tablets, and mobile devices.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "Deployment",
    content: "Deploying secure, scalable web applications with CI/CD for reliable performance.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Optimization",
    content: "Enhancing website speed, performance, and accessibility for better engagement.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Support",
    content: "Providing regular updates and ongoing support to keep your site secure.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
