function hotoSnackbar(id) {
    let el = document.getElementById(id);
    el.classList.add("hoto-snackbar-show");
    setTimeout(function() { el.classList.remove("hoto-snackbar-show"); }, 3000);
}

function hotoDropdown(id) {
    let el = document.getElementById(id);
    el.classList.toggle("hoto-dropdown-show");
}

function hotoModal(id) {
    let el = document.getElementById(id);
    el.classList.toggle("hoto-modal-show");
    let body = document.getElementsByTagName("body")[0];
}