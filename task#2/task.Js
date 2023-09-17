const interests = document.querySelectorAll('.interests_active');

interests.forEach((e) => {
    const interestCheck = e.closest('.interest').querySelector('.interest__check');
    const interestsCheck = e.querySelectorAll('.interest__check');

    interestCheck.addEventListener('click', () => {
        interestsCheck.forEach((event) => {
            interestCheck.checked ? event.checked = true : event.checked = false;
        });
    });
});
