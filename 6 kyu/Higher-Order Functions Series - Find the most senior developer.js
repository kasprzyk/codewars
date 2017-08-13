/**
 * Created by piotr on 13.08.17.
 */
function findSenior(list) {
    return list.filter(function(x){
        return x.age == Math.max(...list.map((y) => y.age));
    });
}