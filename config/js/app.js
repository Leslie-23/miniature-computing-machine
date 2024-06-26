const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show1");
    }
  });
});

const hiddenElements1 = document.querySelectorAll(".hidden1");

hiddenElements1.forEach((el1) => observer1.observe(el1));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hidden2");

hiddenElements2.forEach((el2) => observer2.observe(el2));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    }
  });
});

const hiddenElements3 = document.querySelectorAll(".hidden3");

hiddenElements3.forEach((el3) => observer3.observe(el3));
