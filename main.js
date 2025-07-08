const darkModeToggle = document.getElementById("darkModeToggle"),
  moonIcon = document.getElementById("moonIcon"),
  sunIcon = document.getElementById("sunIcon"),
  htmlEl = document.documentElement;
function setDarkMode(e) {
  e
    ? (htmlEl.classList.add("dark"),
      moonIcon.classList.add("hidden"),
      sunIcon.classList.remove("hidden"),
      localStorage.setItem("theme", "dark"))
    : (htmlEl.classList.remove("dark"),
      moonIcon.classList.remove("hidden"),
      sunIcon.classList.add("hidden"),
      localStorage.setItem("theme", "light"));
}
const isInitiallyDark =
  "dark" === localStorage.theme ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);
setDarkMode(isInitiallyDark),
  darkModeToggle.addEventListener("click", () => {
    setDarkMode(!htmlEl.classList.contains("dark"));
  });
const contactForm = document.getElementById("contactForm"),
  contactSuccess = document.getElementById("contactSuccess");
contactForm &&
  contactSuccess &&
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let t = !0;
    const n = contactForm.querySelectorAll("[required]");
    n.forEach((e) => {
      e.value.trim()
        ? e.classList.remove("border-red-500", "ring-red-500")
        : (e.classList.add("border-red-500", "ring-red-500"), (t = !1));
    }),
      t &&
        (contactSuccess.classList.remove("hidden"),
        contactForm.reset(),
        n.forEach((e) => e.classList.remove("border-red-500", "ring-red-500")),
        setTimeout(() => {
          contactSuccess.classList.add("hidden");
        }, 4e3));
  });
const sections = document.querySelectorAll("main section[id]"),
  navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    window.pageYOffset >= t.offsetTop - 150 && (e = t.getAttribute("id"));
  }),
    navLinks.forEach((t) => {
      t.classList.remove("active"),
        t.getAttribute("href") === `#${e}` && t.classList.add("active");
    });
});
