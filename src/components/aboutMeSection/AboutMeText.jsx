import { Link } from "react-scroll";
import YouTubeVideos from "./YoutubeVideos";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-black text-bold mb-10 font-special">About Me</h2>
      <p className="text-darkGrey font-body">
        I’m a Senior Machine Learning Engineer. I make videos about Machine Learning, NLP, LLMs, Langchain,
        HuggingFace Models, BERT, Semantic Search, Elastic Search and Deep Learning.I have strong analytical 
        ability to solve real world problems, a tech enthusiast and optimistic.
      </p>
      <YouTubeVideos/>
      <a href="https://www.youtube.com/@AbidSaudagar">
      <button className="px-4 py-2 mr-3 rounded-full text-xl font-body text-white  border flex items-center gap-1  bg-black transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
       View More
      </button>
      </a>
    </div>
  );
};

export default AboutMeText;