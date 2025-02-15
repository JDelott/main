import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Domino Web Services"
            // companyLink="https://google.com"
            time="2023-Present"
            address="Los Angeles, CA"
            work={
              <>
                Programming Languages | Python, JavaScript, TypeScript, SQL,
                HTML5, CSS
                <br />
                Front-End | MERN, React, Next.js, Tailwind, Bootstrap, Wordpress
                <br />
                Back-End | Django 4, PostgreSQL, MongoDB, Express, FastAPI,
                RabbitMQ, Docker
                <br />
                System Design | Microservices, Domain-driven design, Git
              </>
            }
          />

          <Details
            position="Owner"
            company="Ovation Auto Detail"
            companyLink="https://ovationautodetail.com"
            time="2020-2023"
            address="Los Angeles, CA"
            work="Started and operated an auto detail company, catering to high end vehicles, and establishing accounts with luxury apartments in Los Angeles, CA. The business evolved through referrals and online marketing. After 2 years a customer database of over 250 clients was created and managed."
          />

          <Details
            position="Assistant Facilities Manager"
            company="Digiland"
            companyLink="https://digiland.com"
            time="2014-2020"
            address="Los Angeles, CA"
            work="Worked on a team responsible for coordinating productions, assisting executives, and managing vendors in the entertainment industry. Supported daily operations of the facility and tenant communications"
          />

          <Details
            position="Professional Bass Player"
            company="Freelance"
            // companyLink="https://microsoft.com"
            time="2011-Present"
            address="Los Angeles, CA"
            work="Toured around the country playing bass in multiple musical ensembles, bands and cover gigs. Started dozens of  musical projects that have yielded revenue from multiple streaming platforms. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
