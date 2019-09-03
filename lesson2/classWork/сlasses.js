/*
  Задание:

    I. Написать класс Post который будет уметь:

      1. Конструктор:
          title
          image
          description
          likes

      2. Методы
          render -> отрисовать элемент в ленте
          likePost -> увеличивает счетчик постов
          + Методы для изменения title, image, description
          + бонус. Сделать получение и изменение через set и get

    II. Написать класс Advertisment который будет экстендится от класа Post
        но помимо будет иметь другой шаблон вывода, а так же метод для покупки обьекта

        buyItem -> выведет сообщение что вы купили обьект

    III.  Сгенерировать ленту из всех постов что вы добавили в систему.
          Каждый третий пост должен быть рекламным

    <div class="post">
      <div class="post__title">Some post</div>
      <div class="post__image">
        <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*Se0gnNo-tsQG-1jeu_4TJw.png"/>
      </div>
      <div class="post__description"></div>
      <div class="post__footer">
        <button class="post__like">Like!</button>
      </div>
    </div>
*/

let postsContainer = document.getElementById('posts_feed');

class Post {
  constructor(title, image, description) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.likes = 0;

    this.likePost = this.likePost.bind(this);

    this.post = document.createElement('div');
  }

  render() {
    //let post = document.createElement('div');
    this.post.classList.add('post');

    this.post.innerHTML = `
      <div class="post__title">${this.title}</div>
      <div class="post__image">
        <img src="${this.image}"/>
      </div>
      <div class="post__description">${this.description}</div>
      <div class="post__footer">
        <button class="post__like">${this.likes}</button>
      </div>
    `;

    this.post.querySelector('.post__like').addEventListener('click', this.likePost);

    return this.post;
  }

  likePost() {
    this.likes++;
    this.post.querySelector('.post__like').innerHTML = this.likes;
  }
}

class Advertisment extends Post {
  constructor(title, image, description) {
    super(title, image, description);

    this.buyItem = this.buyItem.bind(this);    
  }

  render() {
    this.post.innerHTML = `
      <div class="post__title">${this.title}</div>
      <div class="post__image">
        <img src="${this.image}"/>
      </div>
      <div class="post__description">${this.description}</div>
      <div class="post__footer">
        <button class="post__like">${this.likes}</button>
        <button class="post__buy">Buy</button>
      </div>
    `;

    this.post.querySelector('.post__like').addEventListener('click', this.likePost);

    this.post.querySelector('.post__buy').addEventListener('click', this.buyItem);

    return this.post;  
  }

  buyItem() {
    alert('You have ordered this item, congrats!');
  }
}

let feed = [];
let post = new Post('title', 'https://tinypng.com/images/social/website.jpg', 'some post description');
let post1 = new Post('title2', 'https://tinypng.com/images/social/website.jpg', 'some post description2');
let advertisment = new Advertisment('advertisment', 'https://tinypng.com/images/social/website.jpg', 'some advertisment description');

feed.push(post);
feed.push(post1);
feed.push(advertisment);

feed.forEach( x => {
  postsContainer.appendChild(x.render());
})