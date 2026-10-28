document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector(".gallery-grid");
    const lightbox = document.getElementById("art-lightbox");
    const previewImage = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const closeButton = document.getElementById("lightbox-close");

    if (!gallery || !lightbox || !previewImage || !caption || !closeButton) {
        return;
    }

    let lastTrigger = null;

    gallery.addEventListener("click", function (event) {

        const button = event.target.closest(".gallery-thumb");

        if (!button || !gallery.contains(button)) {
            return;
        }

        const thumbnail = button.querySelector("img");

        if (!thumbnail) {
            return;
        }

        previewImage.src =
            button.dataset.full || thumbnail.currentSrc || thumbnail.src;

        previewImage.alt = thumbnail.alt;
        caption.textContent =
            button.dataset.caption || thumbnail.alt || "";

        lastTrigger = button;

        lightbox.showModal();

        closeButton.focus();
    });

    closeButton.addEventListener("click", function () {
        lightbox.close();
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    lightbox.addEventListener("close", function () {
        previewImage.removeAttribute("src");

        if (lastTrigger) {
            lastTrigger.focus();
        }
    });

});