loginForm()
function loginForm(){
    $('#body').html(` <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;background-color: lightcoral">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://uploads-ssl.webflow.com/5ef5c908f55bc9b2c48a5cc2/5f50d9811e955f59eababcf7_online-wallets-in-india.jpg"
                     alt="login form" class="img-fluid" style="width:450px;height:700px;border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">

                  <div>

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">E Wallet</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                    <div class="form-outline mb-4">
                      <input type="text" id="username" class="form-control form-control-lg" />
                      <label class="form-label" >User Name</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="password" class="form-control form-control-lg" />
                      <label class="form-label" >Password</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button class="btn btn-dark btn-lg btn-block" onclick="sigin()" type="button">Login</button>
                    </div>

                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <button onclick="registerForm()" style="color: #393f81;">Register here</button></p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`)
}
function sigin(){
    let username = $('#username').val();
    let password = $('#password').val();
        let user = {

            username: username,
            password: password,
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/login",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(user),
            success: (response) => {
                console.log(response)
                if(response==='Wrong Password'|| response==='Wrong User'){
                    alert('Wrong username or password')
                }else {
                    alert("Login successfully")
                    showWallet(response.id_user)
                }
            }
        })

    }
function registerForm(){
    $('#body').html(`<div style="background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
<table><tr><td>UserName</td>
<td>Password</td>
<td>Input Password Again</td>
</tr>
<tr>
<td><input type="text" id="username" placeholder="user name " required></td>
<td><input type="password" id="password" placeholder=" input password " required></td>
<td><input type="password" id="passwordAgain" placeholder=" input password again " required></td>
<td>    <button onclick="register()">Register</button></div></td>
</tr>
</table>
`)
}
function register(){

    let username = $('#username').val();
    let passwordOne = $('#password').val();
    let passwordTwo = $('#passwordAgain').val();
    if(passwordOne!==passwordTwo){
        alert('Passwords do not match')
    }else {
        let user = {

            username: username,
            password: passwordOne,
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/register",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(user),
            success: () => {
                alert("created successfully")
                loginForm()
            }
        })

    }
    }

