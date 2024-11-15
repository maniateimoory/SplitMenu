document.querySelectorAll('li').forEach(listItem => {
    listItem.addEventListener('mouseenter', function() {
        let relClass = this.getAttribute('rel');

        let picture = document.querySelector('#picture');
        picture.className = '';
        picture.classList.add(relClass);

        this.classList.add('active');

        this.parentElement.querySelectorAll('li').forEach(sibling => {
            if(sibling !== listItem) {
                sibling.classList.remove('active');
            }
        })
    })
})