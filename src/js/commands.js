// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

sp = startpage
function startpage(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.startpage.com/do/dsearch?query=" + search)
    } else {
        window.open("https://www.startpage.com")
    }
}

function echo(args) {
    block_log(args)
}

r = reddit;
function reddit(args) {
    window.open("https://reddit.com");
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}





