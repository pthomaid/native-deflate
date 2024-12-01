# native-deflate
Deflate and inflate typed arrays using the Compression Streams API, provided as a Promises based API.

```
npm install native-deflate
```

## usage

```js
import nd from 'native-deflate'

const dataIn = new Uint8Array(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
const dataOut = await nd.deflate(dataIn)
```

## license

MIT.
