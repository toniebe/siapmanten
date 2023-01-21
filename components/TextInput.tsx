import React, { HTMLAttributes, InputHTMLAttributes } from "react";

interface TextInputProps {
  title?: string;
  placeholder?: string;
  labelName?: string;
}

export default function TextInput({
  title,
  placeholder,
  labelName,
  ...nativeProps
}: TextInputProps & InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) {
  return (
      <div className="w-full">
        <label
          className="block text-primary-blue text-center text-sm font-bold mb-2"
          htmlFor={labelName}
        >
          {title}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          id={labelName}
          type="text"
          placeholder={placeholder}
          {...nativeProps}
        />
      </div>
    
  );
}
