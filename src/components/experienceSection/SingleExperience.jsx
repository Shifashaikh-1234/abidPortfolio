import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[380px] md:w-[240px] sm:h-auto sm:w-full border-2 border-lightGrey border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-darkGrey">{experience.job}</p>
      <p className="text-black">{experience.company}</p>
      <p className="text-dustyGray">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-black">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;