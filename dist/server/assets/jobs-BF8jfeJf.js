import { r as jobs, t as db } from "./db-hY6gGfFo.js";
import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-BcnqoM-X.js";
import { t as getCurrentSession } from "./get-session-01AyKg3L.js";
import { z } from "zod";
import { and, desc, eq } from "drizzle-orm";
//#region src/server/jobs.tsx?tss-serverfn-split
var jobSchema = z.object({
	title: z.string().min(3, "Title must be at least 3 characters"),
	company: z.string().min(2, "Company name is required"),
	location: z.string().min(2, "Location is required"),
	type: z.enum([
		"full-time",
		"part-time",
		"remote",
		"contract"
	]),
	salary: z.string().optional(),
	description: z.string().min(20, "Description must be at least 20 characters"),
	contactEmail: z.string().email("Must be a valid email address")
});
var getUserJobs_createServerFn_handler = createServerRpc({
	id: "5ccc29f89b4f2fe7dea8fb1f522e7b1e61f866a76bb2e8be9d5e47d1cbfd1643",
	name: "getUserJobs",
	filename: "src/server/jobs.tsx"
}, (opts) => getUserJobs.__executeServer(opts));
var getUserJobs = createServerFn({ method: "GET" }).inputValidator((userId) => userId).handler(getUserJobs_createServerFn_handler, async ({ data: userId }) => {
	return db.select().from(jobs).where(eq(jobs.userId, userId)).orderBy(desc(jobs.createdAt));
});
var deleteJob_createServerFn_handler = createServerRpc({
	id: "5b6085defbd13ac6a3f95449aa42cb191b1a0f0d77bcfc0688934aa277300c63",
	name: "deleteJob",
	filename: "src/server/jobs.tsx"
}, (opts) => deleteJob.__executeServer(opts));
var deleteJob = createServerFn({ method: "POST" }).inputValidator((jobId) => jobId).handler(deleteJob_createServerFn_handler, async ({ data: jobId }) => {
	const session = await getCurrentSession();
	if (!session?.user?.id) throw new Error("Unauthorized");
	await db.delete(jobs).where(and(eq(jobs.id, jobId), eq(jobs.userId, session.user.id)));
});
var createJob_createServerFn_handler = createServerRpc({
	id: "2cb17e5dce6925f792ca067d74e02b0629000e1d091ac1ca17c8d6538253a27d",
	name: "createJob",
	filename: "src/server/jobs.tsx"
}, (opts) => createJob.__executeServer(opts));
var createJob = createServerFn({ method: "POST" }).inputValidator(jobSchema).handler(createJob_createServerFn_handler, async ({ data }) => {
	const session = await getCurrentSession();
	if (!session?.user?.id) throw new Error("You must be sign in to post a job");
	const [job] = await db.insert(jobs).values({
		...data,
		userId: session.user.id
	}).returning();
	return job;
});
//#endregion
export { createJob_createServerFn_handler, deleteJob_createServerFn_handler, getUserJobs_createServerFn_handler };
