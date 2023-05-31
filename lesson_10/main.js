function showDialog() {
    alert('Xin chao cac ban');
}
// showDialog();

function callYourName(name) {
    console.log('Xin chao', name);
}
callYourName('Man');

function callAllName(){
    var names = '';
    for (const iterator of arguments) {
        names = names + iterator + ', ';
    }
    console.log('Xin chao '+ names+'nhe');
}
callAllName('Man', 'Nam', 'An');
