window.onload = function(){
    let todos = getCookie("todos");
    if (todos){
        JSON.parse(todos).forEach(task => {addTodo(task,false);});
    }
};
function addTodo(text, save=true) {
    let list = document.getElementById("ft_list");
    let div = document.createElement("div");
    div.className = "todo";
    div.innerText = text;

    div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            list.removeChild(div);
            saveTodos();
        }
    };

    list.insertBefore(div, list.firstChild); 
    if (save) saveTodos();
}
document.getElementById("newBtn").onclick = function() {
    let task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTodo(task.trim());
    }
};
function saveTodos() {
    let list = document.getElementById("ft_list");
    let todos = [];
    for (let child of list.children) {
        todos.push(child.innerText);
    }
    setCookie("todos", JSON.stringify(todos), 7); 
}

function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
    let cname = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let c of ca) {
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
