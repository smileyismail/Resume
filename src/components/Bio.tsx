import { developerBio } from "../data/bio";

const Bio = () => {
  return (
    <section className="h-full flex flex-col justify-evenly">
      <h1 className="text-4xl font-black text-black">Syed Ismailuddin</h1>

      <h2 className="text-2xl font-semibold text-accent">
        {developerBio.title}
      </h2>

      <div className="text-[15px] text-justify flex flex-col justify-evenly text-neutral-900">
        {developerBio.bio.map((point, index) => (
          <p key={index} className="indent-10">
            {point}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
