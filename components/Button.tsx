import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  typeButton: string | "Primary" | "Secondary";
  isRound: boolean;
  backgroundColor: string | "blue" | "orange";
  title?: string;
  titleColor?: string;
  icon?: string;
  loading?: boolean;
  disable?: boolean;
}

export default function Button({
  typeButton,
  isRound,
  backgroundColor,
  title,
  titleColor,
  icon,
  loading,
  disable,
  ...nativeProps
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-app${typeButton}-${backgroundColor} my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-7 ${isRound ? `rounded-full` : `rounded`} w-full  h-fit  ${icon ? 'inline-flex' : 'grid'}`}
      disabled={disable}
      {...nativeProps}
    >
      {icon ? (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      ) : null}
      <p  className={`text-center text-white `}>{title} </p>
    </button>
  );
}
