$(document).ready(function() {
    $("#calendar-trigger").on("click", function() {
        $("#datepicker").toggleClass("display").toggle().datepicker({
            inline: true,
            showOtherMonths: true,
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            altField: "#date",
            dateFormat: "d MM yy",
            onSelect: function(e) {
                var reg = /[а-я]\s/;
                var result = e.match(/[А-я]/g).join("");
                if(result === "Февраль") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Январь") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Март") {
                    var regRES = e.replace(reg, "та ");
                } else if(result === "Апрель") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Май") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Июнь") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Июль") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Август") {
                    var regRES = e.replace(reg, "та ");
                } else if(result === "Сентябрь") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Октябрь") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Ноябрь") {
                    var regRES = e.replace(reg, "я ");
                } else if(result === "Декабрь") {
                    var regRES = e.replace(reg, "я ");
                }
                var main_right = $(".main-right").find(".item-content");
                main_right.text(regRES);
                $("#datepicker").hide();
            } // onSelect(e)
        }); // toggleClass + toggle + datepicker
    }); // CALENDAR-TRIGGER on CLICK
}); // READY
