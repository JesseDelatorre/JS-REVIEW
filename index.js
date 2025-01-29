const state = {
  posts: []
}

const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`); //gets data
  const allPosts = await response.json();// gets data
  state.posts = allPosts;  // stores data 
  renderallPosts();
}

const renderallPosts = () => {
  const ol = document.createElement(`ol`); //creates ol
  state.posts.forEach((singlePost) => {      // goes through each post
    const li = document.createElement(`li`); // creates li
    li.innerText = singlePost.title;  // putting title of the post in the li


    //add event listener for click to the li
    
    li.addEventListener(`click`, () =>{
      const detailsHTML = `
      <h2>${singlePost.title}</h2>
      <p>${singlePost.body}</p>
      `;
      main.innerHTML = detailsHTML;

    });
      // get the details for the post that was clicked
      //replace the main element with the details




    ol.append(li); // append the li to the ol

  })
  //console.log(ol); // showing the li in the ol
  const main = document.querySelector(`main`);  // grabs the main
  main.append(ol); // appends the ol in the main
}

getPosts();

