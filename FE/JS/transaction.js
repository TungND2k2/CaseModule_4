function Transaction(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/wallet/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (wallet) => {
            $('#body').html(`
<div >
<h2><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<h2><i class="fa-solid fa-dollar-sign"></i>: ${wallet.wallet.moneyTotal}</h2>
<button onclick="listTransaction('${wallet.wallet.id_wallet}')"><i class="fa-solid fa-list"></i></button>
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
<main class="container shadow-sm p-3 mb-5 bg-body rounded">
    <div class="row py-2 mb-2" style="background-color:#f4f7fa">
        <div class="col">
            <strong>Giao dịch</strong>
        </div>
        <div class="col text-center">
            Tiêu chí
        </div>
        <div class="col text-center">
            Thời gian
        </div>
        <div class="col text-center">
            Số tiền
        </div>
     
    </div>
    <div >
        <div class="row py-2 mb-2" style="background-color:#f4f7fa">
            <div class="col">
                <select class="form-select" aria-label=".form-select-lg example" id="transaction" >
                    <option value="spending">Chi Tiêu</option>
                    <option value="proceeds">Thu nhập</option>
                </select>
            </div>
            <div class="col">
                </select>
               <select class="form-select" multiple aria-label="multiple select example" style="width: 200px;height: 210px"  id="categories">
               <option value="${wallet.categories[0].id_category}">${wallet.categories[0].name}</option>
               <option value="${wallet.categories[1].id_category}">${wallet.categories[1].name}</option>
               <option value="${wallet.categories[2].id_category}">${wallet.categories[2].name}</option>
               <option value="${wallet.categories[3].id_category}">${wallet.categories[3].name}</option>
               <option value="${wallet.categories[4].id_category}">${wallet.categories[4].name}</option>
               <option value="${wallet.categories[5].id_category}">${wallet.categories[5].name}</option>
               <option value="${wallet.categories[6].id_category}">${wallet.categories[6].name}</option>
</select>
            </div>
            <div class="col">
                <input type="text" class="form-control" value="${new Date()}" id="time" disabled>

            </div>
            <div class="col ">
                <input type="number" class="form-control" id="money">
            </div>
            <div class="col-1 text-end">
                <button type="submit" onclick="addTransactions('${wallet.wallet.id_wallet}')" class="btn btn-primary">Lưu</button>
            </div>
        </div>
    </div>
</main>

              </div> `
            )
        }
    })
}


function addTransactions(id) {

    let money = +$('#money').val();
    let transaction = $('#transaction').val();
    let time = new Date()
    let categories = $('#categories').val();
    let idWallet = id
    let wallet = {

        money: money,
        name: transaction,
        time: time,
        idCategory: categories,
        idWallet: idWallet
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/transaction/create/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(wallet),
        success: (wallet) => {
            let moneyEnd = 0;
            if (transaction === 'spending') {
                moneyEnd = wallet.moneyTotal - money
            } else {
                if (transaction === 'proceeds') {
                    moneyEnd = wallet.moneyTotal + money
                }
            }
            $.ajax({
                type: "PUT",
                url: "http://localhost:3000/wallet/edit/" + id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({moneyTotal: moneyEnd}),
                success: () => {
                    listTransaction(id)
                }
            })
        }
    })

}

