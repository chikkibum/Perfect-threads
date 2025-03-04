import path from "node:path";
import type { PrismaConfig } from "prisma";
import { env } from "prisma/config";

export default {
	schema: path.join("prisma", "schema"),
	migrations: {
		path: path.join("prisma", "migrations"),
		seed: 'tsx ./src/seed.ts',
	},
    datasource: {
        url: env('DATABASE_URL'),
      },
} satisfies PrismaConfig;

