import Comment from "./CommentItem.js";
function CommentList({comments}){
    return(
        <ul className="mainprofile__comments--list">
            {comments && comments
            /* First check if comments exist, then map comments*/    
                .map((data)=>{
                    return(
                        <Comment key={data.id} data={data}/>
                    )
                })}
        </ul>
    );
}
export default CommentList