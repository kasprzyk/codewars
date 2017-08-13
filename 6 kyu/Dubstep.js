/**
 * Created by piotr on 13.08.17.
 */
function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
}