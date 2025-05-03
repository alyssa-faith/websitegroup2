const text = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
        else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((element) => text.observe(element))

// Show and Hide Links

function toggle1stLink(btn) {
    var x = document.querySelector('.link1');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        btn.textContent = "Hide Link";
    } else {
        x.style.display = "none";
        btn.textContent = "Show Link";
    }
}

function toggle2ndLink(btn) {
    var x = document.querySelector('.link2');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        btn.textContent = "Hide Link";
    } else {
        x.style.display = "none";
        btn.textContent = "Show Link";
    }
}