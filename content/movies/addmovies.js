console.log("adding movies..")

const movies = [
    "avatar.way.of.the.water",
    "back.to.the.future.1",
    "back.to.the.future.2",
    "back.to.the.future.3",
    "big.hero.6",
    "cars.1",
    "cars.2",
    "cars.3",
    "frozen.2",
    "good.boys",
    "hidden.figures",
    "how.to.train.your.dragon.1",
    "how.to.train.your.dragon.2",
    "how.to.train.your.dragon.3",
    "how.to.train.your.dragon.homecoming",
    "karate.kid.1",
    "karate.kid.2",
    "karate.kid.3",
    "men.in.black.1",
    "men.in.black.2",
    "men.in.black.3",
    "men.in.black.international",
    "minions.the.rise.of.gru",
    "now.you.see.me.1",
    "now.you.see.me.2",
    "percy.jackson.and.the.lightning.thief",
    "percy.jackson.sea.of.monsters",
    "pokemon.detective.pikachu",
    "puss.in.boots.the.last.wish",
    "ready.player.one",
    "romeo.and.juliet",
    "shazam.fury.of.the.gods",
    "shazam",
    "sonic.the.hedgehog.1",
    "sonic.the.hedgehog.2",
    "spider.man.far.from.home",
    "spider.man.homecoming",
    "spider.man.no.way.home",
    "spies.in.disguise",
    "teen.beach.1",
    "teen.beach.2",
    "the.croods.a.new.age",
    "toy.story.1",
    "toy.story.2",
    "toy.story.3",
    "toy.story.4",

]

console.log(movies)

function createPoster(movie_code) {

    const movieURL = "https://0hwither.com/videoplayer/v.html?movie=" + movie_code;
    const imageURL = "https://0hwither.com/content/movies/posters/" + movie_code + ".jpg";
    const movieName = movie_code.replaceAll("."," ").charAt(0).toUpperCase() + movie_code.replaceAll("."," ").slice(1);;

    const container = document.getElementById("container");
    const a = document.createElement("a");
    a.setAttribute("href",movieURL);
    a.setAttribute("target","_blank");

    const div_pc = document.createElement("div");
    div_pc.className="poster_container";
    
    const img = document.createElement("img");
    img.className="poster_img row__poster";
    img.setAttribute("src",imageURL);

    const div_po = document.createElement("div");
    div_po.className="poster_overlay";
    div_po.id="sub_text";
    div_po.innerHTML=movieName

    container.appendChild(a);
    a.appendChild(div_pc);
    div_pc.appendChild(img);
    div_pc.appendChild(div_po);

    console.log(a);

    if (a) {
        return true
    }

}

movies.every(createPoster)