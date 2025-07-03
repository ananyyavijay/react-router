import React, { useEffect, useRef, useState } from "react";

function Facts() {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } //appers when the element is 20% visibile
    );

    // '.current' is a built-in property of a React ref object.
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div>
      {/* Header image */}
      <div className="relative text-black">
        <img
          className="w-full max-h-[400px] object-cover opacity-60"
          src="https://images.pexels.com/photos/12940828/pexels-photo-12940828.jpeg"
          alt="Strawberry"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-3xl text-black font-bold px-6 py-3 rounded-2xl text-center shadow-lg bg-white/40 backdrop-blur-md border border-black/20">
            Know some amazing facts about STRAWBERRYS
          </p>
        </div>
      </div>

      {/* Card container */}
      <div className="bg-[#f1eae3] min-h-screen py-12 px-4 sm:px-8">
        <div
          ref={cardsRef}
          className={`max-w-7xl mx-auto flex flex-wrap justify-center gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Card 1 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/7937383/pexels-photo-7937383.jpeg"
              alt="Seeds on the Outside"
              className="w-full h-97 mx-auto mb-6 object-cover"
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u>Seeds on the Outside </u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              Unlike most fruits, strawberries wear their seeds on the
              outside—about 200 of them! This makes them the only fruit with
              external seeds, a botanical rarity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/30801254/pexels-photo-30801254.jpeg"
              alt="Vitamin C Powerhouse"
              className="w-full h-auto mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u>Vitamin C Powerhouse</u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              Strawberries are rich in vitamin C—just 8 berries provide more
              than an orange. This boosts your immune system, improves skin
              health, and helps fight oxidative stress naturally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/17612776/pexels-photo-17612776.jpeg"
              alt="Heart-Friendly Antioxidants"
              className="w-full h-97 mx-auto mb-6 "
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u>Heart-Friendly Antioxidants</u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              Loaded with anthocyanins and flavonoids, strawberries help lower
              blood pressure and reduce heart disease risk. These antioxidants
              also fight inflammation and support brain health over time.
            </p>
          </div>
          {/* Card 4 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/15014909/pexels-photo-15014909.jpeg"
              alt="Vitamin C Powerhouse"
              className="w-full h-120 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u>Strawberries Are Members of the Rose Family</u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              Strawberries belong to the Rosaceae family, which also includes
              roses, apples, and cherries. That’s why their fragrance is so
              sweet and floral—almost like nature’s little perfume!
            </p>
          </div>
          {/* Card 5 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/4935599/pexels-photo-4935599.jpeg"
              alt="Vitamin C Powerhouse"
              className="w-full h-auto mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u>Not Technically a Berry</u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              Despite their name, strawberries aren’t true berries.
              Scientifically, a berry develops from a single ovary and contains
              seeds inside. Strawberries form from a flower with multiple
              ovaries and have seeds on the outside, making them an “aggregate
              fruit.”
            </p>
          </div>
          {/* Card 6 */}
          <div className="w-full sm:w-[45%] lg:w-[30%] text-center rounded-2xl shadow-xl bg-white/10 border border-white/50 mt-10">
            <img
              src="https://images.pexels.com/photos/13183151/pexels-photo-13183151.jpeg"
              alt="Vitamin C Powerhouse"
              className="w-full h-auto mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              <u> Hundreds of Berries</u>
            </h2>
            <p className="text-gray-800 text-justify px-4">
              A healthy strawberry plant can produce over 50–100 berries per
              season. Some high-yielding varieties even give fruit multiple
              times a year!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
