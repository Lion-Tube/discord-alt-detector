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

// 🎨 Risk colors
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
    console.log(`✅ Bot online as ${client.user.tag}`)
})

client.on("guildMemberAdd", async (member) => {

    // تشغيل فقط على السيرفر المحدد
    if (member.guild.id !== config.server) return

    const result = detector.check(member)
    const category = detector.getCategory(result)

    const c = result.categories

    // 🧠 Embed (Human readable only)
    const embed = new EmbedBuilder()
        .setTitle("📂 User Risk Analysis")
        .setColor(getColor(category))
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`Analysis report for ${member.user.tag}`)
        .addFields(
            { name: "⚠️ Risk Level", value: `\`${category}\``, inline: true },
            { name: "📊 Score", value: `\`${result.total}\``, inline: true },

            { name: "🧓 Account Age", value: format.formatAge(c.age), inline: false },
            { name: "📡 Status", value: format.formatStatus(c.status), inline: false },
            { name: "🎮 Activity", value: format.formatActivity(c.activity), inline: false },
            { name: "👤 Username", value: format.formatUsername(c.usernameWords), inline: false },
            { name: "🏷️ Display Name", value: format.formatDisplayName(c.displaynameWords), inline: false },
            { name: "🎖️ Flags", value: format.formatFlags(c.flags), inline: false },
            { name: "🖼️ Avatar", value: format.formatPfp(c.pfp), inline: false },
            { name: "🪧 Banner", value: format.formatBanner(c.banner), inline: false },
            { name: "⚙️ Custom", value: format.formatCustom(c.custom), inline: false }
        )
        .setFooter({ text: `${member.user.username} • ${member.id}` })
        .setTimestamp()

    const logChannel = await member.guild.channels.fetch(config.logChannel)

    if (logChannel?.isTextBased()) {
        await logChannel.send({ embeds: [embed] })
    }

    console.log("ANALYZED:", member.user.tag, result.total, category)
})

client.login(config.token)
