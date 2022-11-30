import NextAuth, { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '../../../lib/client';
import KakaoProvider from 'next-auth/providers/kakao';

const options: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    // @ts-ignore
    SanityCredentials(client), // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt',
  },
  // @ts-ignore
  adapter: SanityAdapter(client),
};

export default NextAuth(options);
