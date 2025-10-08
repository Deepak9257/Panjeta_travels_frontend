import { useRef, useEffect, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GlobeScene() {

  const triggerRef = useRef(null);

  const mapRef = useRef();
  const mapRef2 = useRef();
  const addressRef = useRef();
  const meshRef = useRef();
  const bgRef = useRef();

  // globe model and it's animation logic

  function Globe() {
    const { camera } = useThree();

    useGSAP(() => {

      if (!meshRef.current) return;

      const globe = meshRef.current;

      const longitude = 140;
      const latitude = -20
      globe.rotation.y = -THREE.MathUtils.degToRad(longitude);
      globe.rotation.x = -THREE.MathUtils.degToRad(latitude);

      const globeAnimate = () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 0",
            end: "bottom -50%",
            markers: true,
            pin: true,
            scrub: 2,
          },
        });

        tl.to(meshRef.current.rotation, {
          y: -(THREE.MathUtils.degToRad(170)),
          duration: 2,
          ease: "none",
        }, "same");

        tl.to(camera.position, {
          z: 2.5,
          y: 0.3,
          duration: 2,
          ease: "none",
        }, "same");

        tl.to(bgRef.current, {
          scale: 1.2, // zoom in
          duration: 2,
          ease: 'power1.out'
        }, 'same');

        tl.to(mapRef.current, {
          opacity: 1,
          scale: 1.5,
          duration: 2,
          ease: "power1.out",
        });

        tl.to(mapRef2.current, {
          opacity: 1,
          scale: 1.5,
          duration: 2,
          ease: "power1.out",
        }, "two -=0.5");

        tl.to(addressRef.current, {
          opacity: 1,
          y: -100,
          duration: 1,
          ease: "power1.out",
        }, "two -=0.5" );
      }

      // ✅ wait until next frame to ensure trigger is in DOM
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        globeAnimate();

      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        ScrollTrigger.refresh();
      };

    }, [triggerRef.current]);

    return (
      <mesh ref={meshRef} >
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial

          map={new THREE.TextureLoader().load("/textures/earthMap.jpg")}
          transparent={true}
        />
      </mesh>
    );

  }


  return (<>
    {/* globe */}

    <Suspense fallback={<div className="w-screen h-screen bg-zinc-500 text-center text-8xl  relative z-10">Loading...</div>}>


      <div ref={triggerRef} className="w-screen h-screen overflow-hidden bg-black relative ">

        <div
          className="absolute inset-0 bg-[url('/images/stars.webp')] bg-cover bg-center"
          ref={bgRef}
        ></div>

        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>

          <ambientLight intensity={0.2} />

          <directionalLight position={[-10, 20, 5]} intensity={8} />

          <Globe />

        </Canvas>


        {/* location img 1 */}
        <div
          ref={mapRef}
          className="absolute top-0 w-screen h-screen opacity-0.5"
        >
          <img src="/images/location_img_1.png" alt="location_img" className="size-full -left-[5%]  object-cover" />

        </div>


        {/* location img 2 */}
        <div
          ref={mapRef2}
          className="absolute top-0 w-screen h-screen opacity-0.5 overflow-hidden"
        >
          <img src="/images/location_img_2.png" alt="location_img" className="size-full -left-[2.5%]" />


        </div>

        <div
          ref={addressRef}
          className="absolute top-[25vh] left-[5vw] opacity-0.5"
        >
          <img src="/images/address_img.png" alt="location_img" className="size-full" />

        </div>



      </div>



    </Suspense>





  </>



  );
}

