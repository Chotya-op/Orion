module.exports = async (client) => {
  //console.log(`[API] Logged in as ${client.user.username}`);
  console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
  await client.user.setActivity(".help", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    status: "Do not disturb",
  });
};
