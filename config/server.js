module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1340),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "3fa0486b101cc9286a06b054f3a523c6"),
    },
  },
});
