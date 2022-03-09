import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types";


const FriendList = ( {friends} ) => {     
    return (<ul className="friend-list">
      {
            friends.map((friend) =>  
            (<FriendListItem key={friend.id}
               avatar={friend.avatar}
               name={friend.name}
               isOnline={friend.isOnline}
               id={friend.id}
               />)
            )
        } 
  </ul>)}


FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number  
  }

export default FriendList;
/* 

.friendList {
    text-decoration: none;
    list-style: none;
    padding: 0 0;
  } */