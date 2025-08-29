// ************Heart icon functionalities*************

const items = document.getElementsByClassName('heart');
const heartCounter = document.getElementById('life-counter');
let Counter = 0;
for (let item of items) {
    item.addEventListener
        ('click', function () {
            Counter++;
            heartCounter.innerText = Counter;
        })
}

// **********Call button functionalities**********

const coinsEl = document.getElementById("coins");
let coins = parseInt(coinsEl.innerText);
// get class lists
const calls = document.getElementsByClassName('call-btn');
const getTitles = document.getElementsByClassName('card-title');
const getNumbers = document.getElementsByClassName('number');
for (let i = 0; i < 9; i++) {
    calls[i].addEventListener('click', function () {
        if (coins >= 20) {
            coins = coins - 20;
            coinsEl.innerText = coins;
        }
        else {
            alert('You do not have sufficient coins!😒\nYou need at least 20🪙');
            return;
        }
        alert(`📞Calling...\n ${getTitles[i].innerText} ${getNumbers[i].innerText}...`);
        // create a new div
        const newDiv = document.createElement('div');
        // div styles
        newDiv.style.backgroundColor = '#FAFAFA';
        newDiv.style.padding = '16px';
        newDiv.style.marginTop = '20px';
        newDiv.style.borderRadius = '16px';
        // create a heading to hold titles
        const heading = document.createElement('h2');
        heading.textContent = getTitles[i].innerText;
        // heading style
        heading.style.fontSize = '18px';
        heading.style.fontWeight = '500';
        // create a p tag to hold number
        const hotline = document.createElement('p');
        hotline.textContent = getNumbers[i].innerText;
        // add current time
        const link = document.createElement("a");
        const now = new Date();
        link.textContent = now.toLocaleTimeString();
        // make another div to hold heading and hotline
        const innerDiv = document.createElement('div');
        innerDiv.appendChild(heading);
        innerDiv.appendChild(hotline);
        // Add all elements to newDiv
        newDiv.appendChild(innerDiv)
        newDiv.appendChild(link);
        newDiv.style.display = 'flex';
        newDiv.style.gap = '20px';
        newDiv.style.alignItems = 'center';
        // finally append the div in the target area
        document.getElementById('history-container').appendChild(newDiv);
    })
}

// ************Clear button functionalities***********

const ParentDiv = document.getElementById('history-container');
document.getElementById('clear-btn').addEventListener('click', function () {
    const children = ParentDiv.children;
    for (let i = 1; i <= children.length; i++) {
        children[i].style.display = 'none';
    }


})

// **************Copy button functionalities*****************

const copyElements = document.getElementsByClassName('copy-btn');
const copyCount = document.getElementById('copy-counter');
let counter = 0;
for (let i = 0; i < copyElements.length; i++) {
    copyElements[i].addEventListener('click', function () {
        counter++;
        copyCount.innerText = counter;
        const textToCopy = getNumbers[i].innerText
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("✅The number is copied successfully:" + textToCopy);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    })
}
