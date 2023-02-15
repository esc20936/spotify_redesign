import axios from "axios";

export const fetchSongs = async () => {
    const response = await axios.get("http://127.0.0.1:5000/songs");
    const songs = response.data;
    console.log(songs);
    return songs;
}