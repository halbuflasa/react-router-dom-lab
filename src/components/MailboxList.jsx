import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailbox List</h1>
      <div className="mailbox-list">
        {props.mailboxes.map((currentMailbox) => (
          <div key={currentMailbox._id} className="mail-box">
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              Mailbox {currentMailbox._id}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MailboxList;
