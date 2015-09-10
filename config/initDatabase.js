// Setup the admin user

// mongo
// db = db.getSiblingDB('admin')
// db.createUser( { user: "root", pwd: "fulcircle9", roles: [ "readWriteAnyDatabase", "userAdminAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin" ]} )

// create database and a user
use recipeapp
db.createUser({
    "user" : "nexeh",
    "pwd": "fulcircle9",
    "roles" : [
        {
            "role" : "readWrite",
            "db" : "recipeapp"
        }
    ]
})

// Load initial data into the database
