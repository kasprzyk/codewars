/**
 * Created by piotr on 20.08.17.
 */
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}