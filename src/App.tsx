import { CourseGoal } from "./components/CourseGoal";
import { Header } from "./components/Header";

import HeroImg from "./assets/hero.png";

export default function App() {
  return (
    <main>
      <Header image={{ src: HeroImg, alt: "hero image" }}>
        <p>Learn TypeScript</p>
      </Header>

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
