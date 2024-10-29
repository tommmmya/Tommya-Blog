---
icon: pen-to-square
date: 2023-05-11
category:
  - Git
tag:
  - Git
  - 入职
---
# GIT 工作流配置密钥


### 1. 生成新的个人访问令牌

1. **登录 GitHub**：
   - 打开浏览器，登录您的 GitHub 账户。
2. **进入设置**：
   - 点击右上角的头像，选择 `Settings`。
3. **进入开发者设置**：
   - 在左侧菜单中，点击 `Developer settings`。
4. **生成个人访问令牌**：
   - 在 `Developer settings` 页面中，选择 `Personal access tokens`。
   - 点击 `Tokens (classic)` 或 `Fine-grained tokens`（取决于您的 GitHub 版本）。
   - 如果您选择Tokens (classic)
     - 点击 `Generate new token`。
     - 填写一个描述性的 `Note`，比如 `GitHub Actions for Tommya-blog`。
     - 选择适当的权限范围。对于推送代码到仓库，通常需要 `repo` 权限。
     - 点击 `Generate token`。
   - 如果您选择Fine-grained tokens
     - 点击 `Generate new token`。
     - 选择 `Repository access` 为 `Select repositories`，然后选择您的 `Tommya-blog` 仓库。
     - 选择所需的权限，至少需要 `Contents` 和 `Workflows` 权限。
     - 点击 `Generate token`。
5. **保存令牌**：
   - 生成的令牌会显示在屏幕上，务必将其复制并保存在一个安全的地方。一旦关闭页面，就无法再次查看该令牌。

### 2. 更新 GitHub Actions 中的 Secrets

1. **进入仓库页面**：
   - 打开您的仓库 `wuwenlong12/Tommya-blog`。
2. **进入仓库 Secrets 设置**：
   - 在 顶部`找到并点击 `Settings`。
   - 在 `Settings` 页面的左侧菜单中，找到并点击 `Secrets and variables`。
   - 点击 `Actions`。
3. **添加或更新 Secret**：
   - 如果您已经有一个名为 `PERSONAL_ACCESS_TOKEN` 的 Secret，点击它并更新其值为新生成的令牌。
   - 如果没有，点击 `New repository secret`，输入 `PERSONAL_ACCESS_TOKEN` 作为名称，将新生成的令牌粘贴到值字段中，然后点击 `Add secret`。

### 3. 更新 GitHub Actions 配置文件

确保您的 GitHub Actions 配置文件（通常是 `.github/workflows` 目录下的 YAML 文件）正确引用了 `PERSONAL_ACCESS_TOKEN`。例如：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Build and Deploy
      uses: crazy-max/ghaction-github-pages@v4
      with:
        target_branch: gh-pages
        build_dir: src/.vuepress/dist
        github_token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```

### 4. 重新运行 GitHub Actions

1. 触发新的工作流
   - 您可以通过推送新的提交或手动触发工作流来测试新的令牌是否有效。
   - 在 GitHub Actions 页面，找到您的工作流，点击 `Run workflow` 按钮，选择分支并运行。

