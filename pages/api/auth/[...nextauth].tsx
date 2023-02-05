import NextAuth, { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanity, supabase } from '../../../lib/client';
import KakaoProvider from 'next-auth/providers/kakao';
import jwt from 'jsonwebtoken';

const options: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.APPLE_SECRET ?? '',
    //   // https://bal.so/apple-gen-secret
    //   // https://www.kyle-melton.com/blog/2022-02-how-to-setup-sign-in-with-apple
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID ?? '',
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    // }),
    // @ts-ignore
    // SanityCredentials(sanity), // only if you use sign in with credentials
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      // const { data, error } = await supabase()
      //   .from('profiles')
      //   .upsert({
      //     user_id: user.id,
      //     email: profile.kakao_account.email,
      //     phone_number: profile.kakao_account.phone_number,
      //     gender: profile.kakao_account.gender,
      //     age_range: profile.kakao_account.age_range,
      //     birthyear: profile.kakao_account.birthyear,
      //     birthday: profile.kakao_account.birthday,
      //   })
      //   .select();
      return true;
    },

    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET;
      if (signingSecret) {
        const payload = {
          aud: 'authenticated',
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: 'authenticated',
        };
        session.supabaseAccessToken = jwt.sign(payload, signingSecret);
      }
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      // if (user) {
      //   token.id = user.id;
      // }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  // @ts-ignore
  // adapter: SanityAdapter(sanity),
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
};

export default NextAuth(options);
