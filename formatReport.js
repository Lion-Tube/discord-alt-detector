function formatAge(v){
    if(v <= -2) return "⚠️ New account (risky)"
    if(v === 0) return "➖ Neutral"
    return "🟢 Safe account age"
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

function formatFlags(v){
    return v > 0 ? "🟢 Has badges" : "➖ No badges"
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
