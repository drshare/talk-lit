module.exports = {
  apps : [{
    name: 'hjy-talk',
    script: './app.js',
    cwd: '',
    args: '',
    interpreter: '',
    interpreter_args: '',
    node_args: '',
    instances: 'max',
    exec_mode: 'cluster',
    watch: true,
    max_memory_restart: '150M',
    ignore_watch : [
        'node_modules',
        'public',
    ],
    error_log: './logs/error.loh',
    out_file: './logs/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    min_uptime: '60s',
    max_restarts: 30,
    autorestart: true,
    restart_delay: '60',
  }],
  deploy : {
    production : {
      user : 'root',
      host : '123.56.160.165/',
      ref  : 'origin/main',
      repo : 'git@github.com:drshare/talk-lit.git', // 代码git地址，需要配ssh登录
      path : '/www/talk-lit',
      'post-deploy' : 'npm install && npm run build' // 拉完代码需要执行的构建命令
    }
  }
}
