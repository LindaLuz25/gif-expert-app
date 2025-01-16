import fetch from 'node-fetch';

export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZzPrPSqzdga0geOlOxztXIf8O18hpkPK&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));

    return gifs;
};
