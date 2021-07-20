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

user1 =
User.create!(
  first_name: 'Hank',
  last_name: 'Pym',
  email: 'test@example2.com',
  age: 50,
  location: 'San Francisco',
  password: 'password',
  role: "Patient Partner"
)

conversation1 = Conversation.create!(
  sender_id: 1,
  recipient_id: 2
)

message1 = Message.create!(
  body: "Hello Dr. Pym",
  conversation_id: 1,
  user_id: 1
)



message2 = Message.create!(
  body: "Hello Scott",
  conversation_id: 1,
  user_id: 2
)





