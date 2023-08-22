import React from "react";

const Bio = () => {
  return (
    <section className="h-full flex flex-col justify-evenly">
      <h1 className="text-3xl font-bold text-black">Syed Ismailuddin</h1>

      <h2 className="text-xl font-semibold text-accent">MERN | React Native</h2>

      <div className="text-sm text-justify flex flex-col justify-evenly text-neutral-900">
        <p className="indent-10">
          I'm a Full-Stack Developer with expertise in the MERN (MongoDB,
          Express.js, React, Node.js) stack. I'm also proficient in Next.js
          Development.
        </p>
        <p className="indent-10">
          Additionally, I specialize in Mobile App Development using React
          Native, creating native apps for both Android and IOS.
        </p>
        <p className="indent-10">
          Collaboration is key to my approach, and I believe effective
          communication and teamwork lead to successful projects.
        </p>
      </div>
    </section>
  );
};

export default Bio;
