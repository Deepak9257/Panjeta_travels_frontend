import { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobeScene() {

  const triggerRef = useRef(null);

  const mapRef = useRef();
  const mapRef2 = useRef();
  const addressRef = useRef();
  const meshRef = useRef();

  function Globe() {

    useEffect(() => {

      window.scrollTo(0, 0)

      if (!meshRef.current) return;

      const globe = meshRef.current;

      const longitude = 140;
      const latitude = -20
      globe.rotation.y = -THREE.MathUtils.degToRad(longitude);
      globe.rotation.x = -THREE.MathUtils.degToRad(latitude);

      // apply timeline and scrolltrigger

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 0",
          end: "bottom -60%",
          markers: true,
          pin:true,
          scrub: 3,
        },
      })

      // globe rotation animation

      tl.to(meshRef.current.rotation, {
        y: -(THREE.MathUtils.degToRad(170)),
        duration: 5,
        ease: "linear",
      })

      tl.to(meshRef.current.material, {
        opacity: 0.9,
        ease: 'linear'

      });

      // location img animation 1
      tl.to(mapRef.current, {
        opacity: 1,
        scale: 2,
        duration: 2.3,
        ease: 'linear'
      });

      // location img animation 2

      tl.to(mapRef2.current, {
        opacity: 1,
        scale: 2.2,
        duration: 3,
        ease: 'linear'

      }, 'map');

      tl.from(addressRef.current, {
        opacity: 0,
        y: -10,
        duration:1,
        ease: 'back.in'
      }, 'map+=1.5')

      return () => {
        window.scrollTo(0, 0);
        tl.kill();
      }

    }, []);

    return (
      <mesh ref={meshRef} >
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial

          map={new THREE.TextureLoader().load("/textures/earthMap.jpg")}
          transparent={true}
        />
      </mesh>
    );
  }
  // zoom in effect animation logic
  const CameraAnimation = () => {
    const { camera } = useThree();

    gsap.to(camera.position, {
      z: 2.5,
      y: 0.3,
      duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1,
        // markers: true,
        start: 'top 0',
        end: 'bottom 0',

      }

    })

    return null;
  }


  return (<>
    {/* globe */}
    <div ref={triggerRef} className="w-screen bg-[url('/images/stars.webp')] bg-scroll bg-cover bg-center h-screen sticky top-0 bg-black ">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>

        <ambientLight intensity={0.2} />

        <directionalLight position={[-10, 20, 5]} intensity={8} />

        <CameraAnimation />

        <Globe />

      </Canvas>
    </div>

    {/* location img 1 */}
    <div
      ref={mapRef}
      className="fixed top-0 left-0 w-screen h-screen opacity-0.5"
    >
      <img src="/images/location_img_1.png" alt="location_img" className="size-full fixed -left-[5%]  object-cover" />

    </div>

    {/* location img 2 */}
    <div
      ref={mapRef2}
      className="fixed top-0 left-0 w-screen h-screen opacity-0.5"
    >
      <img src="/images/location_img_2.png" alt="location_img" className="size-full fixed -left-[2.5%]" />

    </div>

    {/* address img div  */}

    <div ref={addressRef} className="fixed top-15 left-5 ">
      <img src="/images/address_img.png" alt="company_address" className="size-full rounded" />
    </div>
  </>



  );
}

