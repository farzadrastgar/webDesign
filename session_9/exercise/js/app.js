var list = ["ali", "hasan", "amir"];
document.write("<table>");
document.write("<tr>");
document.write("<th>No.</th>");
document.write("<th>Name</th>");
document.write("<th>Site</th>");
document.write("</tr>");
for (var i = 0; i < list.length; i++) {
  document.write("<tr>");
    document.write("<td>"+i+"</td>");
    document.write("<td>"+list[i]+"</td>");
    document.write("<td>"+'<a href="https://' + list[i] + '.com">Click Me!</a>'+"</td>");
  document.write("</tr>");
}
document.write("</table>");
