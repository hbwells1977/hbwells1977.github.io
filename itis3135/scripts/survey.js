document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseButton = document.getElementById("addCourse");

    addCourseButton.addEventListener("click", function () {
        const courseDiv = document.createElement("div");
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.placeholder = "Enter course name";
        courseInput.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", function () {
            coursesContainer.removeChild(courseDiv);
        });

        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(deleteButton);
        coursesContainer.insertBefore(courseDiv, addCourseButton);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }

        const first = document.getElementById("first").value;
        const last = document.getElementById("last").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const imageCaption = document.getElementById("imageCaption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webDevBackground = document.getElementById("webDevBackground").value;
        const computerPlatform = document.getElementById("computerPlatform").value;
        const funnyThing = document.getElementById("funnyThing").value;

        let courses = "";
        document.querySelectorAll("#coursesContainer input[type='text']").forEach((input) => {
            courses += '<li>${input.value}</li>';
        });

        if (!image) {
            alert("Please upload an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const resultHTML = `
                <h2>${first}'s Introduction Page</h2>
                <p><strong>Mascot:</strong> ${mascot}</p>
                <img src="${e.target.result}" alt="User Image" width="200">
                <p><em>${imageCaption}</em></p>
                <p><strong>Personal Background:</strong> ${personalBackground}</p>
                <p><strong>Professional Background:</strong> ${professionalBackground}</p>
                <p><strong>Academic Background:</strong> ${academicBackground}</p>
                <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
                <p><strong>Primary Computer Platform:</strong> ${computerPlatform}</p>
                <p><strong>Courses Currently Taking:</strong> ${courses.join(", ")}</p>
                <p><strong>Funny Thing/Interesting Thing to Remember me by:</strong> ${funnyThing}</p>
                <button onclick="location.reload()">Reset</button>
            `;

            document.querySelector("main").innerHTML = resultHTML;
        };

        reader.readAsDataURL(image);
    });

    form.addEventListener("reset", function () {
        location.reload();
    });
});
