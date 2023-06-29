//Search

/* let cards = document.getElementsByClassName('cards')[0];
let search_box = document.getElementsByClassName('search_box')[0];
let search_input = document.getElementsById('search_input')[0];

search_input.addEventListener('keyup', ()=> {
  let filter = search_input.value.toUpperCase();
  let a = search_box.getElementsByTagName('a');

  for (let index = 0; index < a.length; index++){
    let b = a[index]-getElementsByClassName('cont_search')[0];
    //console.log(a.textContent)
    let TextValue = b.textContent || b.search_input;
    if (TextValue.toUpperCase().indexOf(filter) > -1){
      a[index].style.display = "flex";
      search_box.style.visibility = "visible"
      search_box.style.opacity = 1;
    } else {

    } 
  }
}) */



// Parallax

let stars = document.getElementById("stars");
        let moon = document.getElementById("moon");
        let mountains_behind = document.getElementById("mountains_behind");
        let parallax_txt = document.getElementById("parallax_txt");
        let paralax_btn = document.getElementById("parallax_btn");
        let mountains_front = document.getElementById("mountains_front");

        window.addEventListener("scroll",function(){
            let value = window.scrollY;
            stars.style.left = value * 0.25 + "px";
            moon.style.top = value * 1.05 + "px";
            mountains_behind.style.top = value * 0.5 + "px";
            mountains_front.style.top = value * 0 + "px";
            parallax_txt.style.marginRight = value * 3 + "px";
            parallax_txt.style.marginTop = value * 1.5 + "px";
            parallax_btn.style.marginTop = value * 1.5 + "px";
        })


// Swiper

var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
  });

  // Show Video

  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");
  let closebtn = document.querySelector(".close-video");

  playButton.onclick = () =>{
    video.classList.add("show-video");
    // Auto Play When Click On Button
    myvideo.play();    
  };
  closebtn.onclick = () =>{
    video.classList.remove("show-video");
    // Pause On Close Video
    myvideo.pause();    
  };