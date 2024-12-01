index = require('./build/index')

{
    const dataIn = new Uint8Array(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
    const dataOut = index.deflate(dataIn).then((res) => {
        console.log(dataIn)
        console.log(res)
    })
}

{
    const dataIn = new Uint16Array(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
    const dataOut = index.deflate(dataIn).then((res) => {
        console.log(dataIn)
        console.log(res)
    })
}