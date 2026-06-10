import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: 'portfolioWebsite',
  access: (allow) => ({
    // Access rules for public/ path: anyone can read, but only admins can upload/delete
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
      allow.groups(['Admin']).to(['read', 'write', 'delete'])
    ]
  })
});