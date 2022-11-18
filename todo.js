const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
    let Today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < Today;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === Today;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > Today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_stat = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == Today ? "" : todo.dueDate;

        return `${display_stat} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;