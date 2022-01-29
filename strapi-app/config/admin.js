module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '115765596d1f5ce28e306a2f22e403fc'),
  },
});
