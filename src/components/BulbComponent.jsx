// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const colors = [
  "black-#000000",
  "white-#EFEFEF",
  "green-#1FB141",
  "blue-#1D1F3D",
  "red-#FF8CE6",
  "yellow-#693A08",
];

export default function BulbComponent({ setAppBgColor }) {
  return (
    <div className="flex items-end gap-4 right-1 h-fit p-5 absolute z-100 border-1 border-gray-600 m-5 rounded-md">
      {colors.map((color) => {
        const [label, hex] = color.split("-");
        return (
          <motion.button
            key={label}
            onClick={() => setAppBgColor(hex)}
            className="w-8 h-8 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={`/${label}.png`}
              alt={`${label} button`}
              className="w-8 h-8 object-cover rounded-full cursor-pointer"
            />
          </motion.button>
        );
      })}
    </div>
  );
}


