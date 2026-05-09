import { createFileRoute } from "@tanstack/react-router";

import { Page } from "#/components/page";

const Home = () => <Page path="/" />;

export const Route = createFileRoute("/")({ component: Home });
