var text_label
document.addEventListener('click', (e) => text_label = e.target);
img_link = text_label.parentElement.firstElementChild.src.replace("128","1024")

chrome.runtime.sendMessage({img_link:img_link});