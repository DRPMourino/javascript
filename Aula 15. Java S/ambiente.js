let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vertor tem ${num.length} posições`)
console.log(`O primeiro valor do ver é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log ('O valor não foi encotrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
