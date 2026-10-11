import type { Messages } from "@/lib/i18n";

const TEAM_PHOTOS = {
  bagas: "/team/bagas-avatar.jpg",
  alana: "/team/alana-avatar.jpg",
  hambali: "/team/hambali-avatar.jpg",
  faiz: "/team/faiz-avatar.jpg",
} as const;

type TeamKey = keyof typeof TEAM_PHOTOS;

/** The team in display order, with photos, for the homepage and /about. */
export function getTeamMembers(messages: Messages) {
  const team = messages.aboutPage.team;

  return (Object.keys(TEAM_PHOTOS) as TeamKey[]).map((key) => ({
    ...team[key],
    photo: TEAM_PHOTOS[key],
  }));
}