function listTransaction(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/transaction/wallet/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (wallet) => {
            let spendingMoney=0;
            let proceedsMoney=0;
            wallet.transaction.forEach((item)=>{
                if(item.name==='spending'){
                    spendingMoney+=item.money
                }else {
                    proceedsMoney+=item.money
                }
            })
            let html = `<div >
 <h2 ><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
Thống kê trong ngày:
<input type="text" placeholder="yy-mm-dd" id="date">
<button class="btn btn-outline-danger" onclick="findTransactionInDate('${wallet.wallet.id_wallet}')">Find</button>

</div>
<main class="container">
    
    <div onclick="Transaction('${wallet.wallet.id_wallet}')" class="btn btn-primary mb-3" data-bs-toggle="modal" role="button"><i
            class="fa-solid fa-plus"></i>
        Tạo giao dịch</div>
    <div>
        <div class="container">
            <div class="row gap-3">
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Số dư</p>
                    <p id="surplus">${wallet.wallet.moneyTotal}</p>
                </div>
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Tổng chi tiêu trong tháng</p>
                    <p class="text-danger">${spendingMoney}</p>
                </div>
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Tổng thu nhập trong tháng</p>
                    <p class="text-success">${proceedsMoney}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row py-2 mb-2" style="background-color:#f4f7fa">
            <div class="col">
                <strong>#</strong>
            </div>
            <div class="col">
                <strong>Giao dịch</strong>
            </div>
            <div class="col">
                Thời gian
            </div>
            <div class="col text-center">
                Số tiền
            </div>
            
        </div>

    </div>
</main>

`
            wallet.transaction.map((item, index) => {

                html += ` <div class="container shadow-sm p-3 mb-5 bg-body rounded" style="margin-left: 150px ">
<table class="table table-hover" > 
<tr>
                   <td >${index + 1}</td>
                   <td style="width: 400px" >${item.name}</td>
                   <td style="width: : 360px">${item.time}</td>
                   <td > $${item.money}</td>
               </tr>
              </table>  </div>`
            })
            $('#body').html(html)

        }

    })

}

function findTransactionInDate(id) {
    let date = $('#date').val();
    let totalMoneyInDate = 0;
    let time = {
        time: date
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/transaction/wallet/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(time),
        success: (wallet) => {
            let html = `<div >
 <h2 ><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
Thống kê trong ngày:
<input type="text" placeholder="yy-mm-dd" id="date">
<button class="btn btn-outline-danger" onclick="findTransactionInDate('${wallet.wallet.id_wallet}')">Find</button>
</div>
<main class="container">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
         tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div >
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <p>Danh mục</p>
                                    <div>
                                        <select class="form-select" aria-label=".form-select-lg example" id="select"
                                                name="select1">
                                            <option value="1">Chi Tiêu</option>
                                            <option value="2">Thu nhập</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <p>Ngày</p>
                                    <input id="startDate" class="form-control" type="date" name="date" />

                                </div>
                                <div class="col">
                                    <p>ghi chú(tùy chọn)</p>
                                    <input type="text" class="form-control" name="note">
                                </div>
                                <div class="col">
                                    <p>Số tiền </p>
                                    <input type="text" class="form-control" name="amount">
                                </div>
                                <div class="col">
                                    <p>Tiền tệ</p>
                                    <div>
                                        <select class="form-select" aria-label=".form-select-lg example" disabled>
                                            <option selected>VND</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                        <button type="submit" class="btn btn-primary" id="button1">Tạo giao dịch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div onclick="Transaction('${wallet.wallet.id_wallet}')" class="btn btn-primary mb-3" data-bs-toggle="modal" role="button"><i
            class="fa-solid fa-plus"></i>
        Tạo giao dịch</div>
    <div>
        <div class="container">
            <div class="row gap-3">
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Số dư</p>
                    <p id="surplus">${wallet.wallet.moneyTotal}</p>
                </div>
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Tổng chi tiêu trong tháng</p>
                    <p class="text-danger">{2}</p>
                </div>
                <div class="col shadow-sm p-3 mb-5 bg-body rounded">
                    <p class="fw-bold">Tổng thu nhập trong tháng</p>
                    <p class="text-success">{3}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row py-2 mb-2" style="background-color:#f4f7fa">
            <div class="col">
                <strong>#</strong>
            </div>
            <div class="col">
                <strong>Giao dịch</strong>
            </div>
            <div class="col">
                Thời gian
            </div>
            <div class="col text-center">
                Số tiền
            </div>
            <div class="col text-center">
                Số tiền chi tiêu
            </div>
            
        </div>

    </div>
</main>

`
            wallet.date.map((item, index) => {
                if (item.name === 'spending') {
                    totalMoneyInDate -= +item.money
                } else {
                    totalMoneyInDate += +item.money
                }
                html += ` 
<div class="container shadow-sm p-3 mb-5 bg-body rounded" style="margin-left: 150px ">
<table class="table table-hover" > 
<tr>
                   <td >${index + 1}</td>
                   <td style="width: 200px" >${item.name}</td>
                   <td style="width: : 200px">${item.time}</td>
                   <td > $${item.money}</td>
                   <td>$${totalMoneyInDate}</td>

                   
               </tr>
              </table>  </div>`

            })
            $('#body').html(html)

        }

    })

}
