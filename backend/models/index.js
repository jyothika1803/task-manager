import User from "./User.js";
import Project from "./Project.js";
import Task from "./Task.js";

Project.belongsTo(User, { as: "owner" });

Task.belongsTo(Project);
Task.belongsTo(User, { as: "assignedTo" });

export { User, Project, Task };