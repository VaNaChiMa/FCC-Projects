const menuArticles = document.querySelectorAll('li');
const menuLinks = document.querySelectorAll('#navbar a');

menuArticles.forEach(article => {
    article.addEventListener('click', () => {
        article.classList.add('active');
    })
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClasses()
        link.classList.add('active');
    })
})

function removeActiveClasses() {
    menuArticles.forEach(article => {
        article.classList.remove('active');
        })
    menuLinks.forEach(link => {
        link.classList.remove('active');
            })
}