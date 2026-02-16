// // AnimationComponent.jsx
// import React, { useRef, useEffect } from "react";
// import Lottie from "lottie-react";
// import animationData from "./animation_json/animation.json"; // Save your JSON file here

// const Animation = ({ maxWidth = "100%", height = "100%" }) => {
//   const lottieRef = useRef();

//   useEffect(() => {
//     // Optional: Control animation programmatically
//     if (lottieRef.current) {
//       // You can add custom controls here
//     }
//   }, []);

//   return (
//     <Lottie
//       lottieRef={lottieRef}
//       animationData={animationData}
//       loop={true}
//       autoplay={true}
//       style={{ maxWidth, height }}
//       rendererSettings={{
//         preserveAspectRatio: "xMidYMid slice",
//       }}
//     />
//   );
// };

// export default Animation;

// AnimationComponent.jsx
import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "./animation_json/animation.json";

const Animation = ({ maxWidth = "100%" }) => {
  const lottieRef = useRef();

  return (
    <div style={{ width: maxWidth, margin: "0 auto" }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "auto", // keeps aspect ratio
          display: "block",
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet", // better for responsive scaling
        }}
      />
    </div>
  );
};

export default Animation;
