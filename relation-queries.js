const {user,todoItem,todoList} = require('./models')

const userWithList = async (id) => {
  try {

    const oneUser = await user.findByPk(id, {
      include: [{model:todoList, include:[todoItem]}]
    })
    console.log ( oneUser.get({plain:true}))
  
  }catch(e) {
    console.log('error', e)
  }
}
// userWithList(2)
const importantItemWithList = async () => {
  try {
const ImportantItem = await todoItem.findAll({
  where: {important:true},
  include: [{model:todoList, attribute: ["name"]}]
})
console.log(ImportantItem.map((item) => item.get({plain:true}))
  )
  }catch(e) {
    console.log('error', e)
  }
}
// importantItemWithList()

const userWithTasks = async (id) => {
  try {
const userById = await user.findByPk(id, {
  include: [{model:todoList ,attributes:["name"], include: {model:todoItem, attribute: ["tasks"]}}]
}) 
const plainUser = userById.get({plain:true})
console.log(plainUser.todoLists[1].todoItems)
  }catch(e) {
    console.log('error', e)
  }
}
userWithTasks(1)