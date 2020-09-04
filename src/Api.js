import axios from "axios"

export var getGameById = function(id)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + ''
    , method: 'get'
    });
}



export var postGameByIdTeamA = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/teamA'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdTeamB = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/teamB'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdUndecided = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/undecided'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var deleteGameById = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/exit'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}


export var getSteamuserById = function(id)
{
  return axios({ url: 'http://queue.boner1.com/api/steam/' + encodeURIComponent(id),
                 method: 'get',
                 responseType: 'json'}
              );
}

export var postGameByIdVoteMap = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/voteMap'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameByIdVoteShuffle = function(id, body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/voteShuffle'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var getGameByIdConfig = function(id)
{
  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/config'
    , method: 'get'
    });
}



export var postGameByIdReady = function(id, body)
{

  return axios({ url: 'http://queue.boner1.com/api/game/' + encodeURIComponent(id) + '/ready'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var postGameNew = function(body)
{
  return axios({ url: 'http://queue.boner1.com/api/game/new'
    , method: 'post'
    , data: body
    , responseType: 'json'
    });
}



export var getAuthOpenid = function()
{
  return axios({ url: 'http://queue.boner1.com/api/auth/openid'
    , method: 'get'
    });
}



export var getAuthOpenidReturn = function(openididentity)
{
  return axios({ url: 'http://queue.boner1.com/api/auth/openid/return' + '?openid.identity=' + encodeURIComponent(openididentity)
    , method: 'get'
    });
}
