import React, { useState } from "react";

const contactData = {
  phone: ["+92 3075219319"],
  email: ["hmdesign789@.com"],
  location: "Khan Qah Rd Rokhri, District Mianwali, Punjab, Pakistan",
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("Your message has been sent!!!");
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      {/* Contact Info */}
      <div className="col-md-4 mb-4 mb-md-0">
        {Object.entries(contactData).map(([key, value], index) => (
          <div
            className="contact-info mb-5"
            key={index}
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <i
              className={`icon-${
                key === "phone" ? "phone" : key === "email" ? "envelope" : "location-pin"
              }`}
              style={{ color: "#FF5959", fontSize: "24px", marginTop: "4px" }}
            ></i>
            <div className="details">
              <h5 style={{ margin: 0, fontSize: "16px" }}>
                {key === "phone"
                  ? "Phone"
                  : key === "email"
                  ? "Email Address"
                  : "Location"}
              </h5>
              {Array.isArray(value)
                ? value.map((item, idx) => (
                    <span key={idx} style={{ display: "block" }}>
                      {item}
                    </span>
                  ))
                : <span>{value}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="col-md-8">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formdata.name}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formdata.email}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                value={formdata.subject}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                className="form-control"
                style={{ padding: "15px", height: "130px" }}
                placeholder="Message"
                onChange={handleChange}
                value={formdata.message}
              />
            </div>
            <div className="col-12 text-start">
              <button
                type="submit"
                name="submit"
                value="Submit"
                className="btn btn-default"
                
              >
                <i className="icon-paper-plane"></i> Send Message
              </button>
            </div>
          </div>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
