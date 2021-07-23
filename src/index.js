let ug = require('ug');
let graph = new ug.Graph();


// fetch data
getUsers = () => {
  return [
    { id: 1, name: 'John' }, 
    { id: 2, name: 'Bryan' }, 
    { id: 3, name: 'Nina' },
    { id: 4, name: 'Mazz' },
    { id: 5, name: 'Evan' }, 
    { id: 6, name: 'Scott' }, 
    { id: 7, name: 'Taylor' },
    { id: 8, name: 'Dan' },
    { id: 9, name: 'OG Craig' },
    { id: 10, name: 'New Hire' },
  ];
};

get_templates = () => {
  return [
    { id: 1, name: 'Microsoft Password Expired' },
    { id: 2, name: 'Ebay account reset' },
    { id: 3, name: 'Wealthy Prince has money for you' },
    { id: 4, name: 'Walmart Giftcard for free' },
    { id: 5, name: 'Free Amazon giftcard' },
    { id: 6, name: 'Taxes are late, fix immediately' },
    { id: 7, name: 'Your account has been compromised' },
    { id: 8, name: 'Yahoo account expired' },
    { id: 9, name: 'PNC Bank:  Please reset your password' },
    { id: 10, name: 'You have won $100' },
    { id: 11, name: 'Car warrenty expired' },
    { id: 12, name: 'You\'ve won free trip' },
    { id: 13, name: 'Slack account needs verified' },
    { id: 14, name: 'PayPal: Please reset password' },
    { id: 15, name: 'You have received a FaceBook friend request' },
    { id: 16, name: 'Unusual activity on your account' },
    { id: 17, name: 'Free Giveaway' },
    { id: 18, name: '101 of the best jokes' },
    { id: 19, name: 'Refinance your house' },
    { id: 20, name: 'Your home warrenty is coming due' },
    { id: 21, name: 'How to make money on the internet' },
    { id: 22, name: 'A pot of gold as the end of the rainbow' },
  ];
};

getUsedtemplates = () => {
  return [
    { user_id: 1, template_id: 2 }, 
    { user_id: 1, template_id: 4 }, 
    { user_id: 1, template_id: 6 }, 
    { user_id: 1, template_id: 8 }, 
    { user_id: 1, template_id: 21 }, 
    { user_id: 2, template_id: 2 }, 
    { user_id: 2, template_id: 8 }, 
    { user_id: 2, template_id: 12 }, 
    { user_id: 2, template_id: 14 }, 
    { user_id: 3, template_id: 1 }, 
    { user_id: 3, template_id: 3 }, 
    { user_id: 3, template_id: 9 }, 
    { user_id: 3, template_id: 20 }, 
    { user_id: 4, template_id: 9 }, 
    { user_id: 4, template_id: 19 }, 
    { user_id: 4, template_id: 16 }, 
    { user_id: 4, template_id: 6 }, 
    { user_id: 5, template_id: 6 }, 
    { user_id: 5, template_id: 5 }, 
    { user_id: 5, template_id: 1 }, 
    { user_id: 5, template_id: 22 }, 
    { user_id: 6, template_id: 22 }, 
    { user_id: 6, template_id: 21 }, 
    { user_id: 6, template_id: 20 }, 
    { user_id: 6, template_id: 2 }, 
    { user_id: 6, template_id: 12 }, 
    { user_id: 7, template_id: 13 }, 
    { user_id: 7, template_id: 21 }, 
    { user_id: 7, template_id: 7 }, 
    { user_id: 7, template_id: 19 }, 
    { user_id: 8, template_id: 19 }, 
    { user_id: 8, template_id: 3 }, 
    { user_id: 8, template_id: 9 }, 
    { user_id: 8, template_id: 17 }, 
    { user_id: 8, template_id: 10 }, 
    { user_id: 9, template_id: 10 }, 
    { user_id: 9, template_id: 1 }, 
    { user_id: 9, template_id: 14 }, 
    { user_id: 9, template_id: 11 }, 
    { user_id: 9, template_id: 2 }, 
  ];
};

