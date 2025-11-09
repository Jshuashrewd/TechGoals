var element = document.getElementById("Name");

element.setAttribute("data-test-id", "slackDisplayName");

function updateTime() {
  const now = new Date();
  const watTime = now.toLocaleTimeString("en-US", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  });

  const timeElement = document.getElementById("utcTime");
  timeElement.textContent = `Time: ${watTime}`;
}

// Initial call to display time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);

var time = document.getElementById("utcTime");
time.setAttribute("data-test-id", "currentTimeUTC");

var email = document.getElementById("email");
email.setAttribute("data-test-id", "slackEmail");

function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];

  const dayElement = document.getElementById("dayOfWeek");
  dayElement.textContent = `Hey there, it's ${dayOfWeek}`;
}

// Initial call to display the day immediately
updateDayOfWeek();

// Optional: Update the day at midnight to handle day changes
setInterval(updateDayOfWeek, 24 * 60 * 60 * 1000);

var day = document.getElementById("dayOfWeek");
day.setAttribute("data-test-id", "currentDay");

var profilepic = document.getElementById("img");
profilepic.setAttribute("data-test-id", "slackProfilePicture");

var hng = document.getElementById("hng");
hng.setAttribute("data-test-id", "hngLink");

var keyword = document.getElementById("keyword");
keyword.setAttribute("data-test-id", "keywordLink");

var scrapanyweb = document.getElementById("scrapanyweb");
scrapanyweb.setAttribute("data-test-id", "scrapanywebLink");

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width");
          entry.target.style.width = width + "%";
        }
      });
    },
    { threshold: 0.3 }
  );

  progressBars.forEach((bar) => observer.observe(bar));
});

const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const action = form.action;

  try {
    const response = await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      alertBox.classList.remove("d-none");
      form.reset();
      setTimeout(() => alertBox.classList.add("d-none"), 4000);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Error submitting the form.");
  }
});
