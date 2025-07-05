import React, { useEffect, useState } from "react";

function HomeCard1() {
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=YaYrKkK44cp9owfbaCr9YYdmvDLqexkUp79m841c&query=strawberries`
        );
        const data = await response.json();
        setFoodData(data.foods[0]);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchNutritionData();

  }, []);

  return (
    <div className="relative min-h-screen bg-white py-12 px-4 sm:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4443477/pexels-photo-4443477.jpeg"
          alt="Strawberries"
          className="w-full h-full object-cover"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-800 mt-6">
          Loading real nutrition info...
        </p>
      ) : (
        <div className="relative z-10 max-w-4xl mx-auto bg-white/90 p-8 rounded-lg shadow-lg mt-4 mb-10">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            📊 Real Nutrition Facts (from USDA)
          </h2>
          <p className="text-gray-800 mb-2">
            <strong>Description:</strong> {foodData?.description}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Category:</strong> {foodData?.foodCategory}
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Market-Country:</strong> {foodData?.marketCountry}
          </p>
          <ul className="list-disc list-inside text-gray-800">
            {foodData?.foodNutrients?.map((item, index) => (
              <li key={index}>
                <strong>{item.nutrientName}:</strong> {item.value}{" "}
                {item.unitName}
              </li>
            ))}
          </ul>
        </div>
      )}

      
    </div>
  );
}

export default HomeCard1;
