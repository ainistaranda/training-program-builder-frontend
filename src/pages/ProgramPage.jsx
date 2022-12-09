import HowToUse from "../components/HowToUse";
import Template from "../components/Template";

export default function TrainingProgram({user}){
  console.log('Program Page', user)
  return (
    <>
    <HowToUse/>
    <Template user={user}/>
    </>
  )
}