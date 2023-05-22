/**
 * Giới thiệu một số hàm built-in
 *  1. Alert
 *  2. Console
 *  3. Confirm
 *  4. Prompt
 *  5. Set timeout
 *  6. Set interval
*/
var log = 'Day la mot dong log ';
var thongBao = 'Day la dong thong bao';
var xacNhan = 'Ban co chac muon vao';
var dienSoTuoi = 'Dien so tuoi cua ban';
//Alert là hàm thông báo
alert(thongBao);

//Xuat hien trong console
console.log(log);

//Xac nhan
confirm(xacNhan);

//Ham dien
prompt(dienSoTuoi);

//setTimeOut là hàm chạy sau ?ms
setTimeout(function() {
    alert('Het gio roi!!!!');
}, 1000)

//set interval là hàm chạy liên tục sau ?ms
setInterval(function() {
    console.log(log + Math.random());
}, 1000)