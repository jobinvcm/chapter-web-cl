export async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: {
        revalidate: 3600, // Cache for 1 hour
        tags: ['data'], // Tag for on-demand revalidation
      }
    })
   
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
  }