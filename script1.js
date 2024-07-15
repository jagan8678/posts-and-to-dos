document.addEventListener('DOMContentLoaded', () => {
    const postsButton = document.getElementById('posts-btn');
    const todosButton = document.getElementById('todos-btn');
    const postList = document.getElementById('post-list');
    const todoList = document.getElementById('todo-list');

    const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos';

    // Function to fetch posts
    async function fetchPosts() {
        try {
            const response = await fetch(postsEndpoint);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            displayPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error.message);
            // Optionally, show a message to the user or handle the error gracefully
        }
    }

    // Function to fetch todos
    async function fetchTodos() {
        try {
            const response = await fetch(todosEndpoint);
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            const data = await response.json();
            displayTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error.message);
            // Optionally, show a message to the user or handle the error gracefully
        }
    }

    // Function to display posts in the UI
    function displayPosts(posts) {
        postList.innerHTML = ''; // Clear previous content
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            postList.appendChild(li);
        });
    }

    // Function to display todos in the UI
    function displayTodos(todos) {
        todoList.innerHTML = ''; // Clear previous content
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            todoList.appendChild(li);
        });
    }

    // Event listeners for the buttons
    postsButton.addEventListener('click', fetchPosts);
    todosButton.addEventListener('click', fetchTodos);
});









            












