import FifthPage from "./fifthPage";
import FooterPart from "./footerPart";
import FourthPart from "./fourthPart";
import FristPart from "./fristPart";
import SecondPart from "./secondPart";
import ThirdPart from "./thirdPart";


export default function Homepage() {
  return (
    <div className="w-full min-h-screen bg-black">
        <FristPart/>
        <SecondPart/>
        <ThirdPart/>
        <FourthPart/>
        <FifthPage />
        <FooterPart />
    </div>
  );
}