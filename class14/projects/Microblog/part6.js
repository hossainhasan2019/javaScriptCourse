// dom element usage kora html create kora
//create Element with dom




/*

 <tr>
              <td class="post">post 5</td>
              <td>
                <span class="fa fa-times float-right pr-3"></span>
              </td>
            </tr>

*/


const tr = document.createElement('tr');

const td1 = document.createElement('td');

td1.className = ' post';
td1.innerHTML = ' post6';
td1.id = ' post-id6';
td1.setAttribute('title', 'post-title-6');
console.log(td1);

const td2 = document.createElement('td');
const span = document.createElement('span');
span.className = 'fa fa-times float-right pr-3';
//td tag er moddhe span tag ta ke dhukaite appent usage korsi
td2.append(span);

console.log(td2);

tr.append(td1,td2);
console.log(tr);

//ui te insert kore dia holo 
document.querySelector('tbody').append(tr);