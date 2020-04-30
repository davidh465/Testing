
'use strict';
 
var dataset1 = function(){
 
    var dataset1 = {};
 
    var accounts = new DataTable(['login', 'password']); //
    accounts.add(['davert', '123456']); // adding records to a table
    accounts.add(['admin', '123456']);
 
    dataset1.accounts = accounts;
 
    return dataset1;
}
 
module.exports = dataset1;