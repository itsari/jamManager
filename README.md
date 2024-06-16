# jamManager

create chords sharing platform.
using nodejs egs routes views controllers sqlite vexchords
allow users to register for the application using email and password.
after login, the users will be able to browse the songs and add new songs.
each songs have name, artist, album, length , text , youtube link and userid attributes.
the text attribute is the lyrics and the chords. the chords are placed as placeholders like so:
[Am]When I find myself in [G]times of trouble,
[F]Mother Mary [C]comes to me,
[C]Speaking words of [G]wisdom,
[Am]Let it be, [F]let it be.
when browsing songs, the chords are placed aboce their places like so:
Am C/G F C
Let it be, let it be, let it be, let it be
C G F C/E Dm C
Whisper words of wisdom, let it be
when placing the mouse over a chord, he whould be displayed using vexchords.
store users and songs in sqlite tables.
