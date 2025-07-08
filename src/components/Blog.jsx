import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Strawberry Facts You Didn’t Know!",
      author: "Ananya Vijay",
      time: "2 min read",
      img: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg",
      description:
        "Explore surprising and sweet facts about strawberries that will blow your mind!",
    },
    {
      title: "The Journey of a Berry: From Farm to Fork",
      author: "Abhay Prasad",
      time: "4 min read",
      img: "https://images.pexels.com/photos/4736360/pexels-photo-4736360.jpeg",
      description:
        "Take a behind-the-scenes look at how strawberries are grown, harvested, and delivered fresh to you.",
    },
    {
      title: "Strawberry & Health: Why a Berry a Day Keeps the Doctor Away",
      author: "Jaya Singh",
      time: "3 min read",
      img: "https://images.pexels.com/photos/566564/pexels-photo-566564.jpeg",
      description:
        "Discover the health benefits of including strawberries in your daily diet.",
    },
  ];

  const sidebarPosts = [
    {
      title: "10 Delicious Strawberry Recipes for Summer",
      img: "https://images.pexels.com/photos/31785375/pexels-photo-31785375.jpeg",
    },
    {
      title: "How to Grow Strawberries at Home",
      img: "https://images.pexels.com/photos/6726232/pexels-photo-6726232.jpeg",
    },
    {
      title: "Why Strawberries Are the Queen of Antioxidants",
      img: "https://images.pexels.com/photos/407040/strawberry-water-splashes-splash-drop-of-water-407040.jpeg",
    },
    {
      title: "Strawberry Varieties You Should Know About",
      img: "https://images.pexels.com/photos/4162851/pexels-photo-4162851.jpeg",
    },
    {
      title: "Explore best strawberry shake and ice-cream",
      img: "https://images.pexels.com/photos/8743871/pexels-photo-8743871.jpeg",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        {/* Left - Featured */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg"
              alt="featured"
              className="w-full h-60 object-cover "
            />
            <div className="p-4 bg-white">
              <span className="inline-block px-3 py-1 text-xs bg-rose-100 text-rose-700 rounded-full mb-2">
                Featured
              </span>
              <h2 className="text-2xl font-bold mb-2">
                Unlocking the Sweet Secrets of Strawberries
              </h2>
            </div>
          </div>

          <h3 className="text-xl font-bold text-rose-600">Recent Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.img}
                  alt="post"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-1 text-rose-700">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600">{post.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {post.author} • {post.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-rose-600">Other Berry Picks</h3>
          <ul className="space-y-4">
            {sidebarPosts.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-center hover:underline cursor-pointer"
              >
                <img
                  src={item.img}
                  className="w-14 h-14 rounded object-cover bg-white"
                  alt="thumb"
                />
                <p className="text-sm text-gray-700">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
