---
title: tRPC Discord Lookup
description: tRPC router example to fetch data of a user from the Discord API
date: 2022-06-30
tags:
  - tRPC
  - Discord
  - TypeScript
property: value
---

## tRPC Discord Lookup

```ts
// src/pages/api/trpc/[trpc].ts

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("lookup", {
    input: z.object({
      id: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input?.id) return null;

      const userData = await fetch(
        `https://discord.com/api/v10/users/${input.id}`,
        {
          headers: { Authorization: `Bot ${process.env.DISCORD_TOKEN}` },
        }
      ).then((res) => res.json());

      const publicFlags = getBadges(userData.public_flags);

      return {
        id: userData.id,
        username: userData.username,
        discriminator: userData.discriminator,
        avatar: userData.avatar,
        public_flags: publicFlags,
      };
    },
  });
```

## Environment Variables

Create a Discord bot id in the [Discord developer portal](https://discord.com/developers/) and copy the Bot Token. Make a `.env` file and add your token there.

```
// .env

DISCORD_TOKEN="YOUR TOKEN HERE"
```