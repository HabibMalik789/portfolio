import React, {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import ContactSection from "../components/Sections/Contact";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Get in touch" />
        <ContactSection />
      </section>
    </Layout>
  );
}

export default Contact;
