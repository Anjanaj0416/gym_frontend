import { useRef } from "react";
import FifthPage from "./fifthPage";
import FooterPart from "./footerPart";
import FourthPart from "./fourthPart";
import FristPart from "./fristPart";
import SecondPart from "./secondPart";
import SixPart from "./sixPart";
import ThirdPart from "./thirdPart";




export default function Homepage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const classesRef = useRef(null);
  const instructorsRef = useRef(null);
  const membershipRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const refs = {
    homeRef,
    aboutRef,
    classesRef,
    instructorsRef,
    membershipRef,
    contactRef
  };
  return (
    <div className="w-full min-h-screen bg-black">
      <div>
        <FristPart scrollToSection={scrollToSection} refs={refs} />
      </div>
      <div ref={aboutRef}>
        <SecondPart />

      </div>
      <div ref={classesRef}>
        <ThirdPart />
      </div>
      <div ref={instructorsRef}>
        <FourthPart />
      </div>
      <div ref={membershipRef}>
        <FifthPage />
      </div>
      <div ref={contactRef}>
        <SixPart />
      </div>
      <FooterPart />
    </div>
  );
}