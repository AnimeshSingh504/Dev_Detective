const lightmode = document.querySelector(".light-mode");
const darkmode = document.querySelector(".dark-mode");
const fullcontent = document.querySelector(".wrapper");
const searchbarpannel = document.querySelector(".search-pannel");
const maincontent = document.querySelector(".content");
const midcontent = document.querySelector(".mid-content");
const buttonmode = document.querySelector(".mode");
const input = document.querySelector(".search-bar");
const userName = document.querySelector(".username");
const dateofjoin = document.querySelector(".join-date");

const username = document.querySelector(".username");
const useravatr = document.querySelector(".user-avtr");
const doj = document.querySelector(".join-date");
const github = document.querySelector(".github-link");
const bio = document.querySelector(".about");
const repo = document.querySelector(".repo-count");
const followers = document.querySelector(".followers-count");
const following = document.querySelector(".following-count");
const arealocation = document.querySelector(".location-details");
const website = document.querySelector(".website-details");
const twitter = document.querySelector(".twitter-details");
const company = document.querySelector(".company-details");

const root = document.documentElement.style;
console.log(root);

var inputplaceholder = document.getElementById("dev-name").placeholder;
console.log(inputplaceholder);

let isdarkmode = false;
darkmode.classList.add("active");

const arealogo = document.querySelector(".location-logo");
const linklogo = document.querySelector(".link-logo");
const twitterlogo = document.querySelector(".twitter-logo");
const companylogo = document.querySelector(".company-logo");

function moreProcessing(){
    let area = arealocation.innerText;
    let web = website.innerText;
    let tweet = twitter.innerText;
    let org = company.innerText;

    console.log(web);

    if(!isdarkmode){
        if(area === "Not available"){
            arealogo.style.opacity = 0.4;
            arealocation.style.opacity = 0.4;
        }
        if(web === "Not available"){ 
            linklogo.style.opacity = 0.4;
            website.style.opacity = 0.4;
        }
        if(tweet === "Not available"){
            twitterlogo.style.opacity = 0.4;
            twitter.style.opacity = 0.4;
        }
        if(org === "Not available"){
            companylogo.style.opacity = 0.4;
            company.style.opacity = 0.4;
        }
    }

    if(isdarkmode){
        if(area === "Not available"){
            arealogo.style.opacity = 0.3;
            arealocation.style.opacity = 0.3;
        }
        if(web === "Not available"){
            linklogo.style.opacity = 0.3
            website.style.opacity = 0.3;
        }
        if(tweet === "Not available"){
            twitterlogo.style.opacity = 0.3;
            twitter.style.opacity = 0.3;
        }
        if(org === "Not available"){
            companylogo.style.opacity = 0.3;
            company.style.opacity = 0.3;
        }
    }
}

function changeopacity(){
    arealogo.style.opacity = 1;
    arealocation.style.opacity = 1;
    linklogo.style.opacity = 1;
    website.style.opacity = 1;
    companylogo.style.opacity = 1;
    company.style.opacity = 1;
    twitterlogo.style.opacity = 1;
    twitter.style.opacity = 1;
}

function settinguplightcolor(){
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow", "rgba(70, 88, 109, 0.25)");
    root.setProperty("--lm-icon-bg", "brightness(100%)");
}

function settingupdarkcolor(){
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow", "rgba(70,88,109,0.15)");
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
}

function setuplightmode(){
    isdarkmode = false;
    darkmode.classList.add("active");
    lightmode.classList.remove("active");
    fullcontent.classList.remove("dark-bg");
    searchbarpannel.classList.remove("dark-foreground");
    maincontent.classList.remove("dark-foreground");
    fullcontent.classList.remove("font-color");
    midcontent.classList.remove("dark-bg");
    buttonmode.classList.remove("font-color");
    input.classList.remove("font-color");
    userName.classList.remove("font-color");
    dateofjoin.classList.remove("font-color");
    bio.style.opacity = "1";
    arealogo.style.filter = "brightness(100%)";
    linklogo.style.filter = "brightness(100%)";
    twitterlogo.style.filter = "brightness(100%)";
    companylogo.style.filter = "brightness(100%)";
    website.style.filter = "brightness(100%)";
    twitter.style.filter = "brightness(100%)";
    repo.style.filter = "brightness(100%)";
    followers.style.filter = "brightness(100%)";
    following.style.filter = "brightness(100%)";
    settinguplightcolor();
}

