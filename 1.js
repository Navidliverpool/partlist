function partlist(arr) {
    let a = ""
    let rr = arr
    let n = arr.length
    let result = []
    for (let i = 0; i < n - 1; i++) {
        a += ' ' + arr[i]
        rr = rr.slice(1)
        let r = []
        r.push(a.trim(), rr.join(' '))
        result.push(r)
    }
    return result
}
console.log(partlist(["I", "wish", "I", "hadn't", "come"]))