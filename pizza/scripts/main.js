const myImage = document.querySelector("img");

myImage.onclick = () => 
{
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/pizza.jpg")
    {
        myImage.setAttribute("src", "images/beer.jpg");
    }
    else
    {
        myImage.setAttribute("src", "images/pizza.jpg");
    }
}