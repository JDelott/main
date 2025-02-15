import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/plh.png";
import proj2 from "../../public/images/projects/CarCar.png";
import proj3 from "../../public/images/projects/ShadowWrestler.png";
import proj4 from "../../public/images/projects/ConferenceGo.png";
import proj5 from "../../public/images/projects/RateMovies123.png";
import proj6 from "../../public/images/projects/cryptotable.gif";
import proj7 from "../../public/images/projects/flashcardaiworkinggif.gif";
import proj8 from "../../public/images/projects/Pizza.png";
import proj9 from "../../public/images/projects/ovation.png";
import proj10 from "../../public/images/projects/Domino.png";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label=" Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="ST Pizza"
                summary={
                  <ul className="list-inside">
                    <li>
                      -MERN / MongoDB / Express / React/ Next.js/ AWS/ Google
                      Auth, Clerk, Stripe
                    </li>
                    <li>
                      -Created Pizza website for customers to order
                      pickup/delivery
                      <br />
                      -Business owner admin portal for menu, customer and
                      payment updates/revisions
                    </li>
                    <li>
                      -React Frontend with Next.js, Tailwind, AWS for image
                      storage,
                    </li>
                    <li>-Express backend and Mongo Database</li>
                    <li>-Stripe Integration for customer payment</li>
                  </ul>
                }
                img={proj8}
                link="https://food-ordering-app-five-omega.vercel.app/"
                github="https://github.com/JDelott/food-ordering-app"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Domino Web Services"
                summary={
                  <ul className="list-inside">
                    <li>-Next.js / React / Tailwind, Shadcn/ui</li>
                    <li>-Animations: Framer, Acernity,</li>
                    <li>-Deployed with Vercel</li>
                  </ul>
                }
                img={proj10}
                link="https://domino-prototype-main.vercel.app/"
                github="https://github.com/JDelott/domino-prototype-main"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Ovation Auto Detail"
                summary={
                  <ul className="list-inside">
                    <li>
                      -Created Auto Detail website for local business Ovation
                      Auto Detail
                    </li>
                    <li>
                      -React Frontend, Tailwind, Darkmode, AOS animations
                      library
                    </li>
                    <li>-Created with Vite, Deployed with Vercel</li>
                  </ul>
                }
                img={proj9}
                link="https://ovation-auto-detail.vercel.app/"
                github="https://github.com/JDelott/ovation-auto-detail"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Flashcard Ai"
                summary={
                  <ul className="list-inside">
                    <li>
                      -Python / FastAPI / PostgreSQL / Docker backend for data
                      storage and retrieval
                    </li>
                    <li>
                      -React Frontend with frontend JWT authentication, CSS,
                    </li>
                    <li>
                      -OpenAI API endpoint with FastAPI to create question and
                      answers for flashcards
                    </li>
                    <li>
                      -React frontend for user to input subject for flashcard
                      generation
                    </li>
                  </ul>
                }
                img={proj7}
                link="www.flashcardai.com"
                github="https://github.com/miguemigue25/flashcard"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Idaho Dog Sled Tour Website"
                summary={
                  <ul className="list-inside">
                    <li>
                      -Used a FastAPI / PostgreSQL backend for robust data
                      storage and retrieval.
                    </li>
                    <li>-React Frontend with frontend JWT authentication</li>
                    <li>
                      Enabled the business owner and users to manage and create
                      bookings and payment.
                    </li>
                    <li>
                      Ensured optimal performance and reliability for handling
                      API requests.
                    </li>
                    <li>Built a user-friendly UI using React and Bootstrap.</li>
                  </ul>
                }
                img={proj1}
                link="https://snow-dogs.gitlab.io/priest-lake-huskies/"
                github="https://gitlab.com/snow-dogs/priest-lake-huskies"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Crypto Currency UI "
                summary={
                  <ul className="list-inside">
                    <li>
                      React Front End application that uses Axios to get data
                      from a crypto api and routes to different pages.
                    </li>
                    <li>Skills: React, CSS, Axios</li>
                  </ul>
                }
                img={proj6}
                link="https://cryptoprojectjld.com/"
                github="https://github.com/JDelott/crypto-api-cg"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Movie & TV Show Rating Site "
                summary={
                  <ul className="list-inside">
                    <li>
                      React Typescript Front End application that fetches data
                      from a movie api
                    </li>
                    <li>
                      Skills: Vite, React, Typescript, Tailwind, Front End
                      Authorization
                    </li>
                  </ul>
                }
                img={proj5}
                link="https://ratemovies123.com/"
                github="https://github.com/JDelott/MovieRatingAppTest"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Car Dealership Admin Site"
                summary={
                  <ul className="list-inside">
                    <li>
                      Full Stack Application for managing a car dearership.
                    </li>
                    <li>Skills: React, Django, BootStrap, Docker, Rest API</li>
                  </ul>
                }
                img={proj2}
                link="https://help.dreamhost.com/hc/en-us/articles/215613517-Site-not-found"
                github="https://gitlab.com/JacobDelott/Car-Dealership"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Shadow Wrestler"
                summary={
                  <ul className="list-inside">
                    <li>
                      Built a user-friendly UI for wrestling athletes to
                      practice with.
                    </li>
                    <li>Skills: React, Tailwind, Figma</li>
                  </ul>
                }
                img={proj3}
                link="https://shadow-wrestler.com"
                github="https://github.com/JDelott/jdelott.github.io"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="ConferenceGo"
                summary={
                  <ul className="list-inside">
                    <li>
                      Full Stack Application for managing a conference business.
                    </li>
                    <li>Skills: Django, Html/CSS, Insomnia, Message Passing</li>
                  </ul>
                }
                img={proj4}
                link="https://help.dreamhost.com/hc/en-us/articles/215613517-Site-not-found"
                github="https://github.com/JDelott/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
