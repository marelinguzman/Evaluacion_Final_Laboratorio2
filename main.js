
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('display-name').innerText = name;
    document.getElementById('display-email').innerText = email;

    document.getElementById('form-container').style.display = 'none';
    document.getElementById('display-container').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('display-container').style.display = 'none';
});


function cargar_botones(){
    let caja_btn = document.querySelector(".btn");

    caja_btn.innerHTML = ` <div class="btn_mas"> + </div>`;
}
cargar_botones();