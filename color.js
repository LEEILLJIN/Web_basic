
var Body = {
    SetColor : function (color){
    //    document.querySelector('body').style.color=color;
    $('body').css('color',color);
    },

    SetBackgroundColor : function(color){
    //    document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
    }
}
var Links = {
    SetColor: function (color){
    //     var alist = document.querySelectorAll('a');
    //     var i =0;
    //     while(i < alist.length){
    //             alist[i].style.color = color;
    //             i++;
    //         }
    $('a').css('color',color);
     }
}
var Border = {
    SetColor : function (color){
        var h = document.querySelector('h1');
        var f = document.querySelector('#f_list');

        h.style.borderBottomColor = color;
        f.style.borderRightColor = color;
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    var h = document.querySelector('h1');
    var f = document.querySelector('#f_list');
    if(self.value==='night'){
        Body.SetBackgroundColor('black');

        Body.SetColor('white');
        
        Links.SetColor('powderblue');

        Border.SetColor('white');
        self.value = 'day';
    }else{
        Body.SetBackgroundColor('white');

        Body.SetColor('black');

        Links.SetColor('blueviolet');

        Border.SetColor('black');

        self.value = 'night';
    }
}