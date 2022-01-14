module.exports = {
    list:function(boards){
        const list = '<ul>';
        let i = 0;
        while(i< boards.lenth){
            list = list + `
            <li ><a href="#a"><p>${boards[i].date}</p><div>${boards[i].description}</div><p>${boards[i].author}</p></a></li>`;
            i = i+1;
        }
        list = list+'</ul>';
        return list;
    }
}

