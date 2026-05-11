import { createFileRoute } from "@tanstack/react-router";

import { Page } from "#/components/page";

const Projects = () => <Page path="/projects" />;

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({ meta: [{ title: "Please don't judge" }] }),
});
