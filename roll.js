// header fixed
window.onscroll = function() {
    const docScrollTop = this.document.documentElement.scrollTop;
    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}