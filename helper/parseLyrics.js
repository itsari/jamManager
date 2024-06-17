function parseLyrics(text) {
    const lines = text.split('\n');
    const parsedLines = lines.map(line => {
        const chords = [];
        const lyrics = line.replace(/\[([A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?\d*)\]/g, (match, chord) => {
            chords.push(chord);
            return ' '.repeat(chord.length);
        });
        return { chords, lyrics };
    });
    return parsedLines;
}

module.exports = parseLyrics;
