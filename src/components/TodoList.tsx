import React, { FC, useEffect } from "react"
import { useActions } from "../hooks/useAction"
import { useTypeSelector } from "../hooks/useTypeSelector"

const TodoList: FC = () => {
  const { error, limit, loading, page, todos } = useTypeSelector(
    state => state.todo
  )

  const pages = [1, 2, 3, 4, 5]

  const { fetchTodos, setTodoPage } = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  return (
    <div>
      {loading && <h1>Идет загрузка...</h1>}
      {error && { error }}
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map(p => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
