let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

let div = document.createElement('div');
div.classList.add('post-details-block')
container.appendChild(div);

for (const element in parse) {
    let innerDiv = document.createElement('div');
    innerDiv.classList.add('post-details-block-item')
    innerDiv.innerText = `${element}: ${parse[element]}`;
    div.appendChild(innerDiv);
}

let div1 = document.createElement('div');
div1.classList.add('comments-block')
container.appendChild(div1);
fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        for (const comment of comments) {
            let innerDiv1 = document.createElement('div');
            innerDiv1.classList.add('comment')
            for (const value in comment) {
                let innerInnerDiv1 = document.createElement('div');
                innerInnerDiv1.classList.add('comment-item');
                innerInnerDiv1.innerText = `${value}: ${comment[value]}`;
                innerDiv1.appendChild(innerInnerDiv1)

            }
            div1.appendChild(innerDiv1);
        }
    }
    )