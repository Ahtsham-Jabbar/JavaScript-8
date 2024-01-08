let btnMode = document.querySelector("#Mode");
let currmode = "light";
let body = document.querySelector("body");

btnMode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // document.querySelector("body").style.backgroundColor = "black";
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currmode);
});
