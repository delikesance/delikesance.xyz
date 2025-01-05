import { createHash } from 'crypto';
import { Redis } from '@upstash/redis';

interface RequestEvent {
  node: {
    req: {
      headers: {
        'x-forwarded-for'?: string;
      };
      socket: {
        remoteAddress?: string;
      };
    };
  };
}

export default async function handler(event: RequestEvent) {
  const redis = new Redis({
    url: 'https://suited-eft-53309.upstash.io',
    token: 'AdA9AAIjcDFhOWM5YjYwNzZlZjY0N2Y2YWRjN2ZhODVhMzE3Zjg4Y3AxMA',
  });

  const ip = event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress || '';
  const hashedIp = createHash('sha256').update(ip).digest('hex');

  const totalVisits = await redis.incr('totalVisits');

  const hasVisited = await redis.sismember('uniqueVisitors', hashedIp);

  if (!hasVisited) {
    await redis.sadd('uniqueVisitors', hashedIp);
  }

  const uniqueVisits = await redis.scard('uniqueVisitors');

  return { totalVisits, uniqueVisits };
}

