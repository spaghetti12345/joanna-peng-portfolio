//import { RevealOnScroll } from "../RevealOnScroll";
import joannapeng from '../../assets/joannapeng.svg';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-10"
    >
      <div className="text-center z-20 px-4 w-screen h-screen">
        <img src={ joannapeng } alt="nameheader" className="max-h-[85%] max-w-[85%] mx-auto"/>
      </div>
    </section>
  );
};
