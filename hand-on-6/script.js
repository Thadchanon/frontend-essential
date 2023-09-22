const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`);
    }
    console.log(rawData);

    const courses = rawData.courses;

    for (let i = 0; i < courses.length; i++) {
      const main = document.getElementById("main");

      const newSection = document.createElement("div");

      newSection.setAttribute("class", "course");

      newSection.innerHTML = `        
        <h3>${courses[i].courseNo} ${courses[i].abbrName}</h3>
        <h4>${courses[i].courseNameTh} (${courses[i].courseNameEn})</h4>
        <h4>Department</h4>
        <p>${courses[i].department}</p>
        <h4>Credit</h4>
        <p>${courses[i].credit} credit </p>
        <h4>Credit Hours</h4>
        <p>${courses[i].creditHours}</p>
        <h4>General Education Type</h4>
        <p>${courses[i].genEdType}</p>
        <h4>Total Seats</h4>
        <p>${courses[i].totalSeats}</p>
        <h4>Updated At</h4>
        <p>${courses[i].updatedAt}</p>`;

      main.appendChild(newSection);
    }
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
