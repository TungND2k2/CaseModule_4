loginForm()
function loginForm(){
    $('#body').html(` <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="card-body p-md-5 mx-md-4">

                                <div class="text-center">
                                    <div>
                                        <svg width="141.75" height="36" viewBox="0 0 126 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                                <path
                                                        d="M16.0441426,32 C7.18320732,32 0,24.836556 0,16 C0,7.163444 7.18320732,0 16.0441426,0 C24.9050779,0 32.0882852,7.163444 32.0882852,16 C32.0882852,24.836556 24.9050779,32 16.0441426,32 Z M16.0976231,24 C20.5576272,24 24.1731749,20.3943999 24.1731749,15.9466667 C24.1731749,11.4989335 20.5576272,7.89333333 16.0976231,7.89333333 C11.637619,7.89333333 8.02207131,11.4989335 8.02207131,15.9466667 C8.02207131,20.3943999 11.637619,24 16.0976231,24 Z"
                                                        id="logo-full-a"></path>
                                            </defs>
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g>
                                                    <g>
                                                        <g id="kolac">
                                                            <circle id="Oval-6" fill="#FFFFFF" cx="17" cy="16" r="10"></circle>
                                                            <mask id="logo-full-mask-2" fill="white">
                                                                <use xlink:href="#logo-full-a"></use>
                                                            </mask>
                                                            <use id="Mask" fill-opacity="0.899999976" fill="#D8D8D8" xlink:href="#logo-full-a">
                                                            </use>
                                                            <polygon id="Path-3" fill="#FF6FAF" mask="url(#logo-full-mask-2)"
                                                                     points="16.0441426 -0.730175139 16.0441426 16 34.1063075 3.50918751 20.1480198 -1.99954922">
                                                            </polygon>
                                                            <polygon id="Path-2" fill="#00BC7C" mask="url(#logo-full-mask-2)"
                                                                     points="16.0208188 15.9182456 33.203099 3.94707882 33.1075857 19.1213724 28.7682783 29.9200783 25.5198717 29.1580738">
                                                            </polygon>
                                                            <polygon id="Path" fill="#FE5A61" mask="url(#logo-full-mask-2)"
                                                                     points="16.0271308 15.9631392 27.4612222 31.2990737 16.1347917 33.3051551 7.53311181 30.6943158">
                                                            </polygon>
                                                            <polygon id="Path" fill="#40C3F9" mask="url(#logo-full-mask-2)"
                                                                     points="16.108472 15.983092 7.21072447 32.1073971 -0.343285929 24.242931 -0.0336416493 19.9513112">
                                                            </polygon>
                                                            <polygon id="Path-4" fill="#FFC053" mask="url(#logo-full-mask-2)"
                                                                     points="16.0056939 15.9893866 -3.32432669 21.1437247 -1.16777337 9.79204291 6.02002312 0.477440478 16.0611917 -1.38576505">
                                                            </polygon>
                                                            <ellipse id="Oval-2" fill-opacity="0.0900000036" fill="#000000"
                                                                     mask="url(#logo-full-mask-2)" cx="16.0441426" cy="16" rx="9.94736842" ry="9.92">
                                                            </ellipse>
                                                        </g>
                                                        <path
                                                                d="M16.5624439,15.2679282 C18.3037122,15.7523532 18.9320883,16.2131781 18.9320883,17.6304318 C18.9320883,19.2582242 18.0203513,20.0587676 16.6577279,20.2084425 L16.6558596,21.192198 L15.4732171,21.192198 L15.4732171,20.2009898 C14.5029396,20.1183891 13.4548157,19.9084716 13.4548157,19.9084716 L13.5880888,18.8296943 C13.5880888,18.8296943 15.220372,19.0476856 16.0785507,19.0476856 C17.1067459,19.0476856 17.5781837,18.5874818 17.5781837,17.7148957 C17.5781837,17.0124794 17.2032755,16.7702669 15.933445,16.4671907 C14.1442234,16.0069869 13.3701188,15.4616982 13.3701188,14.0202232 C13.3701188,12.5352741 14.2388846,11.8247841 15.5940347,11.684425 L15.5940347,10.7733333 L16.7791683,10.7733333 L16.7791683,11.6862882 C17.727026,11.759573 18.7508619,11.9483746 18.7508619,11.9483746 L18.6418769,13.038952 C18.6418769,13.038952 16.9491848,12.845182 16.2479445,12.845182 C15.2322047,12.845182 14.7121907,13.2085007 14.7121907,13.9233382 C14.7121907,14.6984182 15.1475078,14.8803882 16.5624439,15.2679282 L16.5624439,15.2679282 Z"
                                                                id="dolar" fill="#2A3E49"></path>
                                                        <path
                                                                d="M45.6149861,14.6961191 C49.2009347,15.6937386 50.4950055,16.6427562 50.4950055,19.561433 C50.4950055,22.9136905 48.6173844,24.5623208 45.8112129,24.8705597 L45.8073653,26.8964948 L43.3718444,26.8964948 L43.3718444,24.8552117 C41.3736656,24.6851048 39.2151709,24.252803 39.2151709,24.252803 L39.4896319,22.0311809 C39.4896319,22.0311809 42.851138,22.4801097 44.6184617,22.4801097 C46.7359156,22.4801097 47.7067894,21.5323711 47.7067894,19.7353769 C47.7067894,18.2888285 46.9347075,17.7900187 44.3196327,17.165867 C40.6349295,16.2181284 39.040747,15.0951669 39.040747,12.1266091 C39.040747,9.06852145 40.8298737,7.60534608 43.6206549,7.3162922 L43.6206549,5.44 L46.0613059,5.44 L46.0613059,7.3201292 C48.0133136,7.47105113 50.1217898,7.85986697 50.1217898,7.85986697 L49.8973474,10.10579 C49.8973474,10.10579 46.411436,9.70674218 44.9673094,9.70674218 C42.8755061,9.70674218 41.8045951,10.4549569 41.8045951,11.9270852 C41.8045951,13.5232766 42.7010822,13.8980234 45.6149861,14.6961191 L45.6149861,14.6961191 Z M57.8913451,14.3226512 C56.5716237,14.3226512 55.1775156,15.0209849 55.1775156,15.0209849 L55.1775156,22.3816268 C55.3019208,22.4059278 56.497237,22.5798717 57.3693561,22.5798717 C59.6843194,22.5798717 60.3576466,21.3584272 60.3576466,18.2888285 C60.3576466,15.3701518 59.4355089,14.3226512 57.8913451,14.3226512 L57.8913451,14.3226512 Z M57.5424974,24.9255567 C56.5216051,24.9255567 55.3262889,24.7260328 55.1775156,24.7004528 L55.1775156,30.0159745 L52.4624036,30.0159745 L52.4624036,12.1764901 L55.1531476,12.1764901 L55.1531476,12.9502848 C55.1531476,12.9502848 56.8704527,11.9015052 58.364598,11.9015052 C61.6016989,11.9015052 63.1214947,13.7483805 63.1214947,18.2888285 C63.1214947,23.4291273 61.378539,24.9255567 57.5424974,24.9255567 L57.5424974,24.9255567 Z M70.3434104,14.1474283 C68.5004176,14.1474283 67.678317,15.0708659 67.653949,17.4664319 L72.9071841,17.4664319 C72.9071841,14.9711039 72.1607528,14.1474283 70.3434104,14.1474283 L70.3434104,14.1474283 Z M67.678317,19.561433 C67.7039676,21.5566721 68.450399,22.5555707 70.5178343,22.5555707 C72.4839498,22.5555707 75.0990246,22.2064038 75.0990246,22.2064038 L75.1490432,24.227223 C75.1490432,24.227223 72.309526,24.9255567 70.118968,24.9255567 C66.3829637,24.9255567 64.938837,22.9290385 64.938837,18.5382334 C64.938837,13.9734844 66.9062351,11.9015052 70.3434104,11.9015052 C73.8293218,11.9015052 75.5722775,13.7228005 75.5722775,17.6147958 L75.3978537,19.561433 L67.678317,19.561433 Z M85.4823722,18.0394236 C85.4823722,15.5453747 85.1591751,14.3226512 83.2674461,14.3226512 C81.8233195,14.3226512 80.4535795,14.9711039 80.4535795,14.9711039 L80.4535795,24.6505718 L77.7384675,24.6505718 L77.7384675,12.1764901 L80.4292114,12.1764901 L80.4292114,12.9502848 C80.4292114,12.9502848 82.2465538,11.9015052 83.8651042,11.9015052 C87.3266476,11.9015052 88.1731161,13.8724434 88.1731161,17.9652417 L88.1731161,24.6505718 L85.4823722,24.6505718 L85.4823722,18.0394236 Z M98.2576346,14.4965951 C98.1088613,14.4722941 96.6647347,14.2471902 95.6194743,14.2471902 C93.7751989,14.2471902 92.9787489,15.5952557 92.9787489,18.4384715 C92.9787489,21.6321331 93.850868,22.5044107 95.3693813,22.5044107 C96.7891399,22.5044107 98.2576346,21.881538 98.2576346,21.881538 L98.2576346,14.4965951 Z M98.2832852,24.0021191 C98.2832852,24.0021191 96.4659428,24.9255567 94.946147,24.9255567 C91.7590647,24.9255567 90.2392689,23.2539044 90.2392689,18.4384715 C90.2392689,13.9236034 91.8591019,11.9015052 95.4193999,11.9015052 C96.4159242,11.9015052 98.1088613,12.2007911 98.2576346,12.2263711 L98.2576346,6.98758934 L100.974029,6.98758934 L100.974029,24.6505718 L98.2832852,24.6505718 L98.2832852,24.0021191 Z M108.567878,14.1474283 C106.724885,14.1474283 105.902785,15.0708659 105.878417,17.4664319 L111.132934,17.4664319 C111.132934,14.9711039 110.38522,14.1474283 108.567878,14.1474283 L108.567878,14.1474283 Z M105.902785,19.561433 C105.928435,21.5566721 106.676149,22.5555707 108.742302,22.5555707 C110.7097,22.5555707 113.323492,22.2064038 113.323492,22.2064038 L113.374793,24.227223 C113.374793,24.227223 110.535276,24.9255567 108.344718,24.9255567 C104.608714,24.9255567 103.164587,22.9290385 103.164587,18.5382334 C103.164587,13.9734844 105.131985,11.9015052 108.567878,11.9015052 C112.053789,11.9015052 113.798028,13.7228005 113.798028,17.6147958 L113.623604,19.561433 L105.902785,19.561433 Z M120.76985,14.1474283 C118.92814,14.1474283 118.10604,15.0708659 118.080389,17.4664319 L123.334907,17.4664319 C123.334907,14.9711039 122.588475,14.1474283 120.76985,14.1474283 L120.76985,14.1474283 Z M125.825576,19.561433 L118.10604,19.561433 C118.13169,21.5566721 118.878121,22.5555707 120.944274,22.5555707 C122.911672,22.5555707 125.526747,22.2064038 125.526747,22.2064038 L125.576766,24.227223 C125.576766,24.227223 122.737249,24.9255567 120.545408,24.9255567 C116.810686,24.9255567 115.366559,22.9290385 115.366559,18.5382334 C115.366559,13.9734844 117.332675,11.9015052 120.76985,11.9015052 C124.257044,11.9015052 126,13.7228005 126,17.6147958 L125.825576,19.561433 Z"
                                                                id="Spendee" fill="#2A3E49"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <h4 class="mt-1 mb-5 pb-1">Quản lý tài chính của bạn</h4>
                                </div>
                                <div >
                                    <p>Nhập tài khoản của bạn:</p>

                                    <div class="form-outline mb-4">
                                        <input id="username" class="form-control" placeholder="Tên đăng nhập ... "
                                               name="name" />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="password" class="form-control"
                                               placeholder="Mật khẩu ... " name="password" />
                                    </div>

                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <button onclick="sigin()" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                >Đăng nhập</button>

                                    </div>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <button onclick="registerForm()" type="button" class="btn btn-outline-danger">
                                            Register
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Bạn sẽ làm gì nếu không còn sợ hãi mùa World cup?</h4>
                                <p class="small mb-0">Nắng mưa là chuyện của trời<br>
                                    Quản lý tài chính để đời bớt âu<br>
                                    Đứng nhìn, đứng ngó chẳng giàu<br>
                                    Nhanh tay đăng ký bớt lo nhảy cầu.<br><br></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

`)
}
function logout(){
    localStorage.clear()
    loginForm()
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
                localStorage.setItem('token',response.token)
                localStorage.setItem('idUser',response.id_user)
                showWallet(response.id_user)

            }
        }
    })

}
function registerForm(){
    $('#body').html(`<section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="card-body p-md-5 mx-md-4">
                                <div class="text-center">
                                    <h4 class="mt-1 mb-5 pb-1">Tài chính u</h4>
                                </div>

                                <div >
                                    <p>Nhập tài khoản của bạn:</p>

                                    
                                    <div class="form-outline mb-4">
                                        <input id="username" class="form-control" placeholder="Tên đăng ký ... " name="name" />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="password" id="password" class="form-control"
                                               placeholder="Mật khẩu ... " name="password" />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="password" id="passwordAgain" class="form-control"

                                               placeholder="Nhập lại mật khẩu ..." />

                                    </div>
                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <button onclick="register()" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                type="submit">Đăng ký</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Trần Hiếu cùng anh em về bờ mùa World cup. </h4>
                                <p class="small mb-0">Không hứa giàu nhanh như gió.<br>
                                    Nhưng đó là điều sẽ phải xảy ra!<br>
                                    Tiền không tiêu chắc gì đã còn đó.<br>
                                    Thấy Trần Hiếu không ngó thì đêm về khó ngủ yên.<br><br>
                                    Mọi liện hệ vùng kín xin liên hệ zalo Trần Hiếu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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