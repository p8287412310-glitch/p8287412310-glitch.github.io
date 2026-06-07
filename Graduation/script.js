const memories = [
{
    image: "images/childhood1.jpg",
    text: "You came into this world and made it 1000 times better"
},
{
    image: "images/childhood2.jpg",
    text: "Your First year at college which was full of compalints"
},
{
    image: "images/childhood3.jpg",
    text: "Your last college fest filled with lots of fun."
},
{
    image: "images/graduation.jpg",
    text: "Today you've become a graduate and I couldn't be prouder."
}
];

let current = 0;

function showMemory() {

    document.getElementById("slideshow").src =
    memories[current].image;

    document.getElementById("memoryText").innerText =
    memories[current].text;
}

setInterval(() => {

    current++;

    if(current >= memories.length){
        current = 0;
    }

    showMemory();

},3000);

showMemory();
window.onload = () => {

    showMemory();

    confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 }
    });

};