window.addEventListener('DOMContentLoaded', () => {
    console.log('Loaded Scripts')

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination"
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },

            0: {
                slidesPerView: 'auto',
            },
        },
    });

    const swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination"
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },

            0: {
                slidesPerView: 'auto',
            },
        },
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
        burgerButton.classList.toggle('open');
    };

    burgerButton?.addEventListener('click', toggleMenu);
})

document.addEventListener("DOMContentLoaded", function () {
    const wrapperForm = document.getElementById("wrapperForm");
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const resetButton = document.getElementById("resetFormButton");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        axios.post("http://localhost:3000/send-form", formData)
          .then(response => {
              console.log("Success:", response.data);
              form.reset();
              wrapperForm.classList.add("hidden");
              thankYouMessage.classList.remove("hidden");
          })
          .catch(error => {
              console.error("Ошибка:", error);
          });
    });
    resetButton.addEventListener("click", function () {
        thankYouMessage.classList.add("hidden");
        wrapperForm.classList.remove("hidden");
    });
});

document.getElementById('dateInput')?.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5);
    e.target.value = value;
});
// TODO test