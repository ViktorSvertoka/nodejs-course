async function getData(url) {
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
}

export default getData;
