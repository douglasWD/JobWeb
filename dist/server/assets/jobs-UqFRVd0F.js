import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-CsrAbYNF.js";
import { z } from "zod";
//#region src/server/jobs.tsx
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
var getUserJobs = createServerFn({ method: "GET" }).inputValidator((userId) => userId).handler(createSsrRpc("5ccc29f89b4f2fe7dea8fb1f522e7b1e61f866a76bb2e8be9d5e47d1cbfd1643"));
var deleteJob = createServerFn({ method: "POST" }).inputValidator((jobId) => jobId).handler(createSsrRpc("5b6085defbd13ac6a3f95449aa42cb191b1a0f0d77bcfc0688934aa277300c63"));
var createJob = createServerFn({ method: "POST" }).inputValidator(jobSchema).handler(createSsrRpc("2cb17e5dce6925f792ca067d74e02b0629000e1d091ac1ca17c8d6538253a27d"));
//#endregion
export { deleteJob as n, getUserJobs as r, createJob as t };
