function formatAge(v, user){
    const now = Date.now()
    const created = user.createdTimestamp
    const days = Math.floor((now - created) / (1000 * 60 * 60 * 24))

    if (days < 7) return `⚠️ ${days} days old (very new)`
    if (days < 30) return `🟡 ${days} days old`
    if (days < 365) return `🟢 ${days} days old`
    
    const years = Math.floor(days / 365)
    return `🟢 ${years} year(s) old`
}

function formatStatus(v){
    return v < 0 ? "🔴 Offline" : "🟢 Active"
}

function formatActivity(v){
    return v > 0 ? "🟢 Active user" : "⚠️ No activity"
}

function formatUsername(v){
    return v < 0 ? "⚠️ Suspicious username" : "🟢 Clean username"
}

function formatDisplayName(v){
    return v < 0 ? "⚠️ Weak display name" : "🟢 Normal"
}

function formatFlags(user){
    if (!user.flags) return "➖ No badges"

    const flags = user.flags.toArray()

    if (flags.length === 0) return "➖ No badges"

    const readable = flags.map(f => {
        switch(f){
            case "Staff": return "🛡️ Discord Staff"
            case "BugHunterLevel1": return "🐛 Bug Hunter"
            case "BugHunterLevel2": return "🐛 Bug Hunter Level 2"
            case "CertifiedModerator": return "🧑‍⚖️ Moderator"
            case "VerifiedDeveloper": return "💻 Developer"
            case "ActiveDeveloper": return "⚡ Active Dev"
            case "PremiumEarlySupporter": return "💎 Early Supporter"
            case "Partner": return "🤝 Partner"
            case "Hypesquad": return "🎉 HypeSquad"
            default: return f
        }
    })

    return readable.join(", ")
}

function formatPfp(v){
    return v <= 0 ? "⚠️ Default avatar" : "🟢 Custom avatar"
}

function formatBanner(v){
    return v > 0 ? "🟢 Has banner" : "➖ No banner"
}

function formatCustom(v){
    return v > 0 ? "🧠 Custom boost" : "➖ None"
}

module.exports = {
    formatAge,
    formatStatus,
    formatActivity,
    formatUsername,
    formatDisplayName,
    formatFlags,
    formatPfp,
    formatBanner,
    formatCustom
}
