function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}

function compute() {
  let result = document.getElementById("result");
  let amount = document.getElementById("principal");
  let principal = amount.value;
  if (principal <= 0) {
    alert("Enter a positive number");
    amount.focus();
  } else {
    principal.color = "red";
    let rate = document.getElementById("rate").value;
    let years = parseInt(document.getElementById("years").value);
    let interest = (principal * years * rate) / 100;
    let year = new Date().getFullYear() + parseInt(years);

    let inner = `If you deposit <span class="yellow"">${principal}</span>\<br\>
    at an interest rate of <span class="yellow"">${rate}%</span>\<br\>
    You will receive an amount of <span class="yellow"">${
      parseInt(interest) + parseInt(principal)
    }</span>\<br\>
    in the year <span class="yellow"">${year}</span>.`;

    console.log({
      principal: principal,
      rate: rate,
      years: years,
      interest: interest,
      year: year,
    });

    result.innerHTML = inner;
  }
}
