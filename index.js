console.log("index.js loaded");
document.addEventListener("DOMContentLoaded", (event) => {
  renderFeatured();
  renderRecent();
  renderHottest();
});

function renderFeatured(){
    document.getElementById("featured-post").innerHTML= `<card class="recent-post featured-post">
                    <img  class="postimage" src="encrypted-channel.png" alt="Placeholder Postimg">
                    <article>
                        <a href="post.html?id=1">${posts[0].title}</a>
                        <p>${posts[0].excerpt}</p>
                    </article>
                </card>`;
}


function renderRecent(){
    var list = document.getElementById("recent-post-list");
    list.innerHTML = "<h2>Recent Posts</h2>";
    for (let x = 1; x < 4;x++ ){

        let item = document.createElement("card");
        item.classList.add("recent-post")
        item.innerHTML = `
        <img  class="postimage" src="encrypted-channel.png" alt="Placeholder Postimg">
            <article>
                <a href="post.html?id=${posts[posts.length-x].id}">${posts[posts.length-x].title}</a>
                <p>${posts[posts.length-x].excerpt}</p>
            </article>`
        
        
        list.appendChild(item);
        

    }

}

function renderHottest(){
    var list = document.getElementById("popular");

    for(let x = 1; x < 3; x++){
        let item = document.createElement("card");
        item.classList.add("shortpost");

        item.innerHTML = `
        <img  class="postimage" src="encrypted-channel.png" alt="Placeholder Postimg">
        <article>
            <a href="post.html?id=${posts[posts.length-x].id}">${posts[x+1].title}</a>
            <p>${posts[x+1].excerpt}</p>
        </article>`;
        list.appendChild(item);
    }



}