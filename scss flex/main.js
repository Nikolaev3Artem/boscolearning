let d = new Date();
let yts = d.setHours(0,0,0,0) - 24*3600*1000;

$("#datepicker").datepicker({
    beforShowDay: function(d){
        if(d.getTime() == yts){
            return[true,'wow','hey'];
        }
        return[true];
    }
})