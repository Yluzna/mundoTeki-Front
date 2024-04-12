
const API_URL = import.meta.env.VITE_URL;

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
        const post = posts.filter(post => post.category == category);
       
        return post;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

// get post by id

// create post

// update post

// delete post