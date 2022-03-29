import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
export default function Social() {
  return (
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
  );
}
