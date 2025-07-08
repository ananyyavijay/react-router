import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-white h-110">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Welcome to BerryBloom!
              <span className="sm:block text-sm m-4">
                — your sweet escape into the world of strawberries! Discover
                their delicious benefits, explore juicy facts, and fall in love
                with nature’s red gem.
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-transparent border-2 rounded-lg hover:opacity-75 mt-6"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Learn More
            </Link>
          </div>
        </div>

        <div className="absolute w-full inset-0 z-0">
          <img
            className=" object-cover blur-xs opacity-90"
            src="https://images.pexels.com/photos/32793122/pexels-photo-32793122.jpeg"
            alt="image1"
          />
        </div>
      </aside>

      <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-12 relative">
        {/* Left Image */}
        <div className="w-120 mb-8 relative z-0 ">
          <img
            src="https://images.pexels.com/photos/32795474/pexels-photo-32795474.jpeg"
            alt="Strawberry healthly"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content Overlapping Slightly on Image */}
        <div className="md:w-1/2 w-full md:pl-12 relative z-10 -mt-10 md:-ml-20 bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-red-800 mb-4">
            🔬 Health & Nutrition
          </h2>

          <hr className="w-16 border-t-4 border-green-700 mb-4" />

          <p className="text-gray-800 text-justify leading-relaxed mb-6">
            Strawberries aren’t just a tasty treat—they're a natural health
            booster. Rich in antioxidants, vitamin C, and fiber, these vibrant
            berries help strengthen your immune system, fight inflammation, and
            promote glowing skin. Low in calories and high in nutrients,
            strawberries support heart health, improve digestion, and are
            perfect for weight management. Whether blended in a smoothie, added
            to a salad, or enjoyed fresh, strawberries make healthy eating
            deliciously easy.
          </p>
          
          <div className=" mt-4">
            <p className=" mb-4">Want to know more?</p>
            <Link
              to="/healthy"
              className="bg-orange-700 text-white px-5 py-3 rounded-md shadow-md hover:bg-red-800 transition "
            >
              Explore Health Benefits
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-12 relative">
        {/* Left Content (now first) */}
        <div className="md:w-1/2 w-full md:pr-12 relative z-10 -mt-10 md:-mr-20 bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-red-800 mb-4">
            🍽️ Recipes & Cooking
          </h2>

          <hr className="w-16 border-t-4 border-green-700 mb-4" />

          <p className="text-gray-800 text-justify leading-relaxed mb-10">
            Discover the sweetest ways to enjoy strawberries! From classic
            strawberry shortcakes to refreshing smoothies and zesty salads, our
            recipes bring out the berry best in every bite. Whether you're a
            seasoned chef or a kitchen newbie, these simple, wholesome dishes
            let you turn nature’s candy into everyday delights. Explore quick
            snacks, festive desserts, and even savory strawberry surprises — all
            bursting with flavor, nutrition, and creativity!
          </p>

          {/* <button className="bg-orange-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-800 transition">
            Get Recipies
          </button> */}
          <Link to="/recipes"
          className="bg-orange-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-800 transition">
            Get Recipes
          </Link>
        </div>

        {/* Right Image (now second) */}
        <div className="w-120 mb-8 relative z-0">
          <img
            src="https://images.pexels.com/photos/30911253/pexels-photo-30911253.jpeg"
            alt="Strawberry Recipies"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-12 relative">
        {/* Left Image */}
        <div className="w-120 mb-8 relative z-0 ">
          <img
            src="https://images.pexels.com/photos/12775190/pexels-photo-12775190.jpeg"
            alt="Strawberry healthly"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content Overlapping Slightly on Image */}
        <div className="md:w-1/2 w-full md:pl-12 relative z-10 -mt-10 md:-ml-20 bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-red-800 mb-4">
            👩‍🌾 Gardening & Lifestyle
          </h2>

          <hr className="w-16 border-t-4 border-green-700 mb-4" />

          <p className="text-gray-800 text-justify leading-relaxed mb-6">
            Bring the joy of strawberries into your daily life — right from your
            garden to your table! Whether you have a cozy balcony or a spacious
            backyard, growing strawberries is simple, rewarding, and
            therapeutic. Discover tips for planting, caring, and harvesting your
            own berries at home. Beyond gardening, explore how strawberries
            inspire natural skincare, DIY décor, and wholesome living. Let
            BerryBloom be your guide to a sweeter, greener lifestyle.
          </p>

          <button className="bg-orange-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-800 transition">
            Read More
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
