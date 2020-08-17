/*

JS
===============================================================

*/

function validation() {


    let x = document.querySelector("#inp1").value;

    let y = document.querySelector("#inp2").value;




    if (x == " ") {

        let a = document.querySelector("#invalid");
        let b = document.querySelector("#invalid1");

        a.style.visibility = "visible";
        b.style.visibility = "visible";

    }


}

counter = 0

function submit() {

    let a = document.querySelector("#inp1").value;
    let b = document.querySelector("#inp2").value;

    let c = document.querySelector("#Detailparent").cloneNode(true);

    c.style.visibility = 'visible';

    c.removeAttribute('id');
    c.style.visibility = 'visible';
    counter++;


    c.children[0].innerHTML = counter + "]" + " " +
        "Name: " +
        a + " " + "Password: " +
        b;

    let d = document.querySelector("#detailbox")

    d.insertBefore(c, detailbox.lastChild);


    document.querySelector("#inp1").value = " ";

    document.querySelector("#inp2").value = " ";


}