import {  BulbsSet } from "@/components/bulbs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-auto flex flex-col justify-center items-center  pt-10">
      <div className="w-[70%]">
        <BulbsSet/>
        <div className="border-t border-pink-400 text-pink-400 text-md flex flex-col justify-center items-center py-4">
          <div className="w-fit h-fit flex flex-col gap-3">
            <div className="rule">Click and move mouse to light circles.</div>
            <div className="rule" >Double Click to remove colour from a circle.</div>
            <div className="rule">Click to change colour of a circle.</div>
            <div className="rule">Click "RESET COLOUR" button to remove a colour click.</div>
            <div className="rule">Click "RESET ALL" button to remove colours from all circles.</div>
            <div className="thank text-center text-2xl text-pink-50 font-bold" >Thank you for playing!</div>
          </div>
        </div>
      </div>
        
    </div>
  );
}
