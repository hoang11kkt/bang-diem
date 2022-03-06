$(document).ready(function(){
    var stt = 0;
    const students = [];
    $("#add").click(function(){
        var name = $("#name").val();
        var math = $("#math").val();
        var physical = $("#physical").val();
        var chemistry = $("#chemistry").val();
        students.push({"stt": ++stt, "name": name, "math": math, "physical": physical, "chemistry": chemistry, "dtb": ""});        

        $("tbody").append('<tr><td data-title="stt">' + stt +'</td><td data-title="name">' + name +'</td><td data-title="math">' + math +'</td><td data-title="physical">' + physical +'</td><td data-title="chemistry">' + chemistry +'</td><td data-title="dtb">?</td></tr>');
        $("#name").val("");
        $("#math").val("");
        $("#physical").val("");
        $("#chemistry").val("");
    })
    $("#dtb").click(function(){
        $("tbody").children().each(function(){
            var math = parseFloat(this.cells[2].innerHTML);
            var physical = parseFloat(this.cells[3].innerHTML);
            var chemistry = parseFloat(this.cells[4].innerHTML);
            var dtb = (math + physical + chemistry) / 3;
            var cellDtb = this.cells[5];
            cellDtb.innerHTML = dtb.toFixed(1);
        })
    })
    $("#hsg").click(function(){
        $("tbody").children().each(function(){
            var dtb = parseFloat(this.cells[5].innerHTML);
            if(dtb >= 8){
                $(this).addClass("red");
            }
        })
    })
    $("#repair").click(function(){
        // get data repair
        var stt = 0;
        while(stt == 0){
            stt = parseInt(prompt("nhập số thứ tự của học sinh"));
        }
        var name = prompt("tên:");
        var math = prompt("toán:");
        var physical = prompt("lý");
        var chemistry = prompt("hóa");

        var table = document.getElementById("myTable");
        table.rows[stt].cells[1].innerHTML = name;
        table.rows[stt].cells[2].innerHTML = math;
        table.rows[stt].cells[3].innerHTML = physical;
        table.rows[stt].cells[4].innerHTML = chemistry;
        table.rows[stt].cells[5].innerHTML = "?";
        table.rows[stt].classList.remove("red")

    })
    $("#delete").click(function(){
        var tt = 1;
        var id = 0;
        while(id == 0){
            id = parseInt(prompt("nhập số thứ tự của học sinh"));
        }
        document.getElementById("myTable").rows[id].remove();
        $("tbody").children().each(function(){
            this.cells[0].innerHTML = tt;
            tt++
        })
        stt = tt - 1;
        
    })
})