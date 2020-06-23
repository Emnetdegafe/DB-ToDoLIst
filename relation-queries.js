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
