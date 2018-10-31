function createSingleTweet (tweets) {
  return `
        <div id='tweet' style= 'border-color: rgb(99,112,125); border-style: solid;border-width: 1px;width: 680px;border-radius: 10px;padding: 15px; margin-bottom: 15px'>
            <span id='user' style="display: flex;width: 400px;">
                <img src='${tweets.user.profilePic}' style="width: 60px;height: 60px;"/>
                <div id='username' style="padding-left: 10px">
                    <p style="margin-bottom: 2px;margin-top: 2px;"><b style="font-size: 22px">${tweets.user.username}</b></p>
                    <p style="font-size: 15px;color: rgb(99,112,125);font-weight: bold;font-size: 15px;">${tweets.user.handle}</p>
                </div>
            </span>
            <div id='text'>
                <h1>${tweets.text}</h1>
                <hr style="margin: 8px 0px;color: rgb(228,233,237)">
            </div>
            <div id= 'buttons' style="width: 350px;display: flex;justify-content: space-around;;font-weight: bold;font-size: 15px;">
                <text style="color: rgb(99,112,125)">${tweets.replies}k Responses</text>
                <text style="color: rgb(99,112,125)">${tweets.retweets}k Retweets</text>
                <text style="color: rgb(99,112,125)">${tweets.likes}k Likes</text>
            </div>
        </div>    
    `
}
function renderTweets (tweets) {
  return tweets.map(createSingleTweet).join('')
}

function tweets () {
  var content = document.getElementById('content')

  var tweetsAbstraction = [
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'The Moment That Truth Is Organized It Becomes A Lie',
      likes: 231,
      retweets: 12,
      replies: 21
    },
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
      likes: 112,
      retweets: 2,
      replies: 24
    },
    {
      user: {
        handle: '@DigitalCrafts',
        username: 'DigitalCrafts Bootcamp',
        isVerified: false,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'Sign up for our next course plz!',
      likes: 11,
      retweets: 3,
      replies: 14
    }
  ]

  content.innerHTML = renderTweets(tweetsAbstraction)
}
