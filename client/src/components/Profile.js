import React, {Component} from "react";
import CommentList from "./CommentList";

class ProfilePage extends Component{
    state = {
        comments: [
            {
                id: 0,
                name: "John Smith",
                comment: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            },
            {
                id: 1,
                name: "Jane Doe",
                comment: "Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            }
        ]
    }
    render(){
        return(
            <div className="mainprofile">  
                <img src="" alt="" className="mainprofile__image"/>
                <div className="mainprofile__user">
                    <h1 className="mainprofile__user--name"></h1>
                    <h3 className="mainprofile__user--email"></h3>
                    <p className="mainprofile__user--biography"></p>
                </div>
                <div className="mainprofile__comments">
                    <CommentList comments={this.state.comments}/>
                </div>
            </div>

        
        )
    }
}
export default ProfilePage;