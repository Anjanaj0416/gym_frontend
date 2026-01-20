import FristPart from "./fristPart";
import SecondPart from "./secondPart";
import ThirdPart from "./thirdPart";


export default function Homepage() {
  return (
    <div className="w-full min-h-screen bg-black">
        <FristPart/>
        <SecondPart/>
        <ThirdPart/>
    </div>
  );
}