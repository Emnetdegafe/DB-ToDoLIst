const TodoItem = require("./models").todoItem;

async function createSimpleTodoItem() {
  try {
    const todo1 = await TodoItem.create({
      tasks: "clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      tasks: "learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      tasks: "Have fun",
      important: true,
    });
    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
}
const deleteItem = async (id) => {
  try {
    const Item = await TodoItem.findByPk(id);
    console.log((item) => item.get({ plain: true }));
    await Item.destroy();
  } catch (e) {
    console.log("error", e);
  }
};

createSimpleTodoItem().then((todos) => console.log(todos));

// deleteItem(7);
