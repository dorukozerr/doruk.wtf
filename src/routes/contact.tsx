import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => (
  <main>
    <h1>CONTACT</h1>
  </main>
);

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});
