"use client";
import React from 'react';

const Cube = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center bg-black perspective-20em perspective-origin-77px-100px">
      <div className="cube relative transform-style-preserve-3d flex items-center justify-center animate-spin linear infinite">
        <div className="top h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
        <div className="bottom h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
        <div className="left h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
        <div className="right h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
        <div className="front h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
        <div className="back h-8 w-8 bg-aqua absolute top-0 bottom-0 inset-0 shadow-inset-aqua"></div>
      </div>
      <div className="shadow absolute bg-aqua w-8 h-8 transform translate-z-n130 rotate-x-90 rotate-z-3 bottom-0 left-8 shadow-2xl filter-blur-100"></div>
      <a
        href="https://youtu.be/v1o9rZ78Lz0"
        target="_blank"
        className="bg-black text-orange font-bold text-xs rounded-2xl px-3 py-1 fixed bottom-2 left-4"
      >
        tutorial
      </a>
    </div>
  );
};

export default Cube;
