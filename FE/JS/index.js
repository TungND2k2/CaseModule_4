function showWallet(){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/wallet",
            headers: {
                'Content-Type': 'application/json'
            },
            success: (wallet)=>{
                console.log(wallet)
                let html=''
                wallet.map((item,index)=>{
                    html+= ` 
<table class="table table-hover" style="width: 500px;height: 100px"> 
<tr>
                   <td>${index+1}</td>
                   <td>${item.name}</td>
                   <td>${item.moneyTotal}</td>
                   <td><button onclick="wallet()" class="btn btn-info">Detail</button></td>
               </tr>
              </table>  `
                })
                $('#body').html(html)
            }
        })
}
function wallet(){
        $('#body').html(`
<table class="table table-hover" style="width: 500px;height: 100px"> 
<tr>
                   <th>Money</th>
                   <th>Transaction Type</th>
                   <th>Date</th>
                   <th>Category</th>
               </tr>
               <tr>
               <td><input type="number"></td>
               <td><select name="" id="">
               <option value="1">Spending</option>
               <option value="2">Proceeds</option>
</select></td>
               <td></td>
               <td></td>
</tr>
              </table> `)
    }

