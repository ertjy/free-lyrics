import { getLyrics } from "genius-lyrics-api";

function process_lyrics(options) {
    return (lyrics) => {
        console.log(options);
        console.log(lyrics);
    };
}

function main () {
    const options = {
        apiKey: "h2MA0scDIZs2yipMThfjAn_pEKx5BUfotFkO7eQmw-hQ8_4nX7eYkFzoPplTL7Ho",
        title: 'Posthumous Forgiveness',
	    artist: 'Tame Impala',
	    optimizeQuery: true
    }
    getLyrics(options).then(process_lyrics(options));
    
}

main();
