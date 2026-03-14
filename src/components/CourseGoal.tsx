import type { ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function CourseGoal({ title, description, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Deletar</button>
      {children}
    </article>
  );
}
