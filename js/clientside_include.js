async function clientSideLoad(class_div, url){
    const fetch_response = await fetch(url);
    target_div = document.querySelector(class_div)
    target_div.innerHTML = await fetch_response.text();
}

clientSideLoad("nav", "/templates/nav.html")
clientSideLoad(".right", "/templates/aside_right.html")
clientSideLoad(".left", "/templates/aside_left.html")