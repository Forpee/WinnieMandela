import Nav from "../components/plainNav";
import Footer from "../components/Footer";
import { getStrapiMedia } from "../utils/api";

import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image'

export default function Newsfeed({ data }) {
  return (
    <div>
      <Nav />
      <div className="bg-blue-250 flex h-96 mb-16 ">
        <h1 className="m-auto text-7xl text-white">NEWSFEED</h1>
      </div>

      <div className="container mx-auto px-16 grid grid-cols-2 gap-16">
        {data.map((articles) => {
          const source = articles.titleImage.formats.medium;
          const src = getStrapiMedia(source);
          const d = articles.published_at.split("T")[0];

          return (
            <div key={articles.id}>
              <Link href="/post/[slug]" as={`/post/${articles.id}`}>
                <a>
                  <div>
                    <Image src={src} 
                        width={700}
                        height={400}
                    />
                  </div>
                  <p className="mt-2">Published: {d}</p>
                  <h1 className="my-4 font-bold">
                    {articles.title || <Skeleton />}
                  </h1>
                  <p>{articles.description || <Skeleton count={3} />}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://strapi-943o.onrender.com/articles");
  const data = await res.json();

  return {
    
    props: { data }
  };
}
