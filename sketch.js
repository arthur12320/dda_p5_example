// author: Arthur Rodrigues Aragão (arthur12320)
//date: 28/08/2019

//grid variables
const width=5000
const height=5000
const increment=5


//line params
let x1 = null;
let y1 = null;
let x2 = null;
let y2 = null;


function setup(){
    createCanvas(width,height);
    background(200);
    grid(width,height,increment);
}


//draw the grid
function grid(width,height,increment){
    stroke(100);
    for(let i=0;i <= width;i += increment){
        line(i,0,i,height);    
    }
    for(let i=0;i <= height;i += increment){
        line(0,i,width,i);    
    }
}


//gets x,y data from mouse press and sends to dda functi
function mouseClicked(){
    if(!(x1)){
        x1 = Math.floor(mouseX/increment);
        y1 = Math.floor(mouseY/increment);
        fill(255,0,0);
        rect(x1*increment,y1*increment,increment,increment);
        console.log('1')
    }else{
        x2 = Math.floor(mouseX/increment);
        y2 = Math.floor(mouseY/increment);
        dda(x1,y1,x2,y2,increment);
        x1=null;
        y1=null;      
        console.log('2'); 
    }   
}




//all dda line logic
function dda(x1,y1,x2,y2,increment){ 
    //calculate dx,dy
    let dx = x2 - x1;
    let dy = y2 - y1;

    //decide the size of steps based on bigger difference
    let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);

    //calculate the increment in each axis
    let Xinc = dx / steps;
    let Yinc = dy / steps;

    //pixel for each step:
    let x = x1;
    let y = y1;


    //interate from 0 to the numbers of steps calculated 
    for(let i = 0;i <= steps; i++){
        console.log(`PIXEL AT: (${Math.round(x)},${Math.round(y)})`);
        
        //draw the pixel 
        fill(0);
        rect(Math.round(x)*increment,Math.round(y)*increment,increment,increment);

        x += Xinc;
        y += Yinc;
    }

}
