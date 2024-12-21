import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FaLocationDot,
  FaLocationPin,
  FaLocationPinLock,
} from "react-icons/fa6";

const page = () => {
  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] flex flex-col justify-between overflow-hidden">
      <div className="border-b border-neutral-200 dark:border-neutral-700 p-2 md:p-5">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
      <div className="p-2 md:p-5 text-balance">
        Munthajul Afnan Students' Assosciation is where we believe in fostering
        holistic growth and nurturing individuals to become compassionate,
        knowledgeable, and impactful members of society. we blend the principles
        of faith, vision, and creativity to inspire our students to become
        agents of positive change.It's a journey of self-discovery, intellectual
        exploration, and service to humanity. Together, let us embark on a path
        towards enlightenment and empowerment.
      </div>
      <div className="p-2 md:p-5 text-balance">
        Munthajul Afnan Students' Assosciation
        <div className="flex columns-1">
          <FaLocationDot size={20} className="mr-2" />
          PMSA Wafy College Kattilangadi
        </div>
        <br />
        <div className="flex columns-1">
          <a
            href="https://www.instagram.com/wafypmsa_official/"
            target="_blank"
            className="text-white flex columns-1"
          >
            <FaInstagram size={20} className="mr-2" />
            wafypmsa_official
          </a>
        </div>
        <div className="flex columns-1">
          <a
            href="https://youtube.com/@munthajulafnanstudentsasso6980?si=x3m_nrILHgMRXz9s"
            target="_blank"
            className="text-white flex columns-1"
          >
            <FaYoutube size={20} className="mr-2" />
            Munthajul Afnan Students' Assosciation MASA
          </a>
        </div>
        <div className="flex columns-1">
          <a
            href="https://www.facebook.com/pmsawafy"
            target="_blank"
            className="text-white flex columns-1"
          >
            <FaFacebook size={20} className="mr-2" />
            Pmsa Wafy
          </a>
        </div>
      </div>
      <div className="p-2 md:p-5 text-balance w-full flex justify-center">
        Designed By{" "}
        <span className="ml-1 mr-1 font-bold">
          <a href="https://mohdshuhaib.github.io/shuhaibcv/" target="_blank">
            Shuhaib
          </a>{" "}
        </span>
        |{" "}
        <span className="ml-1 font-bold">
          <a href="https://m-salih3.github.io/mskcPortfolio/" target="_blank">
            m_Salih_Kc
          </a>
        </span>
      </div>
    </div>
  );
};

export default page;
