import HowToUse from "../components/HowToUse";
import Template from "../components/Template";

export default function TrainingProgram({ user, setUser }) {
  return (
    <>
      <HowToUse />
      <Template user={user} setUser={setUser} />
    </>
  );
}
