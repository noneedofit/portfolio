import { json } from '@sveltejs/kit'
import type { PageServerLoad } from './$types';
export const GET = (async ({ }) => {
    return json({ "m.server": "matrix.kush.in:443" })
}) satisfies PageServerLoad;