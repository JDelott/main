import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Jacob Delott Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="ProfilePic"
                className="h-auto w-full"
                sizes="100vw"
                priority
                style={{ border: '25px solid black' }}
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Jacob Delott"
                className="!text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="Full Stack Developer"
                className="!text-center text-base lg:text-xl"/>
              <p className="!text-center my-4 text-base font-medium md:text-sm sm:!text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my experience in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-center justify-center lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/JacobDelottResume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-base font-semibold
                  capitalize text-light hover:border-dark hover-bg-transparent hover-text-dark 
                  dark-bg-light dark-text-dark dark-hover-border-light dark-hover-bg-dark dark-hover-text-light
                  md:p-1 md-px-3 md-text-sm`}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:jldelott@gmail.com"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-base font-semibold
                  capitalize text-light hover:border-dark hover-bg-transparent hover-text-dark 
                  dark-bg-light dark-text-dark dark-hover-border-light dark-hover-bg-dark dark-hover-text-light
                  md:p-1 md-px-3 md-text-sm`}
                  download
                >
                  Contact
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jacobdelott/"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-base font-semibold
                  capitalize text-light hover:border-dark hover-bg-transparent hover-text-dark 
                  dark-bg-light dark-text-dark dark-hover-border-light dark-hover-bg-dark dark-hover-text-light
                  md:p-1 md-px-3 md-text-sm`}
                  download
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://gitlab.com/JacobDelott"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-base font-semibold
                  capitalize text-light hover:border-dark hover-bg-transparent hover-text-dark 
                  dark-bg-light dark-text-dark dark-hover-border-light dark-hover-bg-dark dark-hover-text-light
                  md:p-1 md-px-3 md-text-sm`}
                  download
                >
                  GitLab
                </Link>
                <Link
                  href="https://github.com/JDelott"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-base font-semibold
                  capitalize text-light hover:border-dark hover-bg-transparent hover-text-dark 
                  dark-bg-light dark-text-dark dark-hover-border-light dark-hover-bg-dark dark-hover-text-light
                  md:p-1 md-px-3 md-text-sm`}
                  download
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        
      </article>
    </>
  );
}
