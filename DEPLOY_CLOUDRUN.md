# Venus Tool 官网 - Google Cloud Run 部署指南

本文档将指导您如何将应用容器化并部署到 Google Cloud Run。Cloud Run 是一种完全托管的无服务器平台，非常适合部署 Next.js 应用。

## 1. 前置条件

确保您已经：
1.  **安装 Docker**: 用于在本地构建镜像（可选，也可以使用 Cloud Build）。
2.  **安装 Google Cloud CLI (`gcloud`)**: 命令行工具。
3.  拥有一个 **Google Cloud 项目** (Project ID)。
4.  启用了 **Cloud Run API** 和 **Artifact Registry API**。

## 2. 部署流程

### 步骤 A: 创建 Artifact Registry 仓库
首先，我们需要一个地方来存储我们的 Docker 镜像。

```bash
# 设置您的项目 ID
gcloud config set project [YOUR_PROJECT_ID]

# 创建一个 Docker 仓库 (如果尚未创建)
gcloud artifacts repositories create venus-repo \
    --repository-format=docker \
    --location=asia-east1 \
    --description="Docker repository for Venus Tool Website"
```
*(注：`asia-east1` 是台湾节点，您也可以选择 `us-central1` 或其他离目标用户近的区域)*

### 步骤 B: 构建并推送镜像
您可以使用 Google Cloud Build 直接在云端构建，这样无需占用本地资源。

```bash
# 提交构建任务
gcloud builds submit --tag asia-east1-docker.pkg.dev/[YOUR_PROJECT_ID]/venus-repo/venus-website:latest .
```
这个命令会打包当前目录，上传到 Google Cloud，使用项目根目录下的 `Dockerfile` 构建镜像，并推送到 Artifact Registry。

### 步骤 C: 部署到 Cloud Run

镜像构建成功后，即可部署服务。

```bash
gcloud run deploy venus-website \
    --image asia-east1-docker.pkg.dev/[YOUR_PROJECT_ID]/venus-repo/venus-website:latest \
    --platform managed \
    --region asia-east1 \
    --allow-unauthenticated \
    --port 3000 \
    --memory 512Mi
```

**参数说明：**
- `--allow-unauthenticated`: 允许公开访问（即任何人都能访问官网）。
- `--port 3000`: 容器内部监听的端口（Next.js 默认端口）。
- `--memory 512Mi`: 分配给实例的内存。对于目前的应用规模，512Mi 或 1Gi 足够。

### 步骤 D: 验证

部署完成后，命令行会输出一个 `Service URL`，类似于：
`https://venus-website-xyz123-de.a.run.app`

点击链接即可访问您的网站！

## 3. 设置自定义域名 (可选)

1. 在 Google Cloud Console 中进入 **Cloud Run**。
2. 点击您的服务 `venus-website`。
3. 选择 **Manage Custom Domains** (管理自定义域名)。
4. 点击 **Add Mapping**，输入您的域名 (如 `www.venustool.com.cn`)。
5. 按照指引在您的 DNS 提供商处添加解析记录。
   - Cloud Run 会自动为您配置和管理 SSL 证书 (HTTPS)。

## 4. 持续更新

当您修改代码后，只需重新运行步骤 B 和 C：

1. `gcloud builds submit ...` (构建新镜像)
2. `gcloud run deploy ...` (更新服务使用新镜像)

祝部署顺利！🚀
