// 判断手机号是否正确

var next = document.getElementById("next");
next.onclick = function() {
    var input = document.getElementById('input');
    var yz = document.getElementById('yz');
    var tsxx = document.getElementById('tsxx');
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;

    if (!myreg.test(input.value)) {
        tsxx.innerHTML = "请输入正确的手机号格式"

    } else {
        tsxx.innerHTML = "手机格式正确"
            // 调接口
        var username = input.value;
        var password = yz.value;
        var params = {
            username,
            password
        };
        axios.get(regAPI, { params }).then(res => {
            console.log(res.msg)
            if (res.data.code === 1) {
                location.href = 'login.html'
            }
        })

    }
}