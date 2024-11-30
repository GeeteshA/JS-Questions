// Program to find longest element in a Sentence
function findLongest(name) {

    let data = name.split(' ')
    let current = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].length > current.length) {
            current = data[i]

        }
    }
    return current
}
let result = findLongest("my name is Geetesh Meetesh")
console.log(result)