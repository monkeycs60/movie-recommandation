import axios from 'axios';

export async function getCatFact() {
  const res = await axios.get('https://catfact.ninja/fact');
  return res.data;
}
