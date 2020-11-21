import React, {Component} from "react";
import CommentList from "./CommentList";

class ProfilePage extends Component{

    render(){
        const {comments, name, email, img} = this.props.data;

        return(
            <div className="mainprofile">  
                <img src={img} alt="" className="mainprofile__image"/>
                <div className="mainprofile__user">
                    <h1 className="mainprofile__user--name">{name}</h1>
                    <h3 className="mainprofile__user--email">{email}</h3>

                    </div>
                <div className="mainprofile__comments">
                    <CommentList comments={comments}/>
                </div>
            </div>

        
        )
    }
}
export default ProfilePage;