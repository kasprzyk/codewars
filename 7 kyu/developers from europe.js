/**
 * Created by piotr on 20.08.17.
 */
function countDevelopers(list) {
    // your awesome code here :)
    return list.filter(x=>x.continent=='Europe' && x.language=='JavaScript').length
}