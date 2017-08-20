function allContinents(list) {
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
}/**
 * Created by piotr on 20.08.17.
 */
