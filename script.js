
// selected dom here F
const quate = document.getElementById("quate");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const copyBtn = document.querySelector(".copy")





// async function that get response from APi
async function getquate() {

    quate.textContent = "Loading...";
    author.textContent = "";

    quate.classList.remove("show");
    author.classList.remove("show");


    try {
        const response = await fetch(
            "https://quotes-api-self.vercel.app/quote"
        );
        const data = await response.json();

        quate.textContent = `"${data.quote}"`;

        author.textContent = `"${data.author}"`;

        // for fade in animation
        setTimeout(() => {
            quate.classList.add("show");
            author.classList.add("show");
        }, 100);
    } catch (error) {
        quate.textContent = "Failed to fetch quate";

        author.textContent = "";
    }
}

btn.addEventListener("click", getquate);

getquate();



// function to copy the quote
function copyQuote() {
    const text = quate.textContent + "\n" + author.textContent;
    navigator.clipboard.writeText(text);

    alert("Quate copied to clipboard")

}

copyBtn.addEventListener("click", () => {
    copyQuote()

})


