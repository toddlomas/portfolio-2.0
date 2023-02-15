import Header from "components/Header";
import Head from "next/head";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Hero from "components/Hero";
import About from "components/About";
import WorkExperience from "components/WorkExperience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import { motion } from "framer-motion";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "typings";
import { fetchPageInfo } from "utils/fetchPageInfo";
import { fetchProjects } from "utils/fetchProjects";
import { fetchSocials } from "utils/fetchSocials";
import { fetchSkills } from "utils/fetchSkills";
import { fetchExperiences } from "utils/fetchExperiences";
import social from "sanity/schemas/social";

type Props = {
  pageInfo: PageInfo;
  experieneces: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experieneces,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <motion.div
      className="bg-[#2d3142] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 overflow-y-scroll 
  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ea5c1f]/80"
    >
      <Head>
        <title>Todd&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experieneces} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <ArrowUpCircleIcon
            onClick={() => (window.location.href = "#hero")}
            className="w-10 h-10 text-[#ea5c1f] rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      </footer>
    </motion.div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experieneces: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experieneces,
      skills,
      projects,
      socials,
    },
    revalidate: 60,
  };
}
