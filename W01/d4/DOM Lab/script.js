const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML ="<h1> SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let nav_list = "";
menuLinks.forEach(element => {
    nav_list += "<a href = '"+ element.href + "'>" + element.text + "</a>";
})
nav_list += "";

topMenuEl.innerHTML = nav_list;