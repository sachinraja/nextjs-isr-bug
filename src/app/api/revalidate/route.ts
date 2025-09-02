import { getCache } from "@vercel/functions";
import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const tag = request.nextUrl.searchParams.get("tag");
	const path = request.nextUrl.searchParams.get("path");

	if (path) {
		if (path.startsWith("/error")) {
			const cache = getCache();
			// get id from path
			const id = path.split("/").pop();
			if (id) {
				await cache.set(id, { error: true });
			}
		}
		revalidatePath(path);
		return Response.json({ revalidated: tag, now: Date.now() });
	}

	if (tag) {
		revalidateTag(tag);
		return Response.json({ revalidated: tag, now: Date.now() });
	}

	return Response.json({
		revalidated: false,
		now: Date.now(),
		message: "Missing path or tag to revalidate",
	});
}
