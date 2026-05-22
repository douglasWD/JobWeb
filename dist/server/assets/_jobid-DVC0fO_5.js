import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-CsrAbYNF.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/jobs/$jobid.tsx
var $$splitNotFoundComponentImporter = () => import("./_jobid-BvJ5dRJX.js");
var $$splitComponentImporter = () => import("./_jobid-YtQ5Vg9I.js");
var getJob = createServerFn({ method: "GET" }).inputValidator((id) => id).handler(createSsrRpc("2697b10b5a777787c8a4a3ceef523f791609d5e508825f0223e74959b502b541"));
var Route = createFileRoute("/jobs/$jobid")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async ({ params: { jobid } }) => {
		return { job: await getJob({ data: jobid }) };
	},
	validateSearch: (search) => ({}),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
