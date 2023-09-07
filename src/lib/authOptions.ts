import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
    DiscordProvider({
      clientId: String(process.env.DISCORD_ID),
      clientSecret: String(process.env.DISCORD_SECRET),
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(credentials)
      return true
    },
    async session({ session, token, user }) {
      const newSession: any = session
      newSession.user.id = token.id;
      newSession.accessToken = token.accessToken;
      return newSession;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  }
}