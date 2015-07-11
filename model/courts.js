Courts = new Mongo.Collection('courts');

COURT_TYPES = ['basketball', 'tennis'];

var Schemas = {};

Schemas.Location = new SimpleSchema({

    latitude: {
        type: Number,
        decimal: true,
        label: "Latitude"
    },

    longitude: {
        type: Number,
        decimal: true,
        label: "Longitude"
    }
});

Schemas.Court = new SimpleSchema({

    location: {
        type: Schemas.Location
    },

    type: {
        type: String,
        allowedValues: COURT_TYPES,
        defaultValue: COURT_TYPES[0],
        label: "Court Type"
    },

    owner: {
        type: String,
        label: "Owner"
    },

    description: {
        type: String,
        label: "Description",
        optional: true
    }
});

Courts.attachSchema(Schemas.Court);

Courts.allow({

    insert: function (userId, court) {
        return userId && court.owner === userId;
    },

    update: function (userId, court, fields, modifier) {
        return userId && court.owner === userId;
    },

    remove: function (userId, court) {
        return userId && court.owner === userId;
    }
});

