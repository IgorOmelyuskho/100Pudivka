window.onload = function(e) {
    var days = document.getElementById('days');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var date = new Date();
    var beginningDate = new Date();
    beginningDate.setDate(beginningDate.getDate() + 7);
    var timer = beginningDate - date;

    setInterval(get_timer, 1000);

    function get_timer() {
        timer = beginningDate - new Date();
        if (date < beginningDate) {
            var day = parseInt(timer / (60 * 60 * 1000 * 24));
            var hour = parseInt(timer / (60 * 60 * 1000)) % 24;
            var min = parseInt(timer / (1000 * 60)) % 60;
            var sec = parseInt(timer / 1000) % 60;
            days.innerHTML = day.toString();;
            hours.innerHTML = hour.toString();;
            minutes.innerHTML = min.toString();;
            seconds.innerHTML = sec.toString();;
        } else {
            days.innerHTML = '0';
            hours.innerHTML = '0';
            minutes.innerHTML = '0';
            seconds.innerHTML = '0';
        }
    }
}