clientSideLoad(".left", "aside_left.html")
clientSideLoad(".right", "aside_right.html")
clientSideLoad("nav", "nav.html")

async function clientSideLoad(class_div, url){
    const fetch_response = await fetch(url);
    target_div = document.querySelector(class_div)
    target_div.innerHTML = await fetch_response.text();
}