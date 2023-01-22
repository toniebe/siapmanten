import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  hoverColor?: string ;
  isRound: boolean;
  backgroundColor: string;
  title?: string;
  titleColor?: string;
  icon?: any;
  loading?: boolean;
  disable?: boolean;
  size?:string;
}

export default function Button({
  hoverColor ="bg-blue-300",
  isRound,
  backgroundColor = "bg-mantenp-primary",
  title,
  titleColor,
  icon,
  loading,
  disable,
  size="large",
  ...nativeProps
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  console.log(backgroundColor);
  
  return (
    <button
      className={`${backgroundColor} my-3  hover:${hoverColor} text-gray-800 font-bold py-2 px-7 ${isRound ? `rounded-full` : `rounded`} ${size === 'large' ? 'w-full' : size === 'medium' ? 'w-1/2' : 'w-fit'} h-fit  ${icon ? 'inline-flex justify-center' : 'grid'}`}
      disabled={disable}
      {...nativeProps}
    >
      {icon ? (
       icon
      
      ) : null}
      <p  className={`text-center text-white `}>{title} </p>
    </button>
  );
}
