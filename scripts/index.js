 var typed = new Typed("#element", {
      strings: [
        "Fronted Developer",
        "3D Modeling",
        "Charecter Animation",
        "<b>Game Developer</b> ",
      ],
      typeSpeed: 60,
    });
function downloadResume() {
            const link = document.createElement('a');
            link.href = 'images/resume.pdf'; // Replace with the actual path to your resume
            link.download = 'resume.pdf'; // Replace with the desired name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
}
function visitGithub() {
    const link = document.createElement('a');
    link.href = 'https://github.com/rohitvaru/';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click(); // This will open the link in a new tab
    document.body.removeChild(link);
}    