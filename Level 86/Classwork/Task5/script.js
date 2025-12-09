let form = document.querySelector("form")
let input = document.querySelector("input")
let postsDiv = document.getElementById("posts")

form.addEventListener("submit", fetchInfo)

function fetchInfo(e) {
    e.preventDefault()
    
    postsDiv.innerHTML = ""
    let searchWord = input.value.trim().toLowerCase();
    
    const response = fetch(`https://dummyjson.com/posts`)

    response
        .then((data) => data.json())
        .then((data) => renderInfo(data, searchWord))
        .catch((error) => console.log(error))
}

function renderInfo(arr, keyword) {
    let posts = arr.posts
    
    posts = posts.filter((postObject) => {
        return (postObject.title.toLowerCase()).includes(keyword)
    })
    

    if(posts.length === 0) {
        postsDiv.innerHTML = "NO RESULTS"
        return;
    }
    
    for(let obj of posts) {
        console.log(obj)
        postsDiv.innerHTML += `
            <div>
                <h2>${obj.title}</h2>
                <p>${obj.body}</p>
                <p>Likes: ${obj.reactions.likes}<p>
                <p>Dislikes: ${obj.reactions.dislikes}<p>
            </div>
            <hr>
        `
    }
    console.log("rendered")
}