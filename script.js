document.addEventListener("DOMContentLoaded", () => {
    const currentYear = document.getElementById("year");
    currentYear.textContent = `${new Date().getFullYear()}`
})