const btnEl = document.getElementById("btn");
const birthdateEl = document.getElementById("birthdate");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdateValue = birthdateEl.value;
  if (birthdateValue === "") {
    alert("please enter your birthdate");
  } else {
    const ageValue = getAge(birthdateValue);
    resultEl.innerText = `Your Age is ${ageValue} ${
      ageValue > 1 ? "years" : "year"
    } old `;
  }
}

function getAge(birthdateValue) {
  const currentDate = new Date();
  const birthdate = new Date(birthdateValue);
  let age = currentDate.getFullYear() - birthdate.getFullYear();
  const month = currentDate.getMonth() - birthdate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
