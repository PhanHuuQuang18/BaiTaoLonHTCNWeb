$(document).ready(function () {
    var i = 1;

    // Mở modal Đăng nhập
    $("#btnLogIn").click(function () {
        $("#logInModal").modal();
    });

    // Kiểm tra tên đăng nhập khi đăng ký
    function kiemTraUserNameRegister() {
        var re = /^[a-z0-9_-]{3,16}$/;
        var userName = $("#txtUserNameRegister").val();
        if (userName === "") {
            $("#tbUserNameRegister").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test(userName)) {
            $("#tbUserNameRegister").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserNameRegister").html("");
        return true;
    }
    $("#txtUserNameRegister").blur(kiemTraUserNameRegister);

    // Kiểm tra mật khẩu khi đăng ký
    function kiemTraPassRegister() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var pass = $("#txtPassRegister").val();
        if (pass === "") {
            $("#tbPassRegister").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test(pass)) {
            $("#tbPassRegister").html("* Mật khẩu ít nhất 8 kí tự có chữ và số");
            return false;
        }
        $("#tbPassRegister").html("");
        return true;
    }
    $("#txtPassRegister").blur(kiemTraPassRegister);

    // Kiểm tra khớp mật khẩu
    function validatePassword() {
        var password = $("#txtPassRegister").val();
        var confirmPassword = $("#txtPassConfirm").val();
        if (password !== confirmPassword) {
            $("#tbPassConfirm").html("* Mật khẩu không khớp");
            return false;
        }
        $("#tbPassConfirm").html("");
        return true;
    }
    $("#txtPassConfirm").keyup(validatePassword);

    // Kiểm tra Email khi đăng ký
    function kiemTraEmailRegister() {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email = $("#txtEmailRegister").val();
        if (email === "") {
            $("#tbEmailRegister").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test(email)) {
            $("#tbEmailRegister").html("* Nhập Email theo mẫu: xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmailRegister").html("");
        return true;
    }
    $("#txtEmailRegister").blur(kiemTraEmailRegister);

    // Kiểm tra số điện thoại khi đăng ký
    function kiemTraPhoneRegister() {
        var re = /^0\d{9}$/;
        var phone = $("#txtPhoneRegister").val();
        if (phone === "") {
            $("#tbPhoneRegister").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test(phone)) {
            $("#tbPhoneRegister").html("* Nhập số phone theo mẫu: 0XXXXXXXXX");
            return false;
        }
        $("#tbPhoneRegister").html("");
        return true;
    }
    $("#txtPhoneRegister").blur(kiemTraPhoneRegister);

    // Kiểm tra tất cả các trường khi nhấn nút Đăng ký
    $("#btnRegister").click(function (e) {
        e.preventDefault(); // Ngăn form gửi dữ liệu ngay
        if (
            kiemTraUserNameRegister() &&
            kiemTraPassRegister() &&
            validatePassword() &&
            kiemTraEmailRegister() &&
            kiemTraPhoneRegister()
        ) {
            // Lưu thông tin vào localStorage
            var userData = {
                username: $("#txtUserNameRegister").val(),
                password: $("#txtPassRegister").val(),
                email: $("#txtEmailRegister").val(),
                phone: $("#txtPhoneRegister").val(),
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Đăng ký thành công! Hãy sử dụng thông tin này để đăng nhập.");
        } else {
            alert("Vui lòng kiểm tra lại các thông tin.");
        }
    });

    // Xử lý đăng nhập
    $("#btnLogInSubmit").click(function (e) {
        e.preventDefault(); // Ngăn form gửi dữ liệu ngay

        // Lấy thông tin từ localStorage
        var savedUserData = JSON.parse(localStorage.getItem("userData"));

        if (!savedUserData) {
            $("#thongbao").html("Không tìm thấy tài khoản đã đăng ký.");
            return;
        }

        // Lấy thông tin từ form đăng nhập
        var inputUsername = $("#txtUserName").val();
        var inputPassword = $("#txtPass").val();

        // Kiểm tra thông tin đăng nhập
        if (
            inputUsername === savedUserData.username &&
            inputPassword === savedUserData.password
        ) {
            alert("Đăng nhập thành công!");
            $("#thongbao").html(""); // Xóa thông báo lỗi nếu đăng nhập thành công
            $("#logInModal").modal("hide"); // Đóng modal sau khi đăng nhập thành công
        } else {
            $("#thongbao").html("Tên đăng nhập hoặc mật khẩu không chính xác.");
        }
    });
});
