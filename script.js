/* const main = () => {
  const frontendInput = document.getElementById("frontend");

  const frontendButton = document.getElementById("add-front");

  const frontendMilestonesList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMilestonesList.appendChild(newList);
  });

  const backendInput = document.getElementById("backend");

  const backendButton = document.getElementById("add-back");

  const backendMilestonesList = document.getElementById("backend-milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = backendInput.value;

    backendMilestonesList.appendChild(newList);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
}); */

const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`);
    }
    console.log(rawData);
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
