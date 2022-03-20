let postContainer = document.getElementsByClassName('post')[0];
let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('data'));
console.log(post)
postContainer.innerText = JSON.stringify(post);
let commentsContainer = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const commentItem of value) {
            let commentLi = document.createElement('li');
            commentsContainer.appendChild(commentLi);
            commentLi.innerText = commentItem.body;
        }
    })