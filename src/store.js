import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //属性
    count: 0,
    todos: [
      { id: 1, title: "todos item 1", completed: false },
      { id: 2, title: "todos item 2", completed: true },
      { id: 3, title: "todos item 3", completed: true }

    ]
  },
  getters: {
    Count: state => ++state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

  },
  mutations: {

  },
  actions: {

  }
})
