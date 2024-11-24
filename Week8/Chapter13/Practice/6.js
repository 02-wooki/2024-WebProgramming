onmessage = e => {
    postMessage(e.data[0] * e.data[1]);
}