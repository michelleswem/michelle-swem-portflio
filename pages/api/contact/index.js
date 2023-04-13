// api/contact
import { MongoClient } from 'mongodb';
const credential = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ufceq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, subject, message } = req.body;

    if (
      email.trim() === '' ||
      !email.includes('@') ||
      name.trim() === '' ||
      !name ||
      subject.trim() === '' ||
      !subject ||
      message.trim() === '' ||
      !message
    ) {
      res.status(422).json({ message: 'Invalid Credentials' });
      return;
    }
    const newMessage = {
      email,
      name,
      subject,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(credential);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection('my-messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
};

export default handler;
