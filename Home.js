var music = document.getElementById("music");
var playbtn = document.getElementById("playbtn");

playbtn.onclick = function () {
    if(music.paused) {
        music.play();
        playbtn.src = "./resources/images/pausebtn.png";
    }
    else {
        music.pause();
        playbtn.src = "./resources/images/playbtn.png";
    }
}
let data = [
    { name: 'name0', description: 'description', date: 'XX/XX/XXXX' },
    { name: 'name1', description: 'description', date: 'XX/XX/XXXX' },
    { name: 'name2', description: 'description', date: 'XX/XX/XXXX' },
]

data.forEach(res => {
    var obj = document.createElement('div');
    obj.id = "::img";
    obj.style.cssText = 'width:200px;height:31vh; background-color:transparent; color:#fff;';
   /*
    let card = document.createElement("div");
    card.appendChild(obj);
    /*let name = document.createTextNode('Name:' + res.name + ', ');
    card.appendChild(name);

    let description = document.createTextNode('Description:' + res.description + ', ');
    card.appendChild(description);

    let date = document.createTextNode('date:' + res.date);
    card.appendChild(date);*/
    
    let container = document.querySelector(".album-cards-list");
    container.appendChild(obj);
});