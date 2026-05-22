import { r as jobs, t as db } from "./db-hY6gGfFo.js";
import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-BcnqoM-X.js";
import { notFound } from "@tanstack/react-router";
import { eq } from "drizzle-orm";
//#region src/routes/jobs/$jobid.tsx?tss-serverfn-split
var getJob_createServerFn_handler = createServerRpc({
	id: "2697b10b5a777787c8a4a3ceef523f791609d5e508825f0223e74959b502b541",
	name: "getJob",
	filename: "src/routes/jobs/$jobid.tsx"
}, (opts) => getJob.__executeServer(opts));
var getJob = createServerFn({ method: "GET" }).inputValidator((id) => id).handler(getJob_createServerFn_handler, async ({ data: id }) => {
	const result = await db.select().from(jobs).where(eq(jobs.id, id)).limit(1);
	if (!result[0]) throw notFound();
	return result[0];
});
//#endregion
export { getJob_createServerFn_handler };
