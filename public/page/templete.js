module.exports = {
    HTML: function(title,list){
        return `
        <section class="board">
            <div class="top">
                <div>${title}</div>
                <div class="assign">등록하기</div>
            </div>

            <div class="boardlist">
                ${list}
            </div>
        </section>
        `;
    },
    list:function(boards){
        let list = '<ul>';
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