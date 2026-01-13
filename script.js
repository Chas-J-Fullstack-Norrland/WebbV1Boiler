/* java script for post */

const posts = [
    {
        id: 1,
        title: "Frontend-tips för nybörjare",
        excerpt: "Korta och enkla tips för att komma igång med webbutveckling",
        content: "Här är hela texten med tips om HTML, CSS och JS... Här kan du skriva flera stycken text. Lorem ipsum dolor sit amet...",
        author: "Anna Eriksson",
        date: "2026-01-13",
        category: "Frontend",
        image: "images/placeholder1.jpg"
    },
];

if (document.getElementById('post-content')) {  
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const contentContainer = document.getElementById('post-content');

   
    if (!urlParams.get('id') || isNaN(postId)) {
        contentContainer.innerHTML = '<p>Inget inläggs-ID angivet. Gå tillbaka till <a href="Index.html">startsida</a>.</p>';
    } else {
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            contentContainer.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h1>${post.title}</h1>
                <p>Av: ${post.author} | ${post.date} | Kategori: ${post.category}</p>
                <p>${post.content}</p>
            `;
        } else {
            contentContainer.innerHTML = '<p>Inlägget hittades inte. Gå tillbaka till <a href="Index.html">startsida</a>.</p>';
        }
    }
}  
