const index = require('./index')

test('test_inflate_deflate_loop', async () => {
    const dataIn: Uint8Array = new Uint8Array(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
    const dataOut = await index.inflate(await index.deflate(dataIn))
    expect(dataOut).toBeInstanceOf(Uint8Array);
    expect(dataOut).toStrictEqual(dataIn);
});

test('test_inflate_compression', async () => {
    const dataIn: Uint8Array = new Uint8Array(Array.from({ length: 100 }, () => 0))
    const dataOut: Uint8Array = await index.deflate(dataIn)
    expect(dataOut.length).toBeLessThan(dataIn.length);
});

test('test_uint16array', async () => {
    const dataIn: Uint16Array = new Uint16Array(Array.from({ length: 100 }, () => 0))
    const dataOut: Uint16Array = await index.deflate(dataIn)
    expect(dataOut).toBeInstanceOf(Uint16Array);
    expect(dataOut.length).toBeLessThan(dataIn.length);
});