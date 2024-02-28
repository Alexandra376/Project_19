const container = document.querySelector(".container");
const content = document.querySelector(".content");
const ul = document.createElement("ul");
(async function getData  (){
    const response = await fetch("https://catfact.ninja/facts");
    const {data} = await response.json();

    data.map((facts) => {
        const li = document.createElement("li");
        ul.append(li)
        content.append(ul);
        li.textContent = facts.fact;
    })
})()
