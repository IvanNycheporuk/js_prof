import {data} from './data';
import Post from './Post';

let renderArea = document.getElementById('renderArea');

data.forEach(item => {
    renderArea.appendChild(new Post(item.id, item.name, item.link, item.description, item.image).Render())    
});
