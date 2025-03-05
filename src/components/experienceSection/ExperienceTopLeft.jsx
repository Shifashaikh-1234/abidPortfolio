import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-darkGrey font-bold uppercase text-3xl font-special text-center">
        Since 2020
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="5" text="Years" />
        <p className="font-bold text-5xl text-darkGrey">-</p>
        <ExperienceInfo number="20+" text="Projects" />
      </div>
      <p className="text-center text-lightGrey">
        With 5 years of experience In Data Science and Developing semantic search and LLM based solutons!
      </p>
    </div>
  );
};

export default ExperienceTopLeft;