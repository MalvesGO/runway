"use client";
import React from "react";

export default function RunWay() {
  function run(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const id = event.currentTarget;
    id.style.position = "absolute";
    const maxHeight = window.innerHeight - id.offsetHeight;
    const maxWidth = window.innerWidth - id.offsetWidth;
    id.style.top = Math.round(Math.random() * maxHeight) + "px";
    id.style.left = Math.round(Math.random() * maxWidth) + "px";
  }

  return (
    <div className="flex justify-center gap-8">
      <button className="bg-blue-700 text-white py-3 px-4 min-w-72 rounded">Yes</button>
      <button onMouseOver={run} className="bg-red-700 text-white py-3 px-4 min-w-72 rounded outline-none">
        No
      </button>
    </div>
  );
}
