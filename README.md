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

Pretendard 폰트 적용

https://fe-developers.kakaoent.com/2022/220714-next-image/

channeltalk + 해외 서비스 하나
supabase, pocketbase, sanity 중 택 1

mui, bootstrap, ant design - 추후 추가
Daisy UI, Flowbite - 이미 추가 완료
HyperUI, Headless UI - 코드 조각 필요할 때 가져오기

# TODO

- SEO 세팅
- 폰트 최적화 (중간에 바뀌는 것 어떻게 해결?)
