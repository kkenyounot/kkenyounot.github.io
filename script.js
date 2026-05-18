document.getElementById("splash").addEventListener("click", () => {
  document.getElementById("splash").classList.add("hidden");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("show");
      }
    });
  },
  {
    rootMargin: "0px 0px -20% 0px",
  },
);

const todoElements = document.querySelectorAll(".right, .left, .rightcaption");
todoElements.forEach((el) => observer.observe(el));
