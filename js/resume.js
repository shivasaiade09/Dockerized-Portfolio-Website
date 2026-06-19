// Resume Download Button Handler

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("downloadResume");

    if (btn) {
        btn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "images/resume/Shiva-Resume.pdf";
            link.download = "Shiva-Resume.pdf";
            link.click();
        });
    }
});
