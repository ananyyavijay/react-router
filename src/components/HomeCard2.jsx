import React from "react";

function HomeCard2() {
  return (
    <div className="bg-gradient-to-r from-[#9b1c31] to-[#e35d6a] text-white min-h-screen ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Find the best Strawberry Recipes!
          </h1>
          <p className="text-lg mb-8">
            Whether you're craving something sweet or savory, enter your
            ingredients and let BerryBloom generate the perfect recipe!
          </p>

          {/* Input box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="e.g. strawberries, oats, honey..."
              className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-400 border-2 border-white"
            />
            <button className="bg-white text-[#e35d6a] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
              Generate
            </button>
          </div>

          {/* Example Prompts */}
          <div className="mt-10 bg-white/10 rounded-xl p-4 text-sm backdrop-blur-md">
            <p className="mb-2 font-medium text-white">Example Prompts:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Strawberry banana smoothie",
                "Vegan berry salad",
                "Quick strawberry pancakes",
                "Gluten-free berry oatmeal",
              ].map((prompt, index) => (
                <span
                  key={index}
                  className="bg-white/20 px-3 py-1 rounded-full"
                >
                  {prompt}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-5 max-w-xl mx-auto p-4">
          {/* Top Row */}
          <div className="col-span-2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/30911253/pexels-photo-30911253.jpeg"
              alt="Chef Cooking"
              className="rounded-full w-48 h-48 object-cover shadow-md"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-full w-24 h-24 bg-[#b91c1c] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
              <path d="M4 10H20L19 13H5L4 10ZM6 14H18L17.5 20H6.5L6 14ZM12 2C13.1046 2 14 2.89543 14 4C14 4.51283 13.8049 4.99137 13.4645 5.35355L13 6H11L10.5355 5.35355C10.1951 4.99137 10 4.51283 10 4C10 2.89543 10.8954 2 12 2Z" />

              </svg>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex justify-center items-center">
            <div className="rounded-full w-24 h-24 bg-[#b91c1c] flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C11.4477 2 11 2.44772 11 3V4.05518C10.5285 4.01752 10.0458 4 9.55279 4C7.3594 4 5.50143 5.08751 4.59243 6.6706C3.63025 8.34219 3.71248 10.4306 4.80764 12.1042C5.25563 12.8054 5.86553 13.4075 6.62254 13.8819L12 17.3465L17.3775 13.8819C18.1345 13.4075 18.7444 12.8054 19.1924 12.1042C20.2875 10.4306 20.3698 8.34219 19.4076 6.6706C18.4986 5.08751 16.6406 4 14.4472 4C13.9542 4 13.4715 4.01752 13 4.05518V3C13 2.44772 12.5523 2 12 2ZM12 21C12.554 21 13 20.554 13 20H11C11 20.554 11.446 21 12 21Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/16976641/pexels-photo-16976641.jpeg"
              alt="Bowl of Dish"
              className="rounded-full w-44 h-44 object-cover shadow-md"
            />
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg"
              alt="Ingredients"
              className="rounded-full w-44 h-44 object-cover shadow-md"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg"
              alt="Pasta"
              className="rounded-full w-28 h-28 object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="mb-12">Your recipe is just 3 simple steps away!</p>

          <div className="grid md:grid-cols-3 gap-10 ">
            {[
              {
                title: "1. Enter Ingredients",
                desc: "Type in what you have in your kitchen and we’ll do the rest.",
              },
              {
                title: "2. Set Preferences",
                desc: "Choose dietary filters like vegan, sugar-free, or gluten-free.",
              },
              {
                title: "3. Get Your Recipe",
                desc: "Instantly receive strawberry-based recipes with clear instructions!",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-xl border bg-gradient-to-r from-[#9b1c31] to-[#e35d6a] text-white hover:scale-105 transition "
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCard2;
