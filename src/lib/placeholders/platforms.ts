export interface Platform {
  id: string;
  name: string;
  icon: string;
  urlPattern?: string;
}

export const platforms: Platform[] = [
  { id: "website", name: "Website", icon: "https://www.qrcode-koala.com/svg/socials/web.svg" },
  { id: "dribbble", name: "Dribbble", icon: "https://www.qrcode-koala.com/svg/socials/dribbble.svg" },
  {
    id: "facebook",
    name: "Facebook",
    icon: "https://www.qrcode-koala.com/svg/socials/facebook.svg",
    urlPattern: "https://www.facebook.com/",
  },
  { id: "flickr", name: "Flickr", icon: "https://www.qrcode-koala.com/svg/socials/flickr.svg" },
  { id: "github", name: "GitHub", icon: "https://www.qrcode-koala.com/svg/socials/github.svg" },
  { id: "google", name: "Google", icon: "https://www.qrcode-koala.com/svg/socials/google_review.svg" },
  { id: "line", name: "LINE", icon: "https://www.qrcode-koala.com/svg/socials/line.svg" },
  { id: "linkedin", name: "LinkedIn", icon: "https://www.qrcode-koala.com/svg/socials/linkedin.svg" },
  { id: "pinterest", name: "Pinterest", icon: "https://www.qrcode-koala.com/svg/socials/pinterest.svg" },
  { id: "reddit", name: "Reddit", icon: "https://www.qrcode-koala.com/svg/socials/reddit.svg" },
  { id: "skype", name: "Skype", icon: "https://www.qrcode-koala.com/svg/socials/skype.svg" },
  { id: "snapchat", name: "Snapchat", icon: "https://www.qrcode-koala.com/svg/socials/snapchat.svg" },
  { id: "tripadvisor", name: "TripAdvisor", icon: "https://www.qrcode-koala.com/svg/socials/tripadvisor.svg" },
  { id: "tumblr", name: "Tumblr", icon: "https://www.qrcode-koala.com/svg/socials/tumblr.svg" },
  { id: "twitter", name: "Twitter", icon: "https://www.qrcode-koala.com/svg/socials/twitter.svg" },
  { id: "x", name: "X", icon: "https://www.qrcode-koala.com/svg/socials/x.svg" },
  { id: "vimeo", name: "Vimeo", icon: "https://www.qrcode-koala.com/svg/socials/vimeo.svg" },
  { id: "vkontakte", name: "VKontakte", icon: "https://www.qrcode-koala.com/svg/socials/vkontakte.svg" },
  { id: "xing", name: "Xing", icon: "https://www.qrcode-koala.com/svg/socials/xing.svg" },
  { id: "youtube", name: "YouTube", icon: "https://www.qrcode-koala.com/svg/socials/youtube.svg" },
  { id: "instagram", name: "Instagram", icon: "https://www.qrcode-koala.com/svg/socials/instagram.svg" },
  { id: "tiktok", name: "TikTok", icon: "https://www.qrcode-koala.com/svg/socials/tiktok.svg" },
  { id: "whatsapp", name: "WhatsApp", icon: "https://www.qrcode-koala.com/svg/socials/whatsapp.svg" },
  { id: "telegram", name: "Telegram", icon: "https://www.qrcode-koala.com/svg/socials/telegram.svg" },
  { id: "messenger", name: "Messenger", icon: "https://www.qrcode-koala.com/svg/socials/facebook_messenger.svg" },
  { id: "yelp", name: "Yelp", icon: "https://www.qrcode-koala.com/svg/socials/yelp.svg" },
  { id: "uber-eats", name: "Uber Eats", icon: "https://www.qrcode-koala.com/svg/socials/uber_eats.svg" },
  { id: "postmates", name: "Postmates", icon: "https://www.qrcode-koala.com/svg/socials/postmates.svg" },
  { id: "opentable", name: "OpenTable", icon: "https://www.qrcode-koala.com/svg/socials/opentable.svg" },
  { id: "spotify", name: "Spotify", icon: "https://www.qrcode-koala.com/svg/socials/spotify.svg" },
  { id: "soundcloud", name: "SoundCloud", icon: "https://www.qrcode-koala.com/svg/socials/soundcloud.svg" },
  { id: "apple-music", name: "Apple Music", icon: "https://www.qrcode-koala.com/svg/socials/apple_music.svg" },
  { id: "onlyfans", name: "OnlyFans", icon: "https://www.qrcode-koala.com/svg/socials/only_fans.svg" },
  { id: "doordash", name: "Doordash", icon: "https://www.qrcode-koala.com/svg/socials/door_dash.svg" },
  { id: "trustpilot", name: "Trustpilot", icon: "https://www.qrcode-koala.com/svg/socials/trustpilot.svg" },
  { id: "signal", name: "Signal", icon: "https://www.qrcode-koala.com/svg/socials/signal.svg" },
  { id: "viber", name: "Viber", icon: "https://www.qrcode-koala.com/svg/socials/viber.svg" },
  { id: "wechat", name: "WeChat", icon: "https://www.qrcode-koala.com/svg/socials/we_chat.svg" },
];