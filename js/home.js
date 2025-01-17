
function showFormLogin() {
    var a = document.getElementById("formLogin");
    a.style.display = "flex";
    var b = document.getElementById("container");
    b.style.opacity = "0.5";

}

function closeFormLogin() {
    var a = document.getElementById("formLogin");
    a.style.display = "none";
    var b = document.getElementById("container");
    b.style.opacity = "1";
}
/** sticky menu*/
window.addEventListener("scroll", function () {
    var y = pageYOffset;
    var menu = document.getElementById("menu");

    if (y > 100) {
        menu.classList.add("sticky");

    }
    else {
        menu.classList.remove("sticky");
    }
}
);
/* Xem thêm sản phẩm  - SanPham.html */
function xemThemSP() {
    var a = document.getElementById("groupAn");
    a.style.display = "flex";
    var a = document.getElementById("groupAn2");
    a.style.display = "flex";
    var a = document.getElementById("groupAn3");
    a.style.display = "flex";
    var a = document.getElementById("groupAn4");
    a.style.display = "flex";
    var a = document.getElementById("groupAn5");
    a.style.display = "flex";
    var a = document.getElementById("groupAn_a");
    a.style.display = "none";

}
$(document).ready(function () {


    // js của giới thiệu
    var a1 = $("#a1");
    var a2 = $("#a2");
    var a3 = $("#a3");
    var a4 = $("#a4");
    var gioithieu = $("#gioithieu");
    var doitra = $("#doitra");
    var baomat = $("#baomat");
    var dichvu = $("#dichvu");

    a1.click(function () {
        a1.css("background-color", "#eee");
        a2.css("background-color", "white");
        a3.css("background-color", "white");
        a4.css("background-color", "white");
        gioithieu.fadeIn(500);
        doitra.fadeOut(500);
        baomat.fadeOut(500);
        dichvu.fadeOut(500);
    })
    a2.click(function () {
        a2.css("background-color", "#eee");
        a1.css("background-color", "white");
        a3.css("background-color", "white");
        a4.css("background-color", "white");
        doitra.fadeIn(500);
        gioithieu.fadeOut(500);
        baomat.fadeOut(500);
        dichvu.fadeOut(500);
    })

    a3.click(function () {
        a3.css("background-color", "#eee");
        a2.css("background-color", "white");
        a1.css("background-color", "white");
        a4.css("background-color", "white");
        baomat.fadeIn(500);
        doitra.fadeOut(500);
        gioithieu.fadeOut(500);
        dichvu.fadeOut(500);
    })

    a4.click(function () {
        a4.css("background-color", "#eee");
        a2.css("background-color", "white");
        a3.css("background-color", "white");
        a1.css("background-color", "white");
        dichvu.fadeIn(500);
        doitra.fadeOut(500);
        baomat.fadeOut(500);
        gioithieu.fadeOut(500);
    })

    //   kiểm tra form đăng nhập, đăng kí
    // 1. đăng nhập
    // kiểm tra name
    var name = $("#name");
    var tb_tk = $("#tb_tk");
    function ktTaiKhoan() {
        var re = /^[a-zA-Z]{5,}[0-9]+$/;
        if (re.test(name.val())) {
            tb_tk.text("");
            return true;
        }
        else {
            tb_tk.text("Tài khoản không hợp lệ!");
            return false;
        }
    }
    name.blur(ktTaiKhoan);

    //kiểm tra pass
    var pass = $("#pass");
    var tb_pass = $("#tb_pass");
    function ktPass() {
        var re = /.{6,}/;
        if (re.test(pass.val())) {
            tb_pass.text("");
            return true;
        }
        tb_pass.text("Không hợp lệ!");
        return false;
    }

    pass.blur(ktPass);

    // click đăng nhập
    var dn = $("#dn");
    var tb_dn = $("#tb_dn");
    dn.click(function () {
        if (ktTaiKhoan() && ktPass()) {
            closeFormLogin();
        }

    })

    // kiểm tra đăng kí
    var email = $("#email2");
    var tb_e2 = $("#tb_e2");

    function ktEmail() {
        var re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

        if (re.test(email.val())) {
            tb_e2.text("(*)");
            return true;
        }
        tb_e2.text("Không hợp lệ!");
        return false;
    }
    email.blur(ktEmail);

    // kiểm tra tai khoản
    var tk2 = $("#name2");
    var tb_tk2 = $("#tb_tk2");

    function ktTaiKhoan2() {
        var re = /^[a-zA-Z]{5,}[0-9]+$/;
        if (re.test(tk2.val())) {
            tb_tk2.text("(*)");
            return true;
        }
        tb_tk2.text("Không hợp lệ!");
        return false;
    }

    tk2.blur(ktTaiKhoan2);

    // kiểm tra pass
    var pass2 = $("#pass2");
    var tb_pass2 = $("#tb_pass2");

    function ktPass2() {
        var re = /.{6,}/;
        if (re.test(pass2.val())) {
            tb_pass2.text("(*)");
            return true;
        }
        tb_pass2.text("Không hợp lệ!");
        return false;
    }

    pass2.blur(ktPass2);

    // click đăng kí
    var dk = $("#dk");
    var tb_dk = $("#tb_dk");

    function dangKi() {
        if (ktTaiKhoan2() && ktPass2() && ktEmail()) {
            tb_dk.text("Đăng kí thành công!!");
            return true;
        }
        else {
            tb_dk.html("&nbsp;");
            return false;
        }
    }

    dk.click(dangKi);

})
