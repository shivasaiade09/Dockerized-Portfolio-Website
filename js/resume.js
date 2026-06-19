// Resume Download Button Handler

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("downloadResume");

    if (btn) {
        btn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "assets/resume/Shiva_Sai_Resume.pdf";
            link.download = "Shiva_Sai_Resume.pdf";
            link.click();
        });
    }
});
