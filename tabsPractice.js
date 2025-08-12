function showTab(tabTrigger) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => {
        const contentKey = tab.dataset.tabContent;
        if (contentKey === tabTrigger) {
            tab.classList.add("tab-content-active");
        } else {
            tab.classList.remove("tab-content-active");
        }
    });

    const tabButtons = document.querySelectorAll(".tab-button")
    tabButtons.forEach(tab => {
        const contentKey = tab.dataset.tabButton;
        if (contentKey === tabTrigger) {
            tab.classList.add("tab-button-active");
        } else {
            tab.classList.remove("tab-button-active");
        }
    });
};

document.addEventListener("click", function (e) {

    const tabTrigger = e.target.dataset.tabButton;
    if (tabTrigger) {
        showTab(tabTrigger);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    showTab("tab1");
})