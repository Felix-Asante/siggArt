const preload = document.getElementById('preload').style
const header = document.getElementById('main-header-section').style

function initPreload(){

    setTimeout(()=>{
        preload.opacity=0
        preload.display='none'
        preload.pointerEvents='none'
        preload.zIndex=-10
        header.display='block'
        setTimeout(()=>{
            header.clipPath='circle(100%)'
            header.opacity=1
            document.getElementById('gallery-1').style.opacity=1;
        },50)
        
    },5000)
    
}

initPreload()

// =========SCROLL GALLERY SECTION1============
const galleryText = document.querySelector('.gallery-text').style;
const bigImage = document.querySelector('.big-img').style
const siggAnimated = document.querySelector('.sigg')
const galleryWord = document.querySelector('.gallery-word').style

window.addEventListener('scroll',scrollPoint)

function scrollPoint(){

    // if(window.scrollY == 186){
    //     galleryText.transform='translate(0,0)'
    // }
    if(window.scrollY >= 210){
        siggAnimated.classList.add('animate')
        galleryWord.opacity=1;

        bigImage.opacity=1;
        bigImage.width='458px'

    }
     if(window.scrollY >= 1000){
         let photoGallery =document.querySelector('.gallery-photos').style.opacity=1;
        //  photoGallery.classList.add('show')
    }
}

// ============Gallery filter==============
const filterItem = document.querySelector('.gallery-nav')
const filterImg = document.querySelectorAll('.image')
window.onload = ()=>{ //after window loaded
    filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
      if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
        filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
        selectedItem.target.classList.add("active"); //add that active class on user selected item
        let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
        filterImg.forEach((image) => {
          let filterImges = image.getAttribute("data-name"); //getting image data-name value
          //if user selected item data-name value is equal to images data-name value
          //or user selected item data-name value is equal to "all"
          if((filterImges == filterName) || (filterName == "all")){
            image.classList.remove("hide"); //first remove the hide class from the image
            image.classList.add("show"); //add show class in image
          }else{
            image.classList.add("hide"); //add hide class in image
            image.classList.remove("show"); //remove show class from the image
          }
        });
      }
    }
}
