export default async function fetchDummyPosts(amount: number) {
  const response = await fetch(`https://dummyjson.com/posts?limit=${amount}`);
  const data = await response.json();
  return data
}
