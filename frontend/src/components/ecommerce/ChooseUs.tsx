import React from "react";
import globalImg from "@/assets/Ecommerce_assets/glob_img.png";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Animation from "./animation";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const ChooseUs = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const atmosphereRef = useRef<THREE.Mesh | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    const section = sectionRef.current;
    if (!container) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    // Responsive camera position based on screen size
    const updateCameraPosition = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        camera.position.z = 2.5;
      } else if (width < 1024) {
        // Tablet
        camera.position.z = 2.2;
      } else {
        // Desktop
        camera.position.z = 2;
      }
    };

    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth-map.jpg");

    // Responsive globe size
    const getGlobeSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        return 0.8; // Smaller on mobile
      } else if (width < 1024) {
        return 0.9; // Medium on tablet
      } else {
        return 1; // Full size on desktop
      }
    };

    const globeSize = getGlobeSize();
    const geometry = new THREE.SphereGeometry(globeSize, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 1,
      metalness: 0,
    });

    const globe = new THREE.Mesh(geometry, material);

    // Responsive globe position
    const getGlobeYPosition = () => {
      const width = window.innerWidth;
      if (width < 640) {
        return -0.3; // Higher on mobile
      } else if (width < 1024) {
        return -0.45; // Medium on tablet
      } else {
        return -0.6; // Original on desktop
      }
    };

    globe.position.y = getGlobeYPosition();
    globeRef.current = globe;

    scene.add(globe);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(
      globeSize * 1.05,
      64,
      64,
    );
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3fa9f5,
      transparent: true,
      opacity: 0,
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.position.y = getGlobeYPosition();
    atmosphereRef.current = atmosphere;

    scene.add(atmosphere);

    // GSAP ScrollTrigger Animation
    const rotationData = { value: 0 };

    gsap.to(rotationData, {
      value: Math.PI * 2, // Full rotation (360 degrees)
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          if (globeRef.current && atmosphereRef.current) {
            const rotation = rotationData.value * self.progress;
            globeRef.current.rotation.y = rotation;
            atmosphereRef.current.rotation.y = rotation;
          }
        },
      },
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Update camera position on resize
      updateCameraPosition();

      // Update globe size and position on resize
      const newGlobeSize = getGlobeSize();
      const newYPosition = getGlobeYPosition();

      if (globeRef.current && atmosphereRef.current) {
        globeRef.current.scale.set(newGlobeSize, newGlobeSize, newGlobeSize);
        globeRef.current.position.y = newYPosition;
        atmosphereRef.current.scale.set(
          newGlobeSize,
          newGlobeSize,
          newGlobeSize,
        );
        atmosphereRef.current.position.y = newYPosition;
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      // Kill ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Remove GSAP ticker
      gsap.ticker.remove(() => {});

      // Dispose Three.js
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0E1828 100%)",
      }}
      className=" w-full py-16  lg:py-24 ">
      {/* Container */}
      <div className="flex flex-col justify-center items-center px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12 ">
          <span className="inline-block bg-white text-black text-xs sm:text-base font-outfit font-medium px-4 sm:px-7 py-1.5 sm:py-2 ">
            Why Airebsolutions
          </span>
        </div>
        <div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="font-outfit font-extralight text-[clamp(36px,5vw,52px)] text-center">
              AirebSolutions Takes Your Scattered
              <br className="hidden lg:block" /> Marketing Systems and Connects
              Them <br className="hidden lg:block" /> Globally
            </h1>
          </motion.div>
        </div>
        {/* map glob - Responsive container */}
        <div className="w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div
            ref={mountRef}
            className="w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
          />
        </div>
        <div className="mt-24 mb-16">
          <h1 className="font-outfit font-extralight text-[clamp(36px,4vw,48px)] text-center">
            Effortlessly connect with your entire
            <br className="hidden lg:block" /> marketing stack to build
            powerful, fluid <br className="hidden lg:block" /> workflows
          </h1>
        </div>

        <div className="relative w-full max-w-[800px] mx-auto bg-white">
          <Animation />

          {/* Absolute div inside container */}
          <div className="absolute right-[1%] bottom-[1%] w-[26%] h-[11%] bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
