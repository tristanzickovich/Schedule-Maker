<!--
function timeInfo(stime1, stime2, s1, etime1, etime2, s2){
   this.stime1 = stime1;
   this.stime2 = stime2;
   this.s1 = s1;
   this.etime1 = etime1;
   this.etime2 = etime2;
   this.s2 = s2;
}

function addRow(tableID){
   var table=document.getElementById(tableID);
   var rowCount=table.rows.length;
   var row=table.insertRow(rowCount);
   var namedata1 = "daynighta" + rowCount,
       namedata = "daynight" + rowCount;

   var newcell = row.insertCell(0);
   newcell.innerHTML = '<input type="checkbox" name="chk">';
   newcell = row.insertCell(1);
   newcell.innerHTML = '<input type="checkbox" name="mon">';
   newcell = row.insertCell(2);
   newcell.innerHTML = '<input type="checkbox" name="tues">';
   newcell = row.insertCell(3);
   newcell.innerHTML = '<input type="checkbox" name="wed">';
   newcell = row.insertCell(4);
   newcell.innerHTML = '<input type="checkbox" name="thurs">';
   newcell = row.insertCell(5);
   newcell.innerHTML = '<input type="checkbox" name="fri">';
   newcell = row.insertCell(6);
   newcell.innerHTML = '<input type="text" name="name" placeholder="English">';
   newcell = row.insertCell(7);
   newcell.innerHTML =
      '<input type="text" class="timebox" name="start" maxlength="2" placeholder="12"><b>:</b><input \
      type="text" class="timebox" name="start" maxlength="2" placeholder="40">';
   newcell = row.insertCell(8);
   newcell.innerHTML = '<input type="radio" name="' + namedata1 + '" value="am">';
   newcell = row.insertCell(9);
   newcell.innerHTML = '<input type="radio" name="' + namedata1 + '" value="pm" checked>';
   newcell = row.insertCell(10);
   newcell.innerHTML =
      '<input type="text" class="timebox" name="end" maxlength="2" placeholder="2"><b>:</b><input \
      type="text" class="timebox" name="end" maxlength="2" placeholder="00">';
   newcell = row.insertCell(11);
   newcell.innerHTML = '<input type="radio" name="' + namedata + '" value="am">';
   newcell = row.insertCell(12);
   newcell.innerHTML = '<input type="radio" name="' + namedata + '" value="pm" checked>';
}

function deleteRow(tableID){
   try{
      var table=document.getElementById(tableID);
      var rowCount=table.rows.length;
      for(var i=0;i<rowCount;i++){
         var row=table.rows[i];
         var chkbox=row.cells[0].childNodes[0];
         if(null!=chkbox&&true==chkbox.checked){
            if(rowCount<=2){
               alert("Cannot delete all classes.");
               break;
            }
            table.deleteRow(i);
            --rowCount;
            --i;
         }
      }
   }
   catch(e){alert(e);}
}