get_favorites = () => {
  return [
    { user_id: 10, template_id: 16 }, 
    { user_id: 2, template_id: 16 }, 
    { user_id: 2, template_id: 7 }, 
    { user_id: 3, template_id: 16 }, 
    { user_id: 3, template_id: 7 }, 
    { user_id: 4, template_id: 22 }, 
    { user_id: 4, template_id: 4 }, 
    { user_id: 5, template_id: 13 }, 
    { user_id: 7, template_id: 7 }, 
    { user_id: 7, template_id: 7 }, 
    { user_id: 8, template_id: 16 }, 
    { user_id: 9, template_id: 7 }, 
  ];
};

getFollowedUptemplates = () => {
  return [
    { user_id: 1, template_id: 1 }, 
    { user_id: 1, template_id: 6 }, 
    { user_id: 1, template_id: 9 }, 
    { user_id: 2, template_id: 21 }, 
    { user_id: 2, template_id: 16 }, 
    { user_id: 2, template_id: 7 }, 
    { user_id: 3, template_id: 21 }, 
    { user_id: 3, template_id: 16 }, 
    { user_id: 3, template_id: 7 }, 
    { user_id: 4, template_id: 21 }, 
    { user_id: 4, template_id: 22 }, 
    { user_id: 4, template_id: 4 }, 
    { user_id: 5, template_id: 8 }, 
    { user_id: 5, template_id: 9 }, 
    { user_id: 5, template_id: 13 }, 
    { user_id: 6, template_id: 22 }, 
    { user_id: 6, template_id: 21 }, 
    { user_id: 6, template_id: 16 }, 
    { user_id: 7, template_id: 7 }, 
    { user_id: 7, template_id: 16 }, 
    { user_id: 7, template_id: 7 }, 
    { user_id: 8, template_id: 16 }, 
    { user_id: 8, template_id: 7 }, 
    { user_id: 8, template_id: 16 }, 
    { user_id: 9, template_id: 7 }, 
    { user_id: 9, template_id: 16 }, 
    { user_id: 9, template_id: 7 }, 
  ];
};



let users = getUsers();         // abstract function to get user data (i.e. SQL)
let templates = get_templates();   // ... templates

/* data used for scoring */
let usedtemplates = getUsedtemplates();         // ... etc.
let favorities = get_favorites();
let followedUptemplates = getFollowedUptemplates();

// Add to graph

graph.nodes("user").createIndex("id");
graph.nodes("template").createIndex("id");

users.forEach(function(user) {
  graph.createNode('user', user);
});

templates.forEach(function(template) {
  graph.createNode('template', template);
});

usedtemplates.forEach(function(link) {
  graph.createEdge('used').link(
    graph.nodes('user').find(link.user_id),
    graph.nodes('template').find(link.template_id)
  ).setDistance(2);
});

followedUptemplates.forEach(function(link) {
  graph.createEdge('followedup').link(
    graph.nodes('user').find(link.user_id),
    graph.nodes('template').find(link.template_id)
  ).setDistance(1);
});

favorities.forEach(function(link) {
  graph.createEdge('favorite').link(
    graph.nodes('user').find(link.user_id),
    graph.nodes('template').find(link.template_id)
  ).setDistance(4);
});
 
get_recommendations = (id) => {
  let user = graph.nodes("user").find(id);
  let results = graph.closest(user, {
    compare: function(node) { return node.entity == 'template' },
    minDepth: 7,
    count: 100
  });

  let recommendations = results.map(function (path) {
    let c = path.end();
    return {
      id: c.properties.id,
      name: c.properties.name
    };
  });

  console.info("User:", user.properties.name);
  console.info("Recommends:", recommendations);
};

get_recommendations(10);

