import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (event) => {
	// `params.id` comes from [id].js
	// const item = await db.get(params.id);

	return {
		status: 404,
		body: {
			status: 'ok',
			message: event.request.url
		}
	};
};

export const post: RequestHandler = async (event) => {
	const body = await event.request.json();

	return {
		status: 404,
		body: {
			status: 'ok',
			message: event.request.url,
			payload: body
		}
	};
};
