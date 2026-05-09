import { createFileRoute } from "@tanstack/react-router";

import { Page } from "#/components/page";

const Contact = () => <Page path="/contact" />;

export const Route = createFileRoute("/contact")({
  component: Contact,
});
