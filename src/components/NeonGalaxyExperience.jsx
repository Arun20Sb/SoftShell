import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const NeonGalaxyExperience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // eslint-disable-next-line no-unused-vars
  const [isExploding, setIsExploding] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mode, setMode] = useState("galaxy"); // galaxy or neon
  const [stars, setStars] = useState([]);

  // Generate random stars on mount
  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      blinkSpeed: Math.random() * 2 + 0.5,
    }));
    setStars(newStars);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create explosion particles
  const createExplosion = () => {
    setIsExploding(true);

    const newParticles = Array.from({ length: 30 }).map(() => ({
      id: Math.random().toString(36),
      x: mousePosition.x,
      y: mousePosition.y,
      velocity: {
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 15,
      },
      size: Math.random() * 10 + 5,
      color:
        mode === "galaxy"
          ? `hsl(${Math.random() * 60 + 220}, 100%, 70%)`
          : `hsl(${Math.random() * 60 + 300}, 100%, 65%)`,
      lifetime: Math.random() * 1000 + 500,
    }));

    setParticles([...particles, ...newParticles]);

    setTimeout(() => {
      setIsExploding(false);
    }, 200);
  };

  // Remove expired particles
  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setTimeout(() => {
      setParticles(particles.filter((p) => p.lifetime > 0));
    }, 100);

    return () => clearTimeout(timer);
  }, [particles]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => ({
          ...p,
          x: p.x + p.velocity.x,
          y: p.y + p.velocity.y,
          velocity: {
            x: p.velocity.x * 0.98,
            y: p.velocity.y * 0.98,
          },
          size: p.size * 0.97,
          lifetime: p.lifetime - 30,
        }))
      );
    }, 30);

    return () => clearInterval(interval);
  }, [particles]);

  // Toggle between galaxy and neon mode
  const toggleMode = () => {
    setMode(mode === "galaxy" ? "neon" : "galaxy");
  };

  return (
    <div
      className={`relative w-[70vw] h-[90vh] rounded-3xl overflow-hidden ${
        mode === "galaxy" ? "bg-gray-900" : "bg-black"
      }`}
    >
      {/* Stars background */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
          }}
          transition={{
            duration: star.blinkSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 flex items-center justify-center"
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <div
          className={`relative w-64 h-64 rounded-full flex items-center justify-center
          ${
            mode === "galaxy"
              ? "bg-blue-900 shadow-lg shadow-blue-500"
              : "bg-purple-900 shadow-lg shadow-pink-500"
          }`}
        >
          {/* Inner glow rings */}
          <motion.div
            className={`absolute w-48 h-48 rounded-full opacity-30
              ${mode === "galaxy" ? "bg-blue-400" : "bg-fuchsia-400"}`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className={`absolute w-32 h-32 rounded-full opacity-40
              ${mode === "galaxy" ? "bg-blue-300" : "bg-pink-300"}`}
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Central core */}
          <motion.div
            className={`w-20 h-20 rounded-full ${
              mode === "galaxy" ? "bg-blue-200" : "bg-pink-200"
            } flex items-center justify-center`}
            animate={{
              boxShadow: [
                mode === "galaxy"
                  ? "0 0 20px 10px rgba(59, 130, 246, 0.7)"
                  : "0 0 20px 10px rgba(236, 72, 153, 0.7)",
                mode === "galaxy"
                  ? "0 0 40px 20px rgba(59, 130, 246, 0.9)"
                  : "0 0 40px 20px rgba(236, 72, 153, 0.9)",
                mode === "galaxy"
                  ? "0 0 20px 10px rgba(59, 130, 246, 0.7)"
                  : "0 0 20px 10px rgba(236, 72, 153, 0.7)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={toggleMode}
          >
            <span className="text-xs font-bold text-gray-800">TAP ME</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating text */}
      <motion.div
        className="absolute top-1/2 w-full text-center"
        style={{ y: "-50%", x: "0%" }}
        animate={{
          y: ["-50%", "-52%", "-50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.h1
          className={`text-6xl font-bold tracking-widest ${
            mode === "galaxy" ? "text-blue-300" : "text-pink-300"
          }`}
          animate={{
            textShadow: [
              mode === "galaxy"
                ? "0 0 10px rgba(59, 130, 246, 0.9)"
                : "0 0 10px rgba(236, 72, 153, 0.9)",
              mode === "galaxy"
                ? "0 0 20px rgba(59, 130, 246, 1)"
                : "0 0 20px rgba(236, 72, 153, 1)",
              mode === "galaxy"
                ? "0 0 10px rgba(59, 130, 246, 0.9)"
                : "0 0 10px rgba(236, 72, 153, 0.9)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {mode === "galaxy" ? "COSMIC" : "NEON"}
        </motion.h1>
        <motion.p
          className={`mt-4 text-xl ${
            mode === "galaxy" ? "text-blue-100" : "text-pink-100"
          }`}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Click anywhere to interact
        </motion.p>
      </motion.div>

      {/* Explosion particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size / 2}px ${particle.color}`,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: particle.lifetime / 1000 }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Interactive explosion area */}
      <div
        className="absolute inset-0 cursor-pointer z-10"
        onClick={createExplosion}
      />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            mode === "galaxy" ? "bg-blue-400" : "bg-pink-400"
          } opacity-80`}
          style={{
            width: 10 + i * 6,
            height: 10 + i * 6,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            boxShadow: [
              mode === "galaxy"
                ? "0 0 5px 2px rgba(59, 130, 246, 0.7)"
                : "0 0 5px 2px rgba(236, 72, 153, 0.7)",
              mode === "galaxy"
                ? "0 0 10px 4px rgba(59, 130, 246, 0.9)"
                : "0 0 10px 4px rgba(236, 72, 153, 0.9)",
              mode === "galaxy"
                ? "0 0 5px 2px rgba(59, 130, 246, 0.7)"
                : "0 0 5px 2px rgba(236, 72, 153, 0.7)",
            ],
          }}
          transition={{
            x: { duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
};

export default NeonGalaxyExperience;
