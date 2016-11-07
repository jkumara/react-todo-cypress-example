Cypress.addParentCommand("createTodo", todo => {
  const cmd = Cypress.Log.command({
    name: "create todo",
    message: todo,
    onConsole: function(){
      return {
        "Inserted Todo": todo
      }
    }
  })

  cy
    // allow chaining onto this custom command
    .chain()
    .get('input', {log: false})
    .type(`${todo}{enter}`, {log: false})
    // now go find the actual todo  in the todo list so we can easily alias this
    // in our tests and set the $el so its highlighted
    .get('label', {log: false})
    .should('contain', todo, {log: false})
    .then($label => {
      // set the $el for the command so it highlights when we hover over our
      // command
      cmd
        .set({$el: $label})
        .snapshot()
        .end()
    })
})
