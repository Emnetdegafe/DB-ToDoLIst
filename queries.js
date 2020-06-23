const User = require("./models").user;
const TodoItem = require("./models").todoItem;
const TodoList = require("./models").todoList

async function findUsers() {
  try {
    const users = await User.findAll();
    console.log(users.map((u) => u.get({ plain: true })));
  } catch (e) {
    console.log("error", e);
  }
}
const findAllTodoItems = async () => {
  try {
    const todoItems = await TodoItem.findAll();
    console.log(todoItems.map((item) => item.get({ plain: true })));
  } catch (e) {
    console.log("error", e);
  }
};
const findUserById = async (id) => {
  try {
    const userById = await User.findByPk(id);
    console.log(userById.get({ plain: true }));
  } catch (e) {}
};

const createNewUser = async ({ name, email, phone }) => {
  try {
    const newUser = await User.create({
      name,
      email,
      phone,
    });
    console.log(newUser.get({ plain: true }));
  } catch (e) {
    console.log("error", e);
  }
};

const deletUser = async (id) => {
  try{
const user = await User.findByPk(id)
console.log(user.get({plain:true}))
await user.destroy()
  }catch (e) {
    console.log('error',e)
  }
}

const findImportantItems = async () => {
  try{
const Items = await TodoItem.findAll({
  where:{important:true}
})
const plainItem = Items.map(Item => Item.get({plain:true}))
console.log(plainItem)
  }catch(e) {
    console.log('error', e)
  }
}
findImportantItems()

// createNewUser({name:"Lily",email:"lili@lil.com",phone:'123456'});

// deletUser(2)