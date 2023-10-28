
const ep = [
    {season: 1, name: "1.Wednesdays.Child.Is.Full.Of.Woe", description: "When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love.", length: "59"},
    {season: 1, name: "2.Woe.Is.The.Loneliest.Number", description: "The sheriff questions Wednesday about the night's strange happenings. Later, Wednesday faces off against a fierce rival in the cutthroat Poe Cup race.", length: "48"},
    {season: 1, name: "3.Friend.Or.Woe", description: "Wednesday stumbles on a secret society. During Outreach Day, Nevermore's outcasts mingle with Jericho's normies in Pilgrim World. Fudge, anyone?", length: "48"},
    {season: 1, name: "4.Woe.What.A.Night", description: "Wednesday asks Xavier to the Rave'N dance, sparking Tyler's jealousy — but Thing's got something up his sleeve. Meanwhile, Eugene stakes out the cave.", length: "49"},
    {season: 1, name: "5.You.Reap.What.You.Woe", description: "During Parents Weekend, Wednesday digs into her family's past — and accidentally gets her dad arrested. Enid feels the pressure to wolf out.", length: "52"},
    {season: 1, name: "6.Quid.Pro.Woe", description: "Wednesday's friends throw her a surprise birthday party. They mean well... but she'd much rather mark the miserable occasion by solving the murders.", length: "50"},
    {season: 1, name: "7.If.You.Dont.Woe.Me.By.Now", description: "Kooky Uncle Fester pays a visit and shares his theory about the monster. Wednesday begrudgingly agrees to a date with Tyler at Crackstone's crypt.", length: "47"},
    {season: 1, name: "8.A.Murder.Of.Woes", description: "Wednesday lands in trouble with Principal Weems, but that's just the start of her problems. To fight an ancient evil, she'll need all her friends’ help.", length: "52"}
]

/* 
<a href="https://www.0hwither.com/videoplayer/v.html?show=wednesday&s1&1.Wednesdays.Child.Is.Full.Of.Woe">

<div class="episode_wrapper">
    
<h1>1</h1>
    
<figure class="hover-img"><img src="imgs/1.jpg"><figcaption><h3>▶</h3></figcaption></figure>
    
<div class="info_wrapper">
        <p class="title">Wednesday's Child Is Full Of Woe<span>59m</span></p>
        <p class="description">When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love.</p>
    </div>

</div></div></a>
*/

/* console.log(ep[0]['length']) */

function generateUI(array) {
    var title = array['name'];
    var description = array['description'];
    var length = array['length'];
    var season = array['season'];
    var ep_num = title.charAt(0);

    var title_slice = title.replaceAll("."," ");

    /* Outer */
    var outerlink = document.createElement("a");
    var outerdiv = document.createElement("div");
    var innertitle = document.createElement("h1");

    /* Image */
    var img_hover = document.createElement("figure");
    var img = document.createElement("img");
    var img_caption = document.createElement("figcaption");
    var img_caption_title = document.createElement("h3");

    /* Inner */
    var outerinfo = document.createElement("div");
    var info_title = document.createElement("p");
    var info_span = document.createElement("span");
    var info_description = document.createElement("p");

    /* Adding Classes */
    outerdiv.className="episode_wrapper";
    img_hover.className="hover-img";
    outerinfo.className="info_wrapper";
    info_title.className="title";
    info_description.className="description"

    /* Parenting */
    document.getElementById("container_main").appendChild(outerlink);
    outerlink.appendChild(outerdiv);
    outerdiv.appendChild(innertitle);
    outerdiv.appendChild(img_hover);
    outerdiv.appendChild(outerinfo);
    img_hover.appendChild(img);
    img_hover.appendChild(img_caption);
    img_caption.appendChild(img_caption_title);
    outerinfo.appendChild(info_title);
    info_title.appendChild(info_span);
    outerinfo.appendChild(info_description);

    /* Extra Preferences */
    outerlink.setAttribute("target","_blank");
    img_caption_title.innerHTML="▶";

    /* Stylizing */
    outerlink.setAttribute("href","https://0hwither.com/videoplayer/v.html?show=wednesday&s" + season + "&" + title);
    img.setAttribute("src","imgs/" + ep_num+".jpg");
    innertitle.innerHTML=ep_num;
    info_title.innerHTML= title_slice.slice(1) + "<span>" + length + "m</span>";
    info_description.innerHTML=description;
 
    return true;
}

ep.every(generateUI)