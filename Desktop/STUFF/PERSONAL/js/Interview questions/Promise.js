const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Hello your callback is working')
    }, 5000)
})

console.log(
    promise.then((val) => { console.log(val) })
    .finaly(null , () => {
    console.log('There is an error')
}))