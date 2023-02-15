import axios from "axios";

export const fetchPodcasts = async () => {
    const response = await axios.get("http://127.0.0.1:5000/podcasts");
    const songs = response.data;
    console.log(songs);
    return songs;
}