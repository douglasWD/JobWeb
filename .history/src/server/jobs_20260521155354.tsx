import { createServerFn } from "@tanstack/react-start";
import { db } from "../db";
import { jobs } from "../db/schema";
import { getCurrentSession } from "../lib/get-session";
import { z } from "zod"
import { and, desc, eq } from "drizzle-orm";

export const jobSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    company: z.string().min(2, 'Company name is required'),
    location: z.string().min(2, 'Location is required'),
    type: z.enum(['full-time', 'part-time', 'remote', 'contract']),
    salary: z.string().optional(),
    description: z.string().min(20, 'Description must be at least 20 characters'),
    contactEmail: z.string().email('Must be a valid email address'),
})

export const getUserJobs = createServerFn({ method: 'GET' })
    .inputValidator((userId: string) => userId)
    .handler(async ({ data: userId }) => {
        return db
            .select()
            .from(jobs)
            .where(eq(jobs.userId, userId))
            .orderBy(desc(jobs.createdAt))
    })

export const deleteJob = createServerFn({ method: 'POST' })
    .inputValidator((jobId: string) => jobId)
    .handler(async ({ data: jobId }) => {
        const session = await getCurrentSession()
        if (!session?.user?.id) throw new Error('Unauthorized')

        // and() means BOTH conditions must be true for the row to be deleted
        // This prevents a user from deleting someone else's listing by guessing a job ID
        await db
            .delete(jobs)
            .where(
                and(
                    eq(jobs.id, jobId),
                    eq(jobs.userId, session.user.id) // only delete if it belongs to this user
                )
            )
    })


export const createJob = createServerFn({ method: "POST" })
    .inputValidator(jobSchema)
    .handler(async ({ data }) => {
        const session = await getCurrentSession()

        if (!session?.user?.id) {
            throw new Error("You must be sign in to post a job")
        }

        const [job] = await db
            .insert(jobs)
            .values({
                ...data,
                userId: session.user.id
            })
            .returning()

        return job
    })