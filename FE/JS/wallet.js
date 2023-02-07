

function showWallet(id) {
    console.log(localStorage.token)
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/wallet/home/"+id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (wallet) => {

            let html = ` <div style="margin-left: 100px"><h2><i class="fa-solid fa-list"></i> Wallet</i></h2><button onclick="addWallet()" class="btn btn-warning"><i class="fa-solid fa-plus"></i></button>\n</div>`
            wallet.map((item, index) => {
                html += ` 
<table class="table table-hover" style="width: 1000px;height: 100px;margin-left: 100px" > 
<tr>
                   <td>${index + 1}</td>
                   <td><i class="fa-solid fa-wallet"></i>${item.name}</td>
                   <td><i class="fa-solid fa-dollar-sign"></i>${item.moneyTotal}</td>
                   <td><button onclick="listTransaction('${item.id_wallet}')" class="btn btn-outline-info"><i class="fa-solid fa-circle-info"></i></button></td>
                   <td><button onclick="editWalletForm('${item.id_wallet}')" class="btn btn-outline-success"><i class="fa-solid fa-pen-to-square"></i></button></td>
                   <td><button  onclick="deleteWallet('${item.id_wallet}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
               </tr>
              </table>  `
            })
            $('#body').html(html)
        }
    })
}
function walletHome(id){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/wallet/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (wallet) => {
            $('#body').html(`
<div style="margin-left: 60px;height: 750px;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
<h2><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<h2><i class="fa-solid fa-dollar-sign"></i>: ${wallet.wallet.moneyTotal}</h2>
<button onclick="listTransaction('${wallet.wallet.id_wallet}')"><i class="fa-solid fa-list"></i></button>
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
<div style="margin-left: 330px"><button class="btn btn-outline-success" onclick="walletTranSpending('${wallet.wallet.id_wallet}')">Spending</button>
<button class="btn btn-outline-success" onclick="Transaction('${wallet.wallet.id_wallet}')">Proceeds</button></div>

`
            )}
    })
}

function addWallet() {
    $('#body').html(`<div style="margin-left: 100px"><h2><i class="fa-solid fa-list"></i> Wallet</i></h2>
<div><button onclick="showWallet(localStorage.idUser)"><i class="fa-solid fa-house"></i></button></div>
<div >
<main class="container">
    <div class="shadow-sm p-3 mb-5 bg-body rounded ">
        <div >
            <p>Thông tin chung</p>
            <p>Tên ví</p>
            <input type="text" class="form-control w-25"  id="name" name="name">
            <p>Số dư ban đầu</p>
            <input type="text" class="form-control w-25"  id="moneyTotal" name="money">
            <button onclick="saveAddWallet()" type="button" class="btn btn-success my-5 px-5">Cập nhật cài đặt</button>
        </div>
        <!-- Modal -->


    </div>
</main>
</div>
 
`)
}

function saveAddWallet() {
    let name = $('#name').val();
    let moneyTotal = $('#moneyTotal').val();
    let wallet = {

        name: name,
        moneyTotal: moneyTotal,
        idUser:localStorage.idUser
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/wallet/create",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(wallet),
        success: () => {
            alert("created successfully")
            showWallet(localStorage.idUser)
        }
    })
}

function editWalletForm(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/wallet/edit/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (editWallet) => {

            $('#body').html(`<div style="margin-left: 100px"><h2><i class="fa-solid fa-list"></i> Wallet</i></h2>
<div><button onclick="showWallet(localStorage.idUser)"><i class="fa-solid fa-house"></i></button></div>
<main class="container">
    <div class="shadow-sm p-3 mb-5 bg-body rounded ">
        <div >
            <p>Thông tin chung</p>
            <p>Tên ví</p>
            <input type="text" class="form-control w-25"  id="name" value="${editWallet.wallet.name}">
            <p>Số dư ban đầu</p>
            <input type="text" class="form-control w-25"  id="moneyTotal" value="${editWallet.wallet.moneyTotal}">
            <button onclick="saveEditWallet('${editWallet.wallet.id_wallet}')" type="button" class="btn btn-success my-5 px-5">Cập nhật cài đặt</button>
        </div>
        <!-- Modal -->


    </div>
</main>
</div>
`
            )
        }

    })
}

function saveEditWallet(id) {

    let name = $('#name').val();
    let moneyTotal = $('#moneyTotal').val();
    let wallet = {
        name: name,
        moneyTotal: moneyTotal,

    }
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/wallet/edit/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(wallet),
        success: () => {
            showWallet(localStorage.idUser)

        }
    })
}

function deleteWallet(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/wallet/delete/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: () => {
            showWallet(localStorage.idUser)
        }
    })
}
