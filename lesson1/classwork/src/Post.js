class Post {
    constructor(id, name, link, description, image) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.description = description;
        this.image = image;
        this.likes = this.GetCurrentLikes();
        this.comments = this.GetCurrentComments();

        this.el;
        this.isActiveLike = false;        
    }

    Render = () => {
        let card = document.createElement('div');
        card.className = 'card';       

        card.innerHTML = `
            <img src="${ this.image }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${ this.name }</h5>
                <p class="card-text">${ this.description }</p>
                <a href="#" class="btn btn-primary _likeBtn">Likes: <span class="_likes">${ this.likes }</span></a>   
                <form class="row g-3">
                    <div class="col-auto">                        
                        <input type="text" class="form-control _commentInput" placeholder="Comment">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3 _commentBtn">Comment</button>
                    </div>
                </form>   
                <div class="_commentWrap">
                    ${ 
                        this.comments.map( comment => `
                            <div class="card">                
                                <div class="card-body">                        
                                    <p class="card-text">${ comment }</p>                  
                                </div>
                            </div>
                        `) 
                    }
                </div>      
            </div>
        `;        

        this.el = card;

        this.ApplyEventListeners();

        return this.el;
    }

    ApplyEventListeners = () => {
        let likeBtn = this.el.querySelector('._likeBtn');
        likeBtn.addEventListener('click', this.AddLike);

        let commentBtn = this.el.querySelector('._commentBtn');
        commentBtn.addEventListener('click', this.LeaveComment);
    }

    AddLike = (e) => {
        e.preventDefault();
        if(this.isActiveLike) {
            return;
        }
        this.likes++;
        
        this.el.querySelector('._likes').innerHTML = this.likes;

        this.isActiveLike = true;

        this.UpdateLikesStorage();
    }

    UpdateLikesStorage = () => {
        if (!localStorage.getItem('likes')) {
            let likes = JSON.stringify([{ id: this.id, likes: this.likes }]);

            localStorage.setItem('likes', likes);

            return;
        }

        let likes = JSON.parse(localStorage.getItem('likes'));
        let currentItem = likes.find(item => item.id === this.id);

        if (currentItem) {
            currentItem.likes++;            
        } else {
            likes.push({id: this.id, likes: this.likes})
        }        

        localStorage.setItem('likes', JSON.stringify(likes));
    }

    GetCurrentLikes = () => {
        if (!localStorage.getItem('likes')) {
            return 0;
        }

        let likedPost = this.GetLikedPost();

        if (likedPost) {
            return likedPost.likes;
        }

        return 0;
    }

    GetLikedPost = () => {
        let likes = JSON.parse(localStorage.getItem('likes'));

        return likes.find(l => l.id === this.id);
    }

    GetCommentedPost = () => {
        let comments = JSON.parse(localStorage.getItem('comments'));

        return comments.find(l => l.id === this.id);
    }

    GetCurrentComments = () => {
        if (!localStorage.getItem('comments')) {
            return [];
        }

        let commentedPost = this.GetCommentedPost();

        if (commentedPost) {
            return commentedPost.comments;
        }

        return [];
    }

    LeaveComment = (e) => {
        e.preventDefault();

        let text = this.el.querySelector('._commentInput').value;
        if (!text) {
            return;
        }

        let comment = document.createElement('div');
        comment.innerHTML = `
            <div class="card">                
                <div class="card-body">                    
                    <p class="card-text">${ text }</p>                    
                </div>
            </div>
        `;

        this.el.querySelector('._commentWrap').appendChild(comment);

        this.comments.push(text);

        this.UpdateCommentsStorage();
    }

    UpdateCommentsStorage = () => {
        if (!localStorage.getItem('comments')) {
            let comments = JSON.stringify([{ id: this.id, comments: this.comments }]);

            localStorage.setItem('comments', comments);

            return;
        }

        let comments = JSON.parse(localStorage.getItem('comments'));
        let currentItem = comments.find(item => item.id === this.id);

        if (currentItem) {
            currentItem.comments = this.comments;           
        } else {
            comments.push({ id: this.id, comments: this.comments })
        }        

        localStorage.setItem('comments', JSON.stringify(comments));
    }
}

export default Post;