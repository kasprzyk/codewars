function getAverageAge(list) {
    return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}/**
 * Created by piotr on 20.08.17.
 */
