// just start the fantastic coding
// alert("js file is working");
alert("click the start test to begin the test");
let options = document.querySelectorAll(".opt");
let submit = document.querySelectorAll(".submit-btn");
let siderBoxAll = document.querySelectorAll(".sider-box");
let quizeContainer = document.querySelectorAll(".quize-ques-container");
let result = document.querySelector(".tscore");
let sider = document.querySelector(".sider");
let resultdiv = document.querySelector(".result");
let maindiv = document.querySelector(".maindiv");

console.log(quizeContainer);
let a = 0;
let uniqueOpt = function (a) {};
let optionClick = () => {
  options.forEach((e) => {
    e.addEventListener("click", function () {
      if (e.classList.contains("right")) {
        e.classList.remove("right");
      } else {
        Array.from(e.parentElement.children).forEach((event) => {
          if (event.classList.contains("right")) {
            event.classList.remove("right");
            // event.style.backgroundColor = "blue";
          }
        });
        e.classList.add("right");
      }
      // console.log(options);
    });
  });
  siderbtn();
};
let submitfn = () => {
  submit.forEach((e) => {
    e.addEventListener("click", () => {
      TotalScore();
      console.log(a);
      sider.style.display = "flex";
      resultdiv.style.display = "block";
      maindiv.style.display = "none";
      result.innerText = `Your Quiz Score is : ${a}`;

      a = 0;
    });
  });
};

let TotalScore = function () {
  options.forEach((e) => {
    if (e.classList.contains("right")) {
      if (e.classList.contains("good")) {
        // alert(e.classList.contains("good"));
        a = a + 1;
      }
    }
  });
};

let siderbtn = function () {
  siderBoxAll.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.innerText);
      if (e.innerText === "Start Test") {
        Array.from(quizeContainer).forEach((event) => {
          Array.from(quizeContainer).forEach((event1) => {
            if (event1.classList.contains("openQuize")) {
              event1.classList.contains("openQuize");
              event1.style.display = "flex";
              event1.classList.remove("openQuize");
              event1.classList.contains("openQuize");
            }
          });
          if (event.classList.contains("C-language")) {
            event.style.display = "flex";
            maindiv.style.display = "flex";
            resultdiv.style.display = "none";

            event.classList.add("openQuize");
            console.log(event.classList.contains("openQuize"));
          }
        });
      } else if (e.innerText === "HTML") {
        Array.from(quizeContainer).forEach((e) => {
          Array.from(quizeContainer).forEach((e) => {
            if (e.classList.contains("openQuize")) {
              e.style.display = "none";
              e.classList.remove("openQuize");
            }
          });
          if (e.classList.contains("HTML")) {
            e.style.display = "flex";
            e.classList.add("openQuize");
          }
        });
      }
    });
  });
};

// function calling
optionClick();
submitfn();
