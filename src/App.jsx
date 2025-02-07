
import './App.css'
import { Button } from "@/components/ui/button"
// import { ThreeDCardDemo } from './components/ThreeDCardDemo'
import { useEffect, useRef } from "react";
import gsap from "gsap";
function App() {

  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 5, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <Button ref={btnRef} variant="default">
      GSAP Animated Button
    </Button>
  );
  
}

export default App