function showWallet(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/wallet/home/"+id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (wallet) => {

            let html = ` <div style="margin-left: 100px;"><h2><i class="fa-solid fa-list"></i> Wallet</i></h2><button onclick="addWallet()" class="btn btn-warning"><i class="fa-solid fa-plus"></i></button>\n</div>`
            wallet.map((item, index) => {
                html += ` 
<table class="table table-hover" style="width: 840px;height: 100px;margin-left: 100px;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')" > 
<tr>
                   <td>${index + 1}</td>
                   <td><i class="fa-solid fa-wallet"></i>${item.name}</td>
                   <td><i class="fa-solid fa-dollar-sign"></i>${item.moneyTotal}</td>
                   <td><button onclick="walletHome('${item.id_wallet}')" class="btn btn-outline-info"><i class="fa-solid fa-circle-info"></i></button></td>
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
<button class="btn btn-outline-success" onclick="walletTranProceeds('${wallet.wallet.id_wallet}')">Proceeds</button></div>

`
            )}
    })
}
function walletTranProceeds(id) {
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
<button class="btn btn-outline-success" onclick="walletTranProceeds('${wallet.wallet.id_wallet}')">Proceeds</button></div>
                   <p>Proceeds</p>
                   <label>Money($):</label>
               <input type="number" id="money">
               <br>   
                   <label>Date:</label>
                   <input id="time" style="width: 540px;border: none;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')" value="   ${new Date()}">
             <select name="" id="transaction" style="visibility: hidden">
                            <option value="proceeds">Proceeds</option>
               <option value="spending">Spending</option>
               
</select>
               <td><select class="form-select" multiple aria-label="multiple select example" style="width: 200px;height: 210px" name="" id="categories">
               <option value="${wallet.categories[0].id_category}">${wallet.categories[0].name}</option>
               <option value="${wallet.categories[1].id_category}">${wallet.categories[1].name}</option>
               <option value="${wallet.categories[2].id_category}">${wallet.categories[2].name}</option>
               <option value="${wallet.categories[3].id_category}">${wallet.categories[3].name}</option>
               <option value="${wallet.categories[4].id_category}">${wallet.categories[4].name}</option>
               <option value="${wallet.categories[5].id_category}">${wallet.categories[5].name}</option>
               <option value="${wallet.categories[6].id_category}">${wallet.categories[6].name}</option>
</select>
               </td>
               <td><button class="btn btn-outline-dark" style="margin-left: 420px" onclick="addTransactions('${wallet.wallet.id_wallet}')">Save<i class="fa-solid fa-bookmark"></i></button></td>
</tr> 
</table>
              </div> `
            )
        }
    })
}
function walletTranSpending(id) {
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
<button class="btn btn-outline-success" onclick="walletTranProceeds('${wallet.wallet.id_wallet}')">Proceeds</button></div>
                   <p>Spending</p>
                   <label>Money($):</label>
               <input type="number" id="money">
               <br>   
                   <label>Date:</label>
                   <input id="time" style="width: 540px;border: none;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')" value="   ${new Date()}">
             <select name="" id="transaction" style="visibility: hidden">
               <option value="spending">Spending</option>
               <option value="proceeds">Proceeds</option>
               
</select>
               <td><select class="form-select" multiple aria-label="multiple select example" style="width: 200px;height: 210px" name="" id="categories">
               <option value="${wallet.categories[0].id_category}">${wallet.categories[0].name}</option>
               <option value="${wallet.categories[1].id_category}">${wallet.categories[1].name}</option>
               <option value="${wallet.categories[2].id_category}">${wallet.categories[2].name}</option>
               <option value="${wallet.categories[3].id_category}">${wallet.categories[3].name}</option>
               <option value="${wallet.categories[4].id_category}">${wallet.categories[4].name}</option>
               <option value="${wallet.categories[5].id_category}">${wallet.categories[5].name}</option>
               <option value="${wallet.categories[6].id_category}">${wallet.categories[6].name}</option>
</select>
               </td>
               <td><button class="btn btn-outline-dark" style="margin-left: 420px" onclick="addTransactions('${wallet.wallet.id_wallet}')">Save<i class="fa-solid fa-bookmark"></i></button></td>
</tr> 
</table>
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
            let html = `<div style="margin-left: 60px;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
 <h2 ><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<h2><i class="fa-solid fa-dollar-sign"></i>: ${wallet.wallet.moneyTotal}</h2></h2>\n
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
<button onclick="walletTranSpending('${wallet.wallet.id_wallet}')"><i class="fa-solid fa-plus"></i> transaction</button>
Statistics of the day:
<input type="text" placeholder="yy-mm-dd" id="date">
<button class="btn btn-outline-danger" onclick="findTransactionInDate('${wallet.wallet.id_wallet}')">Find</button>
</div>
`
            wallet.transaction.map((item, index) => {

                html += ` <div style="margin-left: 60px ;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
<table class="table table-hover" style="width: 500px;height: 100px"> 
<tr>
                   <td>${index + 1}</td>
                   <td>${item.name}</td>
                   <td>$${item.money}</td>
                   <td>${item.time}</td>
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
            let html = `<div style="margin-left: 60px;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
 <h2 ><i class="fa-solid fa-wallet"></i>: ${wallet.wallet.name}</h2>
<h2><i class="fa-solid fa-dollar-sign"></i>: ${wallet.wallet.moneyTotal}</h2></h2>\n
<button onclick="showWallet('${wallet.wallet.idUser}')"><i class="fa-solid fa-house"></i></button>
<button onclick="wallet('${wallet.wallet.id_wallet}')"><i class="fa-solid fa-plus"></i> transaction</button>
Statistics of the day:
<input type="text" placeholder="yy-mm-dd" id="date">
<button class="btn btn-outline-danger" onclick="findTransactionInDate('${wallet.wallet.id_wallet}')">Find</button>
</div>
`
            wallet.date.map((item, index) => {
                if (item.name === 'spending') {
                    totalMoneyInDate -= +item.money
                } else {
                    totalMoneyInDate += +item.money
                }
                html += ` <div style="margin-left: 60px ;background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
<table class="table table-hover" style="width: 500px;height: 100px"> 
<tr>
                   <td>${index + 1}</td>
                   <td>${item.name}</td>
                   <td>$${item.money}</td>
                   <td style="width: 300px">${item.time}</td>
                   <td>$${totalMoneyInDate}</td>
               </tr>
              </table>  </div>`

            })
            $('#body').html(html)

        }

    })

}

function addWallet() {
    $('#body').html(`<div style="background-image: url('https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png')">
<table><tr><td>Name Wallet</td>
<td>Total Money</td>
</tr>
<tr>
<td><input type="text" id="name" placeholder="name wallet"></td>
<td><input type="number" id="moneyTotal" placeholder="total money "></td>
</tr>
</table>
    <button onclick="saveAddWallet()">Add</button></div>
`)
}

function saveAddWallet() {
    let name = $('#name').val();
    let moneyTotal = $('#moneyTotal').val();
    let wallet = {

        name: name,
        moneyTotal: moneyTotal,
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
            showWallet()
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

            $('#body').html(`<input type="text" id="name" placeholder="name product" value="${editWallet.wallet.name}">
    <input type="number" id="moneyTotal"  " value="${editWallet.wallet.moneyTotal}">
    <button class="btn btn-info" onclick="saveEditWallet('${editWallet.wallet.id_wallet}')">Save</button>
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
            showWallet()

        }
    })
}

function deleteWallet(id) {
    console.log(1)
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/wallet/delete/" + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: () => {
            showWallet()
        }
    })
}
