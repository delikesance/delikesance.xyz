import { Redis } from "@upstash/redis";

export default defineEventHandler(async event => {
  const redis = new Redis({
    url: 'https://suited-eft-53309.upstash.io',
    token: 'AdA9AAIjcDFhOWM5YjYwNzZlZjY0N2Y2YWRjN2ZhODVhMzE3Zjg4Y3AxMA',
  })

  let visits = await redis.get<number>('visits') || 0
  visits++

  await redis.set("visits", visits)
  return { visits }
})
