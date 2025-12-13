import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content: "Working with Habib has been great. I will be using him again in the future. He is very professional, has great attention to detail, and delivers projects on time.",
    authorImage: "images/tanya.png",
    authorName: "Tanya Buckley",
    authorStatus: "United States",
  },

  {
    id: 2,
    content: "Great work! The results were creative, fast, and of excellent quality. I’m really happy with how everything turned out and would highly recommend!",
    authorImage: "images/customer-1.png",
    authorName: "Nasser Al-Dhaheri",
    authorStatus: "United Arab Emirates",
  },

  {
    id: 3,
    content:
      "Good job by Habib Ullah every time! I’ve placed many orders and he always delivers quality work on time. Very satisfied and will work again with him!",
    authorImage: "images/customer-2.png",
    authorName: "Nana lubaland",
    authorStatus: "Canada",
  },
  {
    id: 4,
    content:
      "Habib delivers ahead of time. This is another proof of his profissionalism.",
    authorImage: "images/customer-3.png",
    authorName: "Anas Bin Salman",
    authorStatus: "Saudi Arabia",
  },
  {
    id: 5,
    content:
      "The final delivery was awesome, too much satisfied. Thank you!",
    authorImage: "images/customer-5.png",
    authorName: "James_Cook",
    authorStatus: "United States",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
