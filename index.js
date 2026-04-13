const { Client, GatewayIntentBits, EmbedBuilder, userMention } = require("discord.js")
const { AltDetector } = require("discord-alt-detector")
const format = require("./formatReport")
const config = require("./config.json")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
})

const detector = new AltDetector()

function getColor(category){
    switch(category){
        case "highly-trusted": return 0x2ecc71
        case "trusted": return 0x27ae60
        case "normal": return 0x95a5a6
        case "newbie": return 0xf1c40f
        case "suspicious": return 0xe67e22
        case "highly-suspicious": return 0xe74c3c
        case "mega-suspicious": return 0x8e44ad
        default: return 0xffffff
    }
}

client.on("ready", () => {
    console.log(`Bot ready: ${client.user.tag}`)
})

client.on("guildMemberAdd", async (member) => {
    if (member.guild.id !== config.server) return

    const result = detector.check(member)
    const category = detector.getCategory(result)
    const c = result.categories

    // 📂 Detailed Embed (dataChannel)
    const detailedEmbed = new EmbedBuilder()
        .setTitle("📂 Full User Analysis")
        .setColor(getColor(category))
        .setThumbnail(member.user.displayAvatarURL())
        .addFields(
            { name: "🧓 Account Age", value: format.formatAge(c.age, member.user), inline: false },
            { name: "📡 Status", value: format.formatStatus(c.status), inline: false },
            { name: "🎮 Activity", value: format.formatActivity(c.activity), inline: false },
            { name: "👤 Username", value: format.formatUsername(c.usernameWords), inline: false },
            { name: "🏷️ Display Name", value: format.formatDisplayName(c.displaynameWords), inline: false },
            { name: "🎖️ Flags", value: format.formatFlags(member.user), inline: false },
            { name: "🖼️ Avatar", value: format.formatPfp(c.pfp), inline: false },
            { name: "🪧 Banner", value: format.formatBanner(c.banner), inline: false },
            { name: "⚙️ Custom", value: format.formatCustom(c.custom), inline: false }
        )
        .setFooter({ text: `${member.user.username} • ${member.id}` })
        .setTimestamp()

    // 📌 Summary Embed (logChannel) — مثل ما طلبت
    const embed = new EmbedBuilder()
    .setAuthor({
        name: member.user.username,
        iconURL: member.user.displayAvatarURL()
    })
    .setTitle("User Verification")
    .setColor(getColor(category))
    .setDescription(`${userMention(member.id)} just got verified!`)
    .addFields(
        {
            name: "Account Age",
            value: `<t:${Math.floor(member.user.createdTimestamp/1000)}:F>`,
            inline: true
        },
        {
            name: "Trust Level",
            value: `\`${category}\``,
            inline: true
        }
    )
    .setFooter({
        text: `${member.user.id}`
    })
    .setTimestamp()

    const dataChannel = await member.guild.channels.fetch(config.dataChannel)
    const logChannel = await member.guild.channels.fetch(config.logChannel)

    if (dataChannel?.isTextBased()) {
        await dataChannel.send({ embeds: [detailedEmbed] })
    }

    if (logChannel?.isTextBased()) {
        await logChannel.send({ embeds: [embed] })
    }

    console.log(member.user.tag, result.total, category)
})

client.login(config.token)
