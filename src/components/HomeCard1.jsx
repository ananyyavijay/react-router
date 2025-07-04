// import React from "react";

// function HomeCard1() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold">🔬 Health & Nutrition</h1>
//       <p>
//         Strawberries are more than just sweet treats — they’re nutrition-packed
//         superfruits. These vibrant berries are rich in vitamin C, antioxidants,
//         and fiber, supporting immunity, glowing skin, and healthy digestion.
//       </p>
//       <p>
//         Low in calories but high in nutrients, strawberries help:
//         <ul>
//           <li>💓 Boost heart health</li>
//           <li>🧠 Protect brain function</li>
//           <li>🔥 Fight inflammation</li>
//           <li>⚖️ Support weight management</li>
//         </ul>
//       </p>
//       <br />
//       <p>
//         Whether fresh, frozen, or blended into smoothies, strawberries are a
//         simple and delicious way to fuel your body naturally.
//       </p>
//       <p>🍓 Eat smart, stay vibrant — with the power of strawberries!</p>
//     </div>
//   );
// }

import React from "react";

function HomeCard1() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white/90 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-red-800 mb-4">
          🔬 Health & Nutrition
        </h2>
        <hr className="w-20 border-t-4 border-green-700 mb-6" />

        <p className="text-gray-800 text-lg leading-relaxed mb-6 text-justify">
          Strawberries are more than just sweet treats — they’re nutrition-packed superfruits.
          These vibrant berries are rich in <strong>vitamin C</strong>, <strong>antioxidants</strong>, and <strong>fiber</strong>,
          supporting immunity, glowing skin, and healthy digestion.
        </p>

        <ul className="list-disc list-inside text-gray-800 mb-6">
          <li>💓 <strong>Boost heart health</strong></li>
          <li>🧠 <strong>Protect brain function</strong></li>
          <li>🔥 <strong>Fight inflammation</strong></li>
          <li>⚖️ <strong>Support weight management</strong></li>
        </ul>

        <p className="text-gray-800 text-lg text-justify">
          Whether fresh, frozen, or blended into smoothies, strawberries are a simple and delicious way to fuel your body naturally.
        </p>

        <blockquote className="mt-6 text-red-700 font-semibold text-xl italic text-center">
          “🍓 Eat smart, stay vibrant — with the power of strawberries!”
        </blockquote>
      </div>
    </div>
  );
}


export default HomeCard1;

