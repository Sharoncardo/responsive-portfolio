const toggle =
document.getElementById("theme-toggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

document.body.setAttribute(
"data-theme",
savedTheme
);

}else{

const prefersDark =
window.matchMedia(
"(prefers-color-scheme: dark)"
).matches;

document.body.setAttribute(
"data-theme",
prefersDark ? "dark" : "light"
);

}

toggle.addEventListener("click",()=>{

const current =
document.body.getAttribute("data-theme");

const newTheme =
current === "dark"
? "light"
: "dark";

document.body.setAttribute(
"data-theme",
newTheme
);

localStorage.setItem(
"theme",
newTheme
);

});