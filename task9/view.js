class View{
		viewPost(post, author){
	        let myPost = document.createElement('div');
	        myPost.className = 'post';
	        myPost.innerHTML = "";
	        if(post.hasOwnProperty('photoLink'))
	            	myPost.innerHTML += `<img src= ${post.photoLink} class=\"ava\"> \n`;
	        else
	        	myPost.innerHTML += `<img src=https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png class=\"ava\"> \n`;
	        myPost.innerHTML +=
	            `<span class=\"post_name\">\n
	            <strong> ${post.author} </strong> \n
	            <div class=\"post_date\">${moment(post.createdAt).format("On MMMM D, YYYY H:m")}</div>\n
	            </span> \n`;
	        if(author === post.author)
	            myPost.innerHTML +=
	                `<div class=\"post_mybuttons\">\n
	                <button class=\"button\">✎</button>\n 
	                <button class=\"button\">␡</button>\n
	                </div>`
	        if(post.hasOwnProperty('hashTags')){
	            let tags = post.hashTags;
	            myPost.innerHTML += `<span class=\"post_hashtags\"> \n`;
	            tags.forEach(tag => {
	                myPost.innerHTML += `<span class=\"sep_hashtag\"> ${tag} </span> \n`
	            });
	            myPost.innerHTML += "</span> \n";
	        }
	        myPost.innerHTML +=
	            `<div class=\"post_text">\n ${post.description} \n </div>\n`;
	        myPost.innerHTML +=
	            `<div class=\"like\">\n
	            <strong> ${post.likes.length} </strong>\n
	            <button class=\"button\">❤</button>\n
	            </div>`
	        document.getElementById('fed').append(myPost);
	   }
      viewFeed(tweets, count, filt = {},author = ""){
    		document.getElementById('fed').innerHTML = "";
    		let feed = tweets.getPage(0,count,filt);
    		for(let i = 0; i < feed.length; i++){
    			this.viewPost(feed[i],author);
    		}
    		if(count < tweets._posts.length)
    			document.getElementById('fed').innerHTML += 
    		`<div> \n 
    		<button id = \"add_more\">add more</button>
    		</div>`;
    	}
    	viewName(author){
    		document.getElementById('name').firstElementChild.textContent = author;
    		document.getElementById('head-name').textContent = author;
    	}
    	viewAva(user){
    		let ava = document.getElementById('ava');
    		let image = document.createElement('img');
    		if(user.hasOwnProperty('photoLink'))
    			image.setAttribute('src', user.photoLink);
    		else
    			image.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png");
    		ava.insertBefore(image,document.getElementById('but_post'));
    		if(user.hasOwnProperty('status')){
    			document.getElementById('status').textContent = user.status;
    		}
    	}
    	viewFiltHashtags(tweets){
    		let posts = tweets.getPage();
    		let hashtags = new Set();
    		posts.forEach(post => {
    			post.hashTags.forEach(tag => {
    				hashtags.add(tag);
    			}
    		)});
    		let filt = document.getElementById('filt-tags')
    		hashtags.forEach(tag => {
    			filt.innerHTML += `<span class=\"sep_hashtag\"> ${tag} </span> \n`
    		})
    	}
    	viewFiltAuthors(tweets){
    		let posts = tweets.getPage();
    		let authors = [];
    		posts.forEach(post => {
    			if(authors.indexOf(post.author) < 0)
    				authors.push(post.author);
    		});
    		let filt = document.getElementById('filt-auth')
    		authors.forEach(auth => {
    			filt.innerHTML += `<span> ${auth} , </span> \n`
    		})
    	}
}
