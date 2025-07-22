import React from "react";

function HomeCard2() {
  return (
    <div className="bg-gradient-to-r from-[#9b1c31] to-[#e35d6a] text-white min-h-screen ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Discover Juicy Strawberry Recipes!
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
                <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 14h-2v2h2v-2zm0-10h-2v8h2V6z" />
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
                className="w-8 h-8"
              >
                <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 14h-2v2h2v-2zm0-10h-2v8h2V6z" />
              </svg>
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/30801254/pexels-photo-30801254.jpeg"
              alt="Bowl of Dish"
              className="rounded-full w-44 h-44 object-cover shadow-md"
            />
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/12775190/pexels-photo-12775190.jpeg"
              alt="Ingredients"
              className="rounded-full w-44 h-44 object-cover shadow-md"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/17612776/pexels-photo-17612776.jpeg"
              alt="Pasta"
              className="rounded-full w-28 h-28 object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="mb-12">Your recipe is just 3 simple steps away!</p>

          <div className="grid md:grid-cols-3 gap-10">
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
                className="p-6 rounded-xl shadow-xl border bg-white hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeCard2;
