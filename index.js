console.log("index.js loaded");
document.addEventListener("DOMContentLoaded", (event) => {
  renderFeatured();
  renderRecent();
});

function renderFeatured(){
    document.getElementById("featured-post").innerHTML= `<card class="recent-post featured-post">
                    <img  class="postimage" src="encrypted-channel.png" alt="Placeholder Postimg">
                    <article>
                        <h3>${posts[0].title}</h3>
                        <p>${posts[0].excerpt}</p>
                    </article>
                </card>`;
}


function renderRecent(){
    var list = document.getElementById("recent-post-list");
    list.innerHTML = "";
    for (let x = 1; x < 3;x++ ){

        let item = document.createElement("card");
        item.classList.add("recent-post")
        item.innerHTML = `
        <img  class="postimage" src="encrypted-channel.png" alt="Placeholder Postimg">
            <article>
                <h3>${posts[posts.length-x].title}</h3>
                <p>${posts[posts.length-x].excerpt}</p>
            </article>`
        
        
        list.appendChild(item);
        

    }

}

function renderHottest(){

}