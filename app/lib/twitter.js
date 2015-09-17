let _ = require('lodash')

async function getTweets(req, res) {
  if (!req.twitter) return []

  // TODO: Set since_id option
  let [tweets] = await req.twitter.promise.get('statuses/home_timeline')
  return _.sortByOrder(tweets.map(mapTweet), ['createdAt'], ['desc'])
}

function mapTweet(tweet) {
  return {
    id: tweet.id_str,
    image: tweet.user.profile_image_url,
    text: tweet.text,
    name: tweet.user.name,
    username: '@'+tweet.user.screen_name,
    liked: tweet.favorited,
    network: {
      icon: 'twitter',
      name: 'Twitter',
      class: 'btn-info'
    },
    createdAt: Date.parse(tweet.created_at)
  }
}

module.exports = {getTweets}
