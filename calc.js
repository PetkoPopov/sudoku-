function calc() {

    const allTd = document.getElementsByTagName('td');
    var rowArr = [];
    var arrColl1 = [];
    var arrColl2 = [];
    var arrColl3 = [];
    var arrColl4 = [];
    var arrColl5 = [];
    var arrColl6 = [];
    var arrColl7 = [];
    var arrColl8 = [];
    var arrColl9 = [];
    var sqr1 = [];
    var sqr2 = [];
    var sqr3 = [];
    var sqr4 = [];
    var sqr5 = [];
    var sqr6 = [];
    var sqr7 = [];
    var sqr8 = [];
    var sqr9 = [];

    var totalArr = [];
    let counter = 0;


    for (let td of allTd) {



        rowArr.push(td.textContent);
        if ((counter + 1) % 9 == 0) {
            totalArr.push(rowArr);
            rowArr = [];
        }

        ///////////////////////////////
        //тука създаваме масиви на колоните 
        ///////////////////////////////
        if (counter % 9 == 0) {
            arrColl1.push(td.textContent);
        } else if (counter % 9 == 1) {
            arrColl2.push(td.textContent)
        } else if (counter % 9 == 2) {
            arrColl3.push(td.textContent);
        } else if (counter % 9 == 3) {
            arrColl4.push(td.textContent);
        } else if (counter % 9 == 4) {
            arrColl5.push(td.textContent);
        } else if (counter % 9 == 5) {
            arrColl6.push(td.textContent);
        } else if (counter % 9 == 6) {
            arrColl7.push(td.textContent);
        } else if (counter % 9 == 7) {
            arrColl8.push(td.textContent);
        } else if (counter % 9 == 8) {
            arrColl9.push(td.textContent);
        }
        //////////////////////////
        //правим масивите по кутии
        ///////////////////////////
        if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 20) {
            sqr1.push(td.textContent);
        } else if ((counter % 9 == 3|| counter % 9 == 4 || counter % 9 == 5) && counter <= 23) {
            sqr2.push(td.textContent);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 26) {
            sqr3.push(td.textContent);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 47) {
            sqr4.push(td.textContent);
        } else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 50) {
            sqr5.push(td.textContent);
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) && counter <= 53) {
            sqr6.push(td.textContent);
        } else if ((counter % 9 == 0 || counter % 9 == 1 || counter % 9 == 2) && counter <= 74) {
            sqr7.push(td.textContent);
        }else if ((counter % 9 == 3 || counter % 9 == 4 || counter % 9 == 5) && counter <= 77){
            sqr8.push(td.textContent)
        } else if ((counter % 9 == 6 || counter % 9 == 7 || counter % 9 == 8) ) {
            sqr9.push(td.textContent);
        }



        counter++;
    }

    totalArr.push(sqr1);
    totalArr.push(sqr2);
    totalArr.push(sqr3);
    totalArr.push(sqr4);
    totalArr.push(sqr5);
    totalArr.push(sqr6);
    totalArr.push(sqr7);
    totalArr.push(sqr8);
    totalArr.push(sqr9);
    totalArr.push(arrColl9);
    totalArr.push(arrColl8);
    totalArr.push(arrColl7);
    totalArr.push(arrColl6);
    totalArr.push(arrColl5);
    totalArr.push(arrColl4);
    totalArr.push(arrColl3);
    totalArr.push(arrColl2);
    totalArr.push(arrColl1);

    console.log(totalArr)

}
