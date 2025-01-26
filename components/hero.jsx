"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div>
        <h1>
          Manage your finances <br /> like a boss
        </h1>
        <p>
          An AI powered financial platform that helps you track, analyze, and
          optimize your finances with real-time insights
        </p>
        <div>
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href={"https://www.youtube.com/watch?v=egS6fnZAdzk&t=28s"}>
            <Button size={"lg"} className="px-8" variant={"outline"}>
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src="/banner.jpeg"
              alt="banner"
              width={1280}
              height={720}
              priority
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
