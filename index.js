const getPosts = async() =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const allPosts = await response.json();
  console.log(allPosts);
}


getPosts();


