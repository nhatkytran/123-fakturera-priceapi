/** Pino logger config for clear console in development. */
export const loggerConfig = () => {
  const pinoPrettyConfig = {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  };
  return process.env.NODE_ENV === "development" ? pinoPrettyConfig : true;
};