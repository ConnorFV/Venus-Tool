# Venus Tool 官网部署指南

本文档将指导您如何将 Venus Tool Next.js 网站部署到 Linux 服务器（推荐使用 Ubuntu/CentOS）。

## 1. 部署架构
推荐使用标准的生产环境架构：
- **Next.js (Node.js)**: 运行应用核心服务
- **PM2**: 进程管理器，用于后台运行和自动重启应用
- **Nginx**: 反向代理服务器，处理域名、SSL证书和静态资源缓存

## 2. 准备工作

### 本地构建 (推荐)
在将代码上传到服务器之前，建议先在本地进行构建，确保没有错误。

```bash
# 在项目根目录运行
npm run build
```

如果构建成功，您将在 `.next` 目录中看到生成的文件。

### 服务器环境要求
您的服务器需要安装：
- **Node.js** (建议 v18.17.0 或更高版本)
- **Nginx**
- **PM2** (`npm install -g pm2`)

## 3. 部署步骤

### 步骤 A: 上传文件
由于我们配置了 `output: 'standalone'` (在 `next.config.ts` 中)，Next.js 会自动创建一个独立的部署文件夹。

您只需要上传 `.next/standalone` 文件夹的内容，以及 `public` 和 `.next/static` 文件夹。

**结构说明：**
Next.js 的 Standalone 模式会将 `node_modules` 中必要的依赖打包进去，大大减小体积。

**上传清单：**
1. `.next/standalone` 下的所有文件 -> 上传到服务器项目根目录 (例如 `/var/www/venus-tool`)
2. `.next/static` 文件夹 -> 上传到服务器 `/var/www/venus-tool/.next/static`
3. `public` 文件夹 -> 上传到服务器 `/var/www/venus-tool/public`

**服务器目录结构示例：**
```text
/var/www/venus-tool/
├── .next/
│   └── static/    <-- 从本地 .next/static 复制
├── public/        <-- 从本地 public 复制
├── server.js      <-- 主要是 .next/standalone 中的内容
└── package.json
```

### 步骤 B: 启动服务

进入服务器上的项目目录：
```bash
cd /var/www/venus-tool
```

使用 PM2 启动服务（默认端口 3000）：
```bash
pm2 start server.js --name "venus-website"
```

查看服务状态：
```bash
pm2 list
```

### 步骤 C: 配置 Nginx 反向代理

编辑 Nginx 配置文件 (通常在 `/etc/nginx/sites-available/default` 或 `/etc/nginx/conf.d/venus.conf`)：

```nginx
server {
    listen 80;
    server_name www.venustool.com.cn;  # 替换为您的实际域名

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # 可选：配置静态资源缓存
    location /_next/static {
        alias /var/www/venus-tool/.next/static;
        expires 365d;
        access_log off;
    }
}
```

测试并重启 Nginx：
```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 4. 常见问题
- **端口冲突**：如果 3000 端口被占用，可以在启动时指定端口：
  `PORT=3001 pm2 start server.js --name "venus-website"`
- **图片无法显示**：请确保 `public` 文件夹已正确上传到服务器项目根目录。

祝部署顺利！🚀
