// this is the submit button need to listen here
const submitBlog = document.querySelector('#submitted');

// content of forms captured
const user1 = document.querySelector('#username');
const blogTitle1 = document.querySelector('#blogtitle');
const blogContent1 = document.querySelector('#content');


// create an array to hold the objects
let blogbuild = [];
//localStorage.clear();


// add a listener to see when form is submitted
submitBlog.addEventListener('click', function (event) {
    
    // console log is the button is clicked
    event.preventDefault();
    
    //check first to see if there is anything in local storage
    if (localStorage.getItem('blogbuild')){
            blogbuild = (JSON.parse(localStorage.getItem('blogbuild')));
    }

    // create a new object on form submission
    blognew = {
        username: user1.value,
        blogTitle: blogTitle1.value,
        blogContent: blogContent1.value
    }

   
    blogbuild.push(blognew);
    
    let newBlogBuild = JSON.stringify(blogbuild);
    
    // need to store the value of the blog here. but it needs to change for each new blog post
    localStorage.setItem('blogbuild', newBlogBuild);
}
);
