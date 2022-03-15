/*
1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts

    2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/


/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then(postsData => {

            let wrap = document.createElement('div');
            wrap.classList.add('wrap');
        for (const postItem of postsData ) {
              let divPost = document.createElement('div');
              divPost.classList.add('post');
              divPost.innerHTML = `
                    <h3>ID:${postItem.id}</h3>
                    <h4>Title:${postItem.title}</h4>
                    <h4>body:${postItem.body}</h4>
              `
                wrap.append(divPost);
                document.body.append(wrap);

        }
    });*/


fetch('https://jsonplaceholder.typicode.com/comments')
        .then((value) => value.json())
        .then(commentData=>{
            let wrap = document.createElement('div')
            wrap.classList.add('wrap');
            for (const commentItem of commentData) {
                let divComment = document.createElement('div');
                divComment.classList.add('comment')
                divComment.innerHTML =`
                <h3>Id:${commentItem.id}</h3>
                <h4>name:${commentItem.name}</h4>
                <h4>email:${commentItem.email}</h4>
                <h5>body:${commentItem.body}</h5>
                `
                wrap.append(divComment);
                document.body.append(wrap);
            }
})