User.destroy_all
Message.destroy_all
Conversation.destroy_all


ActiveRecord::Base
  .connection
  .tables
  .each { |t| ActiveRecord::Base.connection.reset_pk_sequence!(t) }

user1 =
User.create!(
  first_name: 'Scott',
  last_name: 'Lang',
  email: 'test@example.com',
  age: 30,
  location: 'San Francisco',
  password: 'password',
  role: "Patient"
)

user2 =
User.create!(
  first_name: 'Hank',
  last_name: 'Pym',
  email: 'test@example2.com',
  age: 50,
  location: 'San Francisco',
  password: 'password',
  role: "Patient Partner"
)

user3 =
User.create!(
  first_name: 'Bruce',
  last_name: 'Banner',
  email: 'test@example3.com',
  age: 35,
  location: 'Brooklyn',
  password: 'password',
  role: "Patient Partner"
)

user4 =
User.create!(
  first_name: 'Tony',
  last_name: 'Stark',
  email: 'test@example4.com',
  age: 21,
  location: 'Long Island',
  password: 'password',
  role: "Patient"
)

user5 =
User.create!(
  first_name: 'Stephen',
  last_name: 'Strange',
  email: 'test@example5.com',
  age: 30,
  location: 'New York City',
  password: 'password',
  role: "Patient Partner"
)

user6 =
User.create!(
  first_name: 'Peter',
  last_name: 'Parker',
  email: 'test@example6.com',
  age: 16,
  location: 'Queens',
  password: 'password',
  role: "Patient"
)
user7 =
User.create!(
  first_name: 'Steve',
  last_name: 'Rogers',
  email: 'test@example7.com',
  age: 80,
  location: 'Brooklyn',
  password: 'password',
  role: "Patient"
)

conversation1 = Conversation.create!(
  sender_id: 1,
  recipient_id: 2,
  sender_name: "Scott Lang",
  recipient_name: "Hank Pym"
)

conversation2 = Conversation.create!(
  sender_id: 6,
  recipient_id: 7,
  sender_name: "Scott Lang",
  recipient_name: "Hank Pym"
)


message1 = Message.create!(
  body: "Hello, Dr. Pym!",
  conversation_id: 1,
  user_id: 1
)

message2 = Message.create!(
  body: "Hello Scott!",
  conversation_id: 1,
  user_id: 2
)

message1 = Message.create!(
  body: "I'm a big fan of yours!!",
  conversation_id: 2,
  user_id: 6
)

message2 = Message.create!(
  body: "Where are you from?",
  conversation_id: 2,
  user_id: 7
)





