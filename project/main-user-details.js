let url = new URL(location.href);
let user =JSON.parse(url.searchParams.get('data'))
function userDetail(point){
    for (const pointKey in point) {
        if(typeof point[pointKey] !== 'object'){
            let userContainer = document.createElement('div');
            userContainer.innerText = point[pointKey];
            userContainer.classList.add('user-details');
            document.body.append(userContainer);

        }else if(typeof point[pointKey] === 'object'){
            userDetail(point[pointKey])
        }
    }
}
userDetail(user);



let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];
postsDetailsButton.innerText = "show user's posts"
let postsContainer = document.getElementsByClassName('posts')[0];
postsDetailsButton.onclick = function (){
        this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => (value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                let postButton = document.createElement('button');
                postContainer.appendChild(postButton);
                postsContainer.appendChild(postContainer);
                postButton.innerText = 'post details'
                postButton.onclick = function (){
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
                }

            }
        }))
}