function validateAge() {
    const age = parseInt(document.getElementById("age").value);
    const errorSpan = document.getElementById("age-error");
    let ageGroup = "";

    switch (true) {
        case (age >= 1 && age <= 12):
            ageGroup = "Child";
            break;
        case (age >= 13 && age <= 19):
            ageGroup = "Teenager";
            break;
        case (age >= 20 && age <= 59):
            ageGroup = "Adult";
            break;
        case (age >= 60 && age <= 120):
            ageGroup = "Senior Citizen";
            break;
        default:
            errorSpan.textContent = "Enter age between 1 and 120.";
            return false;
    }

    errorSpan.textContent = "";
    alert("Age category: " + ageGroup);
    return true;
}
