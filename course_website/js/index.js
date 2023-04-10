let scroll = document.querySelectorAll(".testimonials-card");
console.log(scroll);
counter = 0;
count = 0;

const prev = () => {
    if (count > 0) {
        counter++
        count--
        slide();
    }
}

const next = () => {
if((count<scroll.length-1)){
    count++
    counter--
    slide();
}

else{
    count=0;
    counter=0;
    slide();
}

}


const slide = () => {
    scroll.forEach(element => {
        element.style.transform = `translateX(${counter * 200}%)`;

    });
}

setInterval(slide,1000);

const faq = document.querySelectorAll('.container');
const icons = document.querySelectorAll('.icons');

faq.forEach(ele=>{
    ele.addEventListener("click",()=>{
        ele.classList.toggle("active");        
});

})


icons.forEach(ele=>{
    ele.addEventListener("click",()=>{
        ele.classList.toggle("icon");            
});
})


const blank = document.querySelector(".blank");
const login = document.querySelector(".login");
const hidden = document.querySelector(".hidden-login");


login.addEventListener("click",()=>{
    blank.style.display = "block";
    hidden.style.display = "block";
    
})

blank.addEventListener("click",()=>{
    blank.style.display = "none";
    hidden.style.display = "none";
})

const open=()=>{
    console.log(blank);
    console.log(hidden);
    
    hidden.style.display = "block";

}


