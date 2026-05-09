import { createFileRoute } from "@tanstack/react-router";

const Projects = () => (
  <main>
    <h2>PROJECTS</h2>
  </main>
);

export const Route = createFileRoute("/projects")({
  component: Projects,
});
