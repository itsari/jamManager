//need to return the chords in their right place.
// [Bm]On a dark desert highway, [F#]cool wind in my hair
// [A]Warm smell of colitas, [E]rising through the air
// [G]Up ahead in the distance, [D]I saw a shimmering light
// [Em]My head grew heavy and my sight grew dim
// [F#]I had to stop for the night

// [Bm]There she stood in the doorway; [F#]I heard the mission bell
// [A]And I was thinking to myself, [E]this could be heaven or this could be hell
// [G]Then she lit up a candle, [D]and she showed me the way
// [Em]There were voices down the corridor, [F#]I thought I heard them say

// [G]Welcome to the Hotel Cali[D]fornia
// [Em]Such a lovely place, such a [Bm]lovely face
// [G]Plenty of room at the Hotel Cali[D]fornia
// [A]Any time of year, you can [E]find it here

// [Bm]Her mind is Tiffany-twisted, [F#]she got the Mercedes bends
// [A]She got a lot of pretty, pretty boys, [E]that she calls friends
// [G]How they dance in the courtyard, [D]sweet summer sweat
// [Em]Some dance to remember, [F#]some dance to forget

// [Bm]So I called up the Captain, [F#]please bring me my wine
// [A]He said, we haven't had that spirit here since [E]nineteen sixty-nine
// [G]And still those voices are calling from [D]far away
// [Em]Wake you up in the middle of the night, [F#]just to hear them say

// [G]Welcome to the Hotel Cali[D]fornia
// [Em]Such a lovely place, such a [Bm]lovely face
// [G]They livin' it up at the Hotel Cali[D]fornia
// [A]What a nice surprise, bring your [E]alibis

// [Bm]Mirrors on the ceiling, [F#]the pink champagne on ice
// [A]And she said, we are all just prisoners here, [E]of our own device
// [G]And in the master's chambers, [D]they gathered for the feast
// [Em]They stab it with their steely knives, [F#]but they just can't kill the beast

// [Bm]Last thing I remember, I was [F#]running for the door
// [A]I had to find the passage back to the [E]place I was before
// [G]Relax, said the night man, [D]we are programmed to receive
// [Em]You can check out any time you like, [F#]but you can never leave

// [G]Welcome to the Hotel Cali[D]fornia
// [Em]Such a lovely place, such a [Bm]lovely face
// [G]They livin' it up at the Hotel Cali[D]fornia
// [A]What a nice surprise, bring your [E]alibis

// Bm                         F#
//   On a dark desert highway, cool wind in my hair
// A                      E
//   Warm smell of colitas rising up through the air
// G                          D
//   Up ahead in the distance, I saw a shimmering light
// Em
//    My head grew heavy and my sight grew dim
// F#
//   I had to stop for the night

function parseLyrics(text) {
  const lines = text.split("\n");
  const parsedLines = lines.map((line) => {
    const chords = [];
    let lyricsLine = line.replace(
      /\[([A-G][#b]?(?:m|maj|min|dim|aug|sus|add)?\d*)\]/g,
      (match, chord, offset) => {
        chords.push({ chord, offset });
        return " ".repeat(chord.length);
      }
    );
    // Remove trailing spaces from lyrics line
    lyricsLine = lyricsLine.trimRight();
    return { chords, lyrics: lyricsLine };
  });
  return parsedLines;
}

module.exports = parseLyrics;





