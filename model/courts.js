Courts = new Mongo.Collection("courts");


Meteor.startup(function () {

    if (Courts.find().count() === 0) {

        var courts = [
            {
                'type': 'basketball',
                'location': {
                    'lat': 30,
                    'lon': 30
                }
            },
            {
                'type': 'tennis',
                'location': {
                    'lat': 40,
                    'lon': 40
                }
            }
        ];

        for (var i = 0; i < courts.length; i++) {
            Courts.insert(courts[i]);
        }

    }
});