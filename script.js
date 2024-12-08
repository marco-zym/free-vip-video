var input = document.getElementById("input")

function clean() {
    input.value = ""
}

function iqiyi() {
    window.open("https://www.iqiyi.com/", "_blank")
}

function wetv() {
    window.open("https://v.qq.com/", "_blank")
}

function youku() {
    window.open("https://www.youku.com/", "_blank")
}

function openURL() {
    var URL = "https://jx.xmflv.cc/?url=" + input.value
    
    if (input.value !== "") {
        window.open(URL, "_blank")
    } else {
        alert("请输入正确的URL！")
    }
}

function keydownOpenURL() {
    if (event.keyCode == 13) {
        openURL()
    }
}