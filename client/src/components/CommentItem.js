function Comment (props) {
    const {name, comment, key} = props.data;
    return(
        <li className="mainprofile__comments--item" key={key}>
            <h4 className="mainprofile__comments--name">{name}</h4>
            <p className="mainprofile__comments--content">{comment}</p>
        </li>
    );
}
export default Comment;