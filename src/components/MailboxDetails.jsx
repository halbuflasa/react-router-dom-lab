import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <dl>
        <dt>Boxholder:</dt>
        <dd>{selectedBox.boxholder}</dd>
        <dt>Box Size:</dt>
        <dd>{selectedBox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
