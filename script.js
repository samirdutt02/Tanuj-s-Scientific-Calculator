var a = 500;
var b = 500;
var c = 500;
var d = 500;
var e = 500;
var f = 500;
var g = 0;
var h = 500;
var i = 500;
var j = 25;
var k = 10;
var m = 625;
var n = 125;
var o = 1;
var p = 1;
var r = 1;
var s = 0;
var t = 1;
var u = 100;
var v = 100;
var w = 5;
var x = 3;
var y = [201, 197, 197];
var z = 100;
var aa = 100;
var bb = 4;
var cc = 64;
var dd = "";
mouseClicked=function() {
  if(g===-1) {
      if(mouseX>13&&mouseX<13+76&&mouseY>49&&mouseY<49+30) {
          a=500;
          b=500;
          c=500;
          d=500;
          e=500;
          f=500;
      }
      if(mouseX>13&&mouseX<13+76&&mouseY>86&&mouseY<86+30) {
          h=500;
          i=500;
          j=25;
          k=10;
      }
      if(mouseX>13&&mouseX<13+76&&mouseY>125&&mouseY<125+30) {
          m=625;
          n=125;
          o=1;
          p=1;
      }
      if(mouseX>13&&mouseX<13+76&&mouseY>165&&mouseY<165+30) {
          t=1;
          r=1;
          s=0;
          
      }
      if(mouseX>13&&mouseX<13+76&&mouseY>203&&mouseY<203+30) {
          u=100;
          v=100;
          w=5;
          x=3;
          
          
      }
      if(mouseX>13&&mouseX<13+76&&mouseY>243&&mouseY<243+30) {
          z=100;
          aa=100;
          bb=4;
          cc=64;
          
          
      }
      if(mouseX>175&&mouseX<175+74&&mouseY>52&&mouseY<52+31) {
          dd="";
          y[0]=201;
          y[1]=197;
          y[2]=197;
      }
      if(mouseX>175&&mouseX<175+74&&mouseY>95&&mouseY<95+31) {
          dd="";
          y[0]=220;
          y[1]=237;
          y[2]=29;
      }
      if(mouseX>175&&mouseX<175+174&&mouseY>139&&mouseY<139+31) {
          dd="Garamond";
          y[0]=0;
          y[1]=102;
          y[2]=51;
      }
      if(mouseX>175&&mouseX<175+174&&mouseY>180&&mouseY<180+31) {
          dd="Georgia";
          y[0]=0;
          y[1]=102;
          y[2]=51;
      }
      if(mouseX>219&&mouseX<219+73&&mouseY>353&&mouseY<353+31) {
          g++;
      }
  }
  if(g===0) {
    if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        a+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        a-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>13&&mouseY<13+29) {
        b+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>92&&mouseY<92+29) {
        b-=1;
    }
     if(mouseX>19&&mouseX<19+44&&mouseY>129&&mouseY<129+29) {
        c+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>205&&mouseY<205+29) {
        c-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>129&&mouseY<129+29) {
        d+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>205&&mouseY<205+29) {
        d-=1;
    }
      if(mouseX>19&&mouseX<19+44&&mouseY>246&&mouseY<246+29) {
        e+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>326&&mouseY<326+29) {
        e-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>246&&mouseY<246+29) {
        f+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>326&&mouseY<326+29) {
        f-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>13&&mouseY<13+26) {
      g++;  
    }  
    if(mouseX>291&&mouseX<291+57&&mouseY>350&&mouseY<350+26) {
        g-=1;
    }
  }
  if(g===1) {
      if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        h+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        h-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>13&&mouseY<13+29) {
        i+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>92&&mouseY<92+29) {
        i-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>129&&mouseY<129+29) {
        j+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>205&&mouseY<205+29) {
        j-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>246&&mouseY<246+29) {
        k+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>326&&mouseY<326+29) {
        k-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>13+26&&mouseY<13+26+26) {
      g++;  
    }
     if(mouseX>291&&mouseX<291+57&&mouseY>328&&mouseY<328+26) {
        g-=1;
    }
  }
  if(g===2) {
   if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        m+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        m-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>129&&mouseY<129+29) {
        n+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>205&&mouseY<205+29) {
        n-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>246&&mouseY<246+29) {
        o+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>326&&mouseY<326+29) {
        o-=1;
    }
    if(mouseX>68&&mouseX<68+13&&mouseY>268&&mouseY<268+12) {
        p+=1;
    }
    if(mouseX>68&&mouseX<68+13&&mouseY>305&&mouseY<305+12) {
        p-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>13&&mouseY<13+26) {
      g++;  
    } 
    if(mouseX>291&&mouseX<291+57&&mouseY>350&&mouseY<350+26) {
        g-=1;
    }
  }
  if(g===3) {
     if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        t+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        t-=1;
    }
     if(mouseX>19&&mouseX<19+44&&mouseY>129&&mouseY<129+29) {
        r+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>205&&mouseY<205+29) {
        r-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>246&&mouseY<246+29) {
        s+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>326&&mouseY<326+29) {
        s-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>13+26&&mouseY<13+26+26) {
      g++;  
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>328&&mouseY<328+26) {
        g-=1;
    }
  }
  if(g===4) {
      if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        u+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        u-=1;
    }
     if(mouseX>19&&mouseX<19+44&&mouseY>129&&mouseY<129+29) {
        v+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>205&&mouseY<205+29) {
        v-=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>246&&mouseY<246+29) {
        w+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>326&&mouseY<326+29) {
        w-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>246&&mouseY<246+29) {
        x+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>326&&mouseY<326+29) {
        x-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>13&&mouseY<13+26) {
      g++;  
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>350&&mouseY<350+26) {
        g-=1;
    }
  }
  if(g===5) {
       if(mouseX>19&&mouseX<19+44&&mouseY>13&&mouseY<13+29) {
        z+=1;
    }
    if(mouseX>19&&mouseX<19+44&&mouseY>92&&mouseY<92+29) {
        z-=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>13&&mouseY<13+29) {
        aa+=1;
    }
    if(mouseX>157&&mouseX<157+44&&mouseY>92&&mouseY<92+29) {
        aa-=1;
    }
    if(mouseX>70&&mouseX<70+24&&mouseY>158&&mouseY<158+19) {
        bb+=1;
    }
    if(mouseX>70&&mouseX<70+24&&mouseY>214&&mouseY<214+19) {
        bb-=1;
    }
    if(mouseX>110&&mouseX<110+24&&mouseY>155&&mouseY<155+19) {
        cc+=1;
    }
    if(mouseX>108&&mouseX<108+24&&mouseY>214&&mouseY<214+19) {
        cc-=1;
    }
    if(mouseX>291&&mouseX<291+57&&mouseY>328&&mouseY<328+26) {
        g-=1;
    }
  }
};
draw= function() {
    if(g===-1) {
     background(y[0], y[1], y[2]);
     fill(0, 0, 0);
     textSize(20);
     text("Reset:", 20, 35);
     fill(255, 0, 255);
     rect(13, 49, 76, 30);
     fill(0, 0, 0);
     textSize(15);
     text("Page 1", 25, 69);
     fill(255, 0, 255);
     rect(13, 86, 76, 30);
     fill(0, 0, 0);
     text("Page 2", 25, 105);
     fill(255, 0, 255);
     rect(13, 125, 76, 30);
     fill(0, 0, 0);
     text("Page 3", 25, 144);
     fill(255, 0, 255);
     rect(13, 165, 76, 30);
     fill(0, 0, 0);
     text("Page 4", 25, 182);
     fill(255, 0, 255);
     rect(13, 203, 76, 30);
     fill(0, 0, 0);
     text("Page 5", 25, 222);
     fill(255, 0, 255);
     rect(13, 243, 76, 30);
     fill(0, 0, 0);
     text("Page 6", 25, 263);
     textSize(20);
     text("Theme:", 177, 37);
     fill(255, 0, 255);
     rect(175, 52, 74, 31);
     fill(0, 0, 0);
     textSize(15);
     text("Normal", 187, 72);
     fill(255, 0, 255);
     rect(175, 95, 74, 31);
     fill(0, 0, 0);
     textSize(15);
     text("Fun", 195, 115);
      fill(255, 0, 255);
     rect(175, 139, 133, 31);
     fill(0, 0, 0);
     textSize(15);
     text("Fancy (Garamond)", 178, 159);
     fill(255, 0, 255);
     rect(175, 180, 133, 31);
     fill(0, 0, 0);
     textSize(15);
     text("Fancy (Georgia)", 188, 201);
     fill(255, 0, 255);
     rect(219, 353, 73, 31);
     fill(0, 0, 0);
     text("Calculator", 222, 372);
    }
    if(g===0) {
        textFont(createFont(dd));
  background(y[0], y[1], y[2]);
  fill(0, 0, 0);
  textSize(30);
  text(a, 16, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
  text(b, 155, 83);
  fill(255, 255, 255);
  rect(157, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 171, 38);
  fill(255, 255, 255);
  rect(157, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 115);
  textSize(46);
  text("+", 96, 91);
  text("=", 229, 91);
  var add = function(num1, num2) {
   return num1+num2;
  };
  textSize(30);
  text(add(a,b), 260, 85);
  textSize(30);
  text(c, 16, 195);
  fill(255, 255, 255);
  rect(19, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 155);
  fill(255, 255, 255);
  rect(19, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 227);
  text(d, 155, 195);
  fill(255, 255, 255);
  rect(157, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 171, 155);
  fill(255, 255, 255);
  rect(157, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 227);
  textSize(46);
  text("-", 98, 197);
  text("=", 229, 202);
  
  var subtract = function(num1, num2) {
   return num1-num2;
  };
  
  textSize(30);
  text(subtract(c,d), 260, 195);
  text(e, 16, 311);
  fill(255, 255, 255);
  rect(19, 246, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 272);
  fill(255, 255, 255);
  rect(19, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 348);
  text(f, 156, 311);
  fill(255, 255, 255);
  rect(157, 244, 44, 29);
  fill(0, 0, 0);
  text("+", 170, 270);
  fill(255, 255, 255);
  rect(157, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 348);
  textSize(46);
  text("x", 97, 313);
  text("=", 229, 318);
  
  var multiply = function(num1,num2) {
    return num1*num2;
  };
  
  textSize(30);
  text(multiply(e,f), 256, 312);
 fill(255, 0, 255);
 rect(291, 13, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Next page", 292, 29);
 fill(255, 0, 255);
 rect(291, 350, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Settings", 298, 366);
 
  
    }
   if(g===1) {
      background(y[0], y[1], y[2]);
  fill(0, 0, 0);
  textSize(30);
  text(h, 16, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
  text(i, 155, 83);
  fill(255, 255, 255);
  rect(157, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 171, 38);
  fill(255, 255, 255);
  rect(157, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 115);
  textSize(46);
  text("÷", 96, 91);
  text("=", 229, 91);
  var divide = function(num1, num2) {
   return num1/num2;
  };
  textSize(30);
  text(divide(h,i), 260, 85);
  textSize(30);
  text(j, 16, 195);
  fill(255, 255, 255);
  rect(19, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 155);
  fill(255, 255, 255);
  rect(19, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 227);
  textSize(18);
  text("2", 57, 178);
  textSize(46);
  text("=", 93, 201);
  var square = function(num1) {
    return num1*num1;
  }; 
  textSize(30);
  text(square(j), 148, 194);
  text(k, 16, 311);
  fill(255, 255, 255);
  rect(19, 246, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 272);
  fill(255, 255, 255);
  rect(19, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 348);
  textSize(18);
  text("3", 57, 294);
  textSize(46);
  text("=", 93, 313);
  var cube = function (num1) {
   return num1*num1*num1;
  };
  
 textSize(30);
  text(cube(k), 148, 308);
  fill(255, 0, 255);
 rect(291, 39, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Next page", 292, 55);
 fill(255, 0, 255);
 rect(291, 328, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Back", 305, 346);
  }
  if(g===2) {
   background(y[0], y[1], y[2]);
  fill(0, 0, 0);
  textSize(30);
  text("√"+m, 6, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
  textSize(46);
  text("=", 107, 89);
  textSize(30);
  text(Math.sqrt(m), 151, 85);
  textSize(30);
  text("∛"+n, 9, 195);
  fill(255, 255, 255);
  rect(19, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 34, 155);
  fill(255, 255, 255);
  rect(19, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 227);
  textSize(46);
  text("=", 107, 201);
  textSize(30);
  text(Math.cbrt(n), 151, 198);
  fill(255, 255, 255);
  rect(19, 246, 44, 29);
  fill(0, 0, 0);
  text(o, 32, 314);
  text("+", 32, 272);
  fill(255, 255, 255);
  rect(19, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 348);
  textSize(18);
  text(p, 70, 300);
  textSize(46);
  text("=", 93, 313);
  fill(255, 255, 255);
  rect(68, 268, 13, 12);
  textSize(12);
  fill(0, 0, 0);
  text("+", 72, 279);
  fill(255, 255, 255);
  rect(68, 305, 13, 12);
  textSize(12);
  fill(0, 0, 0);
  text("-", 73, 314);
  textSize(30);
  text(Math.pow(o, p), 146, 306);
  fill(255, 0, 255);
 rect(291, 13, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Next page", 292, 29);
 fill(255, 0, 255);
 rect(291, 350, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Back", 303, 366);
 
  }
  if(g===3) {
   background(y[0], y[1], y[2]);   
   fill(0, 0, 0);
  textSize(30);
  text(t+"π", 19, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
  textSize(46);
  text("=", 107, 89);
  var pi = function(num1) {
    return num1*Math.PI;
  };
  textSize(30);
  text(pi(t).toFixed(14), 137, 94);
  textSize(30);
  text(r+"!", 28, 195);
  fill(255, 255, 255);
  rect(19, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 34, 155);
  fill(255, 255, 255);
  rect(19, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 227);
  textSize(46);
  text("=", 107, 201);
  
  var factorial = function(num1) {
    var calc = 1;
    for(var i = 1; i<=num1; i++) {
        calc*=i;
    }
    return calc;
  };
  textSize(30);
  text(factorial(r), 155, 195);
  fill(255, 255, 255);
  rect(19, 246, 44, 29);
  fill(0, 0, 0);
  text(s, 17, 314);
  text("+", 32, 272);
  fill(255, 255, 255);
  rect(19, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 348);
  textSize(18);
  textSize(46);
  text("=", 93, 313);
  rect(14, 286, 1, 32);
  rect(70, 286, 1, 32);
  textSize(30);
  text(Math.abs(s), 152, 312);
  fill(255, 0, 255);
 rect(291, 39, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Next page", 292, 54);
 fill(255, 0, 255);
 rect(291, 328, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Back", 305, 346);
 }
 if(g===4) {
   background(y[0], y[1], y[2]);
   fill(0, 0, 0);
  textSize(30);
  text(u+"%", 6, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
   textSize(46);
  text("=", 107, 89);
  rect(166, 78, 65, 7);
  textSize(30);
  text("25", 180, 118);
  var ptof = function(num1) {
    return (num1/100)*25;
  };
  text(ptof(u), 175, 67);
  fill(255, 0, 255);
 rect(291, 350, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Back", 303, 366);
 textSize(30);
  text(v+"%", 10, 195);
  fill(255, 255, 255);
  rect(19, 129, 44, 29);
  fill(0, 0, 0);
  text("+", 34, 155);
  fill(255, 255, 255);
  rect(19, 205, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 227);
  textSize(46);
  text("=", 107, 201);
  var ptod = function(num1) {
    return num1/100;
  };
  textSize(30);
  text(ptod(v), 175, 193);
  text(w, 16, 311);
  fill(255, 255, 255);
  rect(19, 246, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 272);
  fill(255, 255, 255);
  rect(19, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 348);
  text(x, 156, 311);
  fill(255, 255, 255);
  rect(157, 244, 44, 29);
  fill(0, 0, 0);
  text("+", 170, 270);
  fill(255, 255, 255);
  rect(157, 326, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 348);
  textSize(46);
  text("C", 97, 313);
  text("=", 229, 318);
  var factorial = function(num1) {
    var calc = 1;
    for(var i = 1; i<=num1; i++) {
        calc*=i;
    }
    return calc;
  }; 
  var nCr = function (num1, num2) {
    return factorial(num1)/(factorial(num2)*factorial(num1-num2));
  };
  textSize(30);
 text(nCr(w, x), 274, 313);
 
 fill(255, 0, 255);
 rect(291, 13, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Next page", 292, 29);
 }
 if(g===5) {
     background(y[0], y[1], y[2]);
     fill(0, 0, 0);
  textSize(30);
  text(z+"%", 7, 83);
  fill(255, 255, 255);
  rect(19, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 32, 38);
  fill(255, 255, 255);
  rect(19, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 35, 115);
  text(aa, 155, 83);
  fill(255, 255, 255);
  rect(157, 13, 44, 29);
  fill(0, 0, 0);
  text("+", 171, 38);
  fill(255, 255, 255);
  rect(157, 92, 44, 29);
  fill(0, 0, 0);
  text("-", 175, 115);
  textSize(46);
  text("of", 99, 91);
  text("=", 229, 91);
  var percent = function(num1, num2) {
    return (num1/100)*num2;
  };
  textSize(30);
  text(percent(z,aa), 260, 85);
  text("Log", 17, 197);
  text(bb, 64, 210);
  fill(255, 255, 255);
  rect(70, 158, 24, 19);
  fill(0, 0, 0);
  textSize(20);
  text("+", 77, 174);
  fill(255, 255, 255);
  rect(70, 214, 24, 19);
  fill(0, 0, 0);
  textSize(20);
  text("-", 80, 229);
  textSize(30);
  text("("+cc+")", 95, 199);
  fill(255, 255, 255);
  rect(110, 155, 24, 19);
   fill(0, 0, 0);
  textSize(20);
  text("+", 115, 172);
  fill(255, 255, 255);
  rect(108, 214, 24, 19);
  fill(0, 0, 0);
  textSize(20);
  text("-", 115, 229);
  textSize(46);
  text("=", 167, 208);
  var ohio = function(num1, num2) {
    return Math.log(num1)/Math.log(num2);
  };
  textSize(30);
  text(ohio(cc, bb), 211, 201);
  fill(255, 0, 255);
 rect(291, 328, 57, 26);
 fill(0, 0, 0);
 textSize(12);
 text("Back", 305, 346);
 
 }
 
 
 
};



