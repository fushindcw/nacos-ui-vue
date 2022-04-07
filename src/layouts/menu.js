const menuConfig = [
  {
    key: "configurationManagementVirtual",
    children: [
      {
        key: "configurationManagement",
        url: "/configurationManagement",
      },
      {
        key: "historyRollback",
        url: "/historyRollback",
      },
      {
        key: "listeningToQuery",
        url: "/listeningToQuery",
      },
    ],
  },
  {
    key: 'serviceManagementVirtual',
    children: [
      {
        key: 'serviceManagement',
        url: '/serviceManagement',
      },
      {
        key: 'subscriberList',
        url: '/subscriberList',
      },
    ],
  },
  {
    key: "authorityControl",
    children: [
      {
        key: "userList",
        url: "/userManagement",
      },
      {
        key: "roleManagement",
        url: "/rolesManagement",
      },
      {
        key: "privilegeManagement",
        url: "/permissionsManagement",
      },
    ],
  },
  {
    key: 'namespace',
    url: '/namespace',
  },
  {
    key: 'clusterManagementVirtual',
    children: [
      {
        key: 'clusterManagement',
        url: '/clusterManagement',
      },
    ],
  }
];

export default menuConfig;