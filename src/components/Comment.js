import { dateFormat } from "../helpers/general"
import CommentWrapper from "./CommentWrapper"
import UserInfo from "./UserInfo"

function Comment(props){
    
    return(
        <div className="Comment">
            <UserInfo author={props.author} />
            <CommentWrapper className = 'comment'>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{dateFormat(props.date)}</div>
            </CommentWrapper>
          </div>
    )
}

export default Comment // export'to default bar bolso import kilganda anin atalishin kaalagandai berse bt
//eger export ele bolso default jok bolso sozsuz {} alabiz