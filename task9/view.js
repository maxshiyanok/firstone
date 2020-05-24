class View{
	viewPost(post, author){
        let myPost = document.createElement('div');
        myPost.className = 'post';
        myPost.innerHTML = "";
        if(post.hasOwnProperty('photoLink'))
            myPost.innerHTML += "<img src="+ post.photoLink + " class=\"ava\"> \n";
        else
        		myPost.innerHTML += "<img src=https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png class=\"ava\"> \n";
        myPost.innerHTML +=
            "<span class=\"post_name\">\n" +
            "<strong>" + post.author + "</strong> \n" +
            "<div class=\"post_date\">\n" +
             moment(post.createdAt).format("On MMMM D, YYYY H:m") + 	
            "\n </div> \n" +
            "</span> \n";
        if(author === post.author)
            myPost.innerHTML +=
                "<div class=\"post_mybuttons\">\n" +
                "<button class=\"button\">✎</button>\n" +
                "<button class=\"button\">␡</button>\n" +
                "</div>"
        if(post.hasOwnProperty('hashTags')){
            let tags = post.hashTags;
            myPost.innerHTML += "<span class=\"post_hashtags\"> \n";
            tags.forEach(tag => {
                myPost.innerHTML += "<span class=\"sep_hashtag\">" + tag + "</span> \n"
            });
            myPost.innerHTML += "</span> \n";
        }
        myPost.innerHTML +=
            "<div class=\"post_text\">\n" +
            post.description +
            "</div>\n";
        myPost.innerHTML +=
            "<div class=\"like\">\n" +
            "<strong>" + post.likes.length + "</strong>\n" +
            "<button class=\"button\">❤</button>\n" +
            "</div>"
        document.getElementById('fed').append(myPost);
    }
        viewFeed(tweets, count, filt = {},author = ""){
    		document.getElementById('fed').innerHTML = "";
    		let feed = tweets.getPage(0,count,filt);
    		for(let i = 0; i < Math.min(count, feed.length); i++){
    			this.viewPost(feed[i],author);
    		}
    		if(count < tweets._posts.length)
    			document.getElementById('fed').innerHTML += 
    		"<div> \n " +
    		"<button id = \"add_more\">add more</button>" +
    		"</div>";
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
    	}
    	viewFiltHashtags(tweets){
    		let posts = tweets.getPage();
    		let hashtags = [];
    		posts.forEach(post => {
    			post.hashTags.forEach(tag => {
    				if(hashtags.indexOf(tag) < 0)
    					hashtags.push(tag);
    			}
    		)});
    		let filt = document.getElementById('filt-tags')
    		hashtags.forEach(tag => {
    			filt.innerHTML += "<span class=\"sep_hashtag\">" + tag + "</span> \n"
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
    			filt.innerHTML += "<span>" + auth + ", </span> \n"
    		})
    	}
}
console.log(document.getElementById('name').firstElementChild);