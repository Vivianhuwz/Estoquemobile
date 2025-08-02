# 库存销售管理系统

一个基于Web的库存管理系统，支持Supabase云存储和本地存储。

## 功能特性

- 📦 库存管理 - 实时库存跟踪
- 🛒 采购记录 - 采购历史管理
- 📊 销售分析 - 销售数据统计
- ⚠️ 低库存警告 - 自动库存预警
- 📈 数据分析 - 图表和报表
- ☁️ 云端同步 - Supabase数据库支持
- 📱 移动端适配 - 响应式设计

## 部署到Netlify

### 1. 准备Supabase项目

1. 访问 [Supabase](https://supabase.com) 并创建新项目
2. 在项目设置中获取：
   - Project URL
   - Anon Key
3. 在Supabase SQL编辑器中创建数据表：

```sql
CREATE TABLE inventory_data (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用行级安全性
ALTER TABLE inventory_data ENABLE ROW LEVEL SECURITY;

-- 创建策略（允许所有操作，您可以根据需要调整）
CREATE POLICY "Allow all operations" ON inventory_data FOR ALL USING (true);
```

### 2. 配置Supabase连接

编辑 `config.js` 文件，替换为您的实际配置：

```javascript
window.SUPABASE_CONFIG = {
  url: 'https://your-project-ref.supabase.co',
  anonKey: 'your-anon-key-here'
};
```

### 3. 部署到Netlify

#### 方法1：通过Git仓库部署（推荐）

1. 将代码推送到GitHub/GitLab仓库
2. 在Netlify中连接您的仓库
3. 设置构建配置：
   - Build command: 留空
   - Publish directory: `.`
4. 在环境变量中设置（可选）：
   - `REACT_APP_SUPABASE_URL`: 您的Supabase URL
   - `REACT_APP_SUPABASE_ANON_KEY`: 您的Supabase Anon Key

#### 方法2：手动部署

1. 将整个 `estoque_nuvem` 文件夹拖拽到Netlify部署页面
2. 等待部署完成

### 4. 环境变量配置（推荐用于生产环境）

在Netlify站点设置中添加环境变量：

- `REACT_APP_SUPABASE_URL`: 您的Supabase项目URL
- `REACT_APP_SUPABASE_ANON_KEY`: 您的Supabase匿名密钥

然后修改 `config.js` 使用环境变量：

```javascript
window.SUPABASE_CONFIG = {
  url: process.env.REACT_APP_SUPABASE_URL || 'https://your-project-ref.supabase.co',
  anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key-here'
};
```

## 本地开发

1. 克隆项目到本地
2. 配置 `config.js` 文件
3. 使用任何HTTP服务器运行，例如：
   ```bash
   python -m http.server 8000
   ```
4. 访问 `http://localhost:8000`

## 文件结构

```
estoque_nuvem/
├── index.html          # 主页面
├── config.js           # Supabase配置
├── favicon.svg         # 网站图标
├── netlify.toml        # Netlify配置
├── _redirects          # 重定向规则
└── README.md           # 说明文档
```

## 故障排除

### 1. Supabase连接失败
- 检查config.js中的URL和密钥是否正确
- 确保Supabase项目处于活跃状态
- 检查网络连接

### 2. 数据无法保存
- 确保已创建inventory_data表
- 检查表的行级安全性策略
- 查看浏览器控制台错误信息

### 3. 部署后页面空白
- 检查浏览器控制台错误
- 确保所有文件路径正确
- 检查CDN资源是否可访问

## 技术栈

- HTML5 + CSS3 + JavaScript
- Tailwind CSS - UI框架
- Chart.js - 图表库
- XLSX.js - Excel文件处理
- Supabase - 后端即服务
- Font Awesome - 图标库

## 许可证

MIT License