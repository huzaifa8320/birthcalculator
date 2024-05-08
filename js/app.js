function calculate() {
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var current = new Date()
    var dob = new Date(`${month} ${date} ${year}`)
    var result = current - dob
    var result_years = Math.floor(result / (1000 * 3600 * 24) / 365.25)
    
    document.getElementById("result").innerText = `${result_years} Years`;
}
