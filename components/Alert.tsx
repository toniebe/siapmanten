import React, { Fragment } from "react";

interface AlertProps {
  title: string;
  description?: string;
}

export default function Alert({ title, description }: AlertProps) {
  return (

      
      <div className="grid justify-item-center my-3 bg-indigo-900 text-center py-4 lg:px-4">
     
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            {title}
          </span>

          {description ? (
            <span className="font-semibold mr-2 text-left flex-auto">
              {description}
            </span>
          ) : null}
        </div>
      </div>

  );
}
