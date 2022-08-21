let pageNavBar = document.querySelector(".page-NavBar");
let pageHeader = document.querySelector(".page-header");
document.body.onscroll = ()=>{
    if(window.scrollY > 0){
        pageHeader.style.display = "none";
        pageNavBar.style.top = "0px";
    }else{
        pageHeader.style.display = "block";
        pageNavBar.style.top = "unset";
    }
}
let getStartBtn = document.querySelector(".get-start");
getStartBtn.addEventListener("click",()=>{
    window.scrollBy(0,800);
});
let contactUsBtn = document.querySelector(".contact-us");
contactUsBtn.onclick = function(){
    let newDivElement = document.createElement("div");
    let newFormElement = document.createElement("form");
    newDivElement.appendChild(newFormElement);
    document.body.appendChild(newDivElement);
    newDivElement.classList.add("contactDiv");
    for(let i = 0; i < 5; i++){
        let inputElement = document.createElement("input");
        newFormElement.appendChild(inputElement);
        inputElement.classList.add("sign-up-form");
    }
    let inputElements = document.querySelectorAll(".sign-up-form");
    inputElements[0].setAttribute("type","text")
    inputElements[1].setAttribute("type","password")
    inputElements[2].setAttribute("type","password")
    inputElements[3].setAttribute("type","email")
    inputElements[4].setAttribute("type","submit")
    inputElements.forEach((input)=>{
        if(input.getAttribute("type") == "text"){
            input.setAttribute("placeholder","enter your name")
        }else if(input.getAttribute("type") == "password"){
            input.setAttribute("placeholder","enter your password");
            if(inputElements[2].getAttribute("type") == 'password'){
                inputElements[2].setAttribute("placeholder","re-enter your password");
            }
        }else{
            input.setAttribute("placeholder","enter your email")
        }
    });
    let closeBtn = document.createElement("button");
    newDivElement.appendChild(closeBtn);
    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "<span><i class='fas fa-close'></i></span>"
    closeBtn.addEventListener("click",()=>{
        newDivElement.remove();
    })
}

let roadMapFirstDetail = document.querySelector('.roadMap-first-detail');
let roadMapFirstDetailChildrens = roadMapFirstDetail.children;
let roadMapChildrenArr = [];
roadMapChildrenArr.push(...roadMapFirstDetailChildrens);
let navBarList = document.querySelectorAll(".navBar-list li a");
roadMapChildrenArr.forEach((child,childIndex)=>{
    child.addEventListener("click",()=>{
        for(let x = 0; x < navBarList.length; x++){
            if(child.getAttribute("class") === navBarList[x].textContent){
                navBarList[x].click();
            }
        }
    })
    
});
let learnHTMLBtn = document.querySelector(".learn-html")
let learnCssBtn = document.querySelector(".learn-css")
let learnJsBtn = document.querySelector(".learn-js")
learnHTMLBtn.addEventListener("click",()=>{
    navBarList.forEach((link,index)=>{
        if(link.textContent.split(0).join("").search("html") !== -1){
            link.click();
        }
    })
})
learnCssBtn.addEventListener("click",()=>{
    navBarList.forEach((link,index)=>{
        if(link.textContent.split(0).join("").search("css") !== -1){
            link.click();
        }
    })
})
learnJsBtn.addEventListener("click",()=>{
    navBarList.forEach((link,index)=>{
        if(link.textContent.split(0).join("").search("javascript") !== -1){
            link.click();
        }
    })
});

let projectsListItems = document.querySelectorAll(".projects-list li");
projectsListItems.forEach((project)=>{
    project.addEventListener("click",()=>{
        window.open(project.getAttribute("data-link"),"_blank");
    })
})