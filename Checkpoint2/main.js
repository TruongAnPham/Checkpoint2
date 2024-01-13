var prevTime, stopwatchInterval, elapsedTime = 0;
//khai báo ba biến: prevTime, stopwatchInterval và elapsedTime. prevTime được sử dụng để lưu trữ thời gian trước đó khi đồng hồ bấm giờ được cập nhật.
// stopwatchInterval được sử dụng để lưu trữ ID khoảng thời gian được trả về bởi setInterval().
// elapsedTime được sử dụng để lưu trữ thời gian đã trôi qua tính bằng mili giây.

var updateTime = function () {
    var tempTime = elapsedTime;
    var milliseconds = tempTime % 1000;
    tempTime = Math.floor(tempTime / 1000);
    var seconds = tempTime % 60;
    tempTime = Math.floor(tempTime / 60);
    var minutes = tempTime % 60;
    tempTime = Math.floor(tempTime / 60);
    var hours = tempTime % 60;
    var time = hours + " : " + minutes + " : " + seconds + "." + milliseconds;
    $("#count").text(time);
};
//cập nhật thời gian hiển thị trên đồng hồ bấm giờ, lấy thời gian trôi qua làm đầu vào và tính toán giờ, phút, giây và mili giây từ nó. Dòng $("#count").text(time) cập nhật phần tử HTML với số ID để hiển thị thời gian mới.

$("#start").click(function () {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(function () {
            if (!prevTime) {
                prevTime = Date.now();
            }
            elapsedTime += Date.now() - prevTime;
            prevTime = Date.now();
            updateTime();
        }, 50);
    }
});
//Mã này liên kết sự kiện click với phần tử HTML với ID start, Khi người dùng nhấp vào phần tử , hàm bên trong phương thức click() được thực thi. Nếu biến stopwatchInterval không được đặt, phương thức setInterval() được gọi với một hàm cập nhật thời gian đã trôi qua và gọi hàm updateTime() cứ sau 50 mili giây.

$("#stop").click(function () {
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    }
    prevTime = null;
});
//Mã này liên kết sự kiện nhấp chuột với phần tử HTML bằng điểm dừng ID. Khi người dùng nhấp vào phần tử , hàm bên trong phương thức click() được thực thi. Nếu biến stopwatchInterval được đặt, phương thức clearInterval() được gọi để dừng đồng hồ bấm giờ. Biến stopwatchInterval sau đó được đặt thành null và biến prevTime được đặt lại thành null.
$("#reset").click(function () {
    $("#stop").click();
    elapsedTime = 0;
    updateTime();
});
//Mã này liên kết sự kiện nhấp chuột với phần tử HTML với đặt lại ID. Khi người dùng nhấp vào phần tử , hàm bên trong phương thức click() được thực thi. Dòng $("#stop").click() dừng đồng hồ bấm giờ. Biến elapsedTime sau đó được đặt thành 0 và hàm updateTime() được gọi để đặt lại thời gian hiển thị trên đồng hồ bấm giờ.



$(document).ready(function () {
    updateTime();
});
//Mã này liên kết một sự kiện sẵn sàng với tài liệu. Khi tài liệu đã sẵn sàng, hàm bên trong phương thức ready() được thực thi. Hàm updateTime() được gọi để khởi tạo thời gian hiển thị trên đồng hồ bấm giờ.
