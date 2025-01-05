export default defineEventHandler(async event => {
  const storage = useStorage('data')
  
  let visits = await storage.getItem<number>('pageVisits') || 0
  visits++

  await storage.setItem("visits", visits)
  return {visits}
})
