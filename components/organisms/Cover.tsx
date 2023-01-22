import React from "react";
import Button from "../Button";

export default function Cover() {
  return (
    <div className="flex flex-1 max-w-sm min-h-screen  bg-[url('/img/cover-bg.jpg')] ">
      <div className="flex flex-1 flex-col justify-center text-center  p-4 opacity-80 bg-slate-900">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white uppercase">
          The Wedding Ceremony of
        </h2>
        <p className="mb-5 text-base text-white font-['playfair'] font-bold uppercase text-6xl ">
          Shabran{" "}
          <span className="mb-5 text-base text-white font-['playfair'] font-bold uppercase text-6xl">
            &
          </span>{" "}
          Niswa
        </p>
        <div className="flex flex-col h-1/2 items-center justify-center space-y-5 ">
          <p className="font-medium font-['montserrat'] text-lg text-white">
            Kepada Bapak/Ibu/Saudara/i
          </p>
          <p className="font-extrabold font-['montserrat'] text-2xl text-white">
            Ebe
          </p>
          <p className="font-['montserrat'] mb-10 text-md text-white">
            Kami Mengundang Bapak/Ibu Untuk Hadir di Acara Pernikahan Kami.
          </p>
          <Button
            isRound={false}
            size="small"
            hoverColor="bg-orange-300"
            backgroundColor="bg-mantenp-orange"
            title="Buka Undangan"
            titleColor="text-white font-['montserrat'] font-semibold text-xl"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-7 h-7 mx-3"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
