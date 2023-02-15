import axios from "axios";

export const fetchPodcasts = async () => {
    const response = await axios.get("http://127.0.0.1:5000/podcasts");
    const songs = response.data;
    console.log(songs);
    return songs;
}

export const deletePodcastById = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:5000/deletepodcast/${id}`);
    const podcasts = response.data;
    console.log(podcasts);
    return podcasts;
}