function setupdarkmode(){
    isdarkmode = true;
    darkmode.classList.remove("active");
    lightmode.classList.add("active");
    fullcontent.classList.add("dark-bg");
    searchbarpannel.classList.add("dark-foreground");
    maincontent.classList.add("dark-foreground");
    fullcontent.classList.add("font-color");
    midcontent.classList.add("dark-bg");
    buttonmode.classList.add("font-color");
    input.classList.add("font-color");
    userName.classList.add("font-color");
    dateofjoin.classList.add("font-color");
    bio.style.opacity = "0.7";
    arealogo.style.filter = "brightness(1000%)";
    linklogo.style.filter = "brightness(1000%)";
    twitterlogo.style.filter = "brightness(1000%)";
    companylogo.style.filter = "brightness(1000%)";
    website.style.filter = "brightness(1000%)";
    twitter.style.filter = "brightness(1000%)";
    repo.style.filter = "brightness(1000%)";
    followers.style.filter = "brightness(1000%)";
    following.style.filter = "brightness(1000%)";
    settingupdarkcolor();
}
setuplightmode();

lightmode.addEventListener("click", () => {
    if(isdarkmode === true){
        setuplightmode();
    }
});

darkmode.addEventListener("click", () => {
    if(isdarkmode === false){
        setupdarkmode();
    }
});

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];


const button = document.querySelector(".btn");

async function timerfunc(){
    await setTimeout(() => {
        noresult.classList.remove("active");
    },4000);

    input.value = "";
    xmark.classList.remove("active");
}


function render(data){

    if(data.message === "Not Found"){
        noresult.classList.add("active");
        timerfunc();
    }
    else{
        useravatr.src = `${data.avatar_url}`;
        username.innerText =  data.name === null? data.login : data.name;
        let converteddate = data.created_at.split("T").shift().split("-");
        doj.innerText = `Joined ${converteddate[2]} ${months[converteddate[1]-1]} ${converteddate[0]}`;
        github.href = `${data.html_url}`;
        github.innerText = `@${data.login}`;
        bio.innerText = data.bio === null? "Not available" : data.bio;
        repo.innerText = `${data.public_repos}`;
        followers.innerText = `${data.followers}`;
        following.innerText = `${data.following}`;
        arealocation.innerText = data.location === null ? "Not available" : data.location;
        website.href = data.blog === ""? "#" : data.blog;
        website.innerText = data.blog === ""? "Not available" : data.blog;
        twitter.innerText = data.twitter_username === null? "Not available" : data.twitter_username;
        twitter.href = data.twitter_username === null? "#" : `https://www.twitter.com/${data.twitter_username}`;
        company.innerText = data.company === null? "Not available" : data.company;
        moreProcessing();
    }
}

async function fetchdata(input){
    try{
        let fetcheddata = await fetch(`https://api.github.com/users/${input}`);
        let converteddata = await fetcheddata.json();
        render(converteddata);
    }
    catch(err){
        input.value = "";
        return;
    }
}

button.addEventListener("click", () => {
    let inputdata = input.value;
    if(inputdata !== ""){
        fetchdata(inputdata);
    }
});

const defaultusername = "AnimeshSingh504";
fetchDefault();

function fetchDefault(){
    const userdata = sessionStorage.getItem("user-data");
    if(!userdata){
        fetchFromDefault();
    }
    else{
        const defaultParsedData = JSON.parse(userdata);
        render(defaultParsedData);
    }
}

async function fetchFromDefault(){
    try{
        let fetchedData = await fetch(`https://api.github.com/users/${defaultusername}`);
        let convertedfetchedData = await fetchedData.json();

        const userDefaultData = {
            "login": "AnimeshSingh504",
            "avatar_url": "https://avatars.githubusercontent.com/u/104762601?v=4",
            "html_url": "https://github.com/AnimeshSingh504",
            "name" : "Animesh Kumar Singh",
            "company" : "Woodenia co.",
            "blog" : "Not available",
            "location" : "Jharkhand, India",
            "bio" : "Undergrad working with multiple technologies, a programmer, coder, web developer and ML enthusiastic developer. Opened for collaboration!!✌️",
            "twitter_username" : "ANIMESH01731625",
            "public_repos" : 4,
            "followers" : 0,
            "following" : 0,
            "created_at" : "2022-05-02T09:45:48Z"
        }
        sessionStorage.setItem("user-data", JSON.stringify(userDefaultData));
        render(convertedfetchedData);
    }
    catch(err){
        input.value = "";
        return;
    }
}

const xmark = document.querySelector(".x-mark");
const noresult = document.querySelector(".noresult");

input.addEventListener("keydown", 
    function(e){
        changeopacity();
        xmark.classList.add("active");
        if(input.value === ""){
            xmark.classList.add()
        }
        xmark.addEventListener("click", () => {
            input.value = "";
            xmark.classList.remove("active");
        });
        
        if(!e){
            var e = window.event;
        }
        if(e.key == "Enter"){
            if(input.value !== ""){
                fetchdata(input.value);
            }
        } 
});

input.addEventListener("keydown", 
    function(){
        if(input.value === ""){
            xmark.classList.remove("active");
        }
});
