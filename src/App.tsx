import { CourseGoal } from "./components/CourseGoal";

export default function App() {
  return (
    <main>
      <CourseGoal
        title="Learn TypeScript"
        description="Master the basics of TypeScript in this hands-on course."
      >
        <p>
          TypeScript is a statically typed programming language that builds on
          JavaScript, giving you better tooling at any scale.
        </p>
      </CourseGoal>
    </main>
  );
}
