export default function Write(assignment){
    assignment.innerHTML=`
        <form action="http://localhost:3000/assignment_create" method="post">
            <select name="boardlist" aria-placeholder="게시판을 선택하세요">
                <option value="">게시판을 선택해주세요</option>
                <option value="free">자유게시판</option>
                <option value="secret">비밀게시판</option>
                <option value="info">정보게시판</option>
                <option value="pro">홍보게시판</option>
                <option value="sw">sw게시판</option>
            </select>
            <input type="text" placeholder="제목을 입력하세요">
            <textarea name="description" placeholder="내용"></textarea>
            <input type="submit" class="submit">
        </form>
        <span class="write">글쓰기</span>
        `;
}