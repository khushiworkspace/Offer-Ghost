module.exports = {
  apps: [
    {
      name: "og-front",
      script: "yarn",
      args: "run dev",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development",
      },
        exec_mode: "cluster",
        instances: "max",

    },
  ],
};