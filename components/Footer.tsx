import React from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className={montserrat.className}>&copy; MUNTHAJUL AFNAN STUDENTS' ASSOSCIATION 2024-25. <br/> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer
