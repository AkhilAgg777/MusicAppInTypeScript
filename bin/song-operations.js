//make call to apiclient
import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";
//get the data and fill in model
export async function getAllSongs(singerName = "Sonu Nigam ") {
    const data = await getSongs();
    const singers = [];
    data.results.map((obj) => {
        const singer = new Singer(obj['artistName'], obj['trackName'], obj['artworkUrl100'], obj['previewUrl']);
        singers.push(singer);
    });
    console.log('ALL Data is', singers);
    return singers;
}
getAllSongs();