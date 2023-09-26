function isString (option, callback){
if (typeof option=== "string"){
   callback(option);
}
}


function firstWordUpperCase(stringz, callme) {
    const words = stringz.split(' ');

    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    const modifiedStringz = words.join(' ');

    callme(modifiedStringz);
}
//test//
firstWordUpperCase("heey world", function(result) {
    console.log(result.replace(/ /g, '-')); 
});

////3

