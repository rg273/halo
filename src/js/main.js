const moreOptions = document.querySelector("#bmore");   //menu desplegable de more
const bShowMobileLinks = document.querySelector("#bmenu");  //hamburgesa
const mobileMenu = document.querySelector(".links");        //menu mobile (no bmore)
const moreMenu = document.querySelector(".more .menu");     

bShowMobileLinks.addEventListener("click", (e) =>{      //si tiene show lo va a quitar si no lo tiene lo va a poner 
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click",(e) =>{
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

/*-------------------------
        VIDEOS
---------------------------*/ 
const videos =[
    {
        id:"PyMlV5_HRWk",
    },
    {
        id:"XCbMVbeKlCg",
    },
    {
        id:"Fmdb-KmlzD8",
    },
    {
        id:"nXDk86lQhto",
    },
    {
        id:"MBb88gLmJZY"
    }
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click",(e) =>{
    let changed = current;                      
    current = current + 1 < videos.length ? current + 1 : current;      //video siguiente 

    if (current != changed){
        renderCurrentVideo(videos[current].id);
    }
});

bPrev.addEventListener("click",(e) =>{
    let changed = current;

    current = current - 1 >= 0 ? current - 1 : current;

    if (current != changed){
        renderCurrentVideo(videos[current].id);
    }
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

function renderVideos(){                    /*vista previa de proximos videos para ver*/
    const html = videos.map((video,index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
            </a>
        </div>`;

    });

    videosContainer.innerHTML = html.join("");

    document.querySelectorAll(".item a").forEach((item) =>{
        item.addEventListener("click",(e) =>{
            e.preventDefault();
            const id = +item.getAttribute("data-id");
            current = id;
            renderCurrentVideo(videos[current].id);
        });
    });
}

