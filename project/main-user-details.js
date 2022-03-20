let url = new URL(location.href);
let user =JSON.parse(url.searchParams.get('data'))
let userDetailsContainer = document.getElementsByClassName('user-details')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`
let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];
postsDetailsButton.innerText = "show user's posts"
let postsContainer = document.getElementsByClassName('posts')[0];
postsDetailsButton.onclick = function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => (value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                postsContainer.append(postContainer);
                let postButton = document.createElement('button');
                postContainer.appendChild(postButton);
                postButton.innerText = 'post details'
                postButton.onclick = function (){
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
                }

            }
        }))
}

