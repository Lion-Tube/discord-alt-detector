const { Client, GatewayIntentBits, EmbedBuilder, userMention } = require("discord.js")
const { AltDetector } = require("discord-alt-detector")
const config = require("./config.json")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ]
})

const detector = new AltDetector()

// 🎨 ألوان حسب الخطورة
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
    console.log(`✅ Logged in as ${client.user.tag}`)
})

client.on("guildMemberAdd", async (member) => {
    // يشتغل فقط على السيرفر المحدد
    if (member.guild.id !== config.server) return

    const result = detector.check(member)
    const category = detector.getCategory(result)

    // ===== 📌 Embed مختصر =====
    const embed = new EmbedBuilder()
        .setTitle("🔍 Alt Detection")
        .setColor(getColor(category))
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`${userMention(member.id)} joined the server`)
        .addFields(
            { name: "⚠️ Risk Level", value: `\`${category}\``, inline: true },
            { name: "📊 Score", value: `\`${result.total}\``, inline: true },
            { name: "📅 Account Created", value: `<t:${Math.floor(member.user.createdTimestamp/1000)}:F>` }
        )
        .setFooter({ text: `${member.user.username} • ${member.id}` })
        .setTimestamp()

    const logChannel = await member.guild.channels.fetch(config.logChannel)
    if (logChannel?.isTextBased()) {
        await logChannel.send({ embeds: [embed] })
    }

    // ===== 📂 تفاصيل كاملة =====
    const dataChannel = await member.guild.channels.fetch(config.dataChannel)

    if (dataChannel?.isTextBased()) {
        const details = JSON.stringify(result.categories, null, 2)

        await dataChannel.send({
            content:
`📂 User Data
User: ${member.user.tag}
ID: ${member.id}

Score: ${result.total}
Category: ${category}

\`\`\`json
${details}
\`\`\``
        })
    }

    console.log("DETECT:", member.user.tag, result.total, category)
})

client.login(config.token)
