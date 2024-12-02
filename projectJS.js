
const bannerContainer = document.getElementById("banner-container");
const bannerImage = document.createElement("img");
bannerImage.id = "banner";
bannerImage.src = "ProjectBanner.png"; 
bannerImage.alt = "Build Your Meal Plan - Banner";
bannerContainer.appendChild(bannerImage);


document.getElementById("generate").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;
    let mondayBreakfast = document.getElementById("mondayBreakfast").value;
    let tuesdayBreakfast = document.getElementById("tuesdayBreakfast").value;
    let wednesdayBreakfast = document.getElementById("wednesdayBreakfast").value;
    let thursdayBreakfast = document.getElementById("thursdayBreakfast").value;
    let fridayBreakfast = document.getElementById("fridayBreakfast").value;
    let saturdayBreakfast = document.getElementById("saturdayBreakfast").value;
    let sundayBreakfast = document.getElementById("sundayBreakfast").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    document.write(`
        <html>
        <head>
            <title>Weekly Meal Plan</title>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal:</strong> ${goal}</p>
            <h2>Weekly Meal Plan</h2>
            <ul>
                <li>Monday Breakfast: ${mondayBreakfast || "No entry"}</li>
                <li>Tuesday Breakfast: ${tuesdayBreakfast || "No entry"}</li>
                <li>Wednesday Breakfast: ${wednesdayBreakfast || "No entry"}</li>
                <li>Thursday Breakfast: ${thursdayBreakfast || "No entry"}</li>
                <li>Friday Breakfast: ${fridayBreakfast || "No entry"}</li>
                <li>Saturday Breakfast: ${saturdayBreakfast || "No entry"}</li>
                <li>Sunday Breakfast: ${sundayBreakfast || "No entry"}</li>
            </ul>
            <button onclick="window.print()">Print</button>
        </body>
        </html>
    `);
});
