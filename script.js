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
    {
    id: 2,
    title: "Upphittad hund"
    excerpt: "En pudel har hittats i gympasalen, vem vet med sig?"
    content: "Om någon vet med sig att deras pudel sprungit bort så kan ni gärna få komma och hämta den lilla stackarn."
    author: "Berit Ingalynn"
    date: "2026-01-13"
    category: "Lost and found"
    image: "Image/placeholder2.jpg"
    },
     {
        id: 3,
        title: "Studiehjälp"
        excerpt: "Om du vill ha någon att studera in dig med, ska vi bilda en klubb?"
        content: "Vissa studerar på egen hand bäst, andra trivs med sällskap. Ska vi bilda en klubb för sådana som behöver lite sällskap?"
        author: "Cecilia Undulatodlare"
        date: "2026-01-13"
        category:"Läxhjälp"
        image:"Image/placeholder3.jpg"
        },
         {
            id: 4,
            title: "Afterworktipps"
            excerpt: "Ibland kan det vara trevligt att samlas och ha kul efter lektionerna"
            content: "Om du vill göra något kul med kamraterna efter lektionerna så finns det alternativ att hitta här:..."
            author: "Delilah Dapinka"
            date:"2026-01-13"
            category: "Umgänge"
            image:"Image/placeholder4.jpg"
            },
             {
                id: 5,
                title: "Vilka hjälper dig med vad?"
                excerpt: "Det finns personal som är tänkt ska hjälpa, vilka är det tror du?"
                content: "Om du har frågor eller på annat håll behöver hjälp så bör du ju rikta dig rätt. Här kommer några kontaktuppgifter och så till Gabi..."
                author: "Egon Hållbar"
                date: "2026-01-13"
                category: "Personal"
                image: "Image/placeholder5.jpg"
                },
                 {
                    id: 6,
                    title: "Kom ihåg att dubbelkolla Slack"
                    excerpt: "Slack används för att dela information mellan personal och studenter."
                    content: "På slack hittar du information som kommer när det är dags, glöm inte bort att hålla dig uppdaterad."
                    author: "Ford Rulle"
                    date: "2026-01-13"
                    category: "Slack och Canvas"
                    image: "Image/placeholder6.jpg"
                    },
                     {
                        id: 7,
                        title: "Bra att vara punktligt och följa tider."
                        excerpt: "På arbetsmarknaden uppskattas det alltid med tidsenlighet."
                        content: "Det är sällan det uppskattas att folk är sena, skolan må se förbi det i stunden, men arbetsgivare och kunder uppskattar när du respekterar deras tid..."
                        author: "Gail Frisk"
                        date: "2026-01-13"
                        category: "Vett och Etikett"
                        image:"Image/placeholder7.jpg"
                        },
                         {
                            id: 8,
                            title: "Se upp i trafiken"
                            excerpt: "Det är bra att hålla kolla på vart man ska, vart man är och hur man beter sig."
                            content: "Det finns många typer av trafik, det är därför alltid viktigt att du är uppmarksam och ser dig för..."
                            author: "Humphrey Träsktroll"
                            date: "2026-01-13"
                            category: "Vett och Etikett"
                            image:"Image/placeholder8.jpg"
                            },


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
