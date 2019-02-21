function addData(){
  var nm = document.querySelector("#name").value;
  var em = document.querySelector("#email").value;
  var career = document.querySelector("#career").value;
  var pnm = document.querySelector("#number").value;
  var g1 = document.querySelector("#group1").value;
  var b1 = document.querySelector("#branch1").value;
  var c1 = document.querySelector("#college1").value;
  var m1 = document.querySelector("#marks1").value;
  var g2 = document.querySelector("#group2").value;
  var b2 = document.querySelector("#branch2").value;
  var c2 = document.querySelector("#college2").value;
  var m2 = document.querySelector("#marks2").value;
  var g3 = document.querySelector("#group3").value;
  var c3 = document.querySelector("#college3").value;
  var m3 = document.querySelector("#marks3").value;
  var tech = document.querySelector("#tech").value;
  var idb = window.indexedDB || window.msIndexedDB ||  window.mozIndexedDB ||  window.webkitIndexedDB;
  var open = idb.open("Resume Bulider",1);
  open.onupgradeneeded=function(e){
    var request = e.target.result;
    request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true});

  }
open.onsuccess=function(e){
    var request = e.target.result;
    var transaction = request.transaction("form_data","readwrite");
    var storeDB = transaction.objectStore("form_data");
    storeDB.add({
      name:nm,
      email:em,
      number:pnm,
      career:career,
      education:[
        {
          degree:g1,
          branch:b1,
          college:c1,
          percentage:m1
        },
        {
          degree:g2,
          branch:b2,
          college:c2,
          percentage:m2
        },
        {
          degree:g3,
          college:c3,
          percentage:m3
        },
      ],
      tech:[{
        tech:tech
      }]
    })
    window.open("index.html");
}
open.onerror=function(e){
     console.log("indexedDB error");
}
}
