// get all posts

const API_URL = "http://localhost:3001/posts";

export const getAllPosts = async () => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        return posts;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const getRelevantPost = async () => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const relevantPost = posts.find(post => post.isRelevant == true);
        return relevantPost;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const getPostsByCategory = async (category) => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const post = posts.find(post => post.category == category);
        return post;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

// get post by id

// create post

// update post

// delete post