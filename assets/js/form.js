const submitBlog = document.querySelector('#submitted');

// content of forms captured
const user1 = document.querySelector('#username').value;
const blogTitle = document.querySelector('#blog-title').value;
const blogContent = document.querySelector('#content').value;


submitBlog.addEventListener('click', function (event) {
    // console log is the button is clicked
    event.preventDefault();
    console.log("button clicked")

    // console log the value in the field 'user'
    console.log(user1.value);

    // need to store the value of the blog here. but it needs to change for each new blog post

    let blogPostNumber = 'blog' + 2
    console.log(blogPostNumber + 'is');
    localStorage.setItem("blog", user1.value);
    console.log(blogTitle.value);
    localStorage.setItem("blog", blogTitle.value);
    console.log(blogContent.value);
    localStorage.setItem("blog", blogContent.value);

}
);
