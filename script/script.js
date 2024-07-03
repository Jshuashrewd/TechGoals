var element = document.getElementById("Name");

element.setAttribute('data-test-id', 'slackDisplayName');

function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    
    const timeElement = document.getElementById('utcTime');
    timeElement.textContent = `Time: ${utcTime}`;
}

// Initial call to display time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);

var time = document.getElementById("utcTime");
time.setAttribute('data-test-id', 'currentTimeUTC');

var email = document.getElementById("email");
email.setAttribute('data-test-id', 'slackEmail');

function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    
    const dayElement = document.getElementById('dayOfWeek');
    dayElement.textContent = `Hey there, it's ${dayOfWeek}`;
}

// Initial call to display the day immediately
updateDayOfWeek();

// Optional: Update the day at midnight to handle day changes
setInterval(updateDayOfWeek, 24 * 60 * 60 * 1000);

var day = document.getElementById("dayOfWeek");
day.setAttribute('data-test-id', 'currentDay');

var profilepic = document.getElementById("img");
profilepic.setAttribute('data-test-id', 'slackProfilePicture');

var hng = document.getElementById("hng");
hng.setAttribute('data-test-id', 'hngLink');

var keyword = document.getElementById("keyword");
keyword.setAttribute('data-test-id', 'keywordLink');

var scrapanyweb = document.getElementById("scrapanyweb");
scrapanyweb.setAttribute('data-test-id', 'scrapanywebLink');