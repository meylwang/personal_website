let timer;
let shouldLoad;

function loadingHandler() {
    let toParse = document.referrer;
    if (toParse.includes('melindawang') || performance.navigation.type===1 || performance.navigation.type===2) {
        shouldLoad = false;
        removeLoader();
    } else {
        shouldLoad = true;
        loadingAnim();
    }
}

function loadingAnim() {
    let loaderLetters;
    let counter;
    let loaderAnim = [
        {name: 'H', time: 500, delete: 0},
        {name: 'i', time: 50, delete: 0},
        {name: '!', time: 50, delete: 0},
        {name: ' ', time: 50, delete: 0},
        {name: 'm', time: 100, delete: 1},
        {name: 'M', time: 50, delete: 0},
        {name: 'y', time: 50, delete: 0},
        {name: ' ', time: 100, delete: 0},
        {name: 'n', time: 100, delete: 0},
        {name: 'a', time: 50, delete: 0},
        {name: 'm', time: 50, delete: 0},
        {name: 'e', time: 100, delete: 0},
        {name: ' ', time: 100, delete: 0},
        {name: 'i', time: 100, delete: 0},
        {name: 's', time: 100, delete: 0},
        {name: ' ', time: 100, delete: 0},
        {name: 'M', time: 50, delete: 0},
        {name: 'e', time: 50, delete: 0},
        {name: 'l', time: 50, delete: 0},
        {name: 'i', time: 50, delete: 0},
        {name: 'n', time: 50, delete: 0},
        {name: 'd', time: 50, delete: 0},
        {name: 'a', time: 100, delete: 0},
        {name: ' ', time: 100, delete: 0},
        {name: 'W', time: 100, delete: 0},
        {name: 'a', time: 50, delete: 0},
        {name: 'n', time: 50, delete: 0},
        {name: 'g', time: 100, delete: 0},
        {name: '.', time: 100, delete: 0},
        {name: '.', time: 100, delete: 0},
        {name: '.', time: 500, delete: 0},
    ];

    function loaderTimer() {
        loaderLetters = document.getElementsByClassName('loader-letter');
        counter=0;
        timer = setTimeout(loaderTimerHelper(), 11000);
    }

    function loaderTimerHelper() {
        if (loaderLetters[counter] == null) {
            timer = setTimeout(removeLoader(), 9000);
            return;
        }

        if (loaderAnim[counter].delete !== 2) {
            loaderLetters[counter].style.display = "block";
            if (loaderAnim[counter].delete !== 1) {
                counter++;
            } else {
                loaderAnim[counter].delete = 2;
            }
        } else {
            loaderLetters[counter].style.display = "none";
            counter ++;
        }

        timer = null;
        timer = setTimeout(loaderTimerHelper, loaderAnim[counter-1].time);
    }

    loaderTimer();
}


function removeLoader() {
    let loader = document.getElementById('loader');
    loader.classList.add('fade');
    timer = null;
    timer = setTimeout(showPage, 4000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    let body = document.getElementsByTagName('BODY');
    body[0].style.overflowy = "scroll";
}

loadingHandler();