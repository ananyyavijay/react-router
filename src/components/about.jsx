import React from "react";

function About() {
  return (
    <div className="py-16 bg-white ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img
              className="w-150"
              src="https://images.pexels.com/photos/4737102/pexels-photo-4737102.jpeg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-5xl">
              <p>
                Berry<span className="text-red-800">Bloom</span>
              </p>
            </h2>
            <br />
            <p className="mt-7 text-gray-600 ">
              Welcome to BerryBloom, your trusted guide to the delicious world
              of strawberries and their amazing health benefits. We’re
              passionate about one thing: helping you discover the power packed
              in every luscious, red berry. At BerryBloom, we believe nature
              offers the best medicine—and strawberries are a perfect example.
              Whether you're looking to eat healthier, find natural beauty
              remedies, or simply learn more about your favorite fruit, we’ve
              got you covered. From science-backed articles and recipes to
              growing tips and wellness guides, everything we share is rooted in
              our love for this incredible superfruit.
            </p>
            <p className="mt-7 text-gray-600 ">
              These vibrant fruits aren’t just sweet and juicy—they’re loaded
              with vitamin C, antioxidants, fiber, and essential nutrients that
              support heart health, glowing skin, digestion, and overall
              immunity. Our mission is to educate, inspire, and delight
              strawberry lovers everywhere.
            </p>
            <p className="mt-7 text-gray-600 ">
              From science-backed articles and recipes to growing tips and
              wellness guides, everything we share is rooted in our love for
              this incredible superfruit.{" "}
            </p>
            <p className="mt-9 text-gray-600 text-2xl font-medium">
              Let’s grow strong, stay sweet, and live vibrant—one strawberry at
              a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
