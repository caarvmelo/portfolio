document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les conteneurs des projets
    const projects = document.querySelectorAll('.project');

    // Ajoute un effet interactif sur chaque projet
    projects.forEach(project => {
        // Lorsque la souris entre
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'rotateY(180deg)'; // Rotation 3D
        });

        // Lorsque la souris sort
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'rotateY(0deg)'; // Retour à l'état initial
        });
    });
});
