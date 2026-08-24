import StudentCard from "~/components/StudentCard"; //import from compnents
import Counter from "~/components/Counter";


export default function Home() {
  return(
    <main>
      <h1>Hello, React!</h1>
      {/* //import activation(render) */}
      <StudentCard name="John Doe" course="Computer Engineering" /> 
      <StudentCard name="Jane Smith" course="Software Engineering" />
      <StudentCard name="Maria" course="Computer Science" />
      <Counter/>
    </main>
  )
};