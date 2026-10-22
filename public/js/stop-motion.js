document.addEventListener('DOMContentLoaded', function() {
     const gifs = document.querySelectorAll('img[src$=".gif" i]');
    const masterBtn = document.getElementById('master-gif-toggle');
    let allPlaying = false;

     gifs.forEach(function(gif) {
        
 
        const container = document.createElement('div');
        container.className = 'gif-container';
        
        gif.classList.add('animated-gif');
        
        const canvas = document.createElement('canvas');
        canvas.className = 'gif-canvas';
        canvas.width = gif.naturalWidth || gif.width;
        canvas.height = gif.naturalHeight || gif.height;
        
        const drawFirstFrame = function() {
            const ctx = canvas.getContext('2d');
            ctx.drawImage(gif, 0, 0, canvas.width, canvas.height);
        };

        if (gif.complete) {
            drawFirstFrame();
        } else {
            gif.addEventListener('load', drawFirstFrame);
        }

        gif.parentNode.insertBefore(container, gif);
        container.appendChild(canvas);
        container.appendChild(gif);
    });

     if (masterBtn) {
        masterBtn.addEventListener('click', function() {
            allPlaying = !allPlaying;
            
             const containers = document.querySelectorAll('.gif-container');
            
            containers.forEach(function(container) {
                if (allPlaying) {
                    container.classList.add('playing');
                } else {
                    container.classList.remove('playing');
                }
            });

            const iconSpan = masterBtn.querySelector('.icon');
            const textSpan = masterBtn.querySelector('.text');
            
            if (allPlaying) {
                iconSpan.textContent = '⏸';
                textSpan.textContent = 'Stop';
                masterBtn.setAttribute('aria-label', 'Pause all animations');
            } else {
                iconSpan.textContent = '▶';
                textSpan.textContent = 'Play';
                masterBtn.setAttribute('aria-label', 'Play all animations');
            }
        });
    }
});