import { Hono } from "hono";

interface Env {
	AI: Ai;
}

const app = new Hono<{ Bindings: Env }>();

app.post("/run", async (c) => {
	const { input } = await c.req.json<{ input: unknown }>();
	return c.json({ result: input });
});

export default app;
