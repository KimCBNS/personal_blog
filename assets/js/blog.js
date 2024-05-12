// get the container 
const container = document.querySelector('#container')
// create the card that needs to display the info



    //check first to see if there is anything in local storage
    if (localStorage.getItem('blogbuild')){
           blogDisplay = (JSON.parse(localStorage.getItem('blogbuild')));
           console.log(blogDisplay);


            // for (let i = 0; i<blogDisplay.length; i++) {
            //   //prints each username to the console
            //   console.log(blogDisplay[i].username);

            let card = document.createElement('div');
            let title = document.createElement('h2');
            let blogContent = document.createElement('p');
            let author = document.createElement('h4');

            card.setAttribute('class', 'card');

            title.textContent = blogDisplay[0].blogTitle;
            blogContent.textContent = blogDisplay[0].blogContent;
            author.textContent = blogDisplay[0].username;

            container.appendChild(card);

            card.appendChild(title);
            card.appendChild(blogContent);
            card.appendChild(author);
            





              
            //   card.setAttribute.apply;
            //   title.appendChild(card);
            //   blogContent.appendChild(card);
            //   author.appendChild(card);


            //   card.appendChild(container);
            //   title.appendChild(card);
            //   blogContent.appendChild(card);
            //   author.appendChild(card);


            // }
    };

    console.log(blogDisplay);
  
