
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
        const relevantPost = posts.find(post => post.isRelevant === true);
        return relevantPost;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const getPostsByCategory = async (category) => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const post = posts.filter(post => post.category === category);
       
        return post;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
export const getPrincipalPostCategory = async (category) => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const principalPostCategory = posts.find(post => post.category === category);
       
        return principalPostCategory;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
export const getRelevantPostCategory = async (category) =>{
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        const relevantPostCategory = posts.filter(post => post.category === category && post.isRelevantCategory === true);

        // console.log({relevantPostCategory})
       
        return relevantPostCategory;
    } catch (error) {
        console.error('Error fetching data: ', error);
}
}
// get post by id

// create post

// update post

// delete post