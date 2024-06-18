import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="md:flex justify-center items-center min-h-full  gap-10 bg-slate-50 py-4 flex-wrap">
        <div className="md:w-[44%] p-4 ">
          <div className="md:text-5xl text-4xl font-bold mb-3 tracking-wide">
            <h1 className="leading-tight">
              Host,Connect, Celebrate:Your 
              <br />
              Event Our Platform!
            </h1>
          </div>
          <div className="mb-3 md:w-[80%] opacity-50">
            Book and learn helpful tips from 3,268+ mentors in world-class
            companies our global community
          </div>
          <div className="mb-3 ">
            <Button className="bg-indigo-600">Explore Now</Button>
          </div>
        </div>

        <div className="p-4 ">
          <Image className="" alt="hero" src="/images/hero.png" width={400} height={400} />
        </div>
        
      </div>
      <div className="mb-3 p-4">
          <h1 className="text-2xl  text-center  font-semibold"> Trust by<br></br> Thousand of Events</h1>
          <p className="font-light text-sm opacity-70">Search Categoryfilter</p>
        </div>
    </section>
  );
}
