import blankAvatar from "../images/blank-avatar.jpeg";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-cointainer">
        <img
          src={ticket?.avatar ? ticket.avatar : blankAvatar}
          alt={"photo of " + ticket?.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
