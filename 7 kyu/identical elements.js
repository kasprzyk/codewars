/**
 * Created by piotr on 13.08.17.
 */
function duplicateElements(m, n) {
    return m.some(v => n.includes(v))
}