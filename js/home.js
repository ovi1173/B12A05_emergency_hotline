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
// call button functionality

const coinsEl = document.getElementById("coins");
let coins = parseInt(coinsEl.innerText);
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
            alert('You do not have sufficient coins you need at least 20 coins');
            return;
        }
        alert(`calling ${getTitles[i].innerText} ${getNumbers[i].innerText}`);
        const newDiv = document.createElement('div');
        // title style
        newDiv.style.backgroundColor = '#FAFAFA';
        newDiv.style.padding = '16px';
        newDiv.style.marginTop = '20px';
        newDiv.style.borderRadius = '16px';

        const heading = document.createElement('h2');
        heading.textContent = getTitles[i].innerText;
        // heading style
        heading.style.fontSize = '18px';
        heading.style.fontWeight = '500';
        const hotline = document.createElement('p');
        hotline.textContent = getNumbers[i].innerText;
        const link = document.createElement("a");
        const now = new Date();
        link.textContent = now.toLocaleTimeString();
        link.href = "#";

        const innerDiv = document.createElement('div');

        innerDiv.appendChild(heading);
        innerDiv.appendChild(hotline);
        newDiv.appendChild(innerDiv)
        newDiv.appendChild(link);
        newDiv.style.display = 'flex';
        newDiv.style.gap = '20px';
        newDiv.style.alignItems = 'center';
        document.getElementById('history-container').appendChild(newDiv);
    })
}
// clear button
const ParentDiv = document.getElementById('history-container');
document.getElementById('clear-btn').addEventListener('click', function () {
    const children = ParentDiv.children;
    console.log(children.length);
    for (let i = 1; i <= children.length; i++) {
        children[i].style.display = 'none';
    }

})

// copy button functionality
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
                alert("The number is copied successfully:" + textToCopy);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    })
}
