import MoreInfo from "../components/MoreInfo";
import Template from "../components/Template";

export default function TrainingProgram({ user, setUser }) {
  return (
    <>
      <MoreInfo />
      <Template user={user} setUser={setUser} />
    </>
  );
}
