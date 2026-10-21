document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tag-btn');
    const items = document.querySelectorAll('.gallery-item, .blog-item, .media-item');
    const allButton = document.querySelector('[data-filter="all"]');

     function filterItems() {
         const activeFilters = Array.from(document.querySelectorAll('.tag-btn.active'))
                                   .map(btn => btn.getAttribute('data-filter'))
                                   .filter(val => val !== 'all');

         items.forEach(item => {
             const itemTags = (item.getAttribute('data-tags') || '').split(' ');

            if (activeFilters.length === 0) {
 
                item.classList.remove('hidden');
            } else {
                // OR logic = activeFilters.some, ALL logic = activeFilters.every
                const matchesAny = activeFilters.every(filter => itemTags.includes(filter));
                
                if (matchesAny) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    }

     buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            if (filterValue === 'all') {
                 buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            } else {
                 button.classList.toggle('active');
                
                 allButton.classList.remove('active');

                 const anyActive = Array.from(buttons).some(btn => btn.classList.contains('active'));
                
                 if (!anyActive) {
                    allButton.classList.add('active');
                }
            }

             filterItems();
        });
    });

 
     const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');

    if (tagParam) {
         const targetButton = document.querySelector(`.tag-btn[data-filter="${tagParam}"]`);
        
        if (targetButton) {
             targetButton.click(); 
        }
    }
});
    