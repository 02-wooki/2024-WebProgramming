onmessage = (e) => {
    const score = parseInt(e.data);
    if (score >= 90)
        postMessage('A');
    else if (score >= 80)
        postMessage('B');
    else if (score >= 70)
        postMessage('C');
    else if (score >= 60)
        postMessage('D');
    else
        postMessage('F');
}