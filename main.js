// Counter JS Begins ---HOME PAGE---
const endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);
setInterval(() => {
  const now = new Date().getTime();
  const diff = endTime - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);
// Counter JS Ends ---HOME PAGE---

// Accordion Filter JS Begins ---products listview page---
function toggleAccordion(btn) {
    const item = btn.closest(".accordion-item");
    const content = item.querySelector(".accordion-content");
    const arrow = btn.querySelector(".arrow");

    const isClosed = content.classList.contains("max-h-0");

    if (isClosed) {
        content.classList.remove("max-h-0", "opacity-0");
        content.classList.add("max-h-[500px]", "opacity-100");
        arrow.classList.add("rotate-180");
    } else {
        content.classList.add("max-h-0", "opacity-0");
        content.classList.remove("max-h-[500px]", "opacity-100");
        arrow.classList.remove("rotate-180");
    }
}
// Accordion Filter JS Ends ---products listview page---
// Like Button Toggle JS Begins ---products listview page---
function toggleLike(btn) {
    const icon = btn.querySelector("i");

    if (icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular", "text-gray-400");
      icon.classList.add("fa-solid", "text-red-500");
    } else {
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular", "text-gray-400");
    }
  }
// Like Button Toggle JS Ends ---products listview page---
// Tabs Section Tabs JS Begins ---DETAILS PAGE--- 
function openTab(evt, tabId) {
  // hide all tab contents
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.add("hidden");
  });

  // remove active style from all buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("text-blue-600", "border-b-2", "border-blue-600");
    btn.classList.add("text-gray-500");
  });

  // show selected tab
  document.getElementById(tabId).classList.remove("hidden");

  // add active style
  evt.currentTarget.classList.add(
    "text-blue-600",
    "border-b-2",
    "border-blue-600"
  );
  evt.currentTarget.classList.remove("text-gray-500");
}
// Tabs Section Tabs JS Ends ---DETAILS PAGE--- -->