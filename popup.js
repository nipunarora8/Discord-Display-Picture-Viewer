function show(){
    document.getElementsByClassName("reset")[0].style.display = "block";
    document.getElementsByClassName("instructions")[0].style.display = "block";
    document.getElementsByClassName("submit")[0].style.display = "block";
    document.getElementsByClassName("gif")[0].style.display = "block";
    document.getElementsByClassName("dp")[0].style.display = "block";
    // document.getElementsByClassName("btn_submit")[0].style.display = "block";
}

function hide(){
    document.getElementsByClassName("reset")[0].style.display = "none";
    document.getElementsByClassName("instructions")[0].style.display = "none";
    document.getElementsByClassName("submit")[0].style.display = "none";
    document.getElementsByClassName("frame")[0].style.display = "none";
    document.getElementsByClassName("gif")[0].style.display = "none";
    document.getElementsByClassName("dp")[0].style.display = "none";
    // document.getElementsByClassName("btn_submit")[0].style.display = "none";
}
var gif = false
var dp = false
var img_link = "a";
function injectTheScript() {
    // Gets all tabs that have the specified properties, or all tabs if no properties are specified (in our case we choose current active tab)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "utilities.js"}, function(){
            chrome.runtime.onMessage.addListener((request) => {
                console.log(request.img_link)
                
                if (gif==true){
                    document.getElementsByClassName("frame")[0].src = request.img_link.replace("png","gif");
                    document.getElementsByClassName("frame_link")[0].href = request.img_link.replace("png","gif");}
                else{
                    document.getElementsByClassName("frame")[0].src = request.img_link;
                    document.getElementsByClassName("frame_link")[0].href = request.img_link;
                }

                document.getElementsByClassName("frame")[0].style.display = "block";
                document.getElementsByClassName('reset')[0].style.display = "block";
            });
        });
    });
}
document.getElementsByClassName('gif')[0].addEventListener('click', function(){gif=true});
document.getElementsByClassName('dp')[0].addEventListener('click', function(){dp=true});

// adding listener to your button in popup window
document.getElementsByClassName('submit')[0].addEventListener('click', injectTheScript);



console.log(gif)
console.log(dp)

// document.getElementsByClassName("btn_submit")[0].addEventListener('click',output);

document.getElementsByClassName("start")[0].addEventListener('click',show);
document.getElementsByClassName("reset")[0].addEventListener('click',hide);

