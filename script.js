document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById("year");
    currentYear.textContent = `${new Date().getFullYear()}`

    fetchData();
});

async function fetchData() {
    const employeePath = "./employees.json"

    try{
        const result = await fetch(employeePath);

        if(!result.ok){
            throw new Error("Data could not be loaded.")
        }

        const employeeData = await result.json();
        displayEmployees(employeeData);
    } catch (error) {
        console.error("Failed to fetch data.")
    }
};

function displayEmployees(departmentData) {
    const main = document.querySelector("main");
    const section = document.createElement("section");

    departmentData.forEach(departments => {
        const h4 = document.createElement("h4");
        h4.textContent = departments.department;
        section.appendChild(h4);

        const ul = document.createElement("ul");
        departments.employees.forEach(employee => {
            const li = document.createElement("li");
            li.textContent = employee;
            ul.appendChild(li);
        });

        section.appendChild(ul);
    });

    main.appendChild(section);
};