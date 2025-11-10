import React, {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import Experiences from "../components/Sections/Experiences";

function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Experience" />
        <Experiences />
      </section>
    </Layout>
  );
}

export default Resume;
