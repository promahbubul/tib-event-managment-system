const routePath = {
  home: "home",
  eventForm: "event-form",
  eventReport: "event-report",
  progressStatus: "progress-status",
  user: "user",
  allUser: "all-user",
  addUser: "add-user",
  editUser: "edit-user/:id",
};
const sidenav = [
  { id: 1, title: "Home", path: routePath.home },
  { id: 2, title: "Event Form", path: routePath.eventForm },
  { id: 3, title: "Event Report", path: routePath.eventReport },
  { id: 4, title: "Progress Status", path: routePath.progressStatus },
  { id: 5, title: "User", path: routePath.user },
];

const userSubNav = [
  { id: 6, title: "All User", path: routePath.allUser },
  { id: 7, title: "Add User", path: routePath.addUser },
];

export { sidenav, routePath, userSubNav };
