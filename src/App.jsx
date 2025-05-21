import React, { useState } from "react";
import { Moon, Sun, User, Users } from "lucide-react";

const friends = [
  { name: "You", status: "Admin", image: "https://cdn-front.freepik.com/home/anon-rvmp/features/images/onbrand-hover-2.webp" },
  { name: "Sachin K2 Nda Dia Tha", status: "Busy", image: "sachin.jpg" },
  {
    name: "Ajay Bagal Vala",
    status: "Believe in God's Plan..........😊",
    image: "ajay.jpg",
  },
  { name: "Bhupendra", status: "", image: "bhuppi1.jpg" },
  { name: "Priyanshu Karki", status: "At work", image: "karki1.jpg" },
];

const albums = [
  {
    title: "Sachin's Mix",
    artist: "Sachin K2 Nda Dia Tha",
    image: "sachin.jpg",
    tracks: 12,
  },
  {
    title: "Chill Vibes",
    artist: "Ajay Bagal Vala",
    image: "ajay.jpg",
    tracks: 8,
  },
  {
    title: "Workout Playlist",
    artist: "Bhupendra",
    image: "bhuppi1.jpg",
    tracks: 15,
  },
  {
    title: "Late Night Drive",
    artist: "Priyanshu Karki",
    image: "karki1.jpg",
    tracks: 10,
  },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredFriend, setHoveredFriend] = useState(null);
  const [hoveredAlbum, setHoveredAlbum] = useState(null);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } p-4 md:p-8`}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Users
            size={24}
            className={isDarkMode ? "text-blue-400" : "text-blue-600"}
          />
          <h1
            className={`text-2xl md:text-3xl font-bold ml-2 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Stickers
          </h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode
              ? "bg-gray-800 text-yellow-300"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Video Section */}
      <div className="mb-8 overflow-hidden rounded-xl shadow-lg max-h-[300px]">
        <video
          src="https://cdn-front.freepik.com/revamp/temp/hero/1905-AnonymousHome1920x1080.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover h-[300px]"
        />
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Friends List */}
        <div className="md:col-span-1">
  <h2
    className={`text-xl font-bold mb-4 ${
      isDarkMode ? "text-white" : "text-gray-800"
    }`}
  >
    Friends
  </h2>

  <button
    className={`w-full flex items-center p-3 rounded-lg mb-3 ${
      isDarkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-white hover:bg-gray-50"
    }`}
  >
    <User
      size={18}
      className={isDarkMode ? "text-blue-400" : "text-blue-600"}
    />
    <span
      className={`ml-3 ${isDarkMode ? "text-white" : "text-gray-800"}`}
    >
      Add members
    </span>
  </button>

  {friends.map((friend, index) => (
    <div
      key={index}
      onClick={() =>
        window.open("https://wa.me/", "_blank") // Replace with group link if needed
      }
      className={`cursor-pointer flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ${
        isDarkMode
          ? "bg-gray-800 hover:bg-gray-700"
          : "bg-white hover:bg-gray-50"
      } ${hoveredFriend === index ? "translate-x-1" : ""}`}
      onMouseEnter={() => setHoveredFriend(index)}
      onMouseLeave={() => setHoveredFriend(null)}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="w-14 h-14 rounded-full object-cover bg-gray-600"
      />
      <div className="ml-3">
        <h3
          className={`text-sm font-medium ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {friend.name}
        </h3>
        <p
          className={`text-xs ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {friend.status}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* Albums */}
        <div className="md:col-span-2 ">
          <h2
            className={`text-xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Funny Albums 📸
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {albums.map((album, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-xl transform transition duration-300 w-fit ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } ${hoveredAlbum === index ? "scale-105 -translate-y-1" : ""}`}
                onMouseEnter={() => setHoveredAlbum(index)}
                onMouseLeave={() => setHoveredAlbum(null)}
              >
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-70 h-80 object-cover m-4"
                />
                <div className="p-4">
                  <h3
                    className={`text-lg font-bold ${
                      isDarkMode ? "text-purple-300" : "text-purple-700"
                    }`}
                  >
                    {album.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    By {album.artist}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isDarkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {album.tracks} tracks
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-opacity-10 border-gray-600">
        <p
          className={`text-center text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          &copy; 2025 | All rights reserved. Arun.
        </p>
      </footer>
    </div>
  );
}
