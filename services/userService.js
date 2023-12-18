import { userRepository } from "../repositories/userRepository.js";

class UserService {
  create(user) {
  
    const existingUser = userRepository.getByEmailOrPhoneNumber(user.email, user.phoneNumber);
    if (existingUser) {
      throw new Error("User with the same email or phoneNumber already exists");
    }

    const createdUser = userRepository.create(user);
    return createdUser;
  }

  update(id, updatedUser) {
    const existingUser = userRepository.getByEmailOrPhoneNumber(updatedUser.email, updatedUser.phoneNumber);
    if (existingUser && existingUser.id !== id) {
      throw new Error("Another user with the same email or phoneNumber already exists");
    }

    const updatedUser = userRepository.update(id, updatedUser);
    return updatedUser;
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };

