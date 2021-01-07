function loadList() {
    var uid = localStorage.getItem('uid');
    var pagenum = 0;
    var pagesize = 10;
    var params = {

        pagenum,
        pagesize,
        uid
    };
    var loadlist = document.getElementById('twelve-box')
    axios.get(proListAPI, {
        params
    }).then(res => {
        console.log(res.data.data);

        var res = res.data.data;
        let str = '';
        res.forEach(item => {

            str += ` <a href="../html/details.html?id=${res.pid}">
            <div id="ssss">
            <img src="${item.pimg}" alt="">
            <p id="clothes-p1">${item.pname}</p>
            <p id="clothes-p2">${item.pprice}</p>
            <button id="clothes-button">立即抢购</button>
            </div>
        </a>`
        });
        loadlist.innerHTML = str;

    })
}
loadList();