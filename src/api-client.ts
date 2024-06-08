export async function getSongs(singerName: string = "Sonu Nigam") {
  const URL: string = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
  try {
    const response: Response = await fetch(URL);
    const data = await response.json();
    console.log("Data Rec from Itunes", data);
    return data;
  } catch (err:any) {
    console.log(err);
    throw new Error('Somehting went wrong '+err.message);
  }
}

//getSongs();
