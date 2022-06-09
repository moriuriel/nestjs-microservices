export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3333,
  rabbitMq: {
    user: process.env.RABBITMQ_USER,
    pass: process.env.RABBITMQ_PASS,
    uri: process.env.RABBITMQ_URI,
    port: process.env.RABBITMQ_PORT,
  },
});
