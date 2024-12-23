import { IoIosPerson } from "react-icons/io";
import { MdOutlineWork, MdPhone } from "react-icons/md";

const TeamSection = () => {
  const teamMembers = [
    { name: "Zayd", role: "Fest Manager",contact:"+91-1234567890",img: "https://dummyimage.com/80x80" },
    { name: "Zayd", role: "Team Leader",contact:"+91-1234567890",img: "https://dummyimage.com/94x94" },
    { name: "Amr", role: "Convenor",contact:"+91-1234567890",img: "https://dummyimage.com/98x98" },
    { name: "Zayd", role: "Medical",contact:"+91-1234567890",img: "https://dummyimage.com/100x90" },
    { name: "Amr", role: "Controller",contact:"+91-1234567890",img: "https://dummyimage.com/104x94" },
    { name: "Zayd", role: "Sanitary Head",contact:"+91-1234567890",img: "https://dummyimage.com/108x98" },
  ];

  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] overflow-auto">
    <section>
      <div className="pt-5">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">Get in Touch</h1>
          <p className="lg:w-2/3 leading-relaxed text-base">
          We’re here to ensure your fest experience is seamless and enjoyable! Below, you’ll find the contact details of our dedicated team members. Feel free to reach out for assistance, information, or support at any time during the event.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.img}
                />
                <div className="flex-grow">
                  <h2 className="font-medium flex items-center gap-1"><IoIosPerson/>{member.name}</h2>
                  <p className="flex items-center gap-1"><MdOutlineWork/>{member.role}</p>
                  <p className="flex items-center gap-1"><MdPhone/>{member.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default TeamSection;
