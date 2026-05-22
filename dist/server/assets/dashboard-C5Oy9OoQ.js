import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-CsrAbYNF.js";
import { r as getUserJobs } from "./jobs-UqFRVd0F.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
//#region src/routes/dashboard.tsx
var $$splitComponentImporter = () => import("./dashboard-hls02VbV.js");
var fetchSession = createServerFn({ method: "GET" }).handler(createSsrRpc("f80512be64264cf2bc0cc25dbd665361ed6ca9b1261a67ec1f6e926f47c65831"));
var Route = createFileRoute("/dashboard")({
	beforeLoad: async () => {
		const session = await fetchSession();
		if (!session?.user) throw redirect({ to: "/" });
		return { session };
	},
	loader: async ({ context }) => {
		return { jobs: await getUserJobs({ data: context.session.user?.id }) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
