# nextjs-recoil-tailwind-sentry-ga-channeltalk-boilerplate

`.env.local` 예시

```env
## 프로젝트 별로 수정. Vercel 에도 각각 등록해야 함

# API 접근 위함
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Google Analytics (따옴표를 써줘야 함, Vercel 에는 따옴표 빼고)
NEXT_PUBLIC_GA_ID=""

# Sentry
SENTRY_IGNORE_API_RESOLUTION_ERROR=1
NEXT_PUBLIC_SENTRY_DSN=

# SANITY
SANITY_TOKEN_EDIT=

# ChannelTalk
NEXT_PUBLIC_CHANNEL_IO_KEY=


```

Sentry

```bash
npm install --save @sentry/nextjs
npx @sentry/wizard -i nextjs
```

Favicon 만들어서 public/favicon 폴더에 넣기

headless UI / NextUI 등 적용 / Chakra 는 빼기 (폰트 문제)
