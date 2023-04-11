function makeAlbum(artist: string, title: string, tracks: number) {
    const album: any = { artist, title };
    if (tracks) {
      album["tracks"] = tracks;
    }
    return album;
}
console.log(makeAlbum("Taylor Swift", "1989", 12));
console.log(makeAlbum("Ed Sheeran", "÷ (Divide)", 16));
console.log(makeAlbum("Adele", "21",231));