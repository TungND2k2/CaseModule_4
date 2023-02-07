function User(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/user/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (user) => {

            $('#body').html(`<div style="margin-left: 100px"><h2><i class="fa-solid fa-list"></i> Wallet</i></h2>
<div><button onclick="showWallet(localStorage.idUser)"><i class="fa-solid fa-house"></i></button></div>
</div>
<main>
    <div >
        <div class="shadow-lg p-3 mb-5 bg-body rounded container w-50 mt-5">
            <p class="text-center fw-bold">Thông tin cá Nhân</p>
            <strong>Use Name</strong>
            <input type="text" class="form-control" id="username"  value="${user.username}">
            <strong>Password</strong>
            <input type="password" class="form-control"  id="password" value="${user.password}">
           
            <div class="d-flex justify-content-end">
                <button onclick="saveEditUser('${user.id_user}')" class="btn btn-danger my-3"> Thay đổi</button>
            </div>
        </div>
    </div>
</main>

`
            )
        }

    })
}
function saveEditUser(id) {
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {

        username: username,
        password: password,

    }
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/user/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(user),
        success: () => {
            alert('Edit  successfully')
            showWallet(localStorage.idUser)

        }
    })
}