import { CourseGoal } from "./components/CourseGoal";
import { Header } from "./components/Header";

import HeroImg from "./assets/hero.png";
import { useState } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  id: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalProps = {
        title: "Learn TypeScript",
        description: "Master the basics of TypeScript in this hands-on course.",
        id: Math.random().toString(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoals(id: string) {
    setGoals((goals) => {
      const newGoals = goals.filter((goal) => goal.id !== id);
      return newGoals;
    });
  }

  return (
    <main>
      <Header image={{ src: HeroImg, alt: "hero image" }}>
        <p>Learn TypeScript</p>
      </Header>
      {goals.map((goal) => (
        <CourseGoal
          key={goal.id}
          title={goal.title}
          description={goal.description}
        >
          <button onClick={() => deleteGoals(goal.id)}>Delete</button>
        </CourseGoal>
      ))}
      <button onClick={handleAddGoal}>Acidionar meta</button>
    </main>
  );
}
