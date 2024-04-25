
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllPosts = async () => {
    try {
        const response = await fetch(API_URL+'/posts');
        const posts = await response.json();
        //console.log(posts);
        return posts;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const getRelevantPost = async () => {
    try {
        const response = await fetch(API_URL+'/posts');
        const posts = await response.json();
        console.log(posts)
        //const relevantPost = posts.find(post => post.isRelevant === true);
        const relevantPost = posts[posts.length - 1]
        return relevantPost;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

export const getPostsByCategory = async (IDcategoryfront) => {
    try {
        const response = await fetch(API_URL+'/posts');
        const posts = await response.json();
        const post = posts.filter(post => post.category_id === +IDcategoryfront);
       
        return post;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
export const getPrincipalPostCategory = async (IDcategoryfront) => {
   try {
        const response = await fetch(API_URL+'/posts');
        const posts = await response.json();
        //console.log(posts);
        const principalPostCategory = posts.filter(post => post.category_id === IDcategoryfront);
        const postPrincipal=principalPostCategory[principalPostCategory.length - 1]
       console.log(principalPostCategory); 
        return postPrincipal;
        // return posts;

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}
export const getRelevantPostCategory = async (IDcategoryfront) =>{
    try {
        const response = await fetch(API_URL+'/posts' );
        const posts = await response.json();
        //const relevantPostCategory = posts.filter(post => post.category === category && post.isRelevantCategory === true);

       
        
        const relevantPostCategory = posts.filter(post => post.category_id === IDcategoryfront)

        
        
        const listRelevant=[
            relevantPostCategory[relevantPostCategory.length - 1], relevantPostCategory[relevantPostCategory.length - 2], relevantPostCategory[relevantPostCategory.length - 3]

        ]
        
        return listRelevant;
    } catch (error) {
        console.error('Error fetching data: ', error);
}
}
// get post by id

// create post

// update post

// delete post