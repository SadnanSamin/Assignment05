const hearts = document.getElementsByClassName("hrt-icon");

for (const heart of hearts) {
    let click = false;
    heart.addEventListener("click", function () {
        const currentCount = parseInt(document.getElementById("heart-number").innerText);

        if(click === false){
            const newCount = currentCount+1;
            click = true;
            document.getElementById("heart-number").innerText = newCount;
            heart.style.color = "red";
        }
        else{
            const newCount = currentCount -1;
            click = false
            document.getElementById("heart-number").innerText = newCount;
            heart.style.color = "";
        }

    });
}

const copyButtons = document.getElementsByClassName("copy_button");

for (const copyButton of copyButtons) {
    copyButton.addEventListener("click", function () {
        const par_element = copyButton.parentElement.parentElement
        const copyNumber = par_element.querySelector(".card-number").innerText;
        const copyCount = parseInt(document.getElementById("copyCount").innerText);

        navigator.clipboard.writeText(copyNumber)
            .then(() => {
                alert(`${copyNumber} is copied to the clipboard`);
                const newCount = copyCount+1;
                document.getElementById("copyCount").innerText=newCount;
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });

    })
}