export async function getNewsByAPI(slug: string = 'all') {
    
    let response = await fetch(`https://newsapi.org/v2/everything?q=${slug}&apiKey=471f2a855dc043049e757719da454f2b`);

    let data = await response.json();
    return data.articles;
    
}