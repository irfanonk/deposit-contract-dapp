import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
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
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              className=" hover:fill-current hover:text-soft-yellow"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaFacebookSquare size={25} />
            </a>
            <a
              href="https://www.facebook.com"
              className=" hover:fill-current hover:text-soft-yellow"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.facebook.com"
              className=" hover:fill-current hover:text-soft-yellow"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaTelegram size={25} />
            </a>
            <a
              href="https://www.facebook.com"
              className=" hover:fill-current hover:text-soft-yellow"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaDiscord size={25} />
            </a>
            <a
              href="https://www.facebook.com"
              className=" hover:fill-current hover:text-soft-yellow"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
