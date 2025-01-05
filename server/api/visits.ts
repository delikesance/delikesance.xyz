import { Redis } from "@upstash/redis";

export default defineEventHandler(async (event) => {
  const redis = new Redis({
    url: 'https://suited-eft-53309.upstash.io',
    token: 'AdA9AAIjcDFhOWM5YjYwNzZlZjY0N2Y2YWRjN2ZhODVhMzE3Zjg4Y3AxMA',
  });

  const ip = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress;
  const totalVisits = await redis.incr('totalVisits');

  const hasVisited = await redis.sismember('uniqueVisitors', ip);

  if (!hasVisited) {
    await redis.sadd('uniqueVisitors', ip);
  }

  const uniqueVisits = await redis.scard('uniqueVisitors');
  return { totalVisits, uniqueVisits };
});

