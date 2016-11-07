const getTodosFromLocalStorage = () => JSON.parse(localStorage.getItem('todos'))

describe('Todo app', () => {
  it('should have correct <title>', () => {
    cy.visit('http://localhost:8080')
    cy.title().should('be', 'Todo App')
  })
})

describe('Input field', () => {
  beforeEach(() => {
    // Visiting our app before each test removes any state
    // build up from previous tests. Visiting acts as if
    // we closed a tab and opened a fresh one
    //
    // By default Cypress also automatically clears the
    // Local Storage and Cookies before each test.
    cy.visit('http://localhost:8080')
  })

  it('should allow typing', () => {
    const text = 'this I must do'

    cy
      .get('input')
      .type(text)
      .should('have.value', text)
  })

  it('should create new todo on submit', () => {
    const text = 'this I must do'

    cy
      .get('input')
      .type(text)

      .get('form')
      .submit()

      .get('label')
      .should('contain', text)
  })
})

describe('Todo list', () => {
  const testTodo = 'test the application'

  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.createTodo(testTodo)
  })

  it('should add multiple todos', () => {
    cy.createTodo('test even more')
    cy.createTodo('test even morer')

    cy
      .get('label')
      .its('length')
      .should('be', 3)
  })

  it('should save todos to localStorage', () => {
    const todo = getTodosFromLocalStorage()[0]
    expect(todo.text).to.eq(testTodo)
  })

  it('should load todos from localStorage', () => {
    cy.visit('http://localhost:8080')

    cy
      .get('label')
      .should('contain', testTodo)
  })

  it('should mark todo as done', () => {
    cy
      .get('button.check')
      .click()
      .then(() => {
        const todo = getTodosFromLocalStorage()[0]
        expect(todo.isDone).to.eq(true)
      })
  })

  it('should remove todo', () => {
    cy
      .get('button.remove')
      .click()
      .then(() => {
        const todos = getTodosFromLocalStorage()
        expect(todos.length).to.eq(0)
      })
  })
})
