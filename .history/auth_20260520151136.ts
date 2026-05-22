import GitHub from '@auth/core/providers/github'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import type { StartAuthJSConfig } from 'start-authjs'
import { db } from "./src/db"
import { users, accounts, sessions, verificationTokens } from './src/db/schema'