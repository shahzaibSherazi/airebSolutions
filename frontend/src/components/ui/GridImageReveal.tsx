import { motion } from "framer-motion";

const GridImageHover: React.FC<{ image: string }> = ({ image }) => {
  const nSliceX = 8;
  const nSliceY = 8;
  const nSlice = nSliceX * nSliceY;

  // Generate slices with random offsets
  const slices = Array.from({ length: nSlice }, (_, i) => {
    const row = Math.floor(i / nSliceX);
    const col = i % nSliceX;

    const bgPosX = (col / (nSliceX - 1)) * 100;
    const bgPosY = (row / (nSliceY - 1)) * 100;

    // Random offset for hover
    const hoverX = Math.random() * 80 - 20; // px
    const hoverY = Math.random() * 80 - 20; // px
    const hoverRot = Math.random() * 80 - 15; // deg

    return { bgPosX, bgPosY, hoverX, hoverY, hoverRot };
  });

  return (
    <motion.div
      className="relative w-full h-[240px] grid"
      style={{
        gridTemplateColumns: `repeat(${nSliceX}, 1fr)`,
        gridTemplateRows: `repeat(${nSliceY}, 1fr)`,
      }}>
      {slices.map((slice, idx) => (
        <motion.div
          key={idx}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: `${slice.bgPosX}% ${slice.bgPosY}%`,
            backgroundSize: `${nSliceX * 100}% ${nSliceY * 100}%`,
          }}
          initial={{ x: 0, y: 0, rotate: 0 }}
          variants={{
            hover: {
              x: [0, slice.hoverX, 0], // move out and back
              y: [0, slice.hoverY, 0],
              rotate: [0, slice.hoverRot, 0],
            },
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default GridImageHover;
