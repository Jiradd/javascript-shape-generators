function Triangle(num){

    let x,y, disp='';
    let strt = 1;
    let stop = num;

    for(y=1;y<=num;y++)
    {
        for(x=1;x<=num;x++)
        {
            if(x >= strt && x <= stop)
            {
                disp+="* ";
            }
            else
            {
                disp+="_ ";
            }
        }
        
        stop--;
    }
    console.log(disp);
}


console.log(Triangle(5));
