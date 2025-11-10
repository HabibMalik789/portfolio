import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content: "It was great work which he had done, creative, fast, and quality — Thank you!.",
    authorImage: "images/customer-1.png",
    authorName: "Nasser",
    authorStatus: "UAE",
  },
  {
    id: 2,
    content:
      "Great Job by Habib Ullah all the times, I have placed many orders",
    authorImage: "images/customer-2.png",
    authorName: "lubaland",
    authorStatus: "Canada",
  },
  {
    id: 3,
    content:
      "Habib delivers ahead of time. This is another proof of his profissionalism.",
    authorImage: "images/customer-3.png",
    authorName: "Anas",
    authorStatus: "Saudi Arabia",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
