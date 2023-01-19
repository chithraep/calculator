let alien ={
    name : 'chithra',
    tech :'JSON',
    laptop : {
        brand :'lenovo',
        ram :4

    }
}
//for in loop
for(let key in alien)
{
    //console.log(key,alien.tech);
    console.log(key,alien[key]);
}
//console.log(alien);