const avatars = ['🌍', '🧳', '✈️', '🗺️', '🏕️', '🚀', '🏝️', '🏞️', '🌄', '🎒']
const nouns = ['Voyager', 'Nomad', 'Explorer', 'Traveler', 'Pathfinder', 'Seeker']
const adjectives = ['Hidden', 'Wandering', 'Curious', 'Unknown', 'Restless', 'Mystic']

export interface GuestProfile {
  name: string
  avatar: string
}

export const generateGuestProfile = (): GuestProfile => {
  const avatar = avatars[Math.floor(Math.random() * avatars.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

  return {
    avatar,
    name: `${adjective} ${noun}`,
  }
}
