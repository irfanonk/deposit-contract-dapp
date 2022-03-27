import React from "react";

function TimerBox(props) {
  return (
    <div className="space-y-4">
      <div className="relative h-36 w-36 bg-darkest-blue rounded-lg">
        <div className="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
          <div className="h-full flex flex-col justify-between space-y-px">
            <div className="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
            <div className="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
          <span className="text-soft-yellow font-bold text-6xl">
            {props.value}
          </span>
        </div>
      </div>

      <div className="text-center">
        <span className="uppercase text-m  font-bold tracking-4xl">
          {props.label}
        </span>
      </div>
    </div>
  );
}

export default TimerBox;
