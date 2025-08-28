const hearts = document.getElementsByClassName("hrt-icon");

for (const heart of hearts) {
    let click = false;
    heart.addEventListener("click", function () {
        const currentCount = parseInt(document.getElementById("heart-number").innerText);

        if (click === false) {
            const newCount = currentCount + 1;
            click = true;
            document.getElementById("heart-number").innerText = newCount;
            heart.style.color = "red";
        }
        else {
            const newCount = currentCount - 1;
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
                const newCount = copyCount + 1;
                document.getElementById("copyCount").innerText = newCount;
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });

    })
}

// call functionality

const history = [];

const callButtons = document.getElementsByClassName("callButton");

for (const callButton of callButtons) {

    callButton.addEventListener("click", function () {

        const coinCount = parseInt(document.getElementById("coinCount").innerText);
        const callerID = callButton.parentElement.parentElement;
        const heading = callerID.querySelector(".heading").innerText;
        const callerNumber = callerID.querySelector(".card-number").innerText;

        if (coinCount >= 20) {
            alert(`Calling ${heading} ${callerNumber} ...`);
            const newCoinCount = coinCount - 20;
            document.getElementById("coinCount").innerText = newCoinCount;

            const storeHistory = document.getElementById("callerHistory");


            const callHistory = {
                name: heading,
                number: callerNumber,
                time: new Date().toLocaleTimeString()
            };


            history.push(callHistory);


            const div = document.createElement("div");
            div.innerHTML = `
                <div class ="bg-[#FAFAFA] hind-madurai-font flex justify-between items-center my-4 p-4 rounded-[8px]">
                    <div>
                    <h1 class="inter-font font-semibold text-[18px]">${callHistory.name}</h1>
                    <h1 class="text-[18px] text-gray-500 ">${callHistory.number}</h1>
                </div>
                <div>
                    <h1 class="text-[18px] ">${callHistory.time}</h1>
                </div>
                </div>
            `;
            storeHistory.appendChild(div);

        } else {
            alert("Not enough coin to make a call");
        }
    });
}


// clear button functionality

document.getElementById("clearButton").addEventListener("click", function () {
    const storeHistory = document.getElementById("callerHistory");
    storeHistory.innerText = " ";
})



