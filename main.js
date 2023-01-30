name_of_studentarray = [];
function submit()
{
 var name_1 = document.getElementById("id_1").value;
 var name_2 = document.getElementById("id_2").value;
 var name_3 = document.getElementById("id_3").value;
 var name_4 = document.getElementById("id_4").value;

 name_of_studentarray.push(name_1);
 name_of_studentarray.push(name_2);
 name_of_studentarray.push(name_3);
 name_of_studentarray.push(name_4);

 console.log(name_of_studentarray);

 document.getElementById("display_name").innerHTML = name_of_studentarray;
 document.getElementById("button_s").style.display = "none";
 document.getElementById("sort_b").style.display = "inline-block";
 }
function sort()
{
name_of_studentarray.sort();
console.log(name_of_studentarray);
document.getElementById("display_name").innerHTML = name_of_studentarray;


}