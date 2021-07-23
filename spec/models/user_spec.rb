require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validation tests' do
    it 'ensures first name presence' do
      user =
        User.new(last_name: 'Fury', email: 'sample@email.com', role: 'Patient')
          .save
      expect(user).to eq(false)
    end
    it 'ensures last name presence' do
      user =
        User.new(
          first_name: 'Nick',
          email: 'sample2@email.com',
          role: 'Patient',
        ).save
      expect(user).to eq(false)
    end
    it 'ensures email presence' do
      user =
        User.new(first_name: 'Nick', last_name: 'Fury', role: 'Patient').save
      expect(user).to eq(false)
    end
    it 'ensures role presence' do
      user =
        User.new(
          first_name: 'Nick',
          last_name: 'Fury',
          email: 'test@example.com',
        ).save
      expect(user).to eq(false)
    end
    it 'should save successfully' do
      user =
        User.new(
          first_name: 'Nick',
          last_name: 'Fury',
          password: 'password',
          email: 'test@example.com',
          age: 30,
          location: 'SHIELD',
          role: 'Patient Partner',
        ).save
      expect(user).to eq(true)
    end
  end
  context 'scope tests' do
  end
end
