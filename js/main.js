//Bài 1: Tính tiền lương nhân viên
var ngayCong = 5;
var tienLuong = ngayCong * 100000;
console.log("Tien luong nhan vien =" + tienLuong);

//Bai 2: Tính trung bình
var num1=5, num2=5,num3=4,num4=5,num5=4;
var tinhTrungBinh=(num1+num2+num3+num4+num5)/5;
console.log("Trung binh 5 so= " + tinhTrungBinh);

//Bài 3: Quy đổi tiền
var soTienUSD= 50;
var soTienQuyDoi=soTienUSD*23500;
console.log("So tien quy doi = " + soTienQuyDoi);

//Bai 4:Tinh dien tich, chu vi hinh chu nhat
var chieuRong = 4, chieuDai = 5;
var chuVi= (chieuDai+chieuRong)*2;
var dienTich= chieuDai*chieuRong;
console.log("Chu vi va dien tich hinh chu nhat lan luot =" + chuVi + dienTich);

//Bài 5: Tinh tong 2 ký số
var num=45;
var soHangChuc=Math.floor(num/10);
var soHangDonVi=num%10;
var tongHaiKySo = soHangChuc + soHangDonVi;
console.log("Tổng hai ký số =" + tongHaiKySo);