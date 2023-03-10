import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import { AiFillGithub, AiFillGitlab, AiOutlineTwitter } from "react-icons/ai";

const data = [
  {
    name: "Frythub",
    tech: ["NextJS", "TYPESCRIPT", "REACT-QUERY"],
    text: "Car procurement platform",
    url: "https://frythub-app.vercel.app/",
    id: 2157357,
  },
  {
    name: "Camlyst",
    tech: ["NextJS", "TYPESCRIPT", "REACT-QUERY"],
    text: "Leasing platform for canadian citizen ",
    url: "https://camlyst-web.vercel.app",
    id: 263657,
  },
  {
    name: "Donah",
    tech: ["NextJS", "TYPESCRIPT", "GSAP"],
    text: "Donah Agency landing page",
    url: "https://donahapp-mgtb.vercel.app/",
    id: 21333443636,
  },
  {
    name: "Reliance cart",
    tech: ["NextJS", "TYPESCRIPT", "GSAP"],
    text: "Landing page for health and grocery delivery service",
    url: "https://reliancecart.ca/",
    id: 21322636,
  },
  {
    name: "Reliance Cart",
    tech: ["NextJS", "TYPESCRIPT", "REACT-QUERY"],
    url: "https://reliancecart-admin-k1za.vercel.app",
    text: "Admin management for health and grocery delivery service",
    id: 5773357,
  },
];

export default function index() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          property="og:title"
          content="Little Journal about me"
          key="Portfolio"
        />
      </Head>
      <section className="grid max-w-6xl gap-10 px-6 mx-auto mt-20 lg:px-0 lg:grid-cols-2">
        <div className="lg:sticky z-10 flex flex-col lg:justify-between  lg:min-h-[80vh] top-20 self-start">
          <div className="">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl text-accent100 ">
                Adeyemi
              </h1>
              <h1 className="mt-4 text-xl font-bold lg:text-2xl text-accent100 ">
                Frontend Engineer at Donah.
              </h1>
            </div>
            <p className="max-w-md mt-12 leading-7 lg:text-sm text-accent200">
              I&apos;m a software engineer. I create interactive web experiences
              <br className="hidden lg:block" />
              {} using{" "}
              <span className="text-accent100"> frontend technology.</span> I am
              interested in user experience, accessibility,{" "}
              <span className="text-accent100">design systems</span>, and{" "}
              <span className="text-accent100">web animations.</span>
            </p>
          </div>
          <div className="hidden gap-4 text-xs font-light lg:grid">
            <div className="flex items-center text-accent200 ">
              <span className="text-xs m-1  h-2.5  bg-accent100 w-2.5 rounded-full"></span>
              <div className="w-[5rem]  bg-accent200 h-0.5"></div>
              <span className="ml-2 text-xs">WORK</span>
            </div>
            <Link href="https://adeyemi.hashnode.dev/" target="_blank">
              <div className="flex items-center text-sm text-accent200 ">
                <span className="text-xs m-1 h-2.5  bg-accent100 w-2.5 rounded-full"></span>
                <div className="w-[3rem]  bg-accent200  h-0.5"></div>
                <span className="ml-2 text-xs">ARTICLES</span>
              </div>{" "}
            </Link>
            <Link
              href="https://www.linkedin.com/in/addegbenga/ "
              target="_blank"
            >
              <div className="flex items-center text-sm text-accent200 ">
                <span className="text-xs m-1 h-2.5  bg-accent100 w-2.5 rounded-full"></span>
                <div className="w-[3rem]  bg-accent200 h-0.5"></div>
                <span className="ml-2 text-xs">LINKEDIN</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-3 mt-10 lg:text-sm text-accent200 lg:mt-0">
            <Link href="https://gitlab.com/addegbenga" target="_blank">
              <div className="flex items-center gap-1">
                <AiFillGithub className="text-xl text-accent200" />
                <span>Github</span>
              </div>
            </Link>
            <Link href="https://twitter.com/AddeGbenga" target="_blank">
              <div className="flex items-center gap-1">
                <AiOutlineTwitter className="text-xl text-accent200" />{" "}
                <span className="text-sm">Twitter</span>
              </div>
            </Link>
            <Link href="https://github.com/addegbenga" target="_blank">
              <div className="flex items-center gap-1">
                <AiFillGitlab className="text-xl text-accent200" />
                <span>Gitlab</span>
              </div>
            </Link>
          </div>
        </div>
        <aside className="relative bg-[#090f1e] z-40 flex flex-col min-h-screen mb-24  gap-3">
          <h1 className="font-semibold text-accent100 lg:hidden my-14 mb-7 ">
            My Projects
          </h1>
          {data.map((item: any, idx) => (
            <div
              key={item.id}
              className="flex lg:hover:scale-105 transition-transform cursor-pointer flex-col gap-3 p-10 lg:rounded-md  shadow-xl border-accent300 bg-primary  border border-[#2C384B]"
            >
              <Link passHref href={item.url} target="_blank">
                <div className="grid gap-1.5">
                  <h1 className="text-2xl text-accent100">{item.name}</h1>
                  <div className="flex items-center text-xs text-accent150 ">
                    {item.tech.map((prop: any, index: any) => (
                      <Fragment key={index + "yyyww"}>
                        <span>
                          {prop}
                          {index !== item.tech.length - 1 && (
                            <span className="mx-1">+</span>
                          )}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent200">
                    {item.text}
                  </p>

                  <div className="flex gap-1 mt-4 text-xs ">
                    ????
                    <span className="flex items-center gap-1 text-accent100">
                      LIVE
                    </span>
                    {/* <span>CODE</span> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
}
