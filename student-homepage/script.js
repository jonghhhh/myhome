// This file implements the functionality for the bulletin board.
// It handles adding, displaying, and removing posts on the board.

document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postInput = document.getElementById('postInput');
    const posts = document.getElementById('posts');

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = postInput.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            posts.prepend(li);
            postInput.value = '';
        }
    });
});