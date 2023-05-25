"use client";

import React from "react";
import { Form } from "./components/form";

export default function Home() {
  const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [inputValue, setInputValue] = React.useState("");

  const handleClick = (num: Number) => {
    setInputValue((prev) => prev + num);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-around p-24 bg-gray-750">
      <Form inputValue={inputValue} setInputValue={setInputValue} />
      <section className=" w-96 grid grid-cols-3  h-96 place-items-center">
        {Numbers.map((num: number, index: number) => {
          return (
            <div
              onClick={() => handleClick(num)}
              key={index}
              className="h-24 w-24 flex items-center justify-center rounded-full border-4 font-bold cursor-pointer active:bg-gray-400"
            >
              {num}
            </div>
          );
        })}
      </section>
    </main>
  );
}
