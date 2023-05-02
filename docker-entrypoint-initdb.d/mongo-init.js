db = db.getSiblingDB('rubcube_db');
db.createUser({
  user: 'ruber',
  pwd: '123',
  roles: [{ role: 'readWrite', db: 'rubcube_db' }],
});
db.createCollection('logs');
