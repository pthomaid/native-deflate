
const exportedInterface = {
    inflate: async (arr: Uint8Array | Uint16Array) => {
        const blob = new Blob([arr]);
        const stream = blob.stream(); // Can pass argument for chunk size
        const deflatedStream = stream.pipeThrough(
            new DecompressionStream("deflate"),
        );
        const buf = await new Response(deflatedStream).arrayBuffer();
        if (arr instanceof Uint8Array) {
            return new Uint8Array(buf)
        }
        return new Uint16Array(buf)
    },
    deflate: async (arr: Uint8Array | Uint16Array) => {
        const blob = new Blob([arr]);
        const stream = blob.stream(); // Can pass argument for chunk size
        const deflatedStream = stream.pipeThrough(
            new CompressionStream("deflate"),
        );
        const buf = await new Response(deflatedStream).arrayBuffer();
        if (arr instanceof Uint8Array) {
            return new Uint8Array(buf)
        }
        return new Uint16Array(buf)
    }
}

module.exports = exportedInterface