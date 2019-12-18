
arrList = ["list item 1", "list item 2", "list item 3", "list item 4", "list item 5"];
var newlist = $("<ul/>");
for(i = 0; i < arrList.length; i++){
    var list = $("<li/>");
    list.text(arrList[i]);
    newlist.append(list);
    $("body").append(newlist);
}
