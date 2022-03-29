import React from "react";
import Social from "./socialmedia/Social";

import Timer from "./timer/Timer";

export default function ComingSoon() {
  return (
    <div className="py-8 h-full flex flex-col justify-between">
      <div className="mt-8 flex flex-col items-center space-y-12 md:mt-28 md:space-y-24">
        <span className="text-bold subpixel-antialiased font-sans text-9xl tracking-3xl text-center">
          Coming Soon
        </span>

        <div>
          <Timer />
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}
