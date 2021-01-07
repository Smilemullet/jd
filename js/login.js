//切换登录
function qhdl() {
    let sm = document.getElementById('sm');
    let zh = document.getElementById("zh");
    sm.onclick = function() {
        // alert("hh")
        let first = document.getElementById("ewm-dl")
        let second = document.getElementById("zhanghao")
        second.style.display = "none";
        first.style.display = "block";
    }
    zh.onclick = function() {
        let first = document.getElementById("ewm-dl")
        let second = document.getElementById("zhanghao")

        first.style.display = "none";
        second.style.display = "block";
    }


}
qhdl();

//登录时候调取接口