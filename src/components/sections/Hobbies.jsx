import { useRef } from "react";

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

export const Hobbies = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="hobbies" className="max-h-screen items-center justify-center relative">
      <div className="text-center">
          <h3 className="text-xs mb-1">hobbies</h3>
          <h2 className="koulen-font text-4xl">WHAT DO I DO IN MY FREE TIME?</h2>
      </div>
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/100 bg-white text-black rounded-full p-2 shadow-md z-10 hover:bg-blue-500 hover:text-white transition"
      >
        &lt;
      </button>

      {/* Scrollable images */}
      <div
        className="overflow-x-auto hide-scrollbar"
        ref={scrollRef}
      >
        <div className="flex gap-2 px-4 py-6 w-max">
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[200px] rounded overflow-hidden shadow-md bg-gray-200 shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/100 bg-white text-black rounded-full p-2 shadow-md z-10 hover:bg-blue-500 hover:text-white transition"
      >
        &gt;
      </button>
    </section>
  );
};