function fetchData(curTable, newTable){
   clearTable(newTable);
   var table=document.getElementById(curTable),
       ntable = document.getElementById(newTable);
   var rowCount=table.rows.length,
       nrowCount = ntable.rows.length;

   for(var i=1;i<rowCount;i++){
      var passed = false;
      var row=table.rows[i];
      var chkbox=row.cells[0].childNodes[0];
      var monbox=row.cells[1].childNodes[0];
      var tuesbox=row.cells[2].childNodes[0];
      var wedbox=row.cells[3].childNodes[0];
      var thursbox=row.cells[4].childNodes[0];
      var fribox=row.cells[5].childNodes[0];
      var nameClass= row.cells[6].childNodes[0].value;
      if(!nameClass) nameClass = "unspecified";
      var timeStart=row.cells[7].childNodes[0].value;
      if(!timeStart) timeStart = "?";
      else timeStart += ":";
      var timeStart2=row.cells[7].childNodes[2].value;
      var amboxS=row.cells[8].childNodes[0];
      var pmboxS=row.cells[9].childNodes[0];
      var timeEnd=row.cells[10].childNodes[0].value;
      if(!timeEnd) timeEnd = "?";
      else timeEnd += ":";
      var timeEnd2=row.cells[10].childNodes[2].value;
      var amboxE=row.cells[11].childNodes[0];
      var pmboxE=row.cells[12].childNodes[0];
      var ampm_s, ampm_e;
      var nrow = ntable.rows[1];
      if(null!=amboxS && true==amboxS.checked){
         ampm_s = amboxS.value;
      }
      if(null!=pmboxS && true==pmboxS.checked){
         ampm_s = pmboxS.value;
      }
      if(null!=amboxE && true==amboxE.checked){
         ampm_e = amboxE.value;
      }
      if(null!=pmboxE && true==pmboxE.checked){
         ampm_e = pmboxE.value;
      }

      var outputFormat =
         "<td><b>" + nameClass + "</b></td><br><td><mark><i>" + timeStart
         + timeStart2 + " " + ampm_s + " - " + timeEnd + timeEnd2 + " "
         + ampm_e + "</i></mark></td><br><br>";

      if(null!=chkbox&&true==chkbox.checked){
         deleteRow(curTable);
         if(i > 2){
            --i;
            continue;
         }
         else
            break;
      }
      if(null!=monbox && true==monbox.checked){
         nrow.cells[1].innerHTML += outputFormat;
         passed = true;
      }
      if(null!=tuesbox && true==tuesbox.checked){
         nrow.cells[2].innerHTML += outputFormat;
         passed = true;
      }
      if(null!=wedbox && true==wedbox.checked){
         nrow.cells[3].innerHTML += outputFormat;
         passed = true;
      }
      if(null!=thursbox && true==thursbox.checked){
         nrow.cells[4].innerHTML += outputFormat;
         passed = true;
      }
      if(null!=fribox && true==fribox.checked){
         nrow.cells[5].innerHTML += outputFormat;
         passed = true;
      }
      // if(!passed)
      //    alert("nothing");
      // else
      //    alert("cur complete");
   }

}

function clearTable(tableID){
   var table=document.getElementById(tableID);
   var row = table.rows[1];
   var count = row.cells.length;
   for(var i = 1; i < count; ++i){
      row.cells[i].innerHTML = "<td> </td>"
   }
}

function unhide(divID){
   var item = document.getElementById(divID);
   if(item){
       if(item.className === 'hidden'){
           item.className = 'container';
       }
    }
}

//FIXME
function orderClasses(tableID){
   var table=document.getElementById(tableID);
   var row=table.rows[1];
   for(var i = 1; i < row.cells.length; ++i){
      var nameindex = [""];
      var timeindex = [""];
      var timearr = [""];

      var curitem = row.cells[i];
      var index = 10; //+ number is name of class, - is time
      for(var j = 1; j < curitem.childNodes.length - 1; j++){
         var temp = curitem.childNodes[j].innerText;
         if(temp){
             if(index > 0){
                //its a name
                nameindex.push(j);
             }
             else{
                //its the time
               // alert("begin");
                timeindex.push(j)
                var tStart1 = temp.substring(0, temp.search(":"));
                //alert(tStart1);
                temp = temp.substring(temp.search(":")+1);
                var tStart2 = temp.substring(0, temp.search("m") -1);
                //alert(tStart2);
                temp = temp.substring(temp.search("m") -2);
                var dStart = temp.substring(0,3);
                //alert(dStart);
                temp = temp.substring(temp.search("-") + 1);
                var tEnd1 = temp.substring(0, temp.search(":"));
                //alert(tEnd1);
                temp = temp.substring(temp.search(":")+1);
                var tEnd2 = temp.substring(0, temp.search("m") -1);
                //alert(tEnd2);
                temp = temp.substring(temp.search("m") -2);
                var dEnd = temp;
                //alert(dEnd);
                var tEnd= temp.substring
                timearr.push(new timeinfo(tStart1, tStart2, dStart, tEnd1, tEnd2, dEnd));

             }
             index *= -1;
          }
      }
      //if(timearr){
         for(var j = 0; j < nameindex.length; ++j){
            alert(nameindex[j]);
         }
      //}
   }
}
//-->
