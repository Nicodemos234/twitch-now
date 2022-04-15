(function (){

  var root = this;

  var constants = {
    twitchApi: {
      api          : "https://id.twitch.tv/oauth2/authorize",
      response_type: 'token',
      client_id    : '2tmc0zaqoqsblbtv0v3tbj583q6kl5',
      client_secret: 'z2gzcl6hnyrydqog8brjep5iuzh1zo',
      scope        : 'user:read:follows',
      redirect_uri : 'https://nicodemos234.github.io/twitch.html'
    }
  };

  if ( typeof exports !== 'undefined' ) {
    if ( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = constants;
    }
    exports.constants = constants;
  } else {
    root.constants = constants;
  }
}).call(this);
