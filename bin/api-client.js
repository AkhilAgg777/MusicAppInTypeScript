export async function getSongs(singerName = "Sonu Nigam") {
    const URL = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Data Rec from Itunes", data);
        return data;
    }
    catch (err) {
        console.log(err);
        throw new Error('Somehting went wrong ' + err.message);
    }
}
//getSongs();
