type CourseGoalProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

export function CourseGoal({ title, description, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </article>
  );
